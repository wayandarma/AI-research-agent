# AI Research Agent — Frontend Implementation Plan

**Date:** 2026-03-13  
**Stack:** React · Vite · Tailwind CSS · shadcn/ui · TanStack Query · Axios · lucide-react

---

## Milestone 1 — Project Setup

| # | Task | Tag |
|---|------|-----|
| 1 | Scaffold project: `npm create vite@latest frontend -- --template react` | Config |
| 2 | Masuk folder: `cd frontend` | Config |
| 3 | Install Tailwind: `npm install -D tailwindcss @tailwindcss/vite` | Config |
| 4 | Tambah Tailwind plugin di `vite.config.js` | Config |
| 5 | Buat `src/index.css` dengan `@import "tailwindcss"` | Config |
| 6 | Install core deps: `npm install axios react-router-dom @tanstack/react-query clsx lucide-react` | Config |
| 7 | Init shadcn: `npx shadcn@latest init` (pilih Default, Slate, CSS variables: Yes) | Config |
| 8 | Install shadcn components: `npx shadcn@latest add button input card badge separator skeleton` | Config |
| 9 | Test: `npm run dev`, pastikan Vite jalan dan Tailwind aktif | Test |

---

## Milestone 2 — Folder Structure & Routing

| # | Task | Tag |
|---|------|-----|
| 10 | Buat folder structure: `src/components/`, `src/hooks/`, `src/lib/` | Config |
| 11 | Buat sub-folder: `components/AgentProgress/`, `components/Research/`, `components/Report/`, `components/ui/` | Config |
| 12 | Setup React Router di `src/main.jsx` — wrap dengan `<BrowserRouter>` dan `<QueryClientProvider>` | Frontend |
| 13 | Buat `src/App.jsx` — routing sederhana, hanya 1 route: `/` → `ResearchPage` | Frontend |
| 14 | Buat `src/pages/ResearchPage.jsx` — page kosong dulu, verifikasi route tampil | Frontend |

---

## Milestone 3 — Custom Hook (Data Layer)

| # | Task | Tag |
|---|------|-----|
| 15 | Buat `src/lib/api.js` — setup Axios instance dengan `baseURL: http://localhost:3001/api` | Frontend |
| 16 | Buat `src/hooks/useResearch.js` — custom hook dengan `useMutation` dari TanStack Query | Frontend |
| 17 | Di hook: fungsi `mutate(topic)` call `POST /api/research`, simpan response ke state | Frontend |
| 18 | Expose dari hook: `{ mutate, data, isPending, isError, error }` | Frontend |
| 19 | Test hook dengan console.log, pastikan response dari backend masuk | Test |

**Struktur hook:**
```js
export function useResearch() {
  return useMutation({
    mutationFn: (topic) => api.post('/research', { topic }).then(r => r.data)
  });
}
```

---

## Milestone 4 — TopicInput Component

| # | Task | Tag |
|---|------|-----|
| 20 | Buat `src/components/TopicInput.jsx` | Frontend |
| 21 | Gunakan shadcn `Input` untuk text field dengan placeholder `"Enter your research topic..."` | Frontend |
| 22 | Gunakan shadcn `Button` untuk tombol `"Research →"` | Frontend |
| 23 | Handle state input dengan `useState` lokal | Frontend |
| 24 | Emit `onSubmit(topic)` ke parent saat tombol diklik atau Enter ditekan | Frontend |
| 25 | Disable input + button saat `isPending === true` | Frontend |
| 26 | Pasang `TopicInput` di `ResearchPage`, sambungkan ke `useResearch` hook | Frontend |
| 27 | Test: ketik topik, klik Research, lihat request ke backend di Network tab | Test |

---

## Milestone 5 — AgentProgress Component

| # | Task | Tag |
|---|------|-----|
| 28 | Buat `src/components/AgentProgress/StepItem.jsx` — terima props: `label`, `status` (`pending`/`running`/`done`) | Frontend |
| 29 | Tampilkan icon per status: `Loader2` (running, animated), `CheckCircle` (done), `Circle` (pending) dari lucide-react | Frontend |
| 30 | Buat `src/components/AgentProgress/AgentProgress.jsx` — render 5 `StepItem` sesuai urutan agent | Frontend |
| 31 | Terima prop `currentStep` (string nama step yang sedang jalan) | Frontend |
| 32 | Derive status tiap step dari `currentStep` (step sebelumnya = done, step aktif = running, sesudahnya = pending) | Frontend |
| 33 | Wrap dalam shadcn `Card` | Frontend |
| 34 | Pasang di `ResearchPage`, tampil saat `isPending` atau `data` sudah ada | Frontend |
| 35 | Test: saat loading, progress panel muncul dengan step pertama "running" | Test |

**5 steps yang ditampilkan:**
```
1. Generating queries
2. Searching web
3. Selecting sources
4. Summarizing sources
5. Building report
```

> **Catatan MVP:** Backend saat ini return sekaligus setelah selesai, bukan streaming. Jadi untuk MVP, saat `isPending = true` tampilkan semua step sebagai "running", saat `data` ada tampilkan semua sebagai "done".

---

## Milestone 6 — QueryList & SourceList Component

