"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import type { NavItemData } from "@/lib/mega-menu-data";

/**
 * Mobile navigation: full-screen, premium experience matching desktop
 * editorial feel. Large typography, generous spacing, clear hierarchy.
 */
export function MobileMenu({ items, onNavigate }: { items: NavItemData[]; onNavigate: () => void }) {
  return (
    <nav aria-label="Mobile navigation" className="space-y-8 pb-12">
      {items.map((item) => (
        <section key={item.key} className="space-y-6">
          {/* Section title */}
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-ink">{item.label}</h2>
            {item.columns[0]?.links[0]?.description && (
              <p className="text-base text-neutral-600 max-w-sm">
                {/* Show first link description as section intro */}
                {item.columns[0].links[0].description}
              </p>
            )}
          </div>

          {/* Links organized by column */}
          <div className="space-y-8">
            {item.columns.map((column, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {column.title && (
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    {column.title}
                  </p>
                )}
                <ul className="space-y-2">
                  {column.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="group flex items-start gap-4 rounded-lg p-3 transition-colors duration-150 active:bg-neutral-100 hover:bg-neutral-50"
                        >
                          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 transition-colors duration-150 group-hover:bg-teal-100 group-active:bg-teal-200">
                            <Icon aria-hidden strokeWidth={1.75} className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1 pt-0.5">
                            <p className="text-base font-medium text-ink">{link.label}</p>
                            <p className="text-sm text-neutral-600 mt-0.5">{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Feature: stat or quote */}
          {item.feature && (
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 space-y-4">
              {item.feature.kind === "stat" ? (
                <>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-ink">{item.feature.value}</div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                      {item.feature.label}
                    </p>
                  </div>
                  <p className="text-base text-neutral-700">{item.feature.body}</p>
                  <Link
                    href={item.feature.cta.href}
                    onClick={onNavigate}
                    className="inline-block text-base font-medium text-teal-700 hover:text-teal-800 transition-colors duration-150"
                  >
                    {item.feature.cta.label} →
                  </Link>
                </>
              ) : (
                <>
                  <blockquote className="border-l-4 border-teal-300 pl-4 text-base text-neutral-800 italic">
                    "{item.feature.quote}"
                  </blockquote>
                  <p className="text-sm font-semibold text-neutral-600">{item.feature.attribution}</p>
                  <Link
                    href={item.feature.cta.href}
                    onClick={onNavigate}
                    className="inline-block text-base font-medium text-teal-700 hover:text-teal-800 transition-colors duration-150"
                  >
                    {item.feature.cta.label} →
                  </Link>
                </>
              )}
            </div>
          )}

          {/* Divider between sections */}
          {item !== items[items.length - 1] && (
            <div className="h-px bg-neutral-100" />
          )}
        </section>
      ))}
    </nav>
  );
}
