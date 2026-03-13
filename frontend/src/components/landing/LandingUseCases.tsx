import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { SectionHeading } from "./SectionHeading";
import { useCaseItems } from "./landing-content";

export function LandingUseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Use Cases"
          title="Useful when you need a fast, structured briefing."
          description="The current product fits best when the job is to orient quickly, compare sources, and leave with a cleaner report."
        />
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-full border-slate-200 bg-white/90 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Link to="/research">Try these in the app</Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {useCaseItems.map((useCase) => (
          <Card
            key={useCase.title}
            className="rounded-[30px] border-slate-200/80 bg-white/88 p-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.22)] transition-colors hover:border-slate-300 hover:bg-white"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <useCase.icon className="size-5" />
            </span>
            <h3 className="font-heading mt-5 text-2xl font-semibold tracking-tight text-slate-950">
              {useCase.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              {useCase.description}
            </p>

            <div className="mt-6 rounded-[24px] border border-sky-100 bg-sky-50/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
                Example prompt
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {useCase.prompt}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
