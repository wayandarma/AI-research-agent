import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe2,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const previewQueries = [
  "sustainable aviation fuel market outlook",
  "airlines SAF adoption barriers",
  "policy incentives for aviation decarbonization",
];

const previewSources = [
  {
    title: "IEA aviation outlook",
    detail: "Energy transition context and demand trends",
  },
  {
    title: "IATA sustainability briefing",
    detail: "Airline and policy-side constraints",
  },
];

const workflowMilestones = [
  "Queries generated",
  "Sources ranked",
  "Summaries ready",
  "Report assembled",
];

export function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute inset-x-6 inset-y-10 rounded-[36px] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.12),transparent_50%)] blur-3xl" />

      <div className="relative rounded-[32px] border border-white/70 bg-white/82 p-3 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.48)] backdrop-blur-sm">
        <div className="grid gap-3 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-[28px] border-slate-200/80 bg-slate-50/90 shadow-none">
            <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Workflow Preview
                </p>
                <p className="font-heading text-lg font-semibold text-slate-950">
                  Topic to report
                </p>
              </div>
              <Badge className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                Current MVP
              </Badge>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                    <Search className="size-4" />
                  </span>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Topic input
                    </p>
                    <p className="text-sm font-semibold text-slate-950 sm:text-base">
                      Sustainable aviation fuel market outlook
                    </p>
                    <p className="text-sm leading-6 text-slate-600">
                      Generate search angles, shortlist the best sources, and turn the findings into a usable brief.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Generated queries
                  </p>
                  <span className="text-xs font-semibold text-slate-500">3 angles</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {previewQueries.map((query) => (
                    <Badge
                      key={query}
                      variant="outline"
                      className="rounded-full border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {query}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Selected sources
                  </p>
                  <span className="text-xs font-semibold text-slate-500">Top ranked</span>
                </div>
                <div className="space-y-3">
                  {previewSources.map((source) => (
                    <div
                      key={source.title}
                      className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{source.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{source.detail}</p>
                      </div>
                      <span className="mt-0.5 flex size-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
                        <Globe2 className="size-4" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Card className="rounded-[28px] border-slate-200/80 bg-white/95 p-5 shadow-none">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Layers3 className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Agent flow
                  </p>
                  <p className="font-heading text-lg font-semibold text-slate-950">
                    One focused path
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {workflowMilestones.map((milestone) => (
                  <li
                    key={milestone}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                  >
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span className="text-sm font-medium text-slate-700">{milestone}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="rounded-[28px] border-slate-200/80 bg-slate-950 p-5 text-white shadow-none">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-white/10 text-sky-200">
                  <FileText className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Final output
                  </p>
                  <p className="font-heading text-lg font-semibold text-white">
                    Structured report
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/6 p-4">
                <p className="text-sm leading-6 text-slate-200">
                  A concise overview, a shortlist of key points, linked resources, and suggested next steps.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Overview", "Key points", "Resources", "Next steps"].map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="rounded-full border-white/15 bg-white/6 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-sky-200">
                <Sparkles className="size-4" />
                Copy-ready output once the run completes
                <ArrowRight className="size-4" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
