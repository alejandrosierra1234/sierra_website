import { Chapter, Topic, VoicePair } from "./doc";
import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    title: "Content is the hero",
    body: "The interface recedes so the work can speak. Every element must earn its place; decoration that doesn’t inform is removed.",
  },
  {
    title: "Precision over decoration",
    body: "We manufacture to tolerance, and the site reflects it: exact spacing, aligned grids, tabular numerals, hairline borders. Nothing approximate.",
  },
  {
    title: "Systematic, not uniform",
    body: "One system, many expressions. Components flex across contexts without inventing new visual language. New solutions require updating this guide first.",
  },
  {
    title: "Show the work",
    body: "Traceability is a product feature and a design principle. Real numbers, real certifications, real process photography — proof over promise.",
  },
  {
    title: "Fast is a feature",
    body: "Nearshoring sells speed; the site must feel it. Light pages, instant transitions, motion under 300ms. Never make a customer wait to see fabric.",
  },
  {
    title: "Calm confidence",
    body: "No urgency banners, no exclamation points, no competing calls to action. One clear next step per screen, stated plainly.",
  },
];

const storytelling = [
  {
    step: "01 — Lead with capability",
    body: "Open with what we can do for the customer, stated concretely. Capability first, company history later.",
  },
  {
    step: "02 — Prove with numbers",
    body: "Every claim carries evidence: capacity figures, lead times, certifications, tolerances. Statistics use real units.",
  },
  {
    step: "03 — Show the process",
    body: "Vertical integration is our differentiator, so we narrate fiber → yarn → fabric → finished product wherever the story allows.",
  },
  {
    step: "04 — Close with partnership",
    body: "End on collaboration, not transaction. The CTA invites a conversation with an expert, not a checkout.",
  },
];

export function BrandChapter() {
  return (
    <Chapter
      id="brand"
      number="01 · Brand"
      title="Brand foundations"
      lede="SIERRA is a fully vertical textile manufacturer. We don’t sell products — we provide integrated manufacturing capability. The digital experience must communicate precision, confidence, craftsmanship, and engineering excellence."
    >
      <Topic
        id="philosophy"
        title="Philosophy"
        lede="Engineered calm. Think Apple, Linear, Stripe, Leica, Vitsœ — not a traditional manufacturing brochure."
      >
        <div className="max-w-2xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            A textile mill runs on rhythm: repeated structures, exact tensions, materials chosen for
            how they behave over decades. The SIERRA digital experience borrows that discipline. The
            grid is our loom; typography is our thread; whitespace is deliberate slack, not empty
            space.
          </p>
          <p>
            We avoid generic corporate aesthetics, startup trends, and unnecessary decoration. Every
            design decision should feel intentional — and if it can’t be explained by a principle on
            this page, it doesn’t ship.
          </p>
        </div>
      </Topic>

      <Topic id="principles" title="Design principles" lede="Six commitments. Every review starts by checking work against them.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Card key={p.title}>
              <CardContent>
                <p className="eyebrow">0{i + 1}</p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Topic>

      <Topic
        id="tone-of-voice"
        title="Tone of voice"
        lede="Confident, precise, concrete. We write like engineers who respect the reader’s time: active voice, real numbers, no hype."
      >
        <div className="flex flex-col gap-4">
          <VoicePair
            say="From fiber to finished garment in 21 days."
            not="Lightning-fast, best-in-class end-to-end solutions!"
          />
          <VoicePair
            say="OEKO-TEX® Standard 100 certified across all production lines."
            not="We care deeply about quality and sustainability."
          />
          <VoicePair
            say="Talk to a production engineer."
            not="Get in touch to learn more about our amazing capabilities."
          />
        </div>
      </Topic>

      <Topic
        id="visual-language"
        title="Visual language"
        lede="Clean white space, engineering grays, and SIERRA teal as the single accent — anchored by Replica headlines, Aeonik text, and the interlocking-rhombus mark. Photography does the emotional work; the UI stays quiet."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-md bg-neutral-50 p-6">
            <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">
              Photography direction
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-neutral-700">
              <li>Honest industrial photography: real facilities, real hands, natural light.</li>
              <li>Macro texture shots of yarn, weave, and finish — material as landscape.</li>
              <li>Clean, neutral grading — teal appears in the work, never as a filter.</li>
              <li>No stock handshakes, no staged smiling teams, no abstract 3D renders.</li>
            </ul>
          </div>
          <div className="rounded-md bg-neutral-50 p-6">
            <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">
              Graphic language
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-neutral-700">
              <li>Structure from the grid, not from boxes: prefer whitespace over containers.</li>
              <li>Separation through light and space — soft shadows and quiet fills, never outlines.</li>
              <li>Mono-spaced type for anything technical: specs, labels, figures, eyebrows.</li>
              <li>Icons are functional wayfinding, never decoration.</li>
            </ul>
          </div>
        </div>
      </Topic>

      <Topic id="storytelling" title="Storytelling principles" lede="Every page tells the same four-beat story, whatever its subject.">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {storytelling.map((s) => (
            <li key={s.step} className="rounded-md border border-neutral-200 bg-surface p-5">
              <p className="eyebrow">{s.step}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{s.body}</p>
            </li>
          ))}
        </ol>
      </Topic>
    </Chapter>
  );
}
