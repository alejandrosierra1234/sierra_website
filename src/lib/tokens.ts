/**
 * SIERRA design-token registry.
 *
 * Mirrors the values declared in `src/app/globals.css` (@theme) so the
 * Style Guide can render token documentation from data. If a value changes
 * in globals.css, it must change here in the same commit.
 *
 * Values marked (brand) are verbatim from the SIERRA palette; the rest
 * are derived steps that complete each scale.
 */

export type ColorToken = { name: string; value: string; usage: string };

export const surfaceColors: ColorToken[] = [
  { name: "paper", value: "#FFFFFF", usage: "Page background. The default canvas. (brand)" },
  { name: "surface", value: "#FFFFFF", usage: "Cards, inputs, raised surfaces. (brand)" },
  { name: "ink", value: "#0B0B0B", usage: "Primary text, dark surfaces, primary buttons. (brand)" },
];

export const neutralColors: ColorToken[] = [
  { name: "neutral-50", value: "#FAFAFA", usage: "Subtle fills, muted section backgrounds" },
  { name: "neutral-100", value: "#F5F5F5", usage: "Hover fills, muted sections (brand)" },
  { name: "neutral-200", value: "#E5E5E5", usage: "Borders, hairlines (brand)" },
  { name: "neutral-300", value: "#D4D4D4", usage: "Strong borders, disabled outlines" },
  { name: "neutral-400", value: "#A4A4A4", usage: "Placeholder text, disabled icons (brand)" },
  { name: "neutral-500", value: "#737373", usage: "Tertiary text on dark, metadata" },
  { name: "neutral-600", value: "#565656", usage: "Secondary text (min. body gray on paper)" },
  { name: "neutral-700", value: "#444444", usage: "Strong secondary text (brand)" },
  { name: "neutral-800", value: "#2B2B2B", usage: "Dark hover states (brand)" },
  { name: "neutral-900", value: "#171717", usage: "Dark surfaces, footer" },
  { name: "neutral-950", value: "#0B0B0B", usage: "Alias of ink (brand)" },
];

export const tealColors: ColorToken[] = [
  { name: "teal-50", value: "#E8FFFD", usage: "Accent tint backgrounds" },
  { name: "teal-100", value: "#CFFFFB", usage: "Selection, accent badges (brand)" },
  { name: "teal-200", value: "#9FF2EA", usage: "Decorative accents" },
  { name: "teal-300", value: "#67E2D6", usage: "Charts, illustration" },
  { name: "teal-400", value: "#38D8C9", usage: "Large accents on dark surfaces" },
  { name: "teal-500", value: "#16CDBE", usage: "Primary accent on dark; hero moments (brand)" },
  { name: "teal-600", value: "#0BA496", usage: "Large accent elements on light (≥ 3:1 only)" },
  { name: "teal-700", value: "#007D73", usage: "Links, focus ring, accent text on light (brand)" },
  { name: "teal-800", value: "#055E57", usage: "Link hover, pressed accents" },
  { name: "teal-900", value: "#08403C", usage: "Accent text on tint backgrounds" },
];

export const extendedColors: ColorToken[] = [
  { name: "lime-100 / 500 / 700", value: "#EFEFAF · #C4C412 · #827E00", usage: "SIERRA secondary color — editorial accents, data viz (brand)" },
  { name: "green-100 / 500 / 700", value: "#D1FFBE · #3ED600 · #2A9200", usage: "Sustainability theme — exclusive to sustainability content (brand)" },
  { name: "blue-100 / 500 / 700", value: "#C5E9FF · #009FFF · #004A86", usage: "Info family, charts (brand)" },
  { name: "purple-100 / 500 / 700", value: "#F6D8FF · #9E00CB · #670084", usage: "Charts, category coding (brand)" },
  { name: "yellow-100 / 500 / 700", value: "#FFF0AF · #FFC529 · #BB9800", usage: "Warning family, charts (brand)" },
  { name: "orange-100 / 500 / 700", value: "#FFE3D2 · #FF7824 · #CD4F00", usage: "Charts, category coding (brand)" },
  { name: "red-100 / 500 / 700", value: "#FFC7C7 · #E80000 · #B40B0B", usage: "Danger family (brand)" },
];

/** Fixed color roles — which family may do what. The answer to “why is
 *  this green?” must always be one of these four rows. */
export const colorRoles = [
  {
    role: "Primary — SIERRA Teal",
    family: "teal",
    rule: "The interactive voice: links, focus, selection, key highlights. teal-700 on light surfaces, teal-500 on dark. One accent moment per screen.",
  },
  {
    role: "Secondary — Lime",
    family: "lime",
    rule: "The editorial companion: chart series next to teal, section markers, campaign graphics. Never interactive — a lime element is never a control.",
  },
  {
    role: "Sustainability — Green",
    family: "green",
    rule: "Reserved for sustainability content: impact sections, environmental data, certifications context. Thematic, not a status color.",
  },
  {
    role: "Feedback — Semantic",
    family: "success · warning · danger · info",
    rule: "System states only: form validation, stock, alerts. Fixed meanings so feedback is never ambiguous — never decorative, never thematic.",
  },
];

