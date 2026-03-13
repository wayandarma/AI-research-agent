import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ctaHighlights = ["3-5 query angles", "Top ranked sources", "Structured brief"];

export function LandingFinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <Card className="relative overflow-hidden rounded-[34px] border-slate-900 bg-slate-950 text-white shadow-[0_32px_90px_-46px_rgba(15,23,42,0.58)]">
        <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute left-0 top-12 h-52 w-52 rounded-full bg-white/6 blur-3xl" />

        <div className="relative grid gap-8 p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:p-10">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="rounded-full border-white/10 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-100"
            >
              Start Your First Run
            </Badge>
            <div className="space-y-4">
              <h2 className="font-heading max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Start with a question. Leave with a report you can use.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Enter a topic and let the agent handle query generation, source discovery, source ranking, summarization, and final synthesis in one pass.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100"
              >
                <Link to="/research">
                  Start research
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/6 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                <a href="#workflow">Review the workflow</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
            {ctaHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-white/6 px-4 py-4 text-sm font-medium text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
