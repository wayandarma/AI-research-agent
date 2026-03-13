import { CheckCircle2, FileText, Globe2, Search, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const previewQueries = [
  "SAF market outlook",
  "Airline adoption barriers",
  "Policy incentives",
];

const previewSources = [
  { title: "IEA aviation outlook" },
  { title: "IATA sustainability briefing" },
];

const reportSections = ["Overview", "Key points", "Resources", "Next steps"];

export function ProductPreview() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Ambient glow */}
      <div className="absolute inset-x-6 inset-y-10 rounded-[36px] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.12),transparent_50%)] blur-3xl" />

      <div className="relative rounded-[32px] border border-white/70 bg-white/82 p-3 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.48)] backdrop-blur-sm">
        <div className="space-y-2">

          {/* Step 1 — Topic input */}
          <div className="flex items-center gap-3 rounded-[22px] border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-sky-50">
              <Search className="size-3.5 text-sky-600" />
            </span>
            <span className="flex-1 truncate text-sm font-medium text-slate-800">
              Sustainable aviation fuel market outlook
            </span>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              <CheckCircle2 className="size-3" />
              Done
            </span>
          </div>

          {/* Step 2 — Queries (compact pills) */}
          <div className="rounded-[22px] border border-slate-100 bg-slate-50/80 px-4 py-3.5">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
              Generated queries
            </p>
            <div className="flex flex-wrap gap-2">
              {previewQueries.map((query) => (
                <Badge
                  key={query}
                  variant="outline"
                  className="rounded-full border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
                >
                  {query}
                </Badge>
              ))}
            </div>
          </div>

          {/* Step 3 — Sources (title-only, no detail text) */}
          <div className="rounded-[22px] border border-slate-100 bg-slate-50/80 px-4 py-3.5">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
              Top sources
            </p>
            <div className="space-y-1.5">
              {previewSources.map((source) => (
                <div
                  key={source.title}
                  className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-2.5 shadow-sm"
                >
                  <Globe2 className="size-3.5 shrink-0 text-slate-400" />
                  <span className="flex-1 text-sm font-medium text-slate-800">
                    {source.title}
                  </span>
                  <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Step 4 — Final report (dominant dark anchor) */}
          <div className="rounded-[28px] bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <FileText className="size-4 text-sky-300" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Final output
                  </p>
                  <p className="text-base font-semibold text-white">Structured Report</p>
                </div>
              </div>
              <Sparkles className="size-4 shrink-0 text-sky-400" />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Ranked findings, linked sources, and suggested next steps — ready to copy.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-1.5">
              {reportSections.map((section) => (
                <div
                  key={section}
                  className="rounded-xl border border-white/8 bg-white/6 px-3.5 py-3"
                >
                  <p className="text-xs font-medium text-slate-300">{section}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
