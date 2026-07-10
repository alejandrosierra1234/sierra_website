"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CornerDownLeft, Search } from "lucide-react";
import { cn } from "@/lib/cn";
import { navItems, type MegaMenuLink } from "@/lib/mega-menu-data";

type IndexedLink = MegaMenuLink & { group: string };

const searchIndex: IndexedLink[] = navItems.flatMap((item) =>
  item.columns.flatMap((column) => column.links.map((link) => ({ ...link, group: item.label }))),
);

/** A small, curated starting point — shown before the user types anything. */
const quickLinkLabels = ["Full Package", "Fiber", "Apparel", "RegenTrace", "Careers"];
const quickLinks = quickLinkLabels
  .map((label) => searchIndex.find((item) => item.label === label))
  .filter((item): item is IndexedLink => Boolean(item));

/**
 * Site-wide command-palette search — macOS Spotlight register: anchored
 * near the top of the screen, one large borderless input, results and
 * quick links directly beneath with no visual seam, full arrow-key
 * navigation. Opens from the Search trigger or ⌘K / Ctrl+K anywhere.
 */
export function SpotlightSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  // Multiple SpotlightSearch instances can exist on one page (the Style
  // Guide embeds several live demos) — every id must be unique per
  // instance, or aria-controls/aria-activedescendant become ambiguous.
  const uid = useId();
  const resultsId = `${uid}-results`;
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return quickLinks;
    const q = query.toLowerCase();
    return searchIndex.filter(
      (item) => item.label.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      setQuery("");
      setActiveIndex(0);
      // Focus after the dialog paints so :modal doesn't steal it back.
      requestAnimationFrame(() => inputRef.current?.focus());
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const el = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      // Chromium clears a type=search input's own value on a first Escape
      // before a second reaches the dialog — intercept for one-press close.
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(results.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      // Enter is pressed while focus stays in the text input, so there's
      // no real anchor to follow — this is the one case that navigates
      // programmatically; mouse clicks below use plain <Link> activation.
      e.preventDefault();
      const active = results[activeIndex];
      if (active) {
        onClose();
        router.push(active.href);
      }
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      aria-label="Search"
      className={cn(
        "mx-auto mt-[12vh] mb-auto w-[calc(100vw-2rem)] max-w-xl overflow-hidden rounded-xl bg-surface p-0 shadow-e4",
        "backdrop:bg-ink/40 backdrop:backdrop-blur-sm open:animate-modal-in",
      )}
    >
      <div className="flex items-center gap-3 px-5 py-4">
        <Search aria-hidden className="size-5 shrink-0 text-neutral-400" />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-label="Search SIERRA"
          aria-expanded="true"
          aria-controls={resultsId}
          aria-activedescendant={results[activeIndex] ? `${uid}-option-${activeIndex}` : undefined}
          autoComplete="off"
          spellCheck={false}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search capabilities, industries, resources…"
          className="min-w-0 flex-1 bg-transparent text-lg text-ink placeholder:text-neutral-400 focus:outline-none"
        />
        <kbd className="hidden shrink-0 rounded-xs bg-neutral-100 px-1.5 py-0.5 font-mono text-xs text-neutral-500 sm:block">
          esc
        </kbd>
      </div>

      <div className="border-t border-neutral-100">
        {!query.trim() && (
          <p className="eyebrow px-5 pt-4">Quick links</p>
        )}
        {results.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-neutral-500">No matches. Try a broader term.</p>
        ) : (
          <ul id={resultsId} ref={listRef} role="listbox" className="max-h-80 overflow-y-auto p-2">
            {results.map((item, i) => {
              const Icon = item.icon;
              const active = i === activeIndex;
              return (
                <li key={item.group + item.label} id={`${uid}-option-${i}`} role="option" aria-selected={active}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 rounded-lg p-2.5 transition-colors duration-150 ease-precise",
                      active ? "bg-neutral-100" : "hover:bg-neutral-50",
                    )}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                      <Icon aria-hidden strokeWidth={1.75} className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-ink">{item.label}</span>
                      <span className="block text-xs text-neutral-500">{item.group}</span>
                    </span>
                    {active && <CornerDownLeft aria-hidden className="size-3.5 shrink-0 text-neutral-400" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="hidden items-center gap-4 border-t border-neutral-100 bg-neutral-50 px-5 py-2.5 font-mono text-xs text-neutral-500 sm:flex">
        <span className="flex items-center gap-1.5">
          <kbd className="rounded-xs bg-surface px-1.5 py-0.5 shadow-e1">↑↓</kbd> Navigate
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="rounded-xs bg-surface px-1.5 py-0.5 shadow-e1">↵</kbd> Select
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="rounded-xs bg-surface px-1.5 py-0.5 shadow-e1">esc</kbd> Close
        </span>
      </div>
    </dialog>
  );
}
