"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Chapter, Topic, Demo, Guidelines } from "./doc";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, Input, Textarea, Checkbox } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import { Pagination } from "@/components/ui/pagination";
import { SearchDemo } from "@/components/ui/search";

const industries = [
  { value: "apparel", label: "Apparel" },
  { value: "workwear", label: "Workwear" },
  { value: "home", label: "Home Textiles" },
  { value: "automotive", label: "Automotive" },
  { value: "medical", label: "Medical" },
];

function PaginationDemo() {
  const [page, setPage] = useState(4);
  return <Pagination page={page} totalPages={12} onPageChange={setPage} />;
}

function SelectDemo() {
  const [value, setValue] = useState("");
  const [disabled] = useState("workwear");
  return (
    <div className="grid max-w-xl gap-5">
      <Field label="Industry" htmlFor="sel-default" hint="Custom listbox — never the OS dropdown.">
        <Select
          id="sel-default"
          value={value}
          onValueChange={setValue}
          options={industries}
          placeholder="Select an industry"
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Error state" htmlFor="sel-error" error="Choose an industry to continue.">
          <Select id="sel-error" value="" onValueChange={() => {}} options={industries} placeholder="Required" invalid />
        </Field>
        <Field label="Disabled" htmlFor="sel-disabled">
          <Select id="sel-disabled" value={disabled} onValueChange={() => {}} options={industries} disabled />
        </Field>
      </div>
    </div>
  );
}

function CheckboxDemo() {
  const [checks, setChecks] = useState({ a: true, b: false });
  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        id="cb-a"
        label="OEKO-TEX® Standard 100"
        checked={checks.a}
        onChange={(e) => setChecks((c) => ({ ...c, a: e.target.checked }))}
      />
      <Checkbox
        id="cb-b"
        label="Global Recycled Standard (GRS)"
        checked={checks.b}
        onChange={(e) => setChecks((c) => ({ ...c, b: e.target.checked }))}
      />
      <Checkbox id="cb-c" label="Disabled option" disabled />
    </div>
  );
}

function FormDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [industry, setIndustry] = useState("");
  return (
    <form
      className="grid max-w-xl gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="form-name" required>
          <Input id="form-name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Work email" htmlFor="form-email" required hint="We reply within one business day.">
          <Input id="form-email" name="email" type="email" autoComplete="email" required aria-describedby="form-email-hint" />
        </Field>
      </div>
      <Field label="Industry" htmlFor="form-industry">
        <Select
          id="form-industry"
          value={industry}
          onValueChange={setIndustry}
          options={industries}
          placeholder="Select an industry"
        />
      </Field>
      <Field label="Project details" htmlFor="form-details" hint="Volumes, timeline, target specs — anything helps.">
        <Textarea id="form-details" name="details" aria-describedby="form-details-hint" />
      </Field>
      <Checkbox id="form-consent" label="Send me the SIERRA capabilities catalog (PDF)." />
      <div className="flex items-center gap-4">
        <Button type="submit">Talk to a production engineer</Button>
        {submitted && (
          <p role="status" className="text-sm font-medium text-success">
            Request received — check your inbox.
          </p>
        )}
      </div>
    </form>
  );
}

