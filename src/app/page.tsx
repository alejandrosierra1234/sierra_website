import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Section } from "@/components/site/section";
import { CTABlock } from "@/components/site/cta";
import { EditorialRow } from "@/components/site/editorial-row";
import { HeroCarousel, type HeroSlide } from "@/components/site/homepage-hero";
import { Button } from "@/components/ui/button";

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
    index: "01",
    title: "Fiber",
    description: "Cotton, organic and recycled fiber sourced and blended for consistency at scale.",
    meta: "100% vertical",
  },
  {
    index: "02",
    title: "Yarn",
    description: "Ring spun, open end and compact yarns, engineered for performance and repeatability.",
    meta: "40M+ kg / yr",
  },
  {
    index: "03",
    title: "Fabric",
    description: "Knit constructions and in-house dyeing, developed and finished under one roof.",
    meta: "250+ styles",
  },
  {
    index: "04",
    title: "Chemicals",
    description: "Dyestuffs, auxiliaries and performance treatments formulated for safety and compliance.",
    meta: "Zero restricted",
  },
];

const sustainabilityPractices = [
  {
    title: "Water",
    description: "Closed-loop treatment systems return filtered water to the environment daily.",
  },
  {
    title: "Energy",
    description: "Our own solar park supplies renewable power across vertical operations.",
  },
  {
    title: "Circularity",
    description: "Recycled cotton and closed-loop production reduce virgin-fiber demand.",
  },
  {
    title: "Social Impact",
    description: "Fair wages and safe working conditions, audited annually across every plant.",
  },
];

const plants = [
  {
    title: "Choloma, Honduras",
    description: "Spinning — fiber and yarn production for the full network.",
    meta: "Spinning",
  },
  {
    title: "San Pedro Sula, Honduras",
    description: "Knitting, in-house dyeing and finishing.",
    meta: "Fabric",
  },
  {
    title: "Villanueva, Honduras",
    description: "Cut and sew — full-package apparel assembly.",
    meta: "Cut & Sew",
  },
  {
    title: "Guatemala City, Guatemala",
    description: "Specialized fabric development and finishing.",
    meta: "Fabric",
  },
  {
    title: "Managua, Nicaragua",
    description: "Strategic expansion capacity for the region.",
    meta: "Expansion",
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
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="eyebrow">Who We Are</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                A fully vertical textile manufacturer — one partner, from raw fiber to finished fabric.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-neutral-600">
                SIERRA spins, knits, dyes, finishes and formulates under one roof, across an
                integrated manufacturing network in Central America. That control means fewer
                handoffs, tighter quality, and lead times measured in days, not months — for
                partners who need a single point of accountability, not a chain of suppliers.
              </p>
            </div>
            <dl className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200 lg:mt-3">
              {[
                { value: "30+", label: "Years of vertical integration" },
                { value: "3", label: "Countries across our manufacturing network" },
                { value: "21 days", label: "Fiber to finished garment" },
              ].map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 py-8">
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
          <div className="grid gap-16 border-t border-neutral-800 pt-16 sm:grid-cols-2 lg:gap-24">
            <div>
              <p className="font-mono text-6xl font-medium tracking-tight text-paper tabular-nums lg:text-7xl">
                256 MW+
              </p>
              <p className="mt-4 text-lg text-neutral-300">Produced by our own solar park</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Clean capacity sized to run our vertical operation without leaning on the grid.
              </p>
            </div>
            <div>
              <p className="font-mono text-6xl font-medium tracking-tight text-paper tabular-nums lg:text-7xl">
                20,000 m³
              </p>
              <p className="mt-4 text-lg text-neutral-300">
                Filtered water returned daily to the environment
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Treated on-site at our facilities before it reaches local watersheds.
              </p>
            </div>
          </div>
        </Section>

        {/* Four divisions — an editorial list, not a card grid: a quiet
            index number, the name, running description and the same stat
            shown in that division's mega menu panel. One continuous
            typographic surface instead of four boxed tiles. */}
        <Section
          id="divisions"
          className="border-t border-neutral-200"
          eyebrow="Four Divisions"
          title="Everything a finished fabric needs, under one partner."
          lede="Fiber, yarn, fabric and chemicals — developed together, not sourced apart."
        >
          <div>
            {divisions.map((division) => (
              <EditorialRow key={division.index} {...division} />
            ))}
          </div>
        </Section>

        {/* Sustainability — the one place green is used, per the token
            rules: thematic here, never a status color elsewhere. Practices
            are a quiet four-column list, closed by a single landmark
            figure rather than a repeated badge. */}
        <Section
          id="sustainability"
          className="border-t border-neutral-200"
          eyebrow="Sustainability"
          title="Manufacturing that answers for its footprint."
          lede="Every practice below is audited annually — impact reports are available to any partner who asks."
        >
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-neutral-200">
            {sustainabilityPractices.map((practice, i) => (
              <div key={practice.title} className="lg:px-10 lg:first:pl-0 lg:last:pr-0">
                <p className="font-mono text-xs tracking-widest text-success">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{practice.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{practice.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 flex flex-col gap-8 border-t border-neutral-200 pt-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-5xl font-medium tracking-tight text-success tabular-nums">-41%</p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-600">
                Water used per kilogram of production, since 2020 — audited annually.
              </p>
            </div>
            <Button href="#" variant="secondary">
              View Impact Report
            </Button>
          </div>
        </Section>

        {/* Five plants — the same editorial list as Divisions, so the
            page never breaks into a different visual language just
            because the subject changed from products to places. */}
        <Section
          id="plants"
          className="border-t border-neutral-200"
          eyebrow="Manufacturing Network"
          title="Five plants. One standard."
          lede="Every facility runs to the same quality system, wherever it sits in the process."
        >
          <div>
            {plants.map((plant) => (
              <EditorialRow key={plant.title} title={plant.title} description={plant.description} meta={plant.meta} />
            ))}
          </div>
        </Section>

        <Section className="border-t border-neutral-200">
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