export const semanticColors: ColorToken[] = [
  { name: "success", value: "#257F08", usage: "Confirmation, in-stock (AA-safe green-700)" },
  { name: "warning", value: "#7A6400", usage: "Caution, limited (AA-safe yellow-700)" },
  { name: "danger", value: "#B40B0B", usage: "Errors, destructive actions (brand red-700)" },
  { name: "info", value: "#004A86", usage: "Informational status (brand blue-700)" },
  { name: "mark", value: "#59A29E", usage: "Logo isotype only — never UI" },
];

export const typeScale = [
  { name: "display", cls: "text-display", size: "clamp(44→68px)", lh: "1.02", family: "Replica", use: "Hero headlines only. One per page." },
  { name: "4xl", cls: "text-4xl", size: "36px", lh: "1.1", family: "Replica", use: "Page titles (H1)" },
  { name: "3xl", cls: "text-3xl", size: "30px", lh: "1.2", family: "Replica", use: "Section titles (H2)" },
  { name: "2xl", cls: "text-2xl", size: "24px", lh: "1.25", family: "Replica", use: "Sub-section titles (H3)" },
  { name: "xl", cls: "text-xl", size: "20px", lh: "1.4", family: "Replica", use: "Card titles (H4), ledes" },
  { name: "lg", cls: "text-lg", size: "18px", lh: "1.55", family: "Aeonik", use: "Intro paragraphs" },
  { name: "base", cls: "text-base", size: "16px", lh: "1.6", family: "Aeonik", use: "Body copy. The default." },
  { name: "sm", cls: "text-sm", size: "14px", lh: "1.5", family: "Aeonik", use: "UI labels, secondary copy, table cells" },
  { name: "xs", cls: "text-xs", size: "12px", lh: "1.4", family: "Aeonik", use: "Captions, badges, eyebrows (mono)" },
];

export const spacingScale = [
  { token: "1", px: "4px", use: "Icon-to-label gaps" },
  { token: "2", px: "8px", use: "Related inline elements" },
  { token: "3", px: "12px", use: "Compact padding" },
  { token: "4", px: "16px", use: "Default component padding" },
  { token: "6", px: "24px", use: "Card padding, grid gutters" },
  { token: "8", px: "32px", use: "Between related blocks" },
  { token: "12", px: "48px", use: "Between component groups" },
  { token: "16", px: "64px", use: "Small section padding" },
  { token: "24", px: "96px", use: "Standard section padding (desktop)" },
  { token: "32", px: "128px", use: "Hero / landmark spacing" },
];

export const radiusScale = [
  { token: "radius-xs", value: "4px", use: "Checkboxes, small chips, diagram cells" },
  { token: "radius-sm", value: "8px", use: "Swatches, small containers" },
  { token: "radius-md", value: "12px", use: "Inputs, selects, textareas" },
  { token: "radius-lg", value: "16px", use: "Cards, tables, modals, panels" },
  { token: "radius-xl", value: "24px", use: "Large media, landmark panels" },
  { token: "radius-full", value: "9999px", use: "Buttons, badges, pagination — all pills" },
];

export const shadowScale = [
  { token: "shadow-e1", value: "0 1px 2px / 0.04 + 0 2px 8px / 0.04", use: "Resting cards, tables" },
  { token: "shadow-e2", value: "0 2px 4px / 0.04 + 0 8px 24px / 0.06", use: "Hovered cards, sticky nav" },
  { token: "shadow-e3", value: "0 4px 8px / 0.05 + 0 16px 40px / 0.10", use: "Dropdowns, popovers" },
  { token: "shadow-e4", value: "0 8px 16px / 0.06 + 0 32px 80px / 0.16", use: "Modals, drawers" },
];

export const zIndexScale = [
  { token: "--z-nav", value: "40", use: "Sticky navigation" },
  { token: "--z-overlay", value: "50", use: "Modals, drawers (top layer)" },
  { token: "--z-toast", value: "60", use: "Notifications" },
];

export const motionTokens = [
  { token: "--ease-precise", value: "cubic-bezier(0.2, 0, 0, 1)", use: "Default. Entrances, hovers, layout shifts." },
  { token: "--ease-exit", value: "cubic-bezier(0.4, 0, 1, 1)", use: "Exits and dismissals" },
  { token: "duration-150", value: "150ms", use: "Hovers, color changes" },
  { token: "duration-200", value: "200ms", use: "Small movement (modals)" },
  { token: "duration-300", value: "300ms", use: "Drawers, panels" },
  { token: "duration-500", value: "500ms", use: "Page-level reveals" },
];

export const breakpoints = [
  { token: "sm", value: "640px", use: "Large phones. 4-col grid becomes 8." },
  { token: "md", value: "768px", use: "Tablets. Two-column layouts activate." },
  { token: "lg", value: "1024px", use: "Desktop. Full 12-col grid, desktop nav." },
  { token: "xl", value: "1280px", use: "Wide desktop. Container maxes at 1216px." },
  { token: "2xl", value: "1536px", use: "No new layout — whitespace grows." },
];
