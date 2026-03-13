import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 sm:space-y-4",
        align === "center" && "mx-auto max-w-3xl text-center",
      )}
    >
      <Badge
        variant="outline"
        className="rounded-full border-sky-200 bg-white/85 px-4 py-1.5 sm:py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700 shadow-sm"
      >
        {eyebrow}
      </Badge>
      <div className="space-y-2 sm:space-y-3">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
