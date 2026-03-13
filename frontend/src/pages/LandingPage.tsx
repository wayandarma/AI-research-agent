import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingFinalCta } from "@/components/landing/LandingFinalCta";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingTrust } from "@/components/landing/LandingTrust";
import { LandingUseCases } from "@/components/landing/LandingUseCases";
import { LandingWorkflow } from "@/components/landing/LandingWorkflow";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-950">
      <a
        href="#content"
        className="sr-only left-4 top-4 z-[60] rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute"
      >
        Skip to content
      </a>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
        <div className="absolute left-[6%] top-16 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl" />
        <div className="absolute right-[10%] top-10 h-80 w-80 rounded-full bg-blue-100/55 blur-3xl" />
        <div className="absolute left-1/3 top-[34rem] h-64 w-64 rounded-full bg-white/65 blur-3xl" />
      </div>

      <LandingHeader />

      <main id="content" className="pt-6">
        <LandingHero />
        <LandingTrust />
        <LandingFeatures />
        <LandingWorkflow />
        <LandingUseCases />
        <LandingFinalCta />
      </main>

      <LandingFooter />
    </div>
  );
}
