import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SourceCard } from "./SourceCard";
import type { Source } from "@/hooks/useResearch";

interface SourceListProps {
    sources: Source[];
}

export function SourceList({ sources }: SourceListProps) {
    if (!sources || sources.length === 0) return null;

    return (
        <Card className="shadow-sm border-neutral-200">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    Selected Sources
                    <span className="text-xs font-normal text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                        {sources.length}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sources.map((source, index) => (
                        <SourceCard key={index} source={source} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
