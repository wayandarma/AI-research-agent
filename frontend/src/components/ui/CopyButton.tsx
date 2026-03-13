import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
    textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text", err);
        }
    };

    return (
        <Button
            variant="secondary"
            size="sm"
            className="h-11 rounded-xl border border-emerald-200 bg-white/85 px-4 text-emerald-700 shadow-sm hover:bg-emerald-50 hover:text-emerald-800"
            onClick={handleCopy}
        >
            {copied ? (
                <Check className="mr-2 size-4 text-emerald-600" />
            ) : (
                <Copy className="mr-2 size-4" />
            )}
            {copied ? "Copied!" : "Copy Report"}
        </Button>
    );
}
