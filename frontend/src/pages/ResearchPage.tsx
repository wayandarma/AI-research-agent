import { TopicInput } from "../components/TopicInput";
import { AgentProgress } from "../components/AgentProgress/AgentProgress";
import { QueryList } from "../components/Research/QueryList";
import { SourceList } from "../components/Research/SourceList";
import { SkeletonQueryList, SkeletonSourceList } from "../components/ui/SkeletonCard";
import { FinalReport } from "../components/Report/FinalReport";
import { ErrorMessage } from "../components/ui/ErrorMessage";
import { Button } from "../components/ui/button";
import { useResearch } from "../hooks/useResearch";

export default function ResearchPage() {
    const { mutate, data, isPending, isError, error, reset } = useResearch();

    const handleTopicSubmit = (topic: string) => {
        mutate(topic);
    };

    const handleReset = () => {
        reset();
    };

    return (
        <div className="min-h-screen bg-neutral-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
                        AI Research Agent
                    </h1>
                    <p className="text-lg text-neutral-600">
                        Enter a topic and let the AI generate a comprehensive research report for you.
                    </p>
                </header>

                <main className="space-y-8">
                    <div aria-live="polite" aria-atomic="true" className="sr-only">
                        {isPending && "Research in progress. Please wait while the agent generates your report."}
                        {!isPending && !!data?.final_report && "Research complete. Your report is ready."}
                        {!isPending && isError && "Research failed. See error message for details."}
                    </div>

                    <TopicInput onSubmit={handleTopicSubmit} isPending={isPending} />

                    {isError && <ErrorMessage message={error instanceof Error ? error.message : "Request failed"} />}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1">
                            <AgentProgress isPending={isPending} isDone={!!data} />
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            {isPending ? (
                                <>
                                    <SkeletonSourceList />
                                    <SkeletonQueryList />
                                </>
                            ) : (
                                <>
                                    {data?.sources && <SourceList sources={data.sources} />}
                                    {data?.queries && <QueryList queries={data.queries} />}
                                </>
                            )}
                        </div>
                    </div>

                    {data?.final_report && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <FinalReport report={data.final_report} />
                        </div>
                    )}

                    {(data?.final_report || isError) && (
                        <div className="flex justify-center pt-8">
                            <Button
                                variant="outline"
                                onClick={handleReset}
                                className="w-full sm:w-auto"
                            >
                                Research Again
                            </Button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
