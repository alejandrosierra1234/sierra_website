"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/cn";

export const navLinks = [
  { label: "Industries", href: "#" },
  { label: "Products", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Nearshoring", href: "#" },
  { label: "Company", href: "#" },
  { label: "Resources", href: "#" },
];

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="SIERRA — home" className={cn("select-none", className)}>
      <Logo className="h-6" />
    </Link>
  );
}

export function Navbar({
  sticky = true,
  links = navLinks,
}: {
  /** Set false when embedding in documentation demos. */
  sticky?: boolean;
  links?: { label: string; href: string }[];
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
            Contact
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
          Contact
        </Button>
      </Drawer>
    </header>
  );
}
