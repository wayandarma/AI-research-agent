import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./SectionHeading";
import { featureItems } from "./landing-content";

export function LandingFeatures() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8">
      <SectionHeading
        eyebrow="Core Capabilities"
        title="A research workflow built for clarity, not just conversation."
        description="Each stage handles a distinct part of the process so the final output is easier to trust, scan, and reuse."
      />

      <div className="mt-8 sm:mt-10 grid gap-4 lg:grid-cols-2">
        {featureItems.map((feature) => (
          <Card
            key={feature.title}
            className={cn(
              "rounded-[30px] border-slate-200/80 bg-white/88 p-5 sm:p-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.22)] transition-colors hover:border-slate-300 hover:bg-white",
              feature.spanClassName,
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3 sm:space-y-4">
                <span className="flex size-10 sm:size-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 shadow-sm">
                  <feature.icon className="size-4 sm:size-5" />
                </span>
                <div className="space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3">
              <p className="text-sm leading-6 text-slate-600">{feature.proof}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
