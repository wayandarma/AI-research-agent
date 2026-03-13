import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

import { landingNavItems } from "./landing-content";

export function LandingFooter() {
  return (
    <footer className="px-4 pb-6 pt-6 sm:pb-10 sm:pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:gap-6 rounded-[30px] border border-white/70 bg-white/82 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.32)] backdrop-blur-sm md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <Bot className="size-5" />
            </span>
            <div>
              <p className="font-heading text-lg font-semibold tracking-tight text-slate-950">
                AI Research Agent
              </p>
              <p className="text-sm text-slate-500">
                Source-backed research for focused, single-session briefs.
              </p>
            </div>
          </div>
          <p className="hidden sm:block text-sm leading-6 text-slate-500">
            Generate query angles, surface sources, summarize findings, and assemble a cleaner report without turning the work into an endless chat thread.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          {landingNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
          <Link to="/research" className="transition-colors hover:text-slate-950">
            Start research
          </Link>
        </div>
      </div>
    </footer>
  );
}
