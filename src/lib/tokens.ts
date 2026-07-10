/**
 * SIERRA design-token registry.
 *
 * Mirrors the values declared in `src/app/globals.css` (@theme) so the
 * Style Guide can render token documentation from data. If a value changes
 * in globals.css, it must change here in the same commit.
 */

export type ColorToken = { name: string; value: string; usage: string };

export const surfaceColors: ColorToken[] = [
  { name: "paper", value: "#FBFAF8", usage: "Page background. The default canvas." },
  { name: "surface", value: "#FFFFFF", usage: "Cards, inputs, raised surfaces." },
  { name: "ink", value: "#161513", usage: "Primary text, dark sections, primary buttons." },
];

export const neutralColors: ColorToken[] = [
  { name: "neutral-50", value: "#F6F5F2", usage: "Subtle fills, muted section backgrounds" },
  { name: "neutral-100", value: "#ECEAE5", usage: "Hover fills, dividers on dark surfaces" },
  { name: "neutral-200", value: "#DDD9D2", usage: "Borders, hairlines" },
  { name: "neutral-300", value: "#C4BFB5", usage: "Strong borders, disabled outlines" },
  { name: "neutral-400", value: "#A39D91", usage: "Placeholder text, disabled icons" },
  { name: "neutral-500", value: "#857F73", usage: "Tertiary text on dark, metadata" },
  { name: "neutral-600", value: "#68635A", usage: "Secondary text (min. body gray on paper)" },
  { name: "neutral-700", value: "#504C45", usage: "Strong secondary text" },
  { name: "neutral-800", value: "#383530", usage: "Dark hover states" },
  { name: "neutral-900", value: "#23211D", usage: "Dark surfaces, footer" },
  { name: "neutral-950", value: "#161513", usage: "Alias of ink" },
];

export const clayColors: ColorToken[] = [
  { name: "clay-50", value: "#FBF3EF", usage: "Accent tint backgrounds" },
  { name: "clay-100", value: "#F5E2D8", usage: "Accent badges, selected fills" },
  { name: "clay-200", value: "#EAC3B0", usage: "Selection color, decorative" },
  { name: "clay-300", value: "#DC9F82", usage: "Accent on dark surfaces (links, icons)" },
  { name: "clay-400", value: "#CB7A54", usage: "Charts, decorative accents" },
  { name: "clay-500", value: "#B45E36", usage: "Large accent elements on dark" },
  { name: "clay-600", value: "#9A4B28", usage: "Links, focus ring, primary accent on paper" },
  { name: "clay-700", value: "#7C3C21", usage: "Link hover, active accent" },
  { name: "clay-800", value: "#5E2E1A", usage: "Deep accent, pressed states" },
  { name: "clay-900", value: "#402014", usage: "Accent text on tint backgrounds" },
];

export const semanticColors: ColorToken[] = [
  { name: "success", value: "#2E6B4F", usage: "Confirmation, in-stock, certified" },
  { name: "warning", value: "#8A5B12", usage: "Caution, limited availability" },
  { name: "danger", value: "#A03232", usage: "Errors, destructive actions" },
];

export const typeScale = [
  { name: "display", cls: "text-display", size: "clamp(44→68px)", lh: "1.02", use: "Hero headlines only. One per page." },
  { name: "4xl", cls: "text-4xl", size: "36px", lh: "1.1", use: "Page titles (H1)" },
  { name: "3xl", cls: "text-3xl", size: "30px", lh: "1.2", use: "Section titles (H2)" },
  { name: "2xl", cls: "text-2xl", size: "24px", lh: "1.25", use: "Sub-section titles (H3)" },
  { name: "xl", cls: "text-xl", size: "20px", lh: "1.4", use: "Card titles (H4), ledes" },
  { name: "lg", cls: "text-lg", size: "18px", lh: "1.55", use: "Intro paragraphs" },
  { name: "base", cls: "text-base", size: "16px", lh: "1.6", use: "Body copy. The default." },
  { name: "sm", cls: "text-sm", size: "14px", lh: "1.5", use: "UI labels, secondary copy, table cells" },
  { name: "xs", cls: "text-xs", size: "12px", lh: "1.4", use: "Captions, badges, eyebrows (mono)" },
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
  { token: "radius-xs", value: "2px", use: "Badges, checkboxes, small chips" },
  { token: "radius-sm", value: "4px", use: "Buttons, inputs, table cells" },
  { token: "radius-md", value: "8px", use: "Cards, panels, modals" },
  { token: "radius-lg", value: "12px", use: "Large media, CTA blocks, drawers" },
  { token: "radius-full", value: "9999px", use: "Pills, avatar, icon buttons" },
];

export const shadowScale = [
  { token: "shadow-e1", value: "0 1px 2px rgb(22 21 19 / 0.06)", use: "Resting cards, inputs" },
  { token: "shadow-e2", value: "0 2px 8px rgb(22 21 19 / 0.08)", use: "Hovered cards, sticky nav" },
  { token: "shadow-e3", value: "0 8px 24px rgb(22 21 19 / 0.12)", use: "Dropdowns, popovers" },
  { token: "shadow-e4", value: "0 24px 64px rgb(22 21 19 / 0.18)", use: "Modals, drawers" },
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
