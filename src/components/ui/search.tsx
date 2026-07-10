"use client";

import { useId, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { cn } from "@/lib/cn";

export function SearchInput({
  placeholder = "Search…",
  label = "Search",
  value,
  onValueChange,
  className,
}: {
  placeholder?: string;
  /** Accessible name; the input is labeled even though no label is shown. */
  label?: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}) {
  const id = useId();
  return (
    <div className={cn("relative", className)}>
      <SearchIcon
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-500"
      />
      <input
        type="search"
        id={id}
        role="searchbox"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className={cn(
          "h-11 w-full rounded-md border border-neutral-200 bg-surface pr-9 pl-9 text-base text-ink",
          "placeholder:text-neutral-400 transition-colors duration-150 ease-precise hover:border-neutral-400",
          "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal-700 focus-visible:border-transparent",
          "[&::-webkit-search-cancel-button]:hidden",
        )}
      />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onValueChange("")}
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-sm p-1 text-neutral-500 transition-colors duration-150 hover:bg-neutral-100 hover:text-ink"
        >
          <X aria-hidden className="size-3.5" />
        </button>
      )}
    </div>
  );
}

/**
 * Search with live-filtered results. Result count is announced to screen
 * readers via a polite live region.
 */
export function SearchDemo({ items, className }: { items: string[]; className?: string }) {
  const [query, setQuery] = useState("");
  const results = query
    ? items.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
    : items;

  return (
    <div className={cn("w-full max-w-sm", className)}>
      <SearchInput value={query} onValueChange={setQuery} placeholder="Search fabrics…" label="Search fabrics" />
      <p aria-live="polite" className="mt-2 font-mono text-xs tracking-wide text-neutral-500 uppercase">
        {results.length} result{results.length === 1 ? "" : "s"}
      </p>
      <ul className="mt-2 divide-y divide-neutral-100 rounded-md border border-neutral-200 bg-surface">
        {results.length === 0 && (
          <li className="px-4 py-6 text-center text-sm text-neutral-500">
            No matches. Try a broader term.
          </li>
        )}
        {results.map((item) => (
          <li key={item}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-neutral-50"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
