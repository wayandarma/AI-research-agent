import { ExternalLink } from "lucide-react";
import type { Source } from "@/hooks/useResearch";

interface SourceCardProps {
    source: Readonly<Source>;
}

export function SourceCard({ source }: SourceCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-3"
            >
                <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-semibold tracking-tight text-slate-950 group-hover:text-sky-700">
                        {source.title}
                    </h4>
                    <ExternalLink className="mt-1 size-4 flex-shrink-0 text-slate-400 transition-colors group-hover:text-sky-700" />
                </div>

                <p className="truncate text-xs font-semibold tracking-wide text-sky-700">
                    {source.url}
                </p>

                <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                    {source.snippet}
                </p>
            </a>
        </div>
    );
}
