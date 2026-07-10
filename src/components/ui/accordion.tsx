"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItemData = {
  title: string;
  content: React.ReactNode;
};

/**
 * Single-open accordion. Header is a native button (Enter/Space toggle),
 * panel is wired with aria-expanded / aria-controls.
 */
export function Accordion({
  items,
  defaultOpen = -1,
  className,
}: {
  items: AccordionItemData[];
  /** Index opened initially; -1 for all closed. */
  defaultOpen?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-neutral-200 border-y border-neutral-200", className)}>
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                id={`${baseId}-header-${i}`}
                aria-expanded={expanded}
                aria-controls={`${baseId}-panel-${i}`}
                onClick={() => setOpen(expanded ? -1 : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium",
                  "transition-colors duration-150 ease-precise hover:text-teal-800",
                )}
              >
                {item.title}
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-4 shrink-0 text-neutral-500 transition-transform duration-200 ease-precise",
                    expanded && "rotate-180",
                  )}
                />
              </button>
            </h3>
            {expanded && (
              <div
                id={`${baseId}-panel-${i}`}
                role="region"
                aria-labelledby={`${baseId}-header-${i}`}
                className="pb-5 text-base leading-relaxed text-neutral-700"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
