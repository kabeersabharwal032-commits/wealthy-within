exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  try {
    const { messages, system } = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;

    const contents = messages.map(m => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    const body = {
      system_instruction: system ? { parts: [{ text: system }] } : undefined,
      contents,
      generationConfig: {
        maxOutputTokens: 800,
        temperature: 0.8
      }
    };

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Gemini API error:", JSON.stringify(data));
      return {
        statusCode: res.status,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({ text: data?.error?.message || "API request failed." })
      };
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify({ text: "Server error. Please try again." })
    };
  }
};
