"use client";

import { useState } from "react";
import { Factory, HeartPulse, Home, Shirt } from "lucide-react";
import { Chapter, Topic, Demo, Guidelines } from "./doc";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Drawer } from "@/components/ui/drawer";
import { Field, Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/input";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { CTABlock } from "@/components/site/cta";
import { ProductCard } from "@/components/site/product-card";
import { IndustryCard } from "@/components/site/industry-card";
import { DownloadCard } from "@/components/site/download-card";

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Request a sample"
        description="Physical swatches ship within 3 business days."
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Send request</Button>
          </>
        }
      >
        <Field label="Shipping address" htmlFor="modal-address">
          <Input id="modal-address" placeholder="Street, city, country" />
        </Field>
      </Modal>
    </>
  );
}

function DrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Filter products">
        <div className="flex flex-col gap-5">
          <Field label="Composition" htmlFor="drawer-comp">
            <Input id="drawer-comp" placeholder="e.g. cotton" />
          </Field>
          <fieldset className="flex flex-col gap-2.5">
            <legend className="mb-1 text-sm font-medium">Certifications</legend>
            <Checkbox id="drawer-c1" label="OEKO-TEX® Standard 100" />
            <Checkbox id="drawer-c2" label="GOTS" />
            <Checkbox id="drawer-c3" label="GRS" />
          </fieldset>
          <Button onClick={() => setOpen(false)}>Apply filters</Button>
        </div>
      </Drawer>
    </>
  );
}