| # | Task | Tag |
|---|------|-----|
| 36 | Buat `src/components/Research/QueryList.jsx` — terima prop `queries: string[]` | Frontend |
| 37 | Render tiap query sebagai list item dengan icon `Search` dari lucide-react | Frontend |
| 38 | Wrap dalam shadcn `Card` dengan label "Generated queries" | Frontend |
| 39 | Buat `src/components/Research/SourceCard.jsx` — terima prop `{ title, url, snippet }` | Frontend |
| 40 | Tampilkan: title (bold), URL sebagai link clickable (buka tab baru), snippet (muted) | Frontend |
| 41 | Buat `src/components/Research/SourceList.jsx` — render 3 `SourceCard`, wrap dalam `Card` | Frontend |
| 42 | Pasang `QueryList` dan `SourceList` di `ResearchPage` dalam layout 2 kolom | Frontend |
| 43 | Tampil hanya saat `data` sudah ada | Frontend |
| 44 | Test: verifikasi queries dan sources tampil dengan benar setelah research selesai | Test |

---

## Milestone 7 — Skeleton Loading State

| # | Task | Tag |
|---|------|-----|
| 45 | Buat `src/components/ui/SkeletonCard.jsx` — gunakan shadcn `Skeleton` | Frontend |
| 46 | Buat 2 varian: `SkeletonQueryList` dan `SkeletonSourceList` | Frontend |
| 47 | Di `ResearchPage`: saat `isPending`, tampilkan skeleton di tempat `QueryList` dan `SourceList` | Frontend |
| 48 | Test: submit topik, verifikasi skeleton muncul selama loading | Test |

---

## Milestone 8 — FinalReport Component

| # | Task | Tag |
|---|------|-----|
| 49 | Buat `src/components/Report/ReportSection.jsx` — terima `title` dan `children` | Frontend |
| 50 | Buat `src/components/Report/FinalReport.jsx` — wrap dalam shadcn `Card` full-width | Frontend |
| 51 | Render 4 seksi dalam grid 2x2: Overview, Key Points, Resources, Next Steps | Frontend |
| 52 | Overview: render sebagai paragraf | Frontend |
| 53 | Key Points: render sebagai `<ul>` list | Frontend |
| 54 | Resources: render sebagai list link clickable dengan icon `ExternalLink` | Frontend |
| 55 | Next Steps: render sebagai `<ul>` list | Frontend |
| 56 | Pasang `FinalReport` di `ResearchPage`, tampil di bawah semua panel | Frontend |
| 57 | Tampil hanya saat `data?.final_report` ada | Frontend |
| 58 | Test: verifikasi semua 4 seksi tampil dengan data yang benar | Test |

---

## Milestone 9 — CopyButton & Polish

| # | Task | Tag |
|---|------|-----|
| 59 | Buat `src/components/ui/CopyButton.jsx` — gunakan `navigator.clipboard.writeText()` | Frontend |
| 60 | Tampilkan feedback: icon berubah dari `Copy` ke `Check` selama 2 detik setelah klik | Frontend |
| 61 | Pasang `CopyButton` di pojok kanan atas `FinalReport` card | Frontend |
| 62 | Format teks yang di-copy: gabungkan semua seksi jadi plain text yang rapi | Frontend |
| 63 | Tambah tombol `"Research again"` di bawah `FinalReport` — reset state ke awal | Frontend |
| 64 | Tambah `ErrorMessage` component — tampil saat `isError === true` dengan pesan yang jelas | Frontend |
| 65 | Test full flow: input → loading → hasil → copy → research again | Test |

---

## Milestone 10 — Layout & Responsive

| # | Task | Tag |
|---|------|-----|
| 66 | Rapikan layout `ResearchPage`: header, hero input, middle panels, final report | Frontend |
| 67 | Middle panels: grid 3 kolom — `AgentProgress` (narrow) + `SourceList` + `QueryList` | Frontend |
| 68 | Pastikan layout tidak pecah di layar < 1280px (collapse ke single column) | Frontend |
| 69 | Tambah transisi smooth saat panel muncul menggunakan Tailwind `transition` + `animate-in` | Frontend |
| 70 | Final check: test end-to-end dari browser, semua state (empty, loading, done, error) berfungsi | Test |

---

## Struktur Folder Final

```
src/
├── components/
│   ├── TopicInput.jsx
│   ├── AgentProgress/
│   │   ├── AgentProgress.jsx
│   │   └── StepItem.jsx
│   ├── Research/
│   │   ├── QueryList.jsx
│   │   ├── SourceList.jsx
│   │   └── SourceCard.jsx
│   ├── Report/
│   │   ├── FinalReport.jsx
│   │   └── ReportSection.jsx
│   └── ui/
│       ├── CopyButton.jsx
│       └── SkeletonCard.jsx
├── hooks/
│   └── useResearch.js
├── lib/
│   └── api.js
├── pages/
│   └── ResearchPage.jsx
├── App.jsx
└── main.jsx
```

---

## MVP Success Criteria

- [ ] User bisa input topik dan klik Research
- [ ] Loading state tampil dengan skeleton dan progress panel
- [ ] Queries, sources, dan final report tampil setelah selesai
- [ ] Copy button berfungsi
- [ ] Tombol "Research again" reset ke state awal
- [ ] Error state tampil jika backend gagal