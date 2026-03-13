async function searchWeb(queries) {
  const apiKey = process.env.TAVILY_API_KEY;

  if (!apiKey) {
    throw new Error("TAVILY_API_KEY is required");
  }

  const maxResults = Number(process.env.TAVILY_MAX_RESULTS || 5);
  const searchDepth = process.env.TAVILY_SEARCH_DEPTH || "advanced";
  const endpoint = process.env.TAVILY_URL || "https://api.tavily.com/search";

  return Promise.all(
    queries.map(async (query) => {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          query,
          search_depth: searchDepth,
          include_answer: false,
          include_images: false,
          include_raw_content: false,
          max_results: maxResults,
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Tavily request failed (${response.status}): ${body}`);
      }

      const payload = await response.json();
      const results = Array.isArray(payload.results) ? payload.results : [];

      return {
        query,
        results: results
          .map((result) => ({
            title: String(result.title || "Untitled source"),
            url: String(result.url || "").trim(),
            snippet: String(result.content || result.snippet || "").trim(),
            score: typeof result.score === "number" ? result.score : 0,
          }))
          .filter((result) => result.url),
      };
    })
  );
}

module.exports = searchWeb;

