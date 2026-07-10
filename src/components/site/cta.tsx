import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

/**
 * Conversion block placed before the footer on every public page.
 * One primary action; the secondary action is optional and quieter.
 */
export function CTABlock({
  title,
  body,
  primaryLabel,
  primaryHref = "#",
  secondaryLabel,
  secondaryHref = "#",
  className,
}: {
  title: string;
  body?: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg bg-neutral-900 px-8 py-12 text-paper lg:px-16 lg:py-16", className)}>
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-4xl">{title}</h2>
          {body && <p className="mt-4 text-lg leading-relaxed text-neutral-300">{body}</p>}
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button href={primaryHref} variant="inverse" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && (
            <Button
              href={secondaryHref}
              variant="ghost"
              size="lg"
              className="text-paper hover:bg-neutral-800 active:bg-neutral-950"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
