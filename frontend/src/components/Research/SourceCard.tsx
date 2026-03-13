import { ExternalLink } from "lucide-react";
import type { Source } from "@/hooks/useResearch";

interface SourceCardProps {
    source: Readonly<Source>;
}

export function SourceCard({ source }: SourceCardProps) {
    return (
        <div className="p-4 rounded-lg border border-neutral-100 bg-neutral-50 hover:bg-neutral-100/50 transition-colors">
            <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-2"
            >
                <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-blue-600 group-hover:underline line-clamp-2 leading-snug">
                        {source.title}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-xs text-green-700 truncate font-mono">
                    {(() => { try { return new URL(source.url).hostname; } catch { return source.url; } })()}
                </p>

                <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {source.snippet}
                </p>
            </a>
        </div>
    );
}
