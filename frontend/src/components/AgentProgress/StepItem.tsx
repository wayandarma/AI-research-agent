import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type StepStatus = "pending" | "running" | "done";

interface StepItemProps {
    index: number;
    label: string;
    description?: string;
    status: StepStatus;
    isLast?: boolean;
}

export function StepItem({ index, label, description, status, isLast = false }: StepItemProps) {
    const statusLabel =
        status === "done" ? "completed" : status === "running" ? "in progress" : "pending";

    return (
        <li className="flex items-start gap-4" aria-label={`${label}: ${statusLabel}`}>
            <div className="flex flex-col items-center" aria-hidden="true">
                <div
                    className={cn(
                        "flex size-7 items-center justify-center rounded-full border text-xs font-semibold shadow-sm",
                        status === "done" && "border-emerald-500 bg-emerald-500 text-white",
                        status === "running" && "border-indigo-500 bg-indigo-50 text-indigo-700",
                        status === "pending" && "border-slate-200 bg-slate-100 text-slate-400"
                    )}
                >
                    {status === "done" && <Check className="size-4" />}
                    {status === "running" && (
                        <span className="relative flex size-2.5">
                            <span className="absolute inset-0 rounded-full bg-indigo-500/40 animate-ping" />
                            <span className="relative rounded-full bg-indigo-600" />
                        </span>
                    )}
                    {status === "pending" && <span>{index}</span>}
                </div>
                {!isLast && (
                    <div
                        aria-hidden="true"
                        className={cn(
                            "my-2 h-11 w-px",
                            status === "done" && "bg-emerald-300",
                            status === "running" && "bg-indigo-200",
                            status === "pending" && "bg-slate-200"
                        )}
                    />
                )}
            </div>

            <div className={cn("pt-0.5", !isLast && "pb-5")}>
                <p
                    className={cn(
                        "text-sm font-semibold",
                        status === "done" && "text-slate-950",
                        status === "running" && "text-indigo-700",
                        status === "pending" && "text-slate-500"
                    )}
                >
                    {label}
                </p>
                {description && (
                    <p
                        className={cn(
                            "mt-1 text-xs leading-5",
                            status === "running" ? "text-indigo-500" : "text-slate-400"
                        )}
                    >
                        {description}
                    </p>
                )}
            </div>
        </li>
    );
}
