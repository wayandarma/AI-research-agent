import { Info } from "lucide-react";

import { Card } from "@/components/ui/card";

import { SectionHeading } from "./SectionHeading";
import { workflowSteps } from "./landing-content";

export function LandingWorkflow() {
  return (
    <section id="workflow" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8">
      <SectionHeading
        eyebrow="How It Works"
        title="One topic in. A structured report out."
        description="The flow is intentionally easy to scan so users understand how the result is assembled."
        align="center"
      />

      <div className="relative mt-8 sm:mt-12">
        <div className="absolute left-8 right-8 top-9 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {workflowSteps.map((step) => (
            <li key={step.eyebrow} className="relative">
              <Card className="h-full rounded-[28px] border-slate-200/80 bg-white/90 p-4 sm:p-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.24)]">
                <span className="relative z-10 flex size-10 sm:size-12 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-sm font-semibold text-sky-700 shadow-sm">
                  {step.eyebrow}
                </span>
                <p className="mt-3 sm:mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {step.highlight}
                </p>
                <h3 className="font-heading mt-3 text-base sm:text-xl font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-4 sm:mt-6 flex items-start gap-3 rounded-[24px] border border-slate-200/80 bg-slate-50/90 px-4 py-3.5 sm:px-5 sm:py-4 text-sm leading-6 text-slate-600 shadow-sm">
        <Info className="mt-0.5 size-4 flex-shrink-0 text-slate-500" />
        <p>
          Current MVP behavior: the backend returns the full result when processing is finished. Intermediate backend progress is not streamed yet, so the app presents progress as a guided approximation.
        </p>
      </div>
    </section>
  );
}
