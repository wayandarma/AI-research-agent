import { TopicInput } from "../components/TopicInput";
import { AgentProgress } from "../components/AgentProgress/AgentProgress";
import { QueryList } from "../components/Research/QueryList";
import { SourceList } from "../components/Research/SourceList";
import { SkeletonQueryList, SkeletonSourceList } from "../components/ui/SkeletonCard";
import { FinalReport } from "../components/Report/FinalReport";
import { ErrorMessage } from "../components/ui/ErrorMessage";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { useResearch } from "../hooks/useResearch";
import { Bell, Bot, RotateCcw, Settings2, Sparkles } from "lucide-react";

const NAV_ITEMS = ["Dashboard", "History", "Resources"];
const SUGGESTED_TOPICS = [
    "Quantum Computing",
    "Sustainable Aviation",
    "LLM Architecture",
];

export default function ResearchPage() {
    const { mutate, data, isPending, isError, error, reset } = useResearch();
    const hasResponse = !!data;
    const showWorkspace = isPending || hasResponse || isError;
    const showReset = hasResponse || isError;

    const handleTopicSubmit = (topic: string) => {
        mutate(topic);
    };

    const handleReset = () => {
        reset();
    };

    return (
        <div className="min-h-screen text-slate-950">
            <div
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
            >
                {isPending && "Research in progress. Please wait while the agent generates your report."}
                {!isPending && !!data?.final_report && "Research complete. Your report is ready."}
                {!isPending && isError && "Research failed. See error message for details."}
            </div>

            <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                            <Bot className="size-5" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                                Research Workspace
                            </p>
                            <h1 className="text-lg font-semibold tracking-tight text-slate-950">
                                AI Research Agent
                            </h1>
                        </div>
                    </div>

                    <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
                        {NAV_ITEMS.map((item) => (
                            <span key={item} className="text-sm font-medium text-slate-500">
                                {item}
                            </span>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="hidden items-center gap-2 sm:flex">
                            <span className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm">
                                <Bell className="size-4" />
                            </span>
                            <span className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm">
                                <Settings2 className="size-4" />
                            </span>
                        </div>
                        <span className="flex size-9 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-sm">
                            AI
                        </span>
                    </div>
                </div>
            </header>

            <main
                className={
                    showWorkspace
                        ? "mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8"
                        : "mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8"
                }
            >
                {showWorkspace ? (
                    <div className="w-full space-y-8 md:space-y-10">
                        <section className="space-y-6">
                            <TopicInput
                                onSubmit={handleTopicSubmit}
                                isPending={isPending}
                                variant="compact"
                            />
                            {isError && (
                                <ErrorMessage
                                    message={error instanceof Error ? error.message : "Request failed"}
                                />
                            )}
                        </section>

                        {isPending ? (
                            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                                <div className="col-span-12 lg:col-span-4">
                                    <AgentProgress isPending={isPending} isDone={hasResponse} />
                                </div>
                                <div className="col-span-12 space-y-6 lg:col-span-8">
                                    <SkeletonQueryList />
                                    <SkeletonSourceList />
                                </div>
                            </div>
                        ) : data ? (
                            <>
                                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                                    <div className="col-span-12 lg:col-span-3">
                                        <AgentProgress isPending={isPending} isDone={hasResponse} />
                                    </div>
                                    <div className="col-span-12 lg:col-span-5">
                                        <SourceList sources={data.sources} />
                                    </div>
                                    <div className="col-span-12 lg:col-span-4">
                                        <QueryList queries={data.queries} />
                                    </div>
                                </div>

                                {data.final_report && <FinalReport report={data.final_report} />}
                            </>
                        ) : null}

                        {showReset && (
                            <div className="flex justify-center pt-2 md:pt-4">
                                <Button
                                    onClick={handleReset}
                                    className="h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold tracking-wide text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800"
                                >
                                    <RotateCcw className="size-4" />
                                    Research Again
                                </Button>
                            </div>
                        )}
                    </div>
                ) : (
                    <section className="w-full">
                        <div className="mx-auto w-full max-w-4xl space-y-10 text-center">
                            <div className="space-y-6">
                                <div className="flex justify-center">
                                    <Badge
                                        variant="outline"
                                        className="rounded-full border-sky-200 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700 shadow-sm"
                                    >
                                        <Sparkles className="mr-2 size-3.5" />
                                        Intelligent Research
                                    </Badge>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                                        Unlock Intelligent Insights
                                    </h2>
                                    <p className="mx-auto max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
                                        Ask any question or enter a research topic to generate a
                                        synthesized report backed by curated sources.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <TopicInput
                                    onSubmit={handleTopicSubmit}
                                    isPending={isPending}
                                    variant="hero"
                                />
                                <div className="flex flex-wrap items-center justify-center gap-2.5">
                                    <span className="mr-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                                        Suggested
                                    </span>
                                    {SUGGESTED_TOPICS.map((topic) => (
                                        <Badge
                                            key={topic}
                                            variant="outline"
                                            className="rounded-full border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                                        >
                                            {topic}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <footer className="border-t border-slate-200/70 bg-white/80">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>© 2026 AI Research Agent. Built for focused research workflows.</p>
                    <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        <span>Privacy</span>
                        <Separator orientation="vertical" className="h-4 bg-slate-200" />
                        <span>Terms</span>
                        <Separator orientation="vertical" className="h-4 bg-slate-200" />
                        <span>Contact</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
