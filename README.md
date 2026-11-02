export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'missing_api_key' });
    return;
  }

  const { systemPrompt, history } = req.body || {};
  if (
    typeof systemPrompt !== 'string' ||
    !systemPrompt.trim() ||
    !Array.isArray(history) ||
    history.length === 0 ||
    history.length > 20
  ) {
    res.status(400).json({ error: 'invalid_request' });
    return;
  }

  const contents = [];
  for (const message of history) {
    if (
      !message ||
      !['user', 'model'].includes(message.role) ||
      typeof message.text !== 'string' ||
      !message.text.trim()
    ) {
      res.status(400).json({ error: 'invalid_request' });
      return;
    }

    contents.push({
      role: message.role,
      parts: [{ text: message.text.trim().slice(0, 2000) }],
    });
  }

  if (contents[contents.length - 1].role !== 'user') {
    res.status(400).json({ error: 'invalid_request' });
    return;
  }

  const body = {
    systemInstruction: { parts: [{ text: systemPrompt.trim().slice(0, 4000) }] },
    contents,
    generationConfig: { temperature: 0.9, topP: 0.95, maxOutputTokens: 250 },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  };

  try {
    const upstream = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify(body),
      }
    );

    if (!upstream.ok) {
      const detail = await upstream.text();
      const code = upstream.status === 429 ? 'rate_limited' : 'upstream_error';
      console.error('Gemini API request failed:', upstream.status, detail);
      res.status(upstream.status === 429 ? 429 : 502).json({ error: code });
      return;
    }

    const data = await upstream.json();
    const candidate = data && data.candidates && data.candidates[0];
    const text =
      candidate && candidate.content && candidate.content.parts
        ? candidate.content.parts.map((p) => p.text || '').join('').trim()
        : '';

    if (!text) {
      console.error('Gemini API returned no text:', JSON.stringify(data));
      res.status(502).json({ error: 'empty_response' });
      return;
    }

    res.status(200).json({ text });
  } catch (err) {
    console.error('Gemini API request error:', err);
    res.status(500).json({ error: 'server_error' });
  }
}
