import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Entry tile for industry landing pages. Icon + name + one-line value
 * statement; the arrow confirms it navigates.
 */
export function IndustryCard({
  icon: Icon,
  title,
  description,
  href = "#",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-4 rounded-lg bg-surface p-6 shadow-e1",
        "transition-shadow duration-150 ease-precise hover:shadow-e2",
        className,
      )}
    >
      <span className="inline-flex size-10 items-center justify-center rounded-sm bg-neutral-100 text-ink transition-colors duration-150 group-hover:bg-teal-100 group-hover:text-teal-800">
        <Icon aria-hidden className="size-5" strokeWidth={1.5} />
      </span>
      <div className="flex-1">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800">
        Explore
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-150 ease-precise group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
