"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASE_PRECISE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import type { MegaMenuColumnData, MegaMenuFeatureData, MegaMenuLink, NavItemData } from "@/lib/mega-menu-data";

/**
 * Single destination row: an icon in a soft teal chip, title, description.
 * The chip is the panel's one recurring accent — always the same tint,
 * never a rainbow of category colors — so it reads as considered, not
 * decorative. Hover only lifts background and chip contrast.
 */
export function MegaMenuItem({ link, onNavigate }: { link: MegaMenuLink; onNavigate?: () => void }) {
  const Icon = link.icon;
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group flex items-center gap-4 rounded-lg p-2 transition-colors duration-150 ease-precise hover:bg-neutral-50"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 transition-colors duration-150 ease-precise group-hover:bg-teal-100">
        <Icon aria-hidden strokeWidth={1.75} className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold text-ink">{link.label}</span>
        <span className="mt-0.5 block text-sm leading-relaxed text-neutral-500">{link.description}</span>
      </span>
    </Link>
  );
}

/** A category of destinations: an optional eyebrow title, then a list of items. */
export function MegaMenuColumn({ column, onNavigate }: { column: MegaMenuColumnData; onNavigate?: () => void }) {
  return (
    <div className="min-w-0">
      {column.title && <p className="eyebrow mb-6">{column.title}</p>}
      <div className="flex flex-col gap-3">
        {column.links.map((link) => (
          <MegaMenuItem key={link.label} link={link} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

/**
 * The editorial panel closing every mega menu: a stat, quote or
 * announcement on a dark landmark surface — never stock photography.
 */
export function MegaMenuFeature({ feature, onNavigate }: { feature: MegaMenuFeatureData; onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-neutral-900 p-6">
      <div>
        {feature.kind === "stat" ? (
          <>
            <p className="font-mono text-4xl font-medium tracking-tight text-paper tabular-nums">{feature.value}</p>
            <p className="mt-1 text-sm text-neutral-400">{feature.label}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">{feature.body}</p>
          </>
        ) : (
          <>
            <p className="text-lg leading-relaxed text-paper text-balance">“{feature.quote}”</p>
            <p className="eyebrow mt-4 text-neutral-500">{feature.attribution}</p>
          </>
        )}
      </div>
      <Button
        href={feature.cta.href}
        onClick={onNavigate}
        variant="ghost"
        size="sm"
        className="mt-6 self-start text-paper hover:bg-white/10"
      >
        {feature.cta.label}
        <ArrowUpRight aria-hidden className="size-4" />
      </Button>
    </div>
  );
}

/**
 * The floating panel itself: a responsive CSS grid of link columns plus
 * an optional feature column, on a borderless white surface. Column
 * count is data-driven, so grid-template-columns is computed inline.
 */
export function MegaMenu({
  id,
  data,
  onNavigate,
}: {
  id: string;
  data: NavItemData;
  onNavigate?: () => void;
}) {
  const templateColumns = [
    ...data.columns.map(() => "minmax(200px, 1fr)"),
    ...(data.feature ? ["320px"] : []),
  ].join(" ");

  // Framer Motion animates via JS, not CSS, so the global
  // prefers-reduced-motion rule in globals.css (which only zeroes CSS
  // animation/transition durations) can't reach it — check explicitly.
  const reduceMotion = useReducedMotion();
  const distance = reduceMotion ? 0 : -8;
  const blur = reduceMotion ? "blur(0px)" : "blur(4px)";

  return (
    <motion.div
      id={id}
      role="group"
      aria-label={data.label}
      initial={{ opacity: 0, y: distance, filter: blur }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: distance, filter: blur }}
      transition={{ duration: reduceMotion ? 0 : 0.2, ease: EASE_PRECISE }}
      className={cn(
        "w-[min(1200px,calc(100vw-3rem))] origin-top rounded-xl bg-surface p-12 shadow-e3",
      )}
    >
      <div className="grid gap-12" style={{ gridTemplateColumns: templateColumns }}>
        {data.columns.map((column, i) => (
          <MegaMenuColumn key={column.title ?? i} column={column} onNavigate={onNavigate} />
        ))}
        {data.feature && <MegaMenuFeature feature={data.feature} onNavigate={onNavigate} />}
      </div>
    </motion.div>
  );
}
