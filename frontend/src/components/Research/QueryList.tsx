import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface QueryListProps {
    queries: string[];
}

export function QueryList({ queries }: QueryListProps) {
    if (!queries || queries.length === 0) return null;

    return (
        <Card className="h-full border-slate-200/80 bg-white/90 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.3)]">
            <CardHeader className="flex flex-row items-start justify-between gap-4 pb-5">
                <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                        Search Queries
                    </p>
                    <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
                        Generated queries
                    </CardTitle>
                </div>
                <Badge className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                    {queries.length} total
                </Badge>
            </CardHeader>
            <CardContent>
                <ul className="flex flex-wrap gap-3">
                    {queries.map((query, index) => (
                        <li key={index}>
                            <Badge
                                variant="outline"
                                className="rounded-full border-slate-200 bg-slate-50/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                            >
                                <Search className="mr-2 size-3.5 text-sky-600" />
                                <span className="max-w-full whitespace-normal text-left leading-5">
                                    {query}
                                </span>
                            </Badge>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
