import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReportSection } from "./ReportSection";
import { BookOpen, ExternalLink, FileText, ListChecks, Sparkles, TrendingUp } from "lucide-react";
import type { FinalReport as FinalReportType } from "@/hooks/useResearch";
import { CopyButton } from "../ui/CopyButton";

interface FinalReportProps {
    report: FinalReportType;
}

export function FinalReport({ report }: FinalReportProps) {
    if (!report) return null;

    const getCopyText = () => {
        let text = `# Research Report\n\n`;
        text += `## Overview\n${report.overview}\n\n`;
        text += `## Key Points\n${report.key_points.map(p => `- ${p}`).join("\n")}\n\n`;
        text += `## Resources\n${report.resources.map(r => `- ${r.title}: ${r.url}`).join("\n")}\n\n`;
        text += `## Next Steps\n${report.next_steps.map(s => `- ${s}`).join("\n")}`;
        return text;
    };

    return (
        <Card className="border-emerald-200/70 bg-[linear-gradient(180deg,rgba(236,253,245,0.8),rgba(255,255,255,0.92))] shadow-[0_22px_70px_-38px_rgba(5,150,105,0.45)]">
            <CardHeader className="flex flex-col gap-4 border-b border-emerald-100/80 pb-6 md:flex-row md:items-end md:justify-between">
                <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-600">
                        Synthesized Final Report
                    </p>
                    <CardTitle className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-slate-950">
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-sm">
                            <FileText className="size-5" />
                        </span>
                        Research Report
                    </CardTitle>
                    <p className="max-w-2xl text-sm leading-6 text-slate-600">
                        A structured summary of the agent's findings, key takeaways, supporting
                        resources, and recommended next steps.
                    </p>
                </div>
                <CopyButton textToCopy={getCopyText()} />
            </CardHeader>

            <CardContent className="pt-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <ReportSection title="Overview" icon={Sparkles}>
                        <p>{report.overview}</p>
                    </ReportSection>

                    <ReportSection title="Key Points" icon={ListChecks}>
                        <ul className="list-disc pl-5 space-y-1.5 marker:text-neutral-400">
                            {report.key_points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </ReportSection>

                    <ReportSection title="Resources" icon={BookOpen}>
                        <ul className="space-y-2.5">
                            {report.resources.map((resource, index) => (
                                <li key={index}>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-2 rounded-xl border border-transparent p-2 text-sm transition-colors hover:border-emerald-100 hover:bg-white/70"
                                    >
                                        <ExternalLink className="mt-0.5 size-4 flex-shrink-0 text-emerald-600" />
                                        <div className="min-w-0 flex-1">
                                            <span className="block font-medium text-slate-900 transition-colors group-hover:text-emerald-700 break-words">
                                                {resource.title}
                                            </span>
                                            <p className="mt-1 truncate text-xs text-slate-500">
                                                {resource.url}
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ReportSection>

                    <ReportSection title="Next Steps" icon={TrendingUp}>
                        <ul className="list-disc pl-5 space-y-1.5 marker:text-neutral-400">
                            {report.next_steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    </ReportSection>
                </div>
            </CardContent>
        </Card>
    );
}
