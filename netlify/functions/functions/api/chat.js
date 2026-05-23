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

  let messages, system, lang;
  try {
    const body = await request.json();
    messages = body.messages;
    system = body.system;
    lang = body.lang;
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

  // If Hindi mode, prepend a hard Hindi-only instruction to the system prompt
  const finalSystem = lang === 'hi' && system
    ? `You MUST respond in Hindi (Devanagari script) ONLY. No English words at all.\n\nतुम्हें केवल हिंदी में जवाब देना है। अंग्रेज़ी का एक भी शब्द नहीं। पूरा जवाब हिंदी में होगा।\n\n${system}`
    : system;

  const groqBody = {
    model: "llama-3.3-70b-versatile",
    messages: [
      ...(finalSystem ? [{ role: "system", content: finalSystem }] : []),
      ...messages.map((m) => ({ role: m.role, content: m.content })),
      ...(lang === 'hi' ? [{ role: 'user', content: '(Respond only in Hindi - Devanagari script. No English.)' }] : []),
    ],
    max_tokens: 800,
    temperature: 0.7,
  };

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.GROQ_API_KEY}`,
      },
      body: JSON.stringify(groqBody),
    });

    const data = await groqRes.json();
    if (!groqRes.ok) {
      return new Response(
        JSON.stringify({ text: data?.error?.message || "API request failed." }),
        { status: groqRes.status, headers: CORS_HEADERS }
      );
    }

    const text = data?.choices?.[0]?.message?.content || "No response received.";
    return new Response(JSON.stringify({ text }), { status: 200, headers: CORS_HEADERS });

  } catch {
    return new Response(
      JSON.stringify({ text: "Server error. Please try again." }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
