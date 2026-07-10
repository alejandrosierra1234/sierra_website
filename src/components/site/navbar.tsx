"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  FlaskConical,
  Layers,
  Menu,
  Sprout,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/cn";

type ProductLink = {
  label: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const productLinks: ProductLink[] = [
  { label: "Fiber", description: "Natural and technical fibers, sourced and spun in-house.", icon: Sprout, href: "#" },
  { label: "Yarn", description: "Ring-spun, open-end and technical yarns, built to spec.", icon: Waves, href: "#" },
  { label: "Fabric", description: "Knits and wovens, dyed and finished under one roof.", icon: Layers, href: "#" },
  { label: "Chemicals", description: "Dyes, auxiliaries and finishing chemistry we formulate.", icon: FlaskConical, href: "#" },
];

export const navLinks = [
  { label: "Network", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Company", href: "#" },
];

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="SIERRA — home" className={cn("select-none", className)}>
      <Logo className="h-6" />
    </Link>
  );
}

/**
 * Desktop "Products" disclosure. A button reveals an owned panel of
 * material categories — WAI-ARIA disclosure pattern (aria-expanded +
 * aria-controls), not role="menu", since the panel is plain nav content
 * reachable by Tab, not an application-menu keyboard model. Opens on
 * click (accessible, touch-safe) with a hover-intent assist for pointer
 * users; closes on Escape, outside click, or leaving the hover region.
 */
function ProductsMenu({ items }: { items: ProductLink[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    function onDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function openNow() {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div ref={rootRef} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        // Click only opens — it never toggles closed. A click always fires
        // its pointer's mouseenter first, which already opens the panel via
        // hover-intent; a naive toggle would immediately re-close it. Explicit
        // dismissal happens via Escape, an outside click, or leaving the hover
        // region, so this stays correct for mouse, touch and keyboard alike.
        onClick={openNow}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium",
          "transition-colors duration-150 ease-precise",
          open ? "bg-neutral-100 text-ink" : "text-neutral-600 hover:bg-neutral-100 hover:text-ink",
        )}
      >
        Products
        <ChevronDown
          aria-hidden
          className={cn("size-3.5 transition-transform duration-200 ease-precise", open && "-rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2">
          <div id={panelId} className="animate-menu-in w-80 origin-top-left rounded-lg bg-surface p-2 shadow-e3">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3 rounded-md p-2.5 transition-colors duration-150 ease-precise hover:bg-neutral-50"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-neutral-100 text-neutral-600 transition-colors duration-150 ease-precise group-hover:bg-teal-50 group-hover:text-teal-700">
                    <Icon aria-hidden strokeWidth={1.5} className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-ink">{item.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-neutral-500">
                      {item.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/** Mobile counterpart: an inline disclosure inside the drawer's link list. */
function MobileProductsDisclosure({ items, onNavigate }: { items: ProductLink[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-base font-medium text-ink transition-colors duration-150 hover:bg-neutral-100"
      >
        Products
        <ChevronDown
          aria-hidden
          className={cn("size-4 text-neutral-500 transition-transform duration-200 ease-precise", open && "-rotate-180")}
        />
      </button>
      {open && (
        <div id={panelId} className="animate-menu-in flex flex-col gap-0.5 py-1 pl-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-neutral-700 transition-colors duration-150 hover:bg-neutral-100 hover:text-ink"
              >
                <Icon aria-hidden strokeWidth={1.5} className="size-4 text-neutral-400" />
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Navbar({
  sticky = true,
  links = navLinks,
  products = productLinks,
}: {
  /** Set false when embedding in documentation demos. */
  sticky?: boolean;
  links?: { label: string; href: string }[];
  products?: ProductLink[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "w-full border-b border-neutral-100 bg-paper/80 backdrop-blur-md",
        sticky && "sticky top-0 z-(--z-nav)",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li>
              <ProductsMenu items={products} />
            </li>
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-neutral-600 transition-colors duration-150 ease-precise hover:bg-neutral-100 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#" size="sm" className="hidden sm:inline-flex">
            Start a Project
          </Button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="rounded-sm p-2 text-neutral-700 transition-colors duration-150 hover:bg-neutral-100 hover:text-ink lg:hidden"
          >
            <Menu aria-hidden className="size-5" />
          </button>
        </div>
      </div>

      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} title="Menu">
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            <li>
              <MobileProductsDisclosure items={products} onNavigate={() => setMenuOpen(false)} />
            </li>
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-sm px-3 py-2.5 text-base font-medium text-ink transition-colors duration-150 hover:bg-neutral-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button href="#" className="mt-6 w-full">
          Start a Project
        </Button>
      </Drawer>
    </header>
  );
}
