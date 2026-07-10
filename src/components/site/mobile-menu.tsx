"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { NavItemData } from "@/lib/mega-menu-data";

function MobileNavGroup({ item, onNavigate }: { item: NavItemData; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-neutral-100">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-0 py-3 text-sm font-medium text-ink transition-colors duration-150"
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn("size-4 text-neutral-400 transition-transform duration-300 ease-precise", open && "-rotate-180")}
        />
      </button>

      {open && (
        <div
          id={panelId}
          className="animate-menu-in space-y-4 pb-4"
        >
          {item.columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-2">
              {column.title && (
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  {column.title}
                </p>
              )}
              <ul className="space-y-0.5 flex flex-col">
                {column.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={onNavigate}
                        className="group flex items-start gap-3 rounded-md px-2 py-2 transition-colors duration-150 hover:bg-neutral-50 active:bg-neutral-100"
                      >
                        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700 transition-colors duration-150 group-hover:bg-teal-100">
                          <Icon aria-hidden strokeWidth={1.75} className="size-3.5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-ink">{link.label}</p>
                          <p className="text-xs text-neutral-500 line-clamp-2">{link.description}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {item.feature && (
            <div className="border-t border-neutral-100 pt-4">
              {item.feature.kind === "stat" ? (
                <div className="space-y-2">
                  <div className="text-2xl font-semibold text-ink">{item.feature.value}</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    {item.feature.label}
                  </p>
                  <p className="text-sm text-neutral-600">{item.feature.body}</p>
                  <Link
                    href={item.feature.cta.href}
                    onClick={onNavigate}
                    className="inline-block text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors duration-150"
                  >
                    {item.feature.cta.label} →
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  <blockquote className="border-l-2 border-teal-200 pl-3 text-sm text-neutral-700 italic">
                    "{item.feature.quote}"
                  </blockquote>
                  <p className="text-xs font-semibold text-neutral-500">{item.feature.attribution}</p>
                  <Link
                    href={item.feature.cta.href}
                    onClick={onNavigate}
                    className="inline-block text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors duration-150"
                  >
                    {item.feature.cta.label} →
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Mobile navigation: sophisticated accordion with full mega menu content,
 * descriptions, and editorial features. Lives inside the Drawer.
 *
 * Design inspired by Apple's approach:
 * - Visual hierarchy with section eyebrows
 * - Descriptions for every link
 * - Icon chips matching desktop
 * - Editorial features (stats/quotes) at bottom of each section
 * - Smooth animations
 * - Clean, spacious layout
 */
export function MobileMenu({ items, onNavigate }: { items: NavItemData[]; onNavigate: () => void }) {
  return (
    <nav aria-label="Mobile navigation">
      <ul className="divide-y divide-neutral-100 -mx-6">
        {items.map((item) => (
          <li key={item.key} className="px-6">
            <MobileNavGroup item={item} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
