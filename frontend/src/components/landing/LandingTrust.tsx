import { FileText, Layers3, Link2 } from "lucide-react";

import { Card } from "@/components/ui/card";

import { SectionHeading } from "./SectionHeading";
import { trustMetrics } from "./landing-content";

const trustPoints = [
  {
    icon: Link2,
    title: "Explicit source links",
    description:
      "Final reports keep source URLs visible so the output feels inspectable, not opaque.",
  },
  {
    icon: Layers3,
    title: "Focused research path",
    description:
      "The workflow narrows broad search results into a smaller, more usable set before synthesis.",
  },
  {
    icon: FileText,
    title: "Readable structure",
    description:
      "Output arrives in consistent report sections instead of a long chat transcript that is harder to reuse.",
  },
];

export function LandingTrust() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <Card className="rounded-[32px] border-slate-200/80 bg-white/88 p-8 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.28)]">
          <SectionHeading
            eyebrow="Trust And Clarity"
            title="Designed to feel more grounded than a generic chatbot."
            description="This product does not try to be everything. It focuses on one job: turning a topic into a clearer, source-backed report that is easier to review and share."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-[28px] border border-slate-200/80 bg-slate-50/90 p-5 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                  <point.icon className="size-5" />
                </span>
                <h3 className="font-heading mt-4 text-xl font-semibold text-slate-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {trustMetrics.map((metric) => (
            <Card
              key={metric.label}
              className="rounded-[28px] border-slate-200/80 bg-white/88 p-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.25)]"
            >
              <p className="font-heading text-4xl font-semibold tracking-tight text-slate-950">
                {metric.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                {metric.label}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
