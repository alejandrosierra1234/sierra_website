"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { Logo } from "@/components/site/logo";
import { MegaMenu } from "@/components/site/mega-menu";
import { MobileMenu } from "@/components/site/mobile-menu";
import { SpotlightSearch } from "@/components/site/spotlight-search";
import { navItems, type NavItemData } from "@/lib/mega-menu-data";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="SIERRA — home" className={cn("select-none", className)}>
      <Logo className="h-6" />
    </Link>
  );
}

export function Navbar({
  sticky = true,
  items = navItems,
  enableShortcuts = true,
}: {
  /** Set false when embedding in documentation demos. */
  sticky?: boolean;
  items?: NavItemData[];
  /**
   * The ⌘K / Ctrl+K global shortcut. Default true — a real page only ever
   * mounts one Navbar. Set false on any extra live demo instance (e.g. in
   * the Style Guide, which embeds several) so their shortcuts don't fight
   * over the same keystroke; each demo's Search button still opens its
   * own Spotlight on click regardless.
   */
  enableShortcuts?: boolean;
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);
  const navId = useId();

  const close = () => setActiveKey(null);

  // Escape closes the open mega menu and returns focus to its trigger —
  // but only when Spotlight isn't the thing on top; it handles its own
  // Escape and this listener would otherwise fire alongside it.
  useEffect(() => {
    if (!activeKey || searchOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        activeTriggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeKey, searchOpen]);

  // ⌘K / Ctrl+K opens Spotlight from anywhere on the page.
  useEffect(() => {
    if (!enableShortcuts) return;
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [enableShortcuts]);

  const activeItem = items.find((item) => item.key === activeKey) ?? null;

  return (
    <header
      ref={headerRef}
      className={cn(
        "w-full border-b border-neutral-100 bg-paper/80 backdrop-blur-md",
        sticky ? "sticky top-0 z-(--z-nav)" : "relative",
      )}
      // The whole header — trigger row, CTAs and the panel drop-zone — is
      // one hover/focus region. Leaving it closes any open mega menu
      // immediately; hovering elsewhere inside it (e.g. the CTA buttons)
      // simply keeps the last-opened menu visible, matching the "close
      // immediately on pointer leave" spec without a hover-intent delay.
      onMouseLeave={close}
      onBlur={(e) => {
        if (!headerRef.current?.contains(e.relatedTarget as Node)) close();
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-8">
        <Wordmark />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.key}>
                <button
                  type="button"
                  aria-expanded={activeKey === item.key}
                  aria-controls={`${navId}-panel`}
                  onMouseEnter={() => setActiveKey(item.key)}
                  onFocus={(e) => {
                    activeTriggerRef.current = e.currentTarget;
                    setActiveKey(item.key);
                  }}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150 ease-precise",
                    activeKey === item.key ? "bg-neutral-100 text-ink" : "text-neutral-600 hover:bg-neutral-100 hover:text-ink",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="hidden items-center gap-2 rounded-full py-2 pr-1.5 pl-3 text-sm text-neutral-500 transition-colors duration-150 ease-precise hover:bg-neutral-100 hover:text-ink lg:inline-flex"
          >
            <Search aria-hidden className="size-4" />
            <span className="sr-only">Search</span>
            <kbd className="rounded-xs bg-neutral-100 px-1.5 py-0.5 font-mono text-xs text-neutral-500">⌘K</kbd>
          </button>
          <Link
            href="#"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-neutral-600 transition-colors duration-150 ease-precise hover:bg-neutral-100 hover:text-ink lg:inline-flex"
          >
            Contact
          </Link>
          <Button href="#" size="sm" className="ml-2 hidden lg:inline-flex">
            Request a Meeting
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

      {/* Panel drop-zone: one shared, centered overlay below the whole
          header. Content swaps per active item; only ever mounted on
          desktop — mobile uses MobileMenu's accordion instead. */}
      <div className="absolute inset-x-0 top-full z-(--z-nav) hidden justify-center lg:flex">
        <AnimatePresence>
          {activeItem && (
            <MegaMenu key={activeItem.key} id={`${navId}-panel`} data={activeItem} onNavigate={close} />
          )}
        </AnimatePresence>
      </div>

      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} title="Menu">
        <MobileMenu items={items} onNavigate={() => setMenuOpen(false)} />
        <div className="mt-6 flex flex-col gap-3">
          <Button href="#" className="w-full">
            Request a Meeting
          </Button>
          <Button href="#" variant="secondary" className="w-full">
            Contact
          </Button>
        </div>
      </Drawer>

      <SpotlightSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
