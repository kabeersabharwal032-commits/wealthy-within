const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const rateLimitMap = new Map();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost({ request, env }) {
  const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";
  if (isRateLimited(clientIP)) {
    return new Response(
      JSON.stringify({ text: "Too many requests. Please wait a moment and try again." }),
      { status: 429, headers: CORS_HEADERS }
    );
  }

  let messages, system;
  try {
    const body = await request.json();
    messages = body.messages;
    system = body.system;
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ text: "Invalid request." }),
        { status: 400, headers: CORS_HEADERS }
      );
    }
  } catch {
    return new Response(
      JSON.stringify({ text: "Invalid request body." }),
      { status: 400, headers: CORS_HEADERS }
    );
  }

  const groqKeys = [
    env.GROQ_API_KEY,
    env.GROQ_API_KEY2,
    env.GROQ_API_KEY3,
  ].filter(Boolean);

  const groqBody = {
    model: "llama-3.3-70b-versatile",
    messages: [
      ...(system ? [{ role: "system", content: system }] : []),
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ],
    max_tokens: 800,
    temperature: 0.8,
  };

  // ── 1. Try Groq keys in order, rotate on rate-limit ────────────────────────
  for (const key of groqKeys) {
    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify(groqBody),
      });

      if (res.status === 429) continue; // Rate-limited → try next key

      const data = await res.json();
      if (!res.ok) continue; // Any other error → try next key

      const text = data?.choices?.[0]?.message?.content;
      if (text) {
        return new Response(JSON.stringify({ text }), { status: 200, headers: CORS_HEADERS });
      }

    } catch {
      continue; // Network error → try next key
    }
  }

  // ── 2. All Groq keys failed → fallback to Gemini 1.5 Flash ──────────────────
  const geminiKey = env["Gemini API Key"];
  if (geminiKey) {
    try {
      const contents = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const geminiBody = {
        ...(system ? { system_instruction: { parts: [{ text: system }] } } : {}),
        contents,
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.8,
        },
      };

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(geminiBody),
        }
      );

      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        return new Response(JSON.stringify({ text }), { status: 200, headers: CORS_HEADERS });
      }

    } catch {
      // Gemini also failed — fall through to graceful message
    }
  }

  // ── 3. Silent failover: return a graceful message, never an error ───────────
  return new Response(
    JSON.stringify({ text: "I'm having trouble connecting right now. Please try again in a moment." }),
    { status: 200, headers: CORS_HEADERS }
  );
}
