"use client";

import Link from "next/link";
import type { NavItemData } from "@/lib/mega-menu-data";

/**
 * Mobile navigation: full-screen, premium experience.
 * - Clear visual hierarchy
 * - Proper spacing and breathing room
 * - Descriptions for every link
 * - Editorial features prominently displayed
 * - No overlapping or transparency issues
 */
export function MobileMenu({ items, onNavigate }: { items: NavItemData[]; onNavigate: () => void }) {
  return (
    <nav aria-label="Mobile navigation" className="divide-y divide-neutral-100">
      {items.map((item, idx) => (
        <section key={item.key} className="px-6 py-8 space-y-6">
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-ink">{item.label}</h2>
            {item.columns[0]?.links[0]?.description && (
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.columns[0].links[0].description}
              </p>
            )}
          </div>

          {/* Columns with links */}
          <div className="space-y-8">
            {item.columns.map((column, colIdx) => (
              <div key={colIdx} className="space-y-3">
                {/* Column title (eyebrow) */}
                {column.title && (
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    {column.title}
                  </p>
                )}

                {/* Links list */}
                <ul className="space-y-3">
                  {column.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors duration-150 active:bg-neutral-100"
                        >
                          {/* Icon chip */}
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                            <Icon aria-hidden strokeWidth={1.75} className="size-4" />
                          </span>

                          {/* Link text */}
                          <div className="min-w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-ink">{link.label}</p>
                            <p className="text-xs text-neutral-600 mt-1 leading-snug">{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Feature: Stat or Quote */}
          {item.feature && (
            <div className="rounded-lg bg-neutral-50 p-5 space-y-3 border border-neutral-200">
              {item.feature.kind === "stat" ? (
                <>
                  <div>
                    <div className="text-3xl font-bold text-ink">{item.feature.value}</div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mt-1">
                      {item.feature.label}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{item.feature.body}</p>
                  <Link
                    href={item.feature.cta.href}
                    onClick={onNavigate}
                    className="inline-flex text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
                  >
                    {item.feature.cta.label} →
                  </Link>
                </>
              ) : (
                <>
                  <blockquote className="border-l-4 border-teal-300 pl-3 text-sm text-neutral-800 italic leading-relaxed">
                    "{item.feature.quote}"
                  </blockquote>
                  <p className="text-xs font-semibold text-neutral-600">{item.feature.attribution}</p>
                  <Link
                    href={item.feature.cta.href}
                    onClick={onNavigate}
                    className="inline-flex text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
                  >
                    {item.feature.cta.label} →
                  </Link>
                </>
              )}
            </div>
          )}
        </section>
      ))}

      {/* Bottom spacing */}
      <div className="h-6" />
    </nav>
  );
}
