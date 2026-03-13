import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StepItem, type StepStatus } from "./StepItem";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
    { id: "generating_queries", label: "Generating queries" },
    { id: "searching_web", label: "Searching web" },
    { id: "selecting_sources", label: "Selecting sources" },
    { id: "summarizing_sources", label: "Summarizing sources" },
    { id: "building_report", label: "Building report" },
];

interface AgentProgressProps {
    isPending: boolean;
    isDone: boolean;
}

export function AgentProgress({ isPending, isDone }: AgentProgressProps) {
    if (!isPending && !isDone) return null;

    const currentStepIndex = isDone ? STEPS.length : 1;

    const getStepStatus = (index: number): StepStatus => {
        if (isDone) return "done";
        if (index < currentStepIndex) return "done";
        if (index === currentStepIndex) return "running";
        return "pending";
    };

    return (
        <Card className="h-full border-slate-200/80 bg-white/90 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.3)]">
            <CardHeader className="pb-6">
                <div className="space-y-3">
                    <Badge
                        variant="outline"
                        className="w-fit rounded-full border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500"
                    >
                        Agent Progress
                    </Badge>
                    <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
                        {isDone ? "Research complete" : "Agent progress"}
                    </CardTitle>
                    <p className="text-sm leading-6 text-slate-500">
                        {isDone
                            ? "Each stage has completed and the final report is ready."
                            : "The agent is moving through the research pipeline and collecting evidence."}
                    </p>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <ol aria-label="Research agent steps" className="list-none p-0 m-0">
                    {STEPS.map((step, index) => {
                        const status = getStepStatus(index);
                        const description =
                            status === "done"
                                ? "Completed"
                                : status === "running"
                                    ? "Analyzing live search results"
                                    : "Queued";

                        return (
                            <StepItem
                                key={step.id}
                                index={index + 1}
                                label={step.label}
                                description={description}
                                status={status}
                                isLast={index === STEPS.length - 1}
                            />
                        );
                    })}
                </ol>

                <div
                    className={cn(
                        "flex items-center gap-3 rounded-2xl border px-4 py-3",
                        isDone
                            ? "border-emerald-200 bg-emerald-50/70"
                            : "border-indigo-200 bg-indigo-50/70"
                    )}
                >
                    <span
                        className={cn(
                            "flex size-9 items-center justify-center rounded-full",
                            isDone ? "bg-emerald-100 text-emerald-700" : "bg-indigo-100 text-indigo-700"
                        )}
                    >
                        {isDone ? <CheckCircle2 className="size-4" /> : <Search className="size-4" />}
                    </span>
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-slate-900">
                            {isDone ? "Status: Done" : "Searching the web"}
                        </p>
                        <p className="text-xs leading-5 text-slate-500">
                            {isDone
                                ? "The report has been assembled and is ready to review."
                                : "Current backend progress events are not exposed, so this stage is shown as a guided approximation."}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
