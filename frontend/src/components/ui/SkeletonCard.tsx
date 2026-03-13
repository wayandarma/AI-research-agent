import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonQueryList() {
    return (
        <Card className="shadow-sm border-neutral-200">
            <CardHeader className="pb-3">
                <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-center gap-3">
                            <Skeleton className="w-4 h-4 rounded-full" />
                            <Skeleton className="h-4 flex-1 max-w-[250px]" />
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export function SkeletonSourceList() {
    return (
        <Card className="shadow-sm border-neutral-200">
            <CardHeader className="pb-4">
                <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 rounded-lg border border-neutral-100 bg-neutral-50 space-y-3">
                            <Skeleton className="h-5 w-3/4" />
                            <Skeleton className="h-3 w-1/2" />
                            <div className="space-y-2 pt-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
