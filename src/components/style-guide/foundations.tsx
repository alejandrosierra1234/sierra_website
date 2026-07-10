import {
  ArrowRight,
  Download,
  Factory,
  Layers,
  Leaf,
  Menu,
  Package,
  Search,
  Truck,
  X,
} from "lucide-react";
import { Chapter, Topic, Demo, Swatch } from "./doc";
import { Table, THead, TBody, Tr, Th, Td } from "@/components/ui/table";
import {
  surfaceColors,
  neutralColors,
  tealColors,
  extendedColors,
  semanticColors,
  colorRoles,
  typeScale,
  spacingScale,
  breakpoints,
} from "@/lib/tokens";

export function FoundationsChapter() {
  return (
    <Chapter
      id="foundations"
      number="02 · Foundations"
      title="Foundations"
      lede="The measurable layer of the system: color, type, space, shape, depth, motion. Everything here is a token — no raw values in component code."
    >
      <Topic
        id="colors"
        title="Color"
        lede="Clean white, an engineering gray ramp, and SIERRA teal as the single primary accent. An extended brand palette exists for charts and category coding. Color signals meaning; it never decorates."
      >
        <div>
          <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">Surfaces & ink</h4>
          <div className="mt-3 grid grid-cols-3 gap-4">
            {surfaceColors.map((c) => (
              <Swatch key={c.name} name={c.name} value={c.value} usage={c.usage} border={c.name !== "ink"} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">Neutral grays</h4>
          <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-11 lg:gap-2">
            {neutralColors.map((c) => (
              <Swatch key={c.name} name={c.name.replace("neutral-", "")} value={c.value} border={Number(c.name.split("-")[1]) <= 200} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">SIERRA teal (primary accent)</h4>
          <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-10 lg:gap-2">
            {tealColors.map((c) => (
              <Swatch key={c.name} name={c.name.replace("teal-", "")} value={c.value} border={c.name === "teal-50" || c.name === "teal-100"} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">Semantic</h4>
          <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-5">
            {semanticColors.map((c) => (
              <Swatch key={c.name} name={c.name} value={c.value} usage={c.usage} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">Extended palette (charts & categories)</h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {extendedColors.map((c) => {
              const [tint, base, dark] = c.value.split(" · ");
              return (
                <div key={c.name}>
                  <div className="flex h-12 overflow-hidden rounded-sm border border-neutral-200">
                    <div className="flex-1" style={{ backgroundColor: tint }} />
                    <div className="flex-1" style={{ backgroundColor: base }} />
                    <div className="flex-1" style={{ backgroundColor: dark }} />
                  </div>
                  <p className="mt-2 text-sm font-medium">{c.name.split(" ")[0].replace("-100", "")}</p>
                  <p className="font-mono text-[10px] text-neutral-500 uppercase">{c.value}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">Color roles</h4>
          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            {colorRoles.map((r) => (
              <div key={r.role} className="rounded-lg bg-neutral-50 p-5">
                <p className="text-sm font-semibold">{r.role}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{r.rule}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Rules: <strong className="text-ink">teal-700</strong> is the accent for text, links and
          focus on light surfaces (AA at 5.0:1); <strong className="text-ink">teal-500</strong> —
          the brand teal — carries accents on dark surfaces and large graphic moments.
          Mid-scale brights (teal-500, green-500, red-500…) are never used for small text.
          Restraint is the discipline: most screens are white, gray and ink, with one accent
          moment. The logo teal (<strong className="text-ink">mark #0BA496</strong>, matching
          teal-600) belongs to the isotype alone.
        </p>
      </Topic>

      <Topic
        id="typography"
        title="Typography"
        lede="Three families with fixed roles, all SIERRA’s own: Replica for display and headings, Aeonik for body and UI, Replica Mono for everything technical — specs, figures, labels, code."
      >
        <Demo tone="bare">
          <div className="flex flex-col divide-y divide-neutral-100">
            {typeScale.map((t) => (
              <div key={t.name} className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <div className="w-40 shrink-0 font-mono text-xs text-neutral-500">
                  {t.name} · {t.size} / {t.lh}
                </div>
                <p
                  className={`${t.cls} min-w-0 truncate tracking-tight ${
                    t.family === "Replica" ? "font-display font-semibold" : "font-medium"
                  }`}
                >
                  Fiber to finished product
                </p>
                <p className="text-xs text-neutral-500 sm:ml-auto sm:w-44 sm:shrink-0 sm:text-right">
                  {t.family} · {t.use}
                </p>
              </div>
            ))}
          </div>
        </Demo>
        <Demo label="Technical figures always use Replica Mono with tabular numerals.">
          <div className="flex flex-wrap gap-10 font-mono tabular-nums">
            <div>
              <p className="text-3xl font-medium tracking-tight">240<span className="text-neutral-400">gsm</span></p>
              <p className="mt-1 font-sans text-sm text-neutral-600">Fabric weight</p>
            </div>
            <div>
              <p className="text-3xl font-medium tracking-tight">±0.5<span className="text-neutral-400">%</span></p>
              <p className="mt-1 font-sans text-sm text-neutral-600">Shrinkage tolerance</p>
            </div>
            <div>
              <p className="text-3xl font-medium tracking-tight">21<span className="text-neutral-400">days</span></p>
              <p className="mt-1 font-sans text-sm text-neutral-600">Fiber to garment</p>
            </div>
          </div>
        </Demo>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Body copy is 16px/1.6 with a 65–75 character measure. Headings use tight tracking
          (−1% to −2%) and text-balance, and are always set in Replica — a base rule applies the
          display face to every h1–h6. Approved weights: Replica Light 300 / Regular 400 /
          Bold 700 (also serving 600); Aeonik Light 300 / Regular 400 / Medium 500 / Bold 700.
          Aeonik Thin, Air and Black stay in the vault — they never appear in the UI. All weight
          requests map to real cuts; the browser never synthesizes.
        </p>
      </Topic>

      <Topic
        id="grid"
        title="Grid"
        lede="A 12-column fluid grid inside a 1280px container with 24px gutters — matching the navbar's own content width so every section aligns under it. Columns merge to 8 below lg and 4 below sm."
      >
        <Demo tone="bare">
          <div className="p-6">
            <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8 sm:gap-2 lg:grid-cols-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex h-20 items-center justify-center rounded-xs bg-teal-100 font-mono text-xs text-teal-800 ${
                    i >= 8 ? "hidden lg:flex" : i >= 4 ? "hidden sm:flex" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <p className="mt-3 font-mono text-xs text-neutral-500">
              container-page · max-width 1280px · padding 24px (32px ≥ lg)
            </p>
          </div>
        </Demo>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Content aligns to columns, not to arbitrary positions. Text measures cap at ~2/3 of the
          grid (max-w-2xl / max-w-3xl). Full-bleed sections carry their own background but their
          content still sits inside <code className="rounded-xs bg-neutral-100 px-1 py-0.5 font-mono text-xs">.container-page</code>.
        </p>
      </Topic>

      <Topic
        id="spacing"
        title="Spacing"
        lede="A 4px base unit on an 8pt rhythm. Space is the primary grouping tool — related things sit closer than unrelated things, always by token."
      >
        <Demo tone="bare">
          <Table caption="Spacing scale tokens and their intended usage">
            <THead>
              <Tr>
                <Th>Token</Th>
                <Th numeric>Value</Th>
                <Th>Scale</Th>
                <Th>Use for</Th>
              </Tr>
            </THead>
            <TBody>
              {spacingScale.map((s) => (
                <Tr key={s.token}>
                  <Td className="font-mono text-xs">{s.token}</Td>
                  <Td numeric>{s.px}</Td>
                  <Td>
                    <div className="h-3 rounded-xs bg-teal-400" style={{ width: s.px }} />
                  </Td>
                  <Td className="text-neutral-600">{s.use}</Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </Demo>
      </Topic>

      <Topic
        id="radius"
        title="Radius"
        lede="Soft and continuous, growing with element size. Interactive elements — buttons, badges, pagination — are always pills; surfaces are generously rounded."
      >
        <Demo>
          <div className="flex flex-wrap items-end gap-8">
            {[
              { label: "xs · 4px", cls: "rounded-xs size-16" },
              { label: "sm · 8px", cls: "rounded-sm size-20" },
              { label: "md · 12px", cls: "rounded-md size-24" },
              { label: "lg · 16px", cls: "rounded-lg size-28" },
              { label: "xl · 24px", cls: "rounded-xl size-32" },
              { label: "full", cls: "rounded-full h-10 w-24" },
            ].map((r) => (
              <div key={r.label} className="flex flex-col items-center gap-2">
                <div className={`${r.cls} bg-surface shadow-e1`} />
                <p className="font-mono text-xs text-neutral-500">{r.label}</p>
              </div>
            ))}
          </div>
        </Demo>
      </Topic>

      <Topic
        id="elevation"
        title="Shadows & elevation"
        lede="Four levels, soft and diffuse — elevation replaces borders. Surfaces separate through light and space, never through outlines; hairlines survive only inside data tables."
      >
        <Demo>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { name: "e1", cls: "shadow-e1", use: "Resting cards, inputs" },
              { name: "e2", cls: "shadow-e2", use: "Hover, sticky nav" },
              { name: "e3", cls: "shadow-e3", use: "Dropdowns, popovers" },
              { name: "e4", cls: "shadow-e4", use: "Modals, drawers" },
            ].map((s) => (
              <div key={s.name} className="flex flex-col items-start gap-3">
                <div className={`${s.cls} h-20 w-full rounded-md bg-surface`} />
                <div>
                  <p className="font-mono text-xs font-medium">{s.name}</p>
                  <p className="text-xs text-neutral-600">{s.use}</p>
                </div>
              </div>
            ))}
          </div>
        </Demo>
      </Topic>

      <Topic
        id="icons"
        title="Icons"
        lede="Lucide, drawn on a 24px grid at 1.5px stroke. Icons always support a label or carry an accessible name — never decoration, never mixed sets."
      >
        <Demo>
          <div className="flex flex-wrap gap-6 text-neutral-700">
            {[Factory, Layers, Leaf, Truck, Package, Search, Download, ArrowRight, Menu, X].map(
              (Icon, i) => (
                <Icon key={i} aria-hidden strokeWidth={1.5} className="size-6" />
              ),
            )}
          </div>
        </Demo>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Sizes: 16px inline with text, 20px in buttons and nav, 24px standalone. Standalone icons
          in cards sit in a 40px neutral-100 container. Decorative icons take{" "}
          <code className="rounded-xs bg-neutral-100 px-1 py-0.5 font-mono text-xs">aria-hidden</code>;
          icon-only buttons require <code className="rounded-xs bg-neutral-100 px-1 py-0.5 font-mono text-xs">aria-label</code>.
        </p>
      </Topic>

      <Topic
        id="motion"
        title="Motion"
        lede="Motion confirms; it never performs. Small distances, short durations, one easing curve. Everything respects prefers-reduced-motion."
      >
        <Demo tone="bare">
          <Table caption="Motion tokens">
            <THead>
              <Tr>
                <Th>Token</Th>
                <Th>Value</Th>
                <Th>Use for</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td className="font-mono text-xs">ease-precise</Td>
                <Td className="font-mono text-xs">cubic-bezier(0.2, 0, 0, 1)</Td>
                <Td className="text-neutral-600">Default: hovers, entrances, layout</Td>
              </Tr>
              <Tr>
                <Td className="font-mono text-xs">ease-exit</Td>
                <Td className="font-mono text-xs">cubic-bezier(0.4, 0, 1, 1)</Td>
                <Td className="text-neutral-600">Dismissals and exits</Td>
              </Tr>
              <Tr>
                <Td className="font-mono text-xs">150ms</Td>
                <Td className="font-mono text-xs">duration-150</Td>
                <Td className="text-neutral-600">Color and opacity changes</Td>
              </Tr>
              <Tr>
                <Td className="font-mono text-xs">180ms</Td>
                <Td className="font-mono text-xs">animate-menu-in</Td>
                <Td className="text-neutral-600">Nav dropdowns and menus (4px rise + 2% scale)</Td>
              </Tr>
              <Tr>
                <Td className="font-mono text-xs">200–300ms</Td>
                <Td className="font-mono text-xs">duration-200 / 300</Td>
                <Td className="text-neutral-600">Modals (200), drawers and panels (300)</Td>
              </Tr>
              <Tr>
                <Td className="font-mono text-xs">500ms</Td>
                <Td className="font-mono text-xs">animate-fade-up</Td>
                <Td className="text-neutral-600">Page-level content reveals (12px rise)</Td>
              </Tr>
            </TBody>
          </Table>
        </Demo>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Nothing on the site moves longer than 500ms or farther than 16px. No parallax, no
          scroll-jacking, no looping animation. A global reduced-motion rule collapses all
          animation to ~0ms for users who request it.
        </p>
      </Topic>

      <Topic id="breakpoints" title="Breakpoints" lede="Five breakpoints, mobile-first. Layout decisions happen at sm, md and lg; xl and beyond only add whitespace.">
        <Demo tone="bare">
          <Table caption="Responsive breakpoints">
            <THead>
              <Tr>
                <Th>Token</Th>
                <Th numeric>Min-width</Th>
                <Th>Behavior</Th>
              </Tr>
            </THead>
            <TBody>
              {breakpoints.map((b) => (
                <Tr key={b.token}>
                  <Td className="font-mono text-xs">{b.token}</Td>
                  <Td numeric>{b.value}</Td>
                  <Td className="text-neutral-600">{b.use}</Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </Demo>
      </Topic>
    </Chapter>
  );
}
