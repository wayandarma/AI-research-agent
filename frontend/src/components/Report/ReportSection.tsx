import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReportSectionProps {
    title: string;
    icon?: LucideIcon;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export function ReportSection({
    title,
    icon: Icon,
    children,
    className,
    contentClassName,
}: ReportSectionProps) {
    return (
        <section
            className={cn(
                "rounded-2xl border border-emerald-100 bg-white/78 p-5 shadow-sm backdrop-blur-sm",
                className
            )}
        >
            <div className="flex items-center gap-3">
                {Icon && (
                    <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                        <Icon className="size-5" />
                    </span>
                )}
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{title}</h3>
            </div>
            <div className={cn("mt-4 space-y-3 text-sm leading-7 text-slate-700", contentClassName)}>
                {children}
            </div>
        </section>
    );
}
