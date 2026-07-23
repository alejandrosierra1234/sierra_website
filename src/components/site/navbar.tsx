"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeMobileButtonRef = useRef<HTMLButtonElement>(null);
  const navId = useId();

  const close = () => setActiveKey(null);

  // Escape closes the open mega menu
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

  // ⌘K / Ctrl+K opens Spotlight
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

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [menuOpen]);

  // The mobile menu modal is only rendered below the `lg` breakpoint
  // (`lg:hidden`); if the viewport crosses into `lg` while it's open —
  // window resize, tablet rotation — the modal (and its close button)
  // disappear from view but menuOpen stays true, leaving body scroll
  // locked with no visible way to release it. Close it proactively.
  useEffect(() => {
    if (!menuOpen) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    function onChange(e: MediaQueryListEvent) {
      if (e.matches) setMenuOpen(false);
    }
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [menuOpen]);

  // Focus the mobile menu on open, and trap Tab navigation inside it
  // (it's a plain overlay, not a native <dialog>, so nothing does this
  // for free — without it, Tab can walk focus into the page behind it).
  useEffect(() => {
    if (!menuOpen) return;
    closeMobileButtonRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const container = mobileMenuRef.current;
      if (!container) return;
      const focusable = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const activeItem = items.find((item) => item.key === activeKey) ?? null;

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "w-full border-b border-neutral-100 bg-paper/80 backdrop-blur-md z-40",
          // Positioned (relative or sticky) so the absolutely-positioned
          // mega menu panel below anchors to the header, not some
          // farther-up ancestor. `sticky` already counts as positioned,
          // so only add `relative` when sticky is off (e.g. Style Guide demos).
          sticky ? "sticky top-0" : "relative",
        )}
        onMouseLeave={close}
        onBlur={(e) => {
          if (!headerRef.current?.contains(e.relatedTarget as Node)) close();
        }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-8">
          <Wordmark />

          {/* Desktop Navigation */}
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
                    onClick={(e) => {
                      // Hover/focus alone never fire on touch devices at
                      // the `lg` breakpoint (tablets, touch laptops), so
                      // without an explicit click handler the mega menu
                      // is unreachable there. Toggle on click/tap.
                      activeTriggerRef.current = e.currentTarget;
                      setActiveKey((k) => (k === item.key ? null : item.key));
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

          {/* Desktop CTA Section */}
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

        {/* Desktop Mega Menu Panel */}
        <div className="absolute inset-x-0 top-full z-40 hidden justify-center lg:flex">
          <AnimatePresence>
            {activeItem && (
              <MegaMenu key={activeItem.key} id={`${navId}-panel`} data={activeItem} onNavigate={close} />
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Modal - OUTSIDE header for proper z-index */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col lg:hidden bg-white overflow-hidden"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            paddingTop: "max(0px, env(safe-area-inset-top))",
            paddingBottom: "max(0px, env(safe-area-inset-bottom))",
            paddingLeft: "max(0px, env(safe-area-inset-left))",
            paddingRight: "max(0px, env(safe-area-inset-right))",
          }}
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 bg-white px-6 py-4">
            <h2 className="text-lg font-semibold text-ink">Menu</h2>
            <button
              ref={closeMobileButtonRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full p-2 text-neutral-600 transition-colors duration-150 active:bg-neutral-100"
              aria-label="Close menu"
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>

          {/* Scrollable Content - uses -webkit-overflow-scrolling for iOS smooth scroll */}
          <div
            className="min-h-0 flex-1 overflow-y-auto"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <MobileMenu items={items} onNavigate={() => setMenuOpen(false)} />
          </div>

          {/* Footer CTAs */}
          <div className="shrink-0 border-t border-neutral-100 bg-white px-6 py-6 space-y-3">
            <Button href="#" className="w-full">
              Request a Meeting
            </Button>
            <Button href="#" variant="secondary" className="w-full">
              Contact
            </Button>
          </div>
        </div>
      )}

      {/* Spotlight Search */}
      <SpotlightSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
