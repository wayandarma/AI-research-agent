interface ReportSectionProps {
    title: string;
    children: React.ReactNode;
}

export function ReportSection({ title, children }: ReportSectionProps) {
    return (
        <div className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-100 pb-2">
                {title}
            </h3>
            <div className="text-neutral-700 leading-relaxed space-y-2">
                {children}
            </div>
        </div>
    );
}
