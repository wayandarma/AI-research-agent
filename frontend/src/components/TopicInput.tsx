import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Search } from "lucide-react";

interface TopicInputProps {
    onSubmit: (topic: string) => void;
    isPending: boolean;
    variant?: "hero" | "compact";
}

export function TopicInput({ onSubmit, isPending, variant = "hero" }: TopicInputProps) {
    const [topic, setTopic] = useState("");
    const isCompact = variant === "compact";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (topic.trim() && !isPending) {
            onSubmit(topic.trim());
        }
    };

    return (
        <div className="mx-auto w-full max-w-3xl">
            <form
                onSubmit={handleSubmit}
                className={cn(
                    "group overflow-hidden border border-slate-200/80 bg-white/90 shadow-[0_18px_60px_-32px_rgba(15,23,42,0.35)] backdrop-blur-sm transition focus-within:border-sky-300 focus-within:shadow-[0_22px_70px_-36px_rgba(37,99,235,0.35)]",
                    isCompact ? "rounded-full px-4 py-3" : "rounded-[2rem] p-2.5 md:p-3"
                )}
            >
                <div
                    className={cn(
                        "flex min-w-0 gap-3",
                        isCompact ? "items-center" : "flex-col md:flex-row md:items-center"
                    )}
                >
                    <div className={cn("flex min-w-0 flex-1 items-center gap-3", isCompact ? "pl-1" : "px-4")}>
                        <Search className={cn("shrink-0 text-slate-400", isCompact ? "size-5" : "size-6")} />
                        <label htmlFor="topic-input" className="sr-only">
                            Research topic
                        </label>
                        <Input
                            id="topic-input"
                            type="text"
                            value={topic}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)}
                            placeholder="Ask any question or enter a research topic..."
                            readOnly={isPending}
                            className={cn(
                                "min-w-0 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0",
                                isCompact ? "h-10 text-base font-medium" : "h-14 text-lg",
                                isPending && "cursor-default"
                            )}
                            autoFocus={!isPending}
                            maxLength={500}
                            aria-describedby={isPending ? "topic-status" : undefined}
                        />
                    </div>

                    {isPending ? (
                        <div
                            className={cn(
                                "flex items-center justify-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700",
                                isCompact ? "shrink-0" : "w-full md:w-auto"
                            )}
                        >
                            <span className="relative flex size-2.5">
                                <span className="absolute inset-0 rounded-full bg-indigo-500/40 animate-ping" />
                                <span className="relative rounded-full bg-indigo-600" />
                            </span>
                            Analyzing
                        </div>
                    ) : (
                        <Button
                            type="submit"
                            disabled={!topic.trim() || isPending}
                            className={cn(
                                "shrink-0 rounded-full bg-slate-950 text-white shadow-sm hover:bg-slate-800",
                                isCompact ? "h-11 px-5" : "h-12 w-full px-6 md:w-auto"
                            )}
                            aria-busy={isPending}
                        >
                            Research
                            <ArrowRight className="size-4" />
                        </Button>
                    )}
                </div>
            </form>

            {isPending && (
                <p id="topic-status" className="sr-only" aria-live="polite">
                    Research in progress, please wait.
                </p>
            )}
        </div>
    );
}
