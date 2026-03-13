const { callOpenRouter } = require("./openRouterClient");

async function generateQueries(topic) {
  const payload = await callOpenRouter({
    systemPrompt:
      "You generate concise, high-quality web research queries. Always respond with valid JSON.",
    userPrompt: [
      `Topic: "${topic}"`,
      "Generate 3 to 5 distinct search queries for web research.",
      'Return JSON in this shape: {"queries":["query 1","query 2","query 3"]}.',
      "Do not add explanation outside the JSON.",
    ].join("\n"),
  });

  const queries = Array.isArray(payload.queries)
    ? payload.queries
        .map((query) => String(query || "").trim())
        .filter(Boolean)
        .slice(0, 5)
    : [];

  if (queries.length < 3) {
    throw new Error("OpenRouter did not return at least 3 queries");
  }

  return queries;
}

module.exports = generateQueries;

