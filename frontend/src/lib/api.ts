import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-Type": "application/json",
    },
    // AI agent can take 60-120 seconds to complete
    timeout: 120_000,
});

// Extract the actual error message from the backend response body
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isAxiosError(error)) {
            // Server responded with a structured error: { error: "..." }
            const serverMessage = error.response?.data?.error;
            if (serverMessage) {
                return Promise.reject(new Error(serverMessage));
            }

            // Network-level error (backend not running, CORS, etc.)
            if (error.code === "ECONNREFUSED" || error.message.includes("Network Error")) {
                return Promise.reject(new Error("Cannot reach the backend server. Make sure it is running on port 3001."));
            }

            // Timeout
            if (error.code === "ECONNABORTED") {
                return Promise.reject(new Error("Request timed out. The research agent is taking too long to respond."));
            }
        }
        return Promise.reject(error);
    }
);
