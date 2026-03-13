import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface TopicInputProps {
    onSubmit: (topic: string) => void;
    isPending: boolean;
}

export function TopicInput({ onSubmit, isPending }: TopicInputProps) {
    const [topic, setTopic] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (topic.trim() && !isPending) {
            onSubmit(topic.trim());
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <form onSubmit={handleSubmit} className="flex gap-4">
                <label htmlFor="topic-input" className="sr-only">
                    Research topic
                </label>
                <Input
                    id="topic-input"
                    type="text"
                    value={topic}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)}
                    placeholder="Enter your research topic..."
                    disabled={isPending}
                    className="flex-1 text-base h-12 min-w-0"
                    autoFocus
                    maxLength={500}
                    aria-describedby={isPending ? "topic-status" : undefined}
                />
                <Button
                    type="submit"
                    disabled={!topic.trim() || isPending}
                    className="h-12 px-6 shrink-0"
                    aria-busy={isPending}
                >
                    {isPending ? "Researching..." : "Research →"}
                </Button>
            </form>
            {isPending && (
                <p id="topic-status" className="sr-only" aria-live="polite">
                    Research in progress, please wait.
                </p>
            )}
        </div>
    );
}
