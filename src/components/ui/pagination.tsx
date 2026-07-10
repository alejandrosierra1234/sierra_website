"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

function pageWindow(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  if (current > 3) pages.push("…");
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) pages.push(p);
  if (current < total - 2) pages.push("…");
  pages.push(total);
  return pages;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}) {
  const itemBase = cn(
    "inline-flex size-9 items-center justify-center rounded-full text-sm font-medium",
    "transition-colors duration-150 ease-precise",
    "disabled:pointer-events-none disabled:opacity-40",
  );

  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className={cn(itemBase, "text-neutral-600 hover:bg-neutral-100 hover:text-ink")}
      >
        <ChevronLeft aria-hidden className="size-4" />
      </button>

      {pageWindow(page, totalPages).map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} aria-hidden className="inline-flex size-9 items-center justify-center text-sm text-neutral-400">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
            onClick={() => onPageChange(p)}
            className={cn(
              itemBase,
              p === page ? "bg-ink text-paper" : "text-neutral-600 hover:bg-neutral-100 hover:text-ink",
            )}
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        aria-label="Next page"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className={cn(itemBase, "text-neutral-600 hover:bg-neutral-100 hover:text-ink")}
      >
        <ChevronRight aria-hidden className="size-4" />
      </button>
    </nav>
  );
}
