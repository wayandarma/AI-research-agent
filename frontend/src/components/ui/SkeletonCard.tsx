import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonQueryList() {
    return (
        <Card className="border-slate-200/80 bg-slate-50/75 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.3)]">
            <CardHeader className="flex flex-row items-start justify-between gap-4 pb-5">
                <div className="space-y-3">
                    <Skeleton className="h-3 w-24 rounded-full" />
                    <Skeleton className="h-8 w-44 rounded-xl" />
                </div>
                <Skeleton className="h-7 w-16 rounded-full" />
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-3">
                    {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="h-10 w-48 rounded-full" />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export function SkeletonSourceList() {
    return (
        <Card className="border-slate-200/80 bg-white/90 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.3)]">
            <CardHeader className="flex flex-row items-start justify-between gap-4 pb-5">
                <div className="space-y-3">
                    <Skeleton className="h-3 w-24 rounded-full" />
                    <Skeleton className="h-8 w-48 rounded-xl" />
                </div>
                <div className="flex gap-1 pt-1">
                    <span className="size-2 rounded-full bg-sky-200 animate-bounce" />
                    <span className="size-2 rounded-full bg-sky-200 animate-bounce [animation-delay:0.1s]" />
                    <span className="size-2 rounded-full bg-sky-200 animate-bounce [animation-delay:0.2s]" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-5">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Skeleton className="size-10 rounded-xl" />
                                    <div className="w-full space-y-3">
                                        <Skeleton className="h-5 w-3/4 rounded-lg" />
                                        <Skeleton className="h-3 w-1/2 rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-full rounded-full" />
                                    <Skeleton className="h-4 w-full rounded-full" />
                                    <Skeleton className="h-4 w-2/3 rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