export function ComponentsSiteChapter() {
  return (
    <Chapter
      id="site-components"
      number="04 · Site components"
      title="Site components"
      lede="Page-scale building blocks: navigation, heroes, sections, cards for products and industries, conversion blocks, and overlays."
    >
      <Topic
        id="navigation"
        title="Navigation"
        lede="A quiet sticky header: wordmark, a Products disclosure, four destinations, one project CTA. Below lg, everything collapses into the drawer."
      >
        <Demo tone="bare" label="Live navbar (non-sticky in this demo). Click or hover Products; resize for the mobile drawer.">
          <Navbar sticky={false} />
        </Demo>
        <Guidelines
          usage={[
            "Products is the only dropdown — it groups the four material categories (Fiber, Yarn, Fabric, Chemicals) that don’t fit as flat links.",
            "Maximum four flat destinations plus the Products group and one CTA — restraint keeps the bar calm.",
            "The wordmark always returns home; no logo taglines in the bar.",
            "The bar is 64px tall, paper at 80% opacity with backdrop blur when sticky.",
          ]}
          a11y={[
            "Products follows the disclosure pattern (aria-expanded/aria-controls), not role=menu — its panel is plain nav content reachable by Tab.",
            "Opens on click (works for touch and keyboard) with a hover-intent assist for pointer users; Escape closes and returns focus to the trigger.",
            "Landmarks: <header> with <nav aria-label='Main'>; drawer nav is labeled 'Mobile'.",
            "The menu button carries aria-label and a 40px target; focus order matches visual order.",
          ]}
        />
      </Topic>

      <Topic
        id="hero"
        title="Hero"
        lede="One display headline per page, a lede that earns the scroll, at most two actions, and an optional proof-point stat row."
      >
        <Demo tone="bare" label="Full hero with stats (the standard home / landing pattern).">
          <Hero
            eyebrow="Vertical manufacturing"
            title="From fiber to finished product. One partner."
            lede="Spinning, weaving, dyeing and confection under one roof — with the speed of nearshoring and traceability at every step."
            actions={
              <>
                <Button size="lg">Talk to an engineer</Button>
                <Button size="lg" variant="secondary">
                  Explore capabilities
                </Button>
              </>
            }
            stats={[
              { value: "21", label: "Days, fiber to garment" },
              { value: "40M", label: "Meters per year" },
              { value: "98.6%", label: "On-time delivery" },
              { value: "100%", label: "Traceable lots" },
            ]}
          />
        </Demo>
        <Demo tone="bare" label="Compact hero for interior pages.">
          <Hero compact eyebrow="Sustainability" title="Measured, not marketed." lede="Our environmental numbers, audited and published." />
        </Demo>
        <Guidelines
          usage={[
            "The headline states a capability or outcome — never a welcome message.",
            "Stats are real, audited figures with units; four maximum.",
            "Two actions maximum: one primary, one secondary.",
          ]}
          a11y={[
            "Exactly one h1 per page, and it lives here.",
            "Stat rows use <dl> so value/label pairs are programmatically linked.",
            "Display type scales fluidly (clamp) and never clips at 200% zoom.",
          ]}
        />
      </Topic>

      <Topic
        id="sections"
        title="Sections"
        lede="All page content lives in Sections: consistent 64–96px vertical rhythm, optional eyebrow/title/lede header, three tones."
      >
        <Demo tone="bare" label="Section tones: default (paper), muted (neutral-50), dark (neutral-900).">
          <div className="flex flex-col">
            <Section
              eyebrow="Capabilities"
              title="Default tone"
              lede="Standard content section on paper."
              className="py-10 lg:py-10"
            />
            <Section tone="muted" eyebrow="Process" title="Muted tone" lede="Alternate band for rhythm and grouping." className="py-10 lg:py-10" />
            <Section tone="dark" eyebrow="Scale" title="Dark tone" lede="Reserved for landmark moments — one per page." className="py-10 lg:py-10" />
          </div>
        </Demo>
        <Guidelines
          usage={[
            "Alternate default and muted tones to create rhythm; never two muted in a row.",
            "Dark sections are landmarks — maximum one per page besides the footer.",
            "Section headers are left-aligned and capped at max-w-2xl.",
          ]}
          a11y={[
            "Each Section is a <section>; when it has a title, it renders as an h2.",
            "Dark tone text pairs are AA-checked (paper and neutral-300 on neutral-900).",
            "Anchor targets carry scroll-margin so sticky nav never covers headings.",
          ]}
        />
      </Topic>

      <Topic
        id="product-cards"
        title="Product cards"
        lede="Catalog tiles: 4:3 material swatch, category eyebrow, name, up to three spec badges. The whole card is one link."
      >
        <Demo label="Catalog grid (3-up ≥ lg, 2-up ≥ sm, 1-up below).">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard name="Organic Cotton Jersey" category="Knits" specs={["240 gsm", "GOTS", "180 cm"]} />
            <ProductCard name="Workwear Canvas" category="Wovens" specs={["380 gsm", "±2%", "160 cm"]} />
            <ProductCard name="Recycled Piqué" category="Knits" specs={["200 gsm", "GRS"]} />
          </div>
        </Demo>
        <Guidelines
          usage={[
            "Swatch imagery shows material texture, not lifestyle scenes.",
            "Specs shown are the three most decision-relevant for that category.",
            "Name and category come from the catalog verbatim — no marketing rewrites.",
          ]}
          a11y={[
            "One link per card: a single tab stop whose name is the product name.",
            "Swatch images get alt text describing the material (“Loop-knit organic cotton, natural”).",
            "Hover feedback combines border, elevation and title color.",
          ]}
        />
      </Topic>

      <Topic
        id="industry-cards"
        title="Industry cards"
        lede="Entry points to industry pages: icon, industry name, one-line value statement, explicit Explore affordance."
      >
        <Demo label="Industry grid.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <IndustryCard icon={Shirt} title="Apparel" description="Full-package programs for fashion and basics at retail speed." />
            <IndustryCard icon={Factory} title="Workwear" description="Durable, compliant fabrics engineered for demanding environments." />
            <IndustryCard icon={Home} title="Home Textiles" description="Woven and knitted constructions for living spaces." />
            <IndustryCard icon={HeartPulse} title="Medical" description="Certified technical textiles for healthcare applications." />
          </div>
        </Demo>
        <Guidelines
          usage={[
            "Descriptions are one line: what we make for whom, concretely.",
            "Icons come from the system set at 1.5px stroke in a 40px container.",
            "Grid is 4-up ≥ lg; order industries by strategic priority.",
          ]}
          a11y={[
            "The card is a single link named by the industry title.",
            "Icons are aria-hidden — the text carries all meaning.",
            "The arrow’s hover motion is 2px and disabled under reduced motion.",
          ]}
        />
      </Topic>

      <Topic
        id="download-cards"
        title="Download cards"
        lede="Spec sheets, certificates, catalogs. Format and file size are visible before the click — no surprises."
      >
        <Demo label="Resource downloads.">
          <div className="grid max-w-2xl gap-3">
            <DownloadCard title="SIERRA Capabilities Catalog 2026" format="PDF" size="8.4 MB" />
            <DownloadCard title="Organic Cotton Jersey — Technical Data Sheet" format="PDF" size="240 KB" />
            <DownloadCard title="OEKO-TEX® Standard 100 Certificate" format="PDF" size="180 KB" />
          </div>
        </Demo>
        <Guidelines
          usage={[
            "Always show format and size; update size when the file changes.",
            "Titles name the document exactly as its cover page does.",
            "Group by document type; newest revision only — archives live elsewhere.",
          ]}
          a11y={[
            "The link uses the download attribute and is named by the document title.",
            "File metadata is text, not iconography alone.",
            "Icons are decorative and hidden from assistive tech.",
          ]}
        />
      </Topic>

      <Topic
        id="cta-blocks"
        title="CTA blocks"
        lede="The conversion moment before every footer: dark panel, one clear invitation, one primary action."
      >
        <Demo tone="bare" label="Standard pre-footer CTA.">
          <div className="p-6">
            <CTABlock
              title="Start with a conversation."
              body="Tell us what you need to make. A production engineer will map it to our capabilities within one business day."
              primaryLabel="Talk to an engineer"
              secondaryLabel="Download catalog"
            />
          </div>
        </Demo>
        <Guidelines
          usage={[
            "One CTA block per page, always directly above the footer.",
            "The headline invites; the body states what happens next and how fast.",
            "Primary action is a conversation, not a transaction.",
          ]}
          a11y={[
            "Panel heading is an h2 within the page outline.",
            "Inverse button on ink meets AA (17:1); ghost secondary is AA on neutral-900.",
            "Actions are large (48px) for comfortable touch targets.",
          ]}
        />
      </Topic>

      <Topic
        id="modals"
        title="Modals"
        lede="Short, focused interruptions — one decision or one small form. Built on the native <dialog> element."
      >
        <Demo label="Live — opens a real modal.">
          <ModalDemo />
        </Demo>
        <Guidelines
          usage={[
            "One purpose per modal; multi-step flows get a page instead.",
            "Maximum width 512px; content never scrolls more than one viewport.",
            "Primary action sits right; dismiss is always available (×, Esc, backdrop).",
          ]}
          a11y={[
            "Native <dialog>.showModal(): focus trap, Esc and top layer from the platform.",
            "aria-labelledby points at the modal title.",
            "Focus returns to the triggering element on close.",
          ]}
        />
      </Topic>

      <Topic
        id="drawers"
        title="Drawers"
        lede="Side panels for filters, mobile navigation and secondary tasks that keep page context visible."
      >
        <Demo label="Live — opens a real drawer.">
          <DrawerDemo />
        </Demo>
        <Guidelines
          usage={[
            "Slides from the right, 320px wide (85vw max on small screens).",
            "Use for filters and mobile nav; never for content that deserves a page.",
            "The apply action closes the drawer and reflects results immediately.",
          ]}
          a11y={[
            "Same native <dialog> foundation as modals: trap, Esc, backdrop dismiss.",
            "300ms slide uses ease-precise and collapses under reduced motion.",
            "The panel scrolls internally; the page behind stays fixed.",
          ]}
        />
      </Topic>

      <Topic
        id="footer"
        title="Footer"
        lede="The site’s index: wordmark and mission, four link columns, legal bar. Ink surface closes every page."
      >
        <Demo tone="bare" label="Live footer.">
          <Footer />
        </Demo>
        <Guidelines
          usage={[
            "Four columns: Capabilities, Industries, Company, Resources — five links each.",
            "The mission statement is two sentences maximum.",
            "The legal bar carries copyright, Privacy, Terms and the Design System link.",
          ]}
          a11y={[
            "<footer> landmark; each column is a <nav> labeled by its heading.",
            "Link contrast on neutral-900 is AA (neutral-300 at ~9:1).",
            "Column headings are h3s in the mono label style.",
          ]}
        />
      </Topic>
    </Chapter>
  );
}
