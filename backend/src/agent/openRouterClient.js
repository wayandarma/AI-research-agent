function normalizeMessageContent(content) {
  if (typeof content === "string") {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === "string") {
          return part;
        }

        if (part && typeof part.text === "string") {
          return part.text;
        }

        return "";
      })
      .join("\n");
  }

  return "";
}

function stripCodeFences(raw) {
  return raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
}

function parseJsonPayload(raw) {
  const cleaned = stripCodeFences(raw);

  try {
    return JSON.parse(cleaned);
  } catch (_error) {
    const firstBraceIndex = Math.min(
      ...["{", "["]
        .map((token) => cleaned.indexOf(token))
        .filter((index) => index >= 0)
    );

    const lastBraceIndex = Math.max(cleaned.lastIndexOf("}"), cleaned.lastIndexOf("]"));

    if (!Number.isFinite(firstBraceIndex) || lastBraceIndex < firstBraceIndex) {
      throw new Error("OpenRouter response did not contain valid JSON");
    }

    return JSON.parse(cleaned.slice(firstBraceIndex, lastBraceIndex + 1));
  }
}

async function callOpenRouter({ systemPrompt, userPrompt, temperature = 0.2 }) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is required");
  }

  const response = await fetch(
    process.env.OPENROUTER_URL || "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini",
        temperature,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenRouter request failed (${response.status}): ${body}`);
  }

  const payload = await response.json();
  const content = normalizeMessageContent(payload.choices?.[0]?.message?.content);

  if (!content) {
    throw new Error("OpenRouter response did not include message content");
  }

  return parseJsonPayload(content);
}

module.exports = {
  callOpenRouter,
};
