import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ErrorMessageProps {
    message?: string;
}

function getErrorDetails(message?: string): { title: string; description: string } {
    if (!message) {
        return {
            title: "Unexpected Error",
            description: "An unexpected error occurred while generating the research report. Please try again.",
        };
    }
    if (message.includes("timeout") || message.includes("timed out")) {
        return {
            title: "Request Timed Out",
            description: "The research took too long to complete. The topic may be too broad — try a more specific query.",
        };
    }
    if (message.includes("Connection refused") || message.includes("Network Error") || message.includes("ECONNREFUSED")) {
        return {
            title: "Cannot Connect to Server",
            description: "The backend server is not reachable. Make sure it is running on port 3001.",
        };
    }
    if (message.includes("Rate limit") || message.includes("429")) {
        return {
            title: "Rate Limit Reached",
            description: "Too many requests. Please wait a moment before trying again.",
        };
    }
    return {
        title: "Research Failed",
        description: message,
    };
}

export function ErrorMessage({ message }: ErrorMessageProps) {
    const { title, description } = getErrorDetails(message);

    return (
        <Alert
            variant="destructive"
            className="bg-red-50 text-red-900 border-red-200 mb-6"
            role="alert"
        >
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    );
}
