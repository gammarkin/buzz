import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  /** Used as the section's accessible name via aria-labelledby. */
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Eyebrow + h2 + optional lead paragraph, the heading pattern shared by every section. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center", className)}>
      <Eyebrow tone={tone === "light" ? "light" : "brand"}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-h2-sm font-extrabold lg:text-h2",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lead-sm lg:text-lead",
            tone === "light" ? "text-white" : "text-body",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
