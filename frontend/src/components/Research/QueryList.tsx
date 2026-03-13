import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

interface QueryListProps {
    queries: string[];
}

export function QueryList({ queries }: QueryListProps) {
    if (!queries || queries.length === 0) return null;

    return (
        <Card className="shadow-sm border-neutral-200">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    Generated Queries
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {queries.map((query, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="mt-0.5 text-neutral-400">
                                <Search className="w-4 h-4" />
                            </div>
                            <span className="text-sm text-neutral-700">{query}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
