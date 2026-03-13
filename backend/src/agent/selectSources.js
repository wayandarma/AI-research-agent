function selectSources(searchResults, limit = 3) {
  const rankedSources = new Map();

  for (const resultGroup of searchResults || []) {
    for (const result of resultGroup.results || []) {
      const existing = rankedSources.get(result.url);
      const candidate = {
        title: result.title,
        url: result.url,
        snippet: result.snippet,
        score: typeof result.score === "number" ? result.score : 0,
      };

      if (!existing || candidate.score > existing.score) {
        rankedSources.set(candidate.url, candidate);
      }
    }
  }

  return Array.from(rankedSources.values())
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ title, url, snippet }) => ({
      title,
      url,
      snippet,
    }));
}

module.exports = {
  selectSources,
};

