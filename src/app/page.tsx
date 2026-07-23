import { Droplet, Droplets, Layers, MapPin, RefreshCw, Sprout, Users, Waves, Zap } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Section } from "@/components/site/section";
import { CTABlock } from "@/components/site/cta";
import { DivisionCard } from "@/components/site/division-card";
import { IndustryCard } from "@/components/site/industry-card";
import { HeroCarousel, type HeroSlide } from "@/components/site/homepage-hero";
import { Badge } from "@/components/ui/badge";

const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Vertical Textile Manufacturing",
    title: "Fiber to finished fabric. One partner, start to finish.",
    lede: "SIERRA controls every stage of production — spinning, knitting, dyeing, finishing — so nothing is lost in translation between suppliers.",
    cta: { label: "Who we are", href: "#about" },
  },
  {
    eyebrow: "Nearshore Speed",
    title: "21 days, fiber to finished garment.",
    lede: "Compare that to 60–90 days for a trans-Pacific supply chain. Proximity is a capability, not just a location.",
    cta: { label: "See our network", href: "#plants" },
  },
  {
    eyebrow: "Powered Responsibly",
    title: "256 MW+ from our own solar park.",
    lede: "Enough clean capacity to run our vertical operation without leaning on the grid.",
    cta: { label: "Our sustainability practices", href: "#sustainability" },
  },
  {
    eyebrow: "Full Traceability",
    title: "Every fiber, tracked from field to shelf.",
    lede: "RegenTrace follows each lot through spinning, knitting and finishing — so a claim on a label is always a fact on paper.",
    cta: { label: "Explore our divisions", href: "#divisions" },
  },
];

const divisions = [
  {
    id: "fiber",
    icon: Sprout,
    title: "Fiber",
    description: "Cotton, organic and recycled fiber sourced and blended for consistency at scale.",
    stat: "100% vertical",
  },
  {
    id: "yarn",
    icon: Waves,
    title: "Yarn",
    description: "Ring spun, open end and compact yarns, engineered for performance and repeatability.",
    stat: "40M+ kg / year",
  },
  {
    id: "fabric",
    icon: Layers,
    title: "Fabric",
    description: "Knit constructions and in-house dyeing, developed and finished under one roof.",
    stat: "250+ styles",
  },
  {
    id: "chemicals",
    icon: Droplet,
    title: "Chemicals",
    description: "Dyestuffs, auxiliaries and performance treatments formulated for safety and compliance.",
    stat: "Zero restricted",
  },
];

const sustainabilityPractices = [
  {
    icon: Droplets,
    title: "Water",
    description: "Closed-loop treatment systems return filtered water to the environment daily.",
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Our own solar park supplies renewable power across vertical operations.",
  },
  {
    icon: RefreshCw,
    title: "Circularity",
    description: "Recycled cotton and closed-loop production reduce virgin-fiber demand.",
  },
  {
    icon: Users,
    title: "Social Impact",
    description: "Fair wages and safe working conditions, audited annually across every plant.",
  },
];

const plants = [
  {
    title: "Choloma, Honduras",
    description: "Spinning — fiber and yarn production for the full network.",
  },
  {
    title: "San Pedro Sula, Honduras",
    description: "Knitting, in-house dyeing and finishing.",
  },
  {
    title: "Villanueva, Honduras",
    description: "Cut and sew — full-package apparel assembly.",
  },
  {
    title: "Guatemala City, Guatemala",
    description: "Specialized fabric development and finishing.",
  },
  {
    title: "Managua, Nicaragua",
    description: "Strategic expansion capacity for the region.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel slides={heroSlides} />

        {/* Who we are / what we do — restrained, typographic, no card
            chrome. The right column reads like a fact sheet: three quiet
            numbers, hairline-separated, next to the paragraph they support. */}
        <Section id="about">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">Who We Are</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                A fully vertical textile manufacturer — one partner, from raw fiber to finished fabric.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                SIERRA spins, knits, dyes, finishes and formulates under one roof, across an
                integrated manufacturing network in Central America. That control means fewer
                handoffs, tighter quality, and lead times measured in days, not months — for
                partners who need a single point of accountability, not a chain of suppliers.
              </p>
            </div>
            <dl className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200 lg:mt-2">
              {[
                { value: "30+", label: "Years of vertical integration" },
                { value: "3", label: "Countries across our manufacturing network" },
                { value: "21 days", label: "Fiber to finished garment" },
              ].map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 py-6">
                  <dt className="text-base text-neutral-600">{fact.label}</dt>
                  <dd className="shrink-0 font-mono text-3xl font-medium tracking-tight tabular-nums">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Capabilities — landmark dark stat block. Exactly two numbers,
            large and unadorned; the body line is the only elaboration. */}
        <Section id="capabilities" tone="dark" eyebrow="Capabilities" title="Scale, engineered responsibly.">
          <div className="grid gap-12 border-t border-neutral-800 pt-12 sm:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-mono text-5xl font-medium tracking-tight text-paper tabular-nums lg:text-6xl">
                256 MW+
              </p>
              <p className="mt-3 text-lg text-neutral-300">Produced by our own solar park</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Clean capacity sized to run our vertical operation without leaning on the grid.
              </p>
            </div>
            <div>
              <p className="font-mono text-5xl font-medium tracking-tight text-paper tabular-nums lg:text-6xl">
                20,000 m³
              </p>
              <p className="mt-3 text-lg text-neutral-300">
                Filtered water returned daily to the environment
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Treated on-site at our facilities before it reaches local watersheds.
              </p>
            </div>
          </div>
        </Section>

        {/* Four divisions — same teal icon-chip language as the mega menu,
            so a visitor who opened "Fiber" from the nav recognizes this
            tile as the same idea, not a different product. */}
        <Section
          id="divisions"
          tone="muted"
          eyebrow="Four Divisions"
          title="Everything a finished fabric needs, under one partner."
          lede="Fiber, yarn, fabric and chemicals — developed together, not sourced apart."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map(({ id, ...division }) => (
              <DivisionCard key={id} {...division} />
            ))}
          </div>
        </Section>

        {/* Sustainability — the one section allowed to use green, per the
            token rules: thematic here, never a status color elsewhere. */}
        <Section
          id="sustainability"
          eyebrow="Sustainability"
          title="Manufacturing that answers for its footprint."
          lede="Every practice below is audited annually — impact reports are available to any partner who asks."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sustainabilityPractices.map((practice) => (
              <div key={practice.title} className="flex flex-col gap-4 rounded-lg bg-surface p-6 shadow-e1">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-green-100 text-success">
                  <practice.icon aria-hidden strokeWidth={1.75} className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{practice.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-8">
            <Badge variant="success">-41% water per kilogram since 2020</Badge>
            <p className="text-sm text-neutral-600">Audited annually; impact reports available for download.</p>
          </div>
        </Section>

        {/* Five plants — same IndustryCard used for industry entry points
            elsewhere on the site, so "here's where we make it" reads as
            part of the same navigational language, not a new pattern. */}
        <Section
          id="plants"
          tone="muted"
          eyebrow="Manufacturing Network"
          title="Five plants. One standard."
          lede="Every facility runs to the same quality system, wherever it sits in the process."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map((plant) => (
              <IndustryCard
                key={plant.title}
                icon={MapPin}
                title={plant.title}
                description={plant.description}
                ctaLabel="View plant"
              />
            ))}
          </div>
        </Section>

        <Section>
          <CTABlock
            title="Ready to build with a fully vertical partner?"
            body="Talk to a production engineer about lead times, capacity and certifications for your program."
            primaryLabel="Request a Meeting"
            secondaryLabel="Contact"
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
