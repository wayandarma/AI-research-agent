# AI Research Agent

Backend MVP untuk workflow riset berbasis AI:

1. Generate query riset dari topik.
2. Cari sumber web via Tavily.
3. Pilih 3 sumber terbaik.
4. Ringkas tiap sumber via OpenRouter.
5. Gabungkan menjadi laporan akhir terstruktur.

## Struktur Project

```text
backend/
  src/
    agent/
    db/
    routes/
  test/
```

Frontend belum dibangun pada fase ini.

## Setup Lokal

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Server default berjalan di `http://localhost:3001`.

## Environment Variables

Isi minimal variabel berikut di `backend/.env`:

```bash
OPENROUTER_API_KEY=your_key
OPENROUTER_MODEL=openai/gpt-4o-mini
TAVILY_API_KEY=your_key
```

## API

### `POST /api/research`

Request:

```json
{
  "topic": "machine learning in healthcare"
}
```

Response sukses:

```json
{
  "session_id": 1,
  "topic": "machine learning in healthcare",
  "queries": ["query1", "query2", "query3"],
  "sources": [
    { "title": "Example", "url": "https://example.com", "snippet": "..." }
  ],
  "summaries": [
    { "url": "https://example.com", "summary": "..." }
  ],
  "final_report": {
    "overview": "...",
    "key_points": ["..."],
    "resources": [{ "title": "Example", "url": "https://example.com" }],
    "next_steps": ["..."]
  },
  "status": "done"
}
```

Saat salah satu step gagal, endpoint tetap mengembalikan data parsial yang sudah tersedia dan `status` menjadi `error`.
