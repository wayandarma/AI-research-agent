import { ArrowRight, Bot } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { landingNavItems } from "./landing-content";

export function LandingHeader() {
  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/70 bg-white/82 px-4 py-3 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
            <Bot className="size-5" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Source-Backed Research
            </span>
            <span className="font-heading block text-sm font-semibold text-slate-950">
              AI Research Agent
            </span>
          </span>
        </Link>

        <nav aria-label="Landing page" className="hidden items-center gap-6 md:flex">
          {landingNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden rounded-full border-slate-200 bg-white/90 px-4 text-slate-700 hover:bg-slate-50 sm:inline-flex"
          >
            <a href="#workflow">See workflow</a>
          </Button>
          <Button
            asChild
            className="rounded-full bg-slate-950 px-5 text-white shadow-sm hover:bg-slate-800"
          >
            <Link to="/research">
              Start research
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
