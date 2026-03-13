# AI Research Agent — Design Document

**Date:** 2026-03-13  
**Status:** Approved

---

## Tech Stack

| Layer    | Tech                          |
|----------|-------------------------------|
| Frontend | React + Vite (nanti)          |
| Backend  | Express.js (Node)             |
| Database | SQLite via `better-sqlite3`   |
| AI       | OpenRouter API                |
| Search   | Tavily API                    |

---

## Folder Structure

```
ai-research-agent/
├── backend/
│   ├── src/
│   │   ├── agent/
│   │   │   ├── orchestrator.js      # runResearchAgent()
│   │   │   ├── generateQueries.js   # step 1: AI generate 3–5 search queries
│   │   │   ├── searchWeb.js         # step 2: call Tavily API (no AI)
│   │   │   ├── selectSources.js     # step 3: ambil top 3 dari Tavily (no AI)
│   │   │   ├── summarize.js         # step 4: AI summarize tiap sumber
│   │   │   └── finalReport.js       # step 5: AI gabung jadi laporan
│   │   ├── db/
│   │   │   ├── database.js          # init SQLite connection
│   │   │   └── schema.sql           # table definitions
│   │   ├── routes/
│   │   │   └── research.js          # POST /api/research
│   │   └── index.js                 # Express entry point
│   ├── .env
│   └── package.json
│
└── frontend/                        # Phase 2, belakangan
```

---

## Database Schema (SQLite, raw SQL)

```sql
CREATE TABLE research_sessions (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  topic      TEXT NOT NULL,
  status     TEXT DEFAULT 'pending', -- pending | running | done | error
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE research_reports (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id   INTEGER REFERENCES research_sessions(id),
  queries      TEXT,   -- JSON array of strings
  sources      TEXT,   -- JSON array of {title, url, snippet}
  summaries    TEXT,   -- JSON array of {url, summary}
  final_report TEXT,   -- JSON {overview, key_points, resources, next_steps}
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## Agent Flow

```
POST /api/research { topic }
        │
        ▼
[DB] Buat research_session, status = 'running'
        │
        ▼
1. generateQueries(topic)       ← 🤖 AI (OpenRouter)
   → ["query1", "query2", "query3", ...]
        │
        ▼
2. searchWeb(queries)           ← ❌ No AI (Tavily API)
   → raw results per query
        │
        ▼
3. selectSources(results)       ← ❌ No AI (ambil top 3 by Tavily ranking)
   → [{title, url, snippet}, ...]
        │
        ▼
4. summarize(sources)           ← 🤖 AI per sumber (3 AI calls)
   → [{url, summary}, ...]
        │
        ▼
5. finalReport(summaries)       ← 🤖 AI (1 AI call)
   → {overview, key_points, resources, next_steps}
        │
        ▼
[DB] Simpan ke research_reports, update status = 'done'
        │
        ▼
Return JSON response
```

**Total AI calls per run: ~5** (1 generate + 3 summarize + 1 final report)

---

## AI Usage Summary

| Step             | Pakai AI? | Keterangan                                 |
|------------------|-----------|--------------------------------------------|
| Generate Queries | ✅ Ya     | Expand topik jadi 3–5 query variatif       |
| Search Web       | ❌ Tidak  | Pure Tavily API call                       |
| Select Sources   | ❌ Tidak  | Ambil top 3 dari ranking Tavily            |
| Summarize        | ✅ Ya     | 1 AI call per sumber (loop)                |
| Final Report     | ✅ Ya     | Gabungkan semua jadi laporan terstruktur   |

---

## API Contract

**Request:**
```json
POST /api/research
{ "topic": "machine learning in healthcare" }
```

**Response:**
```json
{
  "session_id": 1,
  "topic": "machine learning in healthcare",
  "queries": ["query1", "query2", "query3"],
  "sources": [
    { "title": "...", "url": "...", "snippet": "..." }
  ],
  "summaries": [
    { "url": "...", "summary": "..." }
  ],
  "final_report": {
    "overview": "...",
    "key_points": ["...", "..."],
    "resources": [{ "title": "...", "url": "..." }],
    "next_steps": ["...", "..."]
  }
}
```

---

## Error Handling

- Tiap step dibungkus try/catch
- Kalau satu step gagal, session di-update ke status `'error'`
- Response tetap return apa yang sudah berhasil di-generate

---

## MVP Success Criteria

- [ ] `POST /api/research` bisa dijalankan end-to-end
- [ ] Tiap step bisa dites secara independen
- [ ] Hasil disimpan ke SQLite
- [ ] Response JSON lengkap sesuai contract di atas