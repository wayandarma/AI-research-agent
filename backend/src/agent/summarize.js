const { callOpenRouter } = require("./openRouterClient");

async function summarize(sources, topic) {
  return Promise.all(
    (sources || []).map(async (source) => {
      const payload = await callOpenRouter({
        systemPrompt:
          "You summarize research sources. Always respond with valid JSON.",
        userPrompt: [
          `Research topic: "${topic}"`,
          `Source title: "${source.title}"`,
          `Source URL: "${source.url}"`,
          `Source snippet: "${source.snippet}"`,
          'Return JSON in this shape: {"summary":"2-4 sentence summary focused on the research topic."}.',
          "Do not add explanation outside the JSON.",
        ].join("\n"),
      });

      const summary = String(payload.summary || "").trim();

      if (!summary) {
        throw new Error(`OpenRouter did not return a summary for ${source.url}`);
      }

      return {
        url: source.url,
        summary,
      };
    })
  );
}

module.exports = summarize;

