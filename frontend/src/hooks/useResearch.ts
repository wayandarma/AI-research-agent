import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export interface Source {
    title: string;
    url: string;
    snippet: string;
}

export interface Summary {
    url: string;
    summary: string;
}

export interface FinalReport {
    overview: string;
    key_points: string[];
    resources: { title: string; url: string }[];
    next_steps: string[];
}

export interface ResearchResponse {
    session_id: string;
    topic: string;
    queries: string[];
    sources: Source[];
    summaries: Summary[];
    final_report: FinalReport | null;
    status: "running" | "done" | "error";
    error?: string;
}

export function useResearch() {
    return useMutation({
        mutationFn: async (topic: string): Promise<ResearchResponse> => {
            const response = await api.post("/research", { topic });
            const data: ResearchResponse = response.data;

            // Surface backend-level errors (status = 'error') even if HTTP 200
            if (data.status === "error" && data.error) {
                throw new Error(data.error);
            }

            return data;
        },
    });
}
