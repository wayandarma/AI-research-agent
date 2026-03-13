const generateQueries = require("./generateQueries");
const searchWeb = require("./searchWeb");
const { selectSources } = require("./selectSources");
const summarize = require("./summarize");
const finalReport = require("./finalReport");
const {
  createResearchSession,
  saveResearchReport,
  updateResearchSessionStatus,
} = require("../db/database");

function hasReportableData(report) {
  return Boolean(
    (report.queries && report.queries.length) ||
      (report.sources && report.sources.length) ||
      (report.summaries && report.summaries.length) ||
      report.final_report
  );
}

async function runResearchAgent(topic) {
  const normalizedTopic = String(topic || "").trim();

  if (!normalizedTopic) {
    throw new Error("topic is required");
  }

  const sessionId = createResearchSession(normalizedTopic);
  const response = {
    session_id: sessionId,
    topic: normalizedTopic,
    queries: [],
    sources: [],
    summaries: [],
    final_report: null,
  };

  let status = "running";
  let errorMessage = "";

  try {
    response.queries = await generateQueries(normalizedTopic);

    const searchResults = await searchWeb(response.queries);
    response.sources = selectSources(searchResults);

    if (!response.sources.length) {
      throw new Error("No sources were returned from Tavily");
    }

    response.summaries = await summarize(response.sources, normalizedTopic);
    response.final_report = await finalReport({
      topic: normalizedTopic,
      summaries: response.summaries,
      sources: response.sources,
    });

    status = "done";
  } catch (error) {
    status = "error";
    errorMessage = error.message || "Unknown agent error";
  }

  try {
    if (hasReportableData(response)) {
      saveResearchReport({
        sessionId,
        queries: response.queries,
        sources: response.sources,
        summaries: response.summaries,
        finalReport: response.final_report,
      });
    }
  } catch (error) {
    status = "error";

    if (!errorMessage) {
      errorMessage = error.message || "Failed to save research report";
    }
  }

  updateResearchSessionStatus(sessionId, status);

  return {
    ...response,
    status,
    ...(errorMessage ? { error: errorMessage } : {}),
  };
}

module.exports = {
  runResearchAgent,
};

