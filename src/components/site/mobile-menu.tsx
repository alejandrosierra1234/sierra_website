"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { NavItemData } from "@/lib/mega-menu-data";

function MobileNavGroup({ item, onNavigate }: { item: NavItemData; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const links = item.columns.flatMap((c) => c.links);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-base font-medium text-ink transition-colors duration-150 hover:bg-neutral-100"
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn("size-4 text-neutral-500 transition-transform duration-200 ease-precise", open && "-rotate-180")}
        />
      </button>
      {open && (
        <div id={panelId} className="animate-menu-in flex flex-col gap-0.5 py-1 pl-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-neutral-700 transition-colors duration-150 hover:bg-neutral-100 hover:text-ink"
              >
                <Icon aria-hidden strokeWidth={1.5} className="size-4 shrink-0 text-neutral-400" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Mobile navigation: a plain accordion, one disclosure per top-level
 * item — never the desktop mega menu. Lives inside the Drawer.
 */
export function MobileMenu({ items, onNavigate }: { items: NavItemData[]; onNavigate: () => void }) {
  return (
    <nav aria-label="Mobile">
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.key}>
            <MobileNavGroup item={item} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
