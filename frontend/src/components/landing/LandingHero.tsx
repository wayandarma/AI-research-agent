import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { heroProofPoints } from "./landing-content";
import { ProductPreview } from "./ProductPreview";

export function LandingHero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 md:pb-24 md:pt-16 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
        <div className="space-y-8">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-sky-200 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700 shadow-sm"
            >
              AI-Powered Research Workflow
            </Badge>

            <div className="space-y-4">
              <h1 className="font-heading max-w-3xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
                Research from question to{" "}
                <span className="text-sky-700">structured report</span>.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
                Generate search queries, gather relevant web sources, rank and deduplicate them, summarize the strongest findings, and assemble a final report in one focused flow.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold tracking-wide text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800"
            >
              <Link to="/research">
                Start a research session
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-slate-200 bg-white/90 px-6 text-sm font-semibold tracking-wide text-slate-700 hover:bg-slate-50"
            >
              <a href="#features">Explore capabilities</a>
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">
              Why it feels more reliable
            </p>
            <div className="flex flex-wrap gap-3">
              {heroProofPoints.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="rounded-full border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Built for focused, single-session research. The current MVP returns the full result when processing is complete and keeps explicit source links in the final report.
          </p>
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}
