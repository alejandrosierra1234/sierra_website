import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { BrandChapter } from "@/components/style-guide/brand";
import { FoundationsChapter } from "@/components/style-guide/foundations";
import { ComponentsCoreChapter } from "@/components/style-guide/components-core";
import { ComponentsSiteChapter } from "@/components/style-guide/components-site";
import { PatternsChapter } from "@/components/style-guide/patterns";
import { ContentChapter } from "@/components/style-guide/content";
import { TokensChapter } from "@/components/style-guide/tokens";
import { AccessibilityChapter } from "@/components/style-guide/accessibility";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "The SIERRA Design System — the single source of truth for the SIERRA digital ecosystem: brand foundations, design tokens, components, layout patterns, content and accessibility standards.",
};

const toc = [
  { id: "brand", label: "01 · Brand" },
  { id: "foundations", label: "02 · Foundations" },
  { id: "components", label: "03 · Components" },
  { id: "site-components", label: "04 · Site components" },
  { id: "patterns", label: "05 · Layout patterns" },
  { id: "content", label: "06 · Content" },
  { id: "tokens", label: "07 · Design tokens" },
  { id: "accessibility", label: "08 · Accessibility" },
];

export default function StyleGuidePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero — built with the same display type and container as every Hero */}
        <section className="border-b border-neutral-200 bg-paper">
          <div className="container-page py-20 lg:py-28">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <p className="eyebrow">SIERRA Design System</p>
                <Badge variant="accent">v1.0</Badge>
              </div>
              <h1 className="mt-4 font-semibold tracking-tight text-balance text-display">
                One system. Every decision.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 lg:text-xl">
                The single source of truth for the SIERRA digital ecosystem. Everything on this
                page is a live, production component — the page is built from the system it
                documents. When a component changes, this guide changes first.
              </p>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-8 lg:grid-cols-4">
              {[
                { value: "60+", label: "Documented tokens" },
                { value: "25", label: "Production components" },
                { value: "11", label: "Layout patterns" },
                { value: "AA", label: "WCAG 2.2 floor" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="order-2 mt-1 text-sm text-neutral-600">{stat.label}</dt>
                  <dd className="order-1 font-mono text-3xl font-medium tracking-tight tabular-nums">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="container-page grid gap-12 lg:grid-cols-[13rem_minmax(0,1fr)]">
          {/* Chapter navigation */}
          <nav aria-label="Style guide chapters" className="hidden lg:block">
            <div className="sticky top-24 py-16">
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase">
                Contents
              </p>
              <ul className="mt-4 flex flex-col gap-1 border-l border-neutral-200">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-neutral-600 transition-colors duration-150 ease-precise hover:border-neutral-400 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Chapters */}
          <div className="min-w-0">
            <BrandChapter />
            <FoundationsChapter />
            <ComponentsCoreChapter />
            <ComponentsSiteChapter />
            <PatternsChapter />
            <ContentChapter />
            <TokensChapter />
            <AccessibilityChapter />

            {/* Governance */}
            <section
              id="governance"
              aria-labelledby="governance-title"
              className="scroll-mt-24 border-t border-neutral-200 py-16 lg:py-20"
            >
              <div className="rounded-xl bg-neutral-900 px-8 py-12 text-paper lg:px-16 lg:py-16">
                <p className="eyebrow text-teal-400">Governance</p>
                <h2 id="governance-title" className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                  The system is the contract.
                </h2>
                <ul className="mt-6 max-w-2xl space-y-3 leading-relaxed text-neutral-300">
                  <li>1 — No component exists outside this Design System.</li>
                  <li>2 — When a component changes, this guide is updated first, in the same commit.</li>
                  <li>3 — Every new page is assembled from the layout patterns in chapter 05.</li>
                  <li>4 — New visual solutions require a new principle here before they ship.</li>
                  <li>5 — Accessibility (chapter 08) is a release requirement, not a review note.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
