import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

/**
 * Entry tile for one of SIERRA's four core divisions. Built from the same
 * teal icon-chip language as the mega menu, plus a mono stat pill — the
 * same value shown in that division's mega menu feature panel — so the
 * proof point is consistent wherever a visitor encounters it.
 */
export function DivisionCard({
  icon: Icon,
  title,
  description,
  stat,
  href = "#",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-5 rounded-lg bg-surface p-6 shadow-e1",
        "transition-shadow duration-150 ease-precise hover:shadow-e2",
        className,
      )}
    >
      <span className="inline-flex size-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700 transition-colors duration-150 ease-precise group-hover:bg-teal-100">
        <Icon aria-hidden strokeWidth={1.75} className="size-5" />
      </span>
      <div className="flex-1">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
      </div>
      <div className="flex items-end justify-between gap-3">
        <Badge variant="accent">{stat}</Badge>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-teal-800">
          Explore
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-150 ease-precise group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
