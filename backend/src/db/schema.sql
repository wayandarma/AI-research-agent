CREATE TABLE IF NOT EXISTS research_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  topic TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS research_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id INTEGER REFERENCES research_sessions(id),
  queries TEXT,
  sources TEXT,
  summaries TEXT,
  final_report TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

