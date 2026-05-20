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
    const apiKey = process.env.GROQ_API_KEY;
    const body = {
      model: "llama-3.3-70b-versatile",
      messages: [
        ...(system ? [{ role: "system", content: system }] : []),
        ...messages.map(m => ({ role: m.role, content: m.content }))
      ],
      max_tokens: 800,
      temperature: 0.8
    };
    const res = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
      }
    );
    const data = await res.json();
    if (!res.ok) {
      console.error("Groq API error:", JSON.stringify(data));
      return {
        statusCode: res.status,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({ text: data?.error?.message || "API request failed." })
      };
    }
    const text = data?.choices?.[0]?.message?.content || "No response received.";
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
