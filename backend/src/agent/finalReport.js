const { callOpenRouter } = require("./openRouterClient");

function normalizeResource(resource) {
  return {
    title: String(resource?.title || "").trim(),
    url: String(resource?.url || "").trim(),
  };
}

async function finalReport({ topic, summaries, sources }) {
  const payload = await callOpenRouter({
    systemPrompt:
      "You synthesize research summaries into a final report. Always respond with valid JSON.",
    userPrompt: [
      `Research topic: "${topic}"`,
      `Summaries: ${JSON.stringify(summaries)}`,
      `Sources: ${JSON.stringify(sources)}`,
      'Return JSON in this shape: {"overview":"...","key_points":["..."],"resources":[{"title":"...","url":"..."}],"next_steps":["..."]}.',
      "Use only the provided sources in the resources array.",
      "Do not add explanation outside the JSON.",
    ].join("\n"),
  });

  const overview = String(payload.overview || "").trim();
  const keyPoints = Array.isArray(payload.key_points)
    ? payload.key_points.map((item) => String(item || "").trim()).filter(Boolean)
    : [];
  const nextSteps = Array.isArray(payload.next_steps)
    ? payload.next_steps.map((item) => String(item || "").trim()).filter(Boolean)
    : [];

  const sourceMap = new Map(
    (sources || []).map((source) => [
      source.url,
      {
        title: source.title,
        url: source.url,
      },
    ])
  );

  const requestedResources = Array.isArray(payload.resources)
    ? payload.resources.map(normalizeResource).filter((resource) => resource.url)
    : [];

  const resources = requestedResources.length
    ? requestedResources.map((resource) => sourceMap.get(resource.url) || resource)
    : (sources || []).map((source) => ({
        title: source.title,
        url: source.url,
      }));

  if (!overview) {
    throw new Error("OpenRouter did not return final report overview");
  }

  return {
    overview,
    key_points: keyPoints,
    resources,
    next_steps: nextSteps,
  };
}

module.exports = finalReport;

