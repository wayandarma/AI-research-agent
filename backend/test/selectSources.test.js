const test = require("node:test");
const assert = require("node:assert/strict");
const { selectSources } = require("../src/agent/selectSources");

test("selectSources keeps top scored unique URLs", () => {
  const sources = selectSources([
    {
      query: "alpha",
      results: [
        {
          title: "Source A",
          url: "https://example.com/a",
          snippet: "A",
          score: 0.7,
        },
        {
          title: "Source B",
          url: "https://example.com/b",
          snippet: "B",
          score: 0.9,
        },
      ],
    },
    {
      query: "beta",
      results: [
        {
          title: "Source A updated",
          url: "https://example.com/a",
          snippet: "A2",
          score: 0.95,
        },
        {
          title: "Source C",
          url: "https://example.com/c",
          snippet: "C",
          score: 0.8,
        },
      ],
    },
  ]);

  assert.deepEqual(sources, [
    {
      title: "Source A updated",
      url: "https://example.com/a",
      snippet: "A2",
    },
    {
      title: "Source B",
      url: "https://example.com/b",
      snippet: "B",
    },
    {
      title: "Source C",
      url: "https://example.com/c",
      snippet: "C",
    },
  ]);
});
