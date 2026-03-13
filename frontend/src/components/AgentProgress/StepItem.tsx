import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type StepStatus = "pending" | "running" | "done";

interface StepItemProps {
    label: string;
    status: StepStatus;
    isLast?: boolean;
}

export function StepItem({ label, status, isLast = false }: StepItemProps) {
    const statusLabel =
        status === "done" ? "completed" : status === "running" ? "in progress" : "pending";

    return (
        <li className="flex items-start" aria-label={`${label}: ${statusLabel}`}>
            <div className="flex flex-col items-center mr-4" aria-hidden="true">
                <div
                    className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full",
                        status === "done" && "text-green-600 bg-green-50",
                        status === "running" && "text-blue-600 bg-blue-50",
                        status === "pending" && "text-neutral-400 bg-neutral-100"
                    )}
                >
                    {status === "done" && <CheckCircle2 className="w-5 h-5" />}
                    {status === "running" && <Loader2 className="w-5 h-5 animate-spin" />}
                    {status === "pending" && <Circle className="w-5 h-5" />}
                </div>
                {!isLast && (
                    <div
                        aria-hidden="true"
                        className={cn(
                            "w-px h-8 my-1",
                            status === "done" ? "bg-green-600" : "bg-neutral-200"
                        )}
                    />
                )}
            </div>
            <div className="pt-1">
                <p
                    className={cn(
                        "text-sm font-medium",
                        status === "done" && "text-neutral-900",
                        status === "running" && "text-blue-600",
                        status === "pending" && "text-neutral-500"
                    )}
                >
                    {label}
                </p>
            </div>
        </li>
    );
}
