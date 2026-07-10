"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/modal";
import { SearchInput } from "@/components/ui/search";
import { navItems, type MegaMenuLink } from "@/lib/mega-menu-data";

type IndexedLink = MegaMenuLink & { group: string };

const searchIndex: IndexedLink[] = navItems.flatMap((item) =>
  item.columns.flatMap((column) => column.links.map((link) => ({ ...link, group: item.label }))),
);

/** Site-wide search over the navigation content architecture. */
export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter(
      (item) => item.label.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Modal open={open} onClose={onClose} title="Search">
      {/*
        Chromium's native <input type="search"> consumes a first Escape to
        clear its own value before a second Escape reaches the dialog —
        two presses to dismiss. Intercept it here so Search behaves like
        every other overlay: one Escape, always closes.
      */}
      <div
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            onClose();
          }
        }}
      >
        <SearchInput value={query} onValueChange={setQuery} placeholder="Search capabilities, industries, resources…" label="Search SIERRA" />
      </div>
      {query.trim() && (
        <>
          <p aria-live="polite" className="mt-3 font-mono text-xs tracking-wide text-neutral-500 uppercase">
            {results.length} result{results.length === 1 ? "" : "s"}
          </p>
          <ul className="mt-2 flex max-h-72 flex-col gap-0.5 overflow-y-auto">
            {results.length === 0 && (
              <li className="px-1 py-6 text-center text-sm text-neutral-500">No matches. Try a broader term.</li>
            )}
            {results.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.group + item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-md p-2.5 transition-colors duration-150 hover:bg-neutral-50"
                  >
                    <Icon aria-hidden strokeWidth={1.5} className="size-5 shrink-0 text-neutral-400" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-ink">{item.label}</span>
                      <span className="block text-xs text-neutral-500">{item.group}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Modal>
  );
}