export function ComponentsCoreChapter() {
  return (
    <Chapter
      id="components"
      number="03 · Components"
      title="Components"
      lede="The production component library. Every example below is the live component this site is built with — there are no mockups on this page."
    >
      <Topic
        id="buttons"
        title="Buttons"
        lede="One primary action per view. Secondary and ghost carry everything else; destructive is reserved for irreversible operations."
      >
        <Demo label="Variants — primary, secondary, ghost, destructive; inverse on dark.">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Request a quote</Button>
            <Button variant="secondary">View catalog</Button>
            <Button variant="ghost">Learn more</Button>
            <Button variant="destructive">Delete draft</Button>
          </div>
        </Demo>
        <Demo tone="dark" label="Inverse variant on dark surfaces.">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="inverse">Request a quote</Button>
            <Button variant="ghost" className="text-paper hover:bg-neutral-800">
              View catalog
            </Button>
          </div>
        </Demo>
        <Demo label="Sizes (sm 32px · md 40px · lg 48px) and states (loading, disabled, with icon).">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button loading>Sending…</Button>
            <Button disabled>Disabled</Button>
            <Button variant="secondary">
              Explore products <ArrowRight aria-hidden className="size-4" />
            </Button>
          </div>
        </Demo>
        <Guidelines
          usage={[
            "One primary button per view; it names the outcome (“Request a quote”), never “Submit” or “Click here”.",
            "Buttons navigate or act; use text links for inline references.",
            "Icons go after the label for direction (arrow) and before it for object (download).",
            "Loading state keeps the label visible and disables re-submission.",
          ]}
          a11y={[
            "Renders a real <button> or <a> — links get href, actions get type.",
            "Focus ring: 2px teal-700 outline with 2px offset on :focus-visible.",
            "Disabled uses opacity, never color alone; loading sets aria-busy.",
            "Minimum target 32×32px; md (40px) is the default for touch.",
          ]}
        />
      </Topic>

      <Topic
        id="inputs"
        title="Inputs"
        lede="Text inputs and textareas share one control style: 44px height, md radius, quiet border, visible label above. The custom select matches it exactly."
      >
        <Demo label="Default, hint, error, and disabled states.">
          <div className="grid max-w-xl gap-5">
            <Field label="Company" htmlFor="in-default">
              <Input id="in-default" placeholder="Acme Apparel Co." />
            </Field>
            <Field label="Order volume" htmlFor="in-hint" hint="Approximate units per season.">
              <Input id="in-hint" aria-describedby="in-hint-hint" />
            </Field>
            <Field label="Work email" htmlFor="in-error" error="Enter a valid email address.">
              <Input id="in-error" type="email" invalid defaultValue="not-an-email" aria-describedby="in-error-error" />
            </Field>
            <Field label="Reference code" htmlFor="in-disabled">
              <Input id="in-disabled" disabled value="SRA-2026-0114" readOnly />
            </Field>
          </div>
        </Demo>
        <Guidelines
          usage={[
            "Labels are always visible — placeholders are examples, never labels.",
            "Hints live under the control; errors replace hints and state the fix, not the failure.",
            "Group related fields in a two-column grid ≥ sm; never more than two columns.",
            "Use the right input type (email, tel, number) to trigger appropriate keyboards.",
          ]}
          a11y={[
            "Every control is wired to a <label> via Field (htmlFor/id).",
            "Errors set aria-invalid and are linked with aria-describedby.",
            "Focus replaces the border with the 2px teal-700 outline — always visible.",
            "Autocomplete attributes on all identity fields.",
          ]}
        />
      </Topic>

      <Topic
        id="select"
        title="Select & checkbox"
        lede="Both controls are built from scratch — never the operating system’s dropdown or checkbox — so they look identical on every platform and match the system exactly."
      >
        <Demo label="Custom listbox select: default, error and disabled.">
          <SelectDemo />
        </Demo>
        <Demo label="Custom checkbox — real input, drawn control.">
          <CheckboxDemo />
        </Demo>
        <Guidelines
          usage={[
            "Select is for one choice from a known list; multi-select uses checkboxes.",
            "The menu opens downward, matches the trigger width, and scrolls past ~8 options.",
            "The selected option is marked with a teal check; the trigger shows its label.",
            "Checkboxes stack vertically with a generous 10px gap to the label.",
          ]}
          a11y={[
            "Select follows the WAI-ARIA listbox pattern: combobox button + owned listbox.",
            "Keyboard: ↑/↓ move, Enter/Space select, Esc closes, Home/End jump, Tab exits.",
            "The checkbox is a real <input>; only its visuals are custom — full keyboard and SR support.",
            "Both take the 2px teal-700 focus ring and pair state with an icon, not color alone.",
          ]}
        />
      </Topic>

      <Topic
        id="forms"
        title="Forms"
        lede="Forms are conversations with a production engineer, not gates. Ask only what’s needed to start one."
      >
        <Demo label="Live contact form — the standard inquiry pattern.">
          <FormDemo />
        </Demo>
        <Guidelines
          usage={[
            "Maximum ~6 fields on any public form; everything else is asked by a human later.",
            "Single column by default; pair short related fields (name/email) at ≥ sm.",
            "Submit button states the outcome. Success confirms inline, in place.",
            "Never clear user input on a failed validation.",
          ]}
          a11y={[
            "Validation messages are announced via role=status / aria-live regions.",
            "Required fields are marked in the label and with the required attribute.",
            "The form is fully operable with keyboard alone, in visual order.",
            "Error summary focuses the first invalid field on submit (long forms).",
          ]}
        />
      </Topic>

      <Topic
        id="badges"
        title="Badges"
        lede="Small mono-spaced status and category markers. They label; they never act — a badge is not a button."
      >
        <Demo label="Variants: neutral, accent, semantic, outline.">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Cotton</Badge>
            <Badge variant="accent">New</Badge>
            <Badge variant="success">In stock</Badge>
            <Badge variant="warning">Limited</Badge>
            <Badge variant="danger">Discontinued</Badge>
            <Badge variant="outline">240 gsm</Badge>
            <Badge variant="outline">OEKO-TEX®</Badge>
          </div>
        </Demo>
        <Guidelines
          usage={[
            "Outline badges carry technical specs; filled badges carry status.",
            "Maximum three badges per card — pick the most decision-relevant.",
            "Text stays short: one or two words, or a value with unit.",
          ]}
          a11y={[
            "Color is never the only signal — the label always carries the meaning.",
            "All variants meet 4.5:1 contrast against their fill.",
            "Badges are static spans; interactive filtering uses buttons styled separately.",
          ]}
        />
      </Topic>

      <Topic
        id="cards"
        title="Cards"
        lede="The general-purpose surface: white, borderless, lg radius, resting on a soft e1 shadow. Interactive cards raise to e2 on hover."
      >
        <Demo label="Static card and interactive (hover) card.">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent>
                <p className="eyebrow">Capability</p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight">Dyeing & finishing</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Continuous and batch dyeing with in-line colorimetry. ΔE ≤ 0.8 lot-to-lot
                  consistency across 40M meters per year.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">
                  Learn more <ArrowRight aria-hidden className="size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card interactive>
              <CardContent>
                <p className="eyebrow">Interactive</p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight">Hover me</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Cards that link somewhere use the interactive variant: elevation rises
                  softly to e2 over 150ms.
                </p>
              </CardContent>
            </Card>
          </div>
        </Demo>
        <Guidelines
          usage={[
            "Cards group one idea. If a card needs two headings, it’s two cards.",
            "Padding is 24px (p-6) at every size — content density comes from type scale.",
            "Prefer whitespace and rules over nested cards; never card-in-card.",
          ]}
          a11y={[
            "Linked cards wrap content in a single <a> — one tab stop per card.",
            "Card titles keep the page heading hierarchy (h3/h4), whatever the visual size.",
            "Hover elevation pairs with a title color change so feedback isn’t shadow-only.",
          ]}
        />
      </Topic>

      <Topic
        id="tables"
        title="Tables"
        lede="Technical specifications live in tables: mono uppercase headers, tabular numerals, right-aligned figures. Wide tables scroll inside their container."
      >
        <Demo tone="bare" label="Product specification table.">
          <Table caption="Fabric technical specifications">
            <THead>
              <Tr>
                <Th>Article</Th>
                <Th>Composition</Th>
                <Th numeric>Weight</Th>
                <Th numeric>Width</Th>
                <Th numeric>Shrinkage</Th>
                <Th>Status</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td className="font-medium">SRA-JRS-240</Td>
                <Td>95% Cotton / 5% Elastane</Td>
                <Td numeric>240 gsm</Td>
                <Td numeric>180 cm</Td>
                <Td numeric>±3%</Td>
                <Td><Badge variant="success">In stock</Badge></Td>
              </Tr>
              <Tr>
                <Td className="font-medium">SRA-TWL-320</Td>
                <Td>100% Organic Cotton</Td>
                <Td numeric>320 gsm</Td>
                <Td numeric>160 cm</Td>
                <Td numeric>±2%</Td>
                <Td><Badge variant="success">In stock</Badge></Td>
              </Tr>
              <Tr>
                <Td className="font-medium">SRA-PIQ-200</Td>
                <Td>50% Recycled PES / 50% Cotton</Td>
                <Td numeric>200 gsm</Td>
                <Td numeric>185 cm</Td>
                <Td numeric>±3%</Td>
                <Td><Badge variant="warning">Limited</Badge></Td>
              </Tr>
            </TBody>
          </Table>
        </Demo>
        <Guidelines
          usage={[
            "Numeric columns are right-aligned in mono with units in every cell.",
            "Row hover highlights for scanning; zebra striping is never used.",
            "Under ~sm width, prefer restructuring to cards over shrinking type.",
          ]}
          a11y={[
            "Every table has a caption (visually hidden) and <th scope=col> headers.",
            "The scroll container is keyboard-reachable; the page never scrolls sideways.",
            "Status columns pair color with a text label (badge).",
          ]}
        />
      </Topic>

      <Topic
        id="tabs"
        title="Tabs"
        lede="Peer views of one subject — specs vs. certifications vs. downloads. Underline style, roving focus, arrow-key navigation."
      >
        <Demo label="Product detail tabs.">
          <Tabs defaultValue="specs">
            <TabsList label="Product information">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="certs">Certifications</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
            </TabsList>
            <TabsContent value="specs">
              <p className="max-w-xl text-sm leading-relaxed text-neutral-700">
                240 gsm single jersey. 95% combed ring-spun cotton, 5% elastane. 180 cm usable
                width. Pre-shrunk to ±3%; pilling grade 4–5 (ISO 12945-2).
              </p>
            </TabsContent>
            <TabsContent value="certs">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">OEKO-TEX® 100</Badge>
                <Badge variant="outline">GOTS</Badge>
                <Badge variant="outline">GRS</Badge>
                <Badge variant="outline">ISO 9001</Badge>
              </div>
            </TabsContent>
            <TabsContent value="care">
              <p className="max-w-xl text-sm leading-relaxed text-neutral-700">
                Machine wash 30°C. Do not bleach. Tumble dry low. Iron medium. Professional wet
                clean.
              </p>
            </TabsContent>
          </Tabs>
        </Demo>
        <Guidelines
          usage={[
            "Two to five tabs; beyond five, use an accordion or separate pages.",
            "Tabs never hide the primary action or critical specs of a page.",
            "Labels are one or two words, no icons.",
          ]}
          a11y={[
            "Full WAI-ARIA tabs pattern: tablist/tab/tabpanel with aria-selected.",
            "Arrow keys move and activate; Home/End jump; panel is focusable.",
            "Selection is shown by border and text color together, not color alone.",
          ]}
        />
      </Topic>

      <Topic
        id="accordions"
        title="Accordions"
        lede="Progressive disclosure for secondary content: FAQs, process detail, long specifications. One panel open at a time."
      >
        <Demo label="FAQ accordion.">
          <Accordion
            defaultOpen={0}
            items={[
              {
                title: "What is your minimum order quantity?",
                content:
                  "MOQs start at 500 meters per color for stock articles and 1,500 meters for custom developments. Lower volumes are possible within our sampling program.",
              },
              {
                title: "How fast can you deliver to North America?",
                content:
                  "Standard lead time is 21 days from fiber to finished goods, plus 2–5 days of ground transit from our facilities — compared to 60–90 days for trans-Pacific supply chains.",
              },
              {
                title: "Can you trace the origin of every fiber?",
                content:
                  "Yes. Because spinning, weaving, dyeing and confection happen under one roof, every lot carries a digital record from bale to box, available to customers on request.",
              },
            ]}
          />
        </Demo>
        <Guidelines
          usage={[
            "Use for secondary content only — anything essential stays visible.",
            "Headers are questions or plain nouns; keep them under one line.",
            "Single-open behavior keeps the page calm and scannable.",
          ]}
          a11y={[
            "Headers are real buttons inside headings: Enter/Space toggle.",
            "aria-expanded and aria-controls wire header to panel (role=region).",
            "The chevron rotates as a secondary cue; state is never color-only.",
          ]}
        />
      </Topic>

      <Topic
        id="pagination"
        title="Pagination"
        lede="For catalogs, resources and the blog. Numbered pages with a sliding window; previous/next always present."
      >
        <Demo label="Interactive — click through pages.">
          <PaginationDemo />
        </Demo>
        <Guidelines
          usage={[
            "Use pagination (not infinite scroll) everywhere — the footer must stay reachable.",
            "Window shows first, last, current ±1; ellipses are non-interactive.",
            "Page size is fixed per template (12 products, 9 posts).",
          ]}
          a11y={[
            "Wrapped in <nav aria-label='Pagination'>; current page carries aria-current='page'.",
            "Prev/next are icon buttons with aria-labels and disabled endpoints.",
            "Targets are 36×36px minimum with visible focus.",
          ]}
        />
      </Topic>

      <Topic
        id="search"
        title="Search"
        lede="Search-as-you-filter with an always-visible result count. The count is announced politely to screen readers."
      >
        <Demo label="Live — try “cotton” or “twill”.">
          <SearchDemo
            items={[
              "Organic Cotton Jersey 240",
              "Cotton Twill 320",
              "Recycled Piqué 200",
              "Cotton-Elastane Rib 260",
              "Workwear Canvas 380",
              "Flame-Retardant Twill 300",
            ]}
          />
        </Demo>
        <Guidelines
          usage={[
            "Results update as the user types; no search button required for filtering.",
            "Empty state suggests a recovery (“Try a broader term”), never a dead end.",
            "The clear (×) control appears only when there is a query.",
          ]}
          a11y={[
            "Input is type=search with an explicit aria-label.",
            "Result count lives in an aria-live=polite region.",
            "Results are real links, navigable by Tab in list order.",
          ]}
        />
      </Topic>
    </Chapter>
  );
}
