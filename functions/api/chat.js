export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const body = await request.json();
    const { system, messages, lang } = body;

    // If lang is 'hi', force Hindi response at system level
    const finalSystem = lang === 'hi'
      ? `You MUST respond in Hindi (Devanagari script) ONLY. No English words at all. Every single sentence must be in Hindi.\n\nतुम्हें केवल हिंदी में जवाब देना है। अंग्रेज़ी का एक भी शब्द नहीं। पूरा जवाब हिंदी में होगा।\n\n${system}`
      : system;

    const keys = [
      env.GROQ_API_KEY,
      env.GROQ_API_KEY2,
      env.GROQ_API_KEY3,
    ].filter(Boolean);

    if (keys.length === 0) {
      return new Response(JSON.stringify({ text: 'Error: No API keys found in environment.' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = keys[Math.floor(Math.random() * keys.length)];

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: finalSystem },
          ...messages,
          ...(lang === 'hi' ? [{ role: 'user', content: '(Respond only in Hindi - Devanagari script. No English.)' }] : [])
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await groqRes.json();
    
    if (!groqRes.ok) {
      return new Response(JSON.stringify({ text: 'Groq Error: ' + JSON.stringify(data) }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const text = data.choices?.[0]?.message?.content || 'No response received.';
    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e) {
    return new Response(JSON.stringify({ text: 'Exception: ' + e.message }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
