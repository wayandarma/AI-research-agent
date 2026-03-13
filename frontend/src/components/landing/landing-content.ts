import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Briefcase,
  Cpu,
  FileSearch,
  FileText,
  Filter,
  Globe2,
  LineChart,
  Search,
  Sparkles,
} from "lucide-react";

export interface LandingNavItem {
  label: string;
  href: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  description: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  proof: string;
  spanClassName?: string;
}

export interface WorkflowStep {
  eyebrow: string;
  title: string;
  description: string;
  highlight: string;
}

export interface UseCaseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  prompt: string;
}

export const landingNavItems: LandingNavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Use cases", href: "#use-cases" },
];

export const heroProofPoints = [
  "Source-backed workflow",
  "Structured final report",
  "Focused single-session research",
];

export const trustMetrics: TrustMetric[] = [
  {
    value: "3-5",
    label: "Generated query angles",
    description:
      "Each run begins with multiple search directions instead of a single vague prompt.",
  },
  {
    value: "Top 3",
    label: "Curated sources",
    description:
      "Results are ranked, deduplicated, and narrowed before synthesis begins.",
  },
  {
    value: "4",
    label: "Report sections",
    description:
      "Overview, key points, resources, and next steps stay easy to scan and reuse.",
  },
];

export const featureItems: FeatureItem[] = [
  {
    icon: Search,
    title: "Query generation",
    description:
      "Start with a topic and expand it into several sharper search angles without manually rewriting prompts.",
    proof: "The backend currently generates 3 to 5 web research queries per session.",
  },
  {
    icon: Globe2,
    title: "Source discovery",
    description:
      "Search the web for relevant pages instead of relying on unsupported model recall or generic answers.",
    proof: "Tavily results are pulled directly into the workflow for each generated query.",
  },
  {
    icon: Filter,
    title: "Ranking and deduplication",
    description:
      "Collapse repeated links and keep the strongest version of each source so the report stays focused.",
    proof: "The current source selector keeps the highest-scoring unique URL before trimming the final set.",
    spanClassName: "lg:col-span-2",
  },
  {
    icon: FileSearch,
    title: "Source summaries",
    description:
      "Summarize every selected source in the context of the original topic instead of blending everything too early.",
    proof: "Summaries are generated source by source, preserving a clearer audit trail.",
  },
  {
    icon: FileText,
    title: "Final report synthesis",
    description:
      "Turn findings into a structured brief with overview, key points, resources, and next steps.",
    proof: "The MVP returns the complete report once the run finishes. It does not stream intermediate states yet.",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    eyebrow: "01",
    title: "Enter a topic or question",
    description:
      "Start with the subject you want to understand, compare, or brief quickly.",
    highlight: "Session created",
  },
  {
    eyebrow: "02",
    title: "Generate search queries",
    description:
      "The agent creates multiple web research angles so coverage is broader from the start.",
    highlight: "3 to 5 queries",
  },
  {
    eyebrow: "03",
    title: "Search, rank, and narrow sources",
    description:
      "Relevant pages are discovered, scored, deduplicated, and reduced to a focused source set.",
    highlight: "Top sources selected",
  },
  {
    eyebrow: "04",
    title: "Summarize each chosen source",
    description:
      "Every selected source is condensed around the original topic to keep findings grounded.",
    highlight: "Per-source summaries",
  },
  {
    eyebrow: "05",
    title: "Assemble the final report",
    description:
      "The final output is synthesized into a readable brief you can review, share, or copy.",
    highlight: "Structured report",
  },
];

export const useCaseItems: UseCaseItem[] = [
  {
    icon: Briefcase,
    title: "Market research",
    description:
      "Frame a landscape quickly before you move into interviews, spreadsheets, or deeper analysis.",
    prompt: 'Compare the main forces shaping AI note-taking tools right now.',
  },
  {
    icon: Cpu,
    title: "Technical research",
    description:
      "Collect source-backed context around architectures, libraries, and implementation tradeoffs.",
    prompt: "Summarize the tradeoffs between common RAG chunking strategies.",
  },
  {
    icon: LineChart,
    title: "Trend exploration",
    description:
      "Turn broad emerging topics into a focused brief that is easier to scan and discuss.",
    prompt: "What is changing in sustainable aviation fuel adoption?",
  },
  {
    icon: BookOpen,
    title: "Topic briefing",
    description:
      "Get oriented fast when you need a concise overview and a shortlist of useful resources.",
    prompt: "Create a briefing on open-source LLM observability.",
  },
  {
    icon: Sparkles,
    title: "Competitive research",
    description:
      "Start a clearer comparison before building a more detailed market or positioning analysis.",
    prompt: "Compare how three AI coding tools position themselves.",
  },
];
