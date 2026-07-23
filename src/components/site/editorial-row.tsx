import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * A single entry in an editorial list: quiet index or eyebrow, title,
 * running description, optional meta label, and an arrow that only
 * moves on hover. No card, no shadow, no icon chip — a hairline top
 * border and generous padding do the separating instead. Used wherever
 * a card grid would otherwise repeat the same "icon + box" pattern
 * (divisions, plants) so the page reads as one continuous, typographic
 * surface rather than a stack of product tiles.
 */
export function EditorialRow({
  index,
  title,
  description,
  meta,
  href = "#",
  className,
}: {
  index?: string;
  title: string;
  description: string;
  meta?: string;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-3 border-t border-neutral-200 py-10 first:border-t-0 first:pt-0",
        "sm:flex-row sm:items-baseline sm:gap-10",
        className,
      )}
    >
      {index && (
        <span className="font-mono text-sm text-neutral-400 sm:w-8 sm:shrink-0">{index}</span>
      )}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-neutral-600">{description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-6 sm:w-48 sm:justify-end">
        {meta && (
          <span className="font-mono text-xs tracking-wide text-neutral-500 uppercase">{meta}</span>
        )}
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 text-neutral-400 transition-transform duration-150 ease-precise group-hover:translate-x-1 group-hover:text-teal-800"
        />
      </div>
    </Link>
  );
}
