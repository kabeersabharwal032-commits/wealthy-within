export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { system, messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return jsonResponse({ text: "Invalid request." }, 400);
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

    // ── 1. Try Groq keys in order, rotate on rate-limit ──────────────────────
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

        // Rate-limited → try next key
        if (res.status === 429) continue;

        const data = await res.json();

        if (!res.ok) continue; // Any other error → try next key

        const text = data?.choices?.[0]?.message?.content;
        if (text) return jsonResponse({ text });

      } catch {
        // Network error on this key → try next
        continue;
      }
    }

    // ── 2. All Groq keys failed → fallback to Gemini 1.5 Flash ───────────────
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
        if (text) return jsonResponse({ text });

      } catch {
        // Gemini also failed — fall through to generic message
      }
    }

    // ── 3. Silent failover: return a graceful message, never an error ─────────
    return jsonResponse({
      text: "I'm having trouble connecting right now. Please try again in a moment.",
    });

  } catch {
    return jsonResponse({
      text: "I'm having trouble connecting right now. Please try again in a moment.",
    });
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
