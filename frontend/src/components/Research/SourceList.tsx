import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SourceCard } from "./SourceCard";
import type { Source } from "@/hooks/useResearch";

interface SourceListProps {
    sources: Source[];
}

export function SourceList({ sources }: SourceListProps) {
    if (!sources || sources.length === 0) return null;

    return (
        <Card className="h-full border-slate-200/80 bg-white/90 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.3)]">
            <CardHeader className="pb-5">
                <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                        Sources Used
                    </p>
                    <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
                        Identified sources
                    </CardTitle>
                    <p className="text-sm leading-6 text-slate-500">
                        {sources.length} curated {sources.length === 1 ? "source" : "sources"} surfaced
                        by the agent.
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {sources.map((source, index) => (
                        <SourceCard key={index} source={source} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
