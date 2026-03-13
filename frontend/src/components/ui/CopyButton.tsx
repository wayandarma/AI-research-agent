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
            variant="outline"
            size="sm"
            className="text-neutral-500 hover:text-neutral-900 border-neutral-200"
            onClick={handleCopy}
        >
            {copied ? (
                <Check className="w-4 h-4 mr-2 text-green-600" />
            ) : (
                <Copy className="w-4 h-4 mr-2" />
            )}
            {copied ? "Copied!" : "Copy Report"}
        </Button>
    );
}
