import { Chapter, Topic } from "./doc";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contrastPairs = [
  { fg: "ink #0B0B0B", bg: "paper #FFFFFF", ratio: "19.7 : 1", grade: "AAA", use: "Body text" },
  { fg: "neutral-600 #565656", bg: "paper #FFFFFF", ratio: "7.3 : 1", grade: "AAA", use: "Secondary text" },
  { fg: "neutral-500 #737373", bg: "paper #FFFFFF", ratio: "4.7 : 1", grade: "AA", use: "Eyebrows, captions, metadata" },
  { fg: "teal-700 #007D73", bg: "paper #FFFFFF", ratio: "5.0 : 1", grade: "AA", use: "Links, accents, focus ring" },
  { fg: "paper #FFFFFF", bg: "neutral-900 #171717", ratio: "17.6 : 1", grade: "AAA", use: "Dark section headings" },
  { fg: "neutral-300 #D4D4D4", bg: "neutral-900 #171717", ratio: "11.7 : 1", grade: "AAA", use: "Dark section body" },
  { fg: "teal-500 #16CDBE", bg: "neutral-900 #171717", ratio: "8.8 : 1", grade: "AAA", use: "Accent on dark surfaces" },
  { fg: "paper #FFFFFF", bg: "danger #B40B0B", ratio: "7.0 : 1", grade: "AAA", use: "Destructive buttons" },
  { fg: "success #257F08", bg: "green-100 #D1FFBE", ratio: "4.9 : 1", grade: "AA", use: "Status badges" },
];

const keyboardMap = [
  { component: "Buttons & links", keys: "Tab · Enter (Space for buttons)" },
  { component: "Navigation drawer", keys: "Esc closes · focus trapped while open" },
  { component: "Tabs", keys: "←/→ move · Home/End jump · panel is focusable" },
  { component: "Accordion", keys: "Tab between headers · Enter/Space toggles" },
  { component: "Modal / Drawer", keys: "Esc closes · Tab cycles inside · focus returns to trigger" },
  { component: "Pagination", keys: "Tab through pages · aria-current marks position" },
  { component: "Search", keys: "Type to filter · result count announced politely" },
  { component: "Forms", keys: "Visual order = tab order · errors announced on submit" },
];

export function AccessibilityChapter() {
  return (
    <Chapter
      id="accessibility"
      number="08 · Accessibility"
      title="Accessibility"
      lede="WCAG 2.2 AA is the floor, not the target. Accessibility is verified per component before it enters this guide — it is a release requirement, not a retrofit."
    >
      <Topic id="contrast" title="Contrast" lede="Approved text/background pairs. Any pair not listed here needs a measured ratio ≥ 4.5:1 (3:1 for large text) before use.">
        <Table caption="Approved contrast pairs with measured ratios">
          <THead>
            <Tr>
              <Th>Foreground</Th>
              <Th>Background</Th>
              <Th numeric>Ratio</Th>
              <Th>Grade</Th>
              <Th>Used for</Th>
            </Tr>
          </THead>
          <TBody>
            {contrastPairs.map((p) => (
              <Tr key={p.fg + p.bg}>
                <Td className="font-mono text-xs">{p.fg}</Td>
                <Td className="font-mono text-xs">{p.bg}</Td>
                <Td numeric>{p.ratio}</Td>
                <Td>
                  <Badge variant={p.grade === "AAA" ? "success" : "neutral"}>{p.grade}</Badge>
                </Td>
                <Td className="text-neutral-600">{p.use}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Neutral-500 is the lightest text on paper (4.7:1) and is reserved for supporting labels.
          Placeholder text (neutral-400) is always an example, never information.
        </p>
      </Topic>

      <Topic id="keyboard" title="Keyboard navigation" lede="Every interaction works with keyboard alone. Interaction maps per component:">
        <Table caption="Keyboard interaction per component">
          <THead>
            <Tr>
              <Th>Component</Th>
              <Th>Keys</Th>
            </Tr>
          </THead>
          <TBody>
            {keyboardMap.map((k) => (
              <Tr key={k.component}>
                <Td className="font-medium">{k.component}</Td>
                <Td className="text-neutral-600">{k.keys}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </Topic>

      <Topic
        id="focus"
        title="Focus states"
        lede="One focus style everywhere: a 2px teal-700 outline, offset 2px, on :focus-visible. It is never removed, only restyled within these rules."
      >
        <div className="rounded-md border border-neutral-200 bg-surface p-8">
          <p className="mb-4 text-sm text-neutral-600">Press Tab to walk the focus ring through real components:</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <a href="#accessibility" className="rounded-xs px-1 text-sm font-medium text-teal-800 underline underline-offset-4">
              Text link
            </a>
            <input
              aria-label="Sample input"
              placeholder="Sample input"
              className="h-11 rounded-md border border-neutral-200 bg-surface px-3.5 text-base placeholder:text-neutral-400 focus-visible:border-transparent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal-700"
            />
          </div>
        </div>
        <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-neutral-700">
          <li>• Focus is visible on every interactive element, on both light and dark surfaces.</li>
          <li>• :focus-visible keeps pointer clicks clean while guaranteeing keyboard visibility.</li>
          <li>• Inputs swap their border for the outline so the ring reads as one clean rectangle.</li>
          <li>• Sticky-header overlap is prevented with scroll-margin on all anchor targets.</li>
        </ul>
      </Topic>

      <Topic
        id="screen-readers"
        title="Screen reader support"
        lede="Semantics first: native elements and landmarks do the work, ARIA fills the gaps."
      >
        <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-neutral-700">
          <li>• Landmarks on every page: header, nav (labeled), main, footer; one h1, no skipped heading levels.</li>
          <li>• Overlays use the native &lt;dialog&gt; element — focus trap, Esc and restoration from the platform.</li>
          <li>• Live regions: form status and search counts announce via role=status / aria-live=polite.</li>
          <li>• Decorative icons and patterns are aria-hidden; informative images require descriptive alt text.</li>
          <li>• Data tables carry captions and column headers; stats use &lt;dl&gt; for value/label pairing.</li>
          <li>• Link and button names describe the destination or outcome — never “click here”.</li>
        </ul>
      </Topic>

      <Topic
        id="reduced-motion"
        title="Motion reduction"
        lede="A single global rule honors prefers-reduced-motion: all animation and transitions collapse to ~0ms, and smooth scrolling is disabled."
      >
        <div className="max-w-2xl rounded-md bg-neutral-50 p-6">
          <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-neutral-700">
{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}
          </pre>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Because motion only ever confirms (nothing is communicated by animation alone), removing
          it loses no information. Autoplaying media and looping animation are prohibited by the
          motion foundation regardless of this setting.
        </p>
      </Topic>
    </Chapter>
  );
}
