exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  const CORS = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const { messages, system } = JSON.parse(event.body);

    if (!messages || !Array.isArray(messages)) {
      return { statusCode: 400, headers: CORS, body: JSON.stringify({ text: "Invalid request." }) };
    }

    const groqKeys = [
      process.env.GROQ_KEY_1,
      process.env.GROQ_KEY_2,
      process.env.GROQ_KEY_3,
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

        if (res.status === 429) continue; // Rate-limited → try next key

        const data = await res.json();
        if (!res.ok) continue; // Any other error → try next key

        const text = data?.choices?.[0]?.message?.content;
        if (text) return { statusCode: 200, headers: CORS, body: JSON.stringify({ text }) };

      } catch {
        continue; // Network error → try next key
      }
    }

    // ── 2. All Groq keys failed → fallback to Gemini 1.5 Flash ───────────────
    const geminiKey = process.env.GEMINI_KEY;
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
        if (text) return { statusCode: 200, headers: CORS, body: JSON.stringify({ text }) };

      } catch {
        // Gemini also failed — fall through to graceful message
      }
    }

    // ── 3. Silent failover: return a graceful message, never an error ─────────
    return {
      statusCode: 200,
      headers: CORS,
      body: JSON.stringify({ text: "I'm having trouble connecting right now. Please try again in a moment." }),
    };

  } catch {
    return {
      statusCode: 200,
      headers: CORS,
      body: JSON.stringify({ text: "I'm having trouble connecting right now. Please try again in a moment." }),
    };
  }
};
