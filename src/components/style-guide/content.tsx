import { Chapter, Topic, VoicePair, DoDont } from "./doc";

export function ContentChapter() {
  return (
    <Chapter
      id="content"
      number="06 · Content"
      title="Content guidelines"
      lede="Writing rules for every content type. The voice is one: an engineer who respects the reader’s time. These rules make it consistent across writers."
    >
      <Topic
        id="headlines"
        title="Headlines"
        lede="State a capability or an outcome. Sentence case, no period, under 60 characters, no exclamation points — ever."
      >
        <div className="flex flex-col gap-4">
          <VoicePair say="From fiber to finished product. One partner." not="Welcome to SIERRA — Your Textile Solutions Provider!" />
          <VoicePair say="Measured, not marketed." not="Committed to a Greener Tomorrow" />
        </div>
        <DoDont
          dos={[
            "Lead with the customer's outcome, not our org chart.",
            "Use concrete nouns: fiber, loom, lead time, lot.",
            "Let a short sentence stand alone. Fragments are fine.",
          ]}
          donts={[
            "Superlatives without evidence (best, leading, world-class).",
            "Questions as headlines (“Looking for a partner?”).",
            "Title Case Everywhere — sentence case only.",
          ]}
        />
      </Topic>

      <Topic
        id="body-copy"
        title="Body copy"
        lede="Short paragraphs (max 4 lines at the standard measure), active voice, one idea per paragraph. Grade-8 clarity for non-technical passages."
      >
        <DoDont
          dos={[
            "Write “we spin, weave, dye and sew” — verbs carry the story.",
            "Quantify whenever possible; numbers are the brand.",
            "Front-load: conclusion first, detail after.",
          ]}
          donts={[
            "Passive constructions (“solutions are provided by…”).",
            "Filler transitions (moreover, furthermore, in addition).",
            "Jargon without a first-use explanation for mixed audiences.",
          ]}
        />
      </Topic>

      <Topic
        id="technical-content"
        title="Technical content"
        lede="Specs are data, not prose. Always in tables or labeled values, always in mono, always with units and the test standard where relevant."
      >
        <div className="flex flex-col gap-4">
          <VoicePair say="Pilling grade 4–5 (ISO 12945-2)" not="Excellent resistance to pilling" />
          <VoicePair say="Shrinkage ±3% after 5 washes (ISO 6330)" not="Minimal shrinkage guaranteed" />
        </div>
        <DoDont
          dos={[
            "SI units, with imperial conversions where the audience needs them.",
            "Cite the standard for every tested figure.",
            "Ranges and tolerances over vague adjectives.",
          ]}
          donts={[
            "Round numbers into marketing (“up to 400 gsm!”).",
            "Bury specs in paragraphs — table them.",
            "Mix decimal separators; the site uses periods.",
          ]}
        />
      </Topic>

      <Topic
        id="product-descriptions"
        title="Product descriptions"
        lede="Three sentences: what it is, what it’s best at, what proves it. Then the spec table does the rest."
      >
        <VoicePair
          say="A 240 gsm single jersey in combed ring-spun organic cotton with 5% elastane. Built for premium basics that hold shape wash after wash. GOTS certified, pre-shrunk to ±3%."
          not="This amazing fabric is perfect for all your apparel needs and combines unbeatable comfort with incredible durability."
        />
      </Topic>

      <Topic
        id="ctas"
        title="CTAs"
        lede="Verbs that name the outcome, 2–4 words. The reader should know exactly what happens after the click — and how fast."
      >
        <div className="flex flex-col gap-4">
          <VoicePair say="Talk to an engineer" not="Submit" />
          <VoicePair say="Download catalog (PDF, 8 MB)" not="Click here to learn more" />
        </div>
      </Topic>

      <Topic
        id="sustainability-messaging"
        title="Sustainability messaging"
        lede="Claims are audited numbers or certifications — nothing else. If we can’t measure it, we don’t say it. No green metaphors, no leaves for decoration."
      >
        <div className="flex flex-col gap-4">
          <VoicePair say="41% less water per kilogram of fabric since 2020, audited annually." not="We love our planet and work hard to protect it." />
          <VoicePair say="GOTS and GRS certified; certificates available for download." not="Eco-friendly and sustainable materials." />
        </div>
      </Topic>

      <Topic
        id="nearshoring-messaging"
        title="Nearshoring messaging"
        lede="Nearshoring is a math argument: lead time, freight, inventory risk, carbon. Make the comparison explicit and let the numbers close."
      >
        <div className="flex flex-col gap-4">
          <VoicePair say="21 days fiber-to-garment and 2–5 days ground transit — versus 60–90 days trans-Pacific." not="Strategically located to serve your needs better and faster." />
          <VoicePair say="Cut inventory buffers by half: reorder monthly instead of seasonally." not="Experience the incredible benefits of nearshoring today!" />
        </div>
      </Topic>
    </Chapter>
  );
}
