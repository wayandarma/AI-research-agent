const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const dataDir = path.resolve(__dirname, "../../data");
const DB_PATH = path.join(dataDir, "research-agent.sqlite");
const schemaPath = path.join(__dirname, "schema.sql");

fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
db.exec(fs.readFileSync(schemaPath, "utf8"));

const insertSessionStatement = db.prepare(
  "INSERT INTO research_sessions (topic, status) VALUES (?, ?)"
);
const updateSessionStatusStatement = db.prepare(
  "UPDATE research_sessions SET status = ? WHERE id = ?"
);
const insertReportStatement = db.prepare(`
  INSERT INTO research_reports (session_id, queries, sources, summaries, final_report)
  VALUES (@session_id, @queries, @sources, @summaries, @final_report)
`);

function createResearchSession(topic) {
  const result = insertSessionStatement.run(topic, "running");
  return Number(result.lastInsertRowid);
}

function updateResearchSessionStatus(sessionId, status) {
  updateSessionStatusStatement.run(status, sessionId);
}

function saveResearchReport({ sessionId, queries, sources, summaries, finalReport }) {
  insertReportStatement.run({
    session_id: sessionId,
    queries: JSON.stringify(queries || []),
    sources: JSON.stringify(sources || []),
    summaries: JSON.stringify(summaries || []),
    final_report: JSON.stringify(finalReport || null),
  });
}

module.exports = {
  DB_PATH,
  createResearchSession,
  db,
  saveResearchReport,
  updateResearchSessionStatus,
};

