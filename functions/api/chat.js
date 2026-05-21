export async function onRequestPost(context) {
  const { request, env } = context;
  
  const body = await request.json();
  const { system, messages } = body;

  // Groq API keys rotate karo
  const keys = [
    env.GROQ_API_KEY,
    env.GROQ_API_KEY2,
    env.GROQ_API_KEY3,
  ].filter(Boolean);
  
  const apiKey = keys[Math.floor(Math.random() * keys.length)];

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: system },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.8,
    }),
  });

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || 'No response received.';

  return new Response(JSON.stringify({ text }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
