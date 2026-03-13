import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReportSection } from "./ReportSection";
import { ExternalLink, FileText } from "lucide-react";
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
        <Card className="shadow-sm border-neutral-200 lg:col-span-3">
            <CardHeader className="pb-6 border-b border-neutral-100 bg-neutral-50/50 flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold flex items-center gap-2 text-neutral-900">
                    <FileText className="w-6 h-6 text-blue-600" />
                    Research Report
                </CardTitle>
                <CopyButton textToCopy={getCopyText()} />
            </CardHeader>

            <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <ReportSection title="Overview">
                        <p>{report.overview}</p>
                    </ReportSection>

                    <ReportSection title="Key Points">
                        <ul className="list-disc pl-5 space-y-1.5 marker:text-neutral-400">
                            {report.key_points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </ReportSection>

                    <ReportSection title="Resources">
                        <ul className="space-y-2.5">
                            {report.resources.map((resource, index) => (
                                <li key={index}>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-2 text-sm hover:bg-neutral-50 p-2 rounded-md -mx-2 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                                                {resource.title}
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ReportSection>

                    <ReportSection title="Next Steps">
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
