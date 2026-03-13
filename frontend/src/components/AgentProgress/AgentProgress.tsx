import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StepItem, type StepStatus } from "./StepItem";

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

    const getStepStatus = (): StepStatus => {
        if (isDone) return "done";
        if (isPending) return "running"; // MVP simplification: all running
        return "pending";
    };

    return (
        <Card className="shadow-sm border-neutral-200">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    Agent Progress
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ol
                    aria-label="Research agent steps"
                    className="flex flex-col list-none p-0 m-0"
                >
                    {STEPS.map((step, index) => (
                        <StepItem
                            key={step.id}
                            label={step.label}
                            status={getStepStatus()}
                            isLast={index === STEPS.length - 1}
                        />
                    ))}
                </ol>
            </CardContent>
        </Card>
    );
}
