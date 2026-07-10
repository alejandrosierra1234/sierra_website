import { Check, X } from "lucide-react";
import { cn } from "@/lib/cn";

/** Top-level Style Guide chapter with anchor target and numbered header. */
export function Chapter({
  id,
  number,
  title,
  lede,
  children,
}: {
  id: string;
  number: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-neutral-200 py-16 lg:py-20">
      <header className="max-w-2xl">
        <p className="eyebrow">{number}</p>
        <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">
          {title}
        </h2>
        {lede && <p className="mt-4 text-lg leading-relaxed text-neutral-600">{lede}</p>}
      </header>
      <div className="mt-12 flex flex-col gap-16">{children}</div>
    </section>
  );
}

/** Sub-topic inside a chapter (e.g. a single component or foundation). */
export function Topic({
  id,
  title,
  lede,
  children,
}: {
  id: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      {lede && <p className="mt-2 max-w-2xl leading-relaxed text-neutral-600">{lede}</p>}
      <div className="mt-6 flex flex-col gap-6">{children}</div>
    </div>
  );
}

/** Live component preview canvas. Every example is the real component. */
export function Demo({
  label,
  tone = "default",
  className,
  children,
}: {
  label?: string;
  tone?: "default" | "dark" | "bare";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure>
      <div
        className={cn(
          "rounded-lg",
          tone === "default" && "bg-neutral-50 p-8",
          tone === "dark" && "bg-neutral-900 p-8",
          tone === "bare" && "overflow-hidden bg-surface shadow-e1",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <figcaption className="mt-2 font-mono text-xs tracking-wide text-neutral-500">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

/** Usage rules + accessibility notes, side by side. */
export function Guidelines({ usage, a11y }: { usage: string[]; a11y: string[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-lg bg-neutral-50 p-6">
        <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">
          Usage
        </h4>
        <ul className="mt-3 flex flex-col gap-2">
          {usage.map((rule) => (
            <li key={rule} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700">
              <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400" />
              {rule}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-neutral-50 p-6">
        <h4 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase">
          Accessibility
        </h4>
        <ul className="mt-3 flex flex-col gap-2">
          {a11y.map((rule) => (
            <li key={rule} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700">
              <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400" />
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Do / Don't guidance pair. */
export function DoDont({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-lg border-t-2 border-success bg-neutral-50 p-6">
        <h4 className="flex items-center gap-2 text-sm font-semibold text-success">
          <Check aria-hidden className="size-4" /> Do
        </h4>
        <ul className="mt-3 flex flex-col gap-2">
          {dos.map((d) => (
            <li key={d} className="text-sm leading-relaxed text-neutral-700">
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border-t-2 border-danger bg-neutral-50 p-6">
        <h4 className="flex items-center gap-2 text-sm font-semibold text-danger">
          <X aria-hidden className="size-4" /> Don’t
        </h4>
        <ul className="mt-3 flex flex-col gap-2">
          {donts.map((d) => (
            <li key={d} className="text-sm leading-relaxed text-neutral-700">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Voice example: say this, not that. */
export function VoicePair({ say, not }: { say: string; not: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-lg bg-neutral-50 p-5">
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-success uppercase">Say</p>
        <p className="mt-2 text-sm leading-relaxed">“{say}”</p>
      </div>
      <div className="rounded-lg bg-neutral-50 p-5">
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-danger uppercase">Not</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">“{not}”</p>
      </div>
    </div>
  );
}

/** Color swatch tile for token documentation. */
export function Swatch({
  name,
  value,
  usage,
  border,
}: {
  name: string;
  value: string;
  usage?: string;
  border?: boolean;
}) {
  return (
    <div>
      <div
        className={cn("h-16 rounded-sm", border && "border border-neutral-200")}
        style={{ backgroundColor: value }}
      />
      <p className="mt-2 text-sm font-medium">{name}</p>
      <p className="font-mono text-xs text-neutral-500 uppercase">{value}</p>
      {usage && <p className="mt-1 text-xs leading-relaxed text-neutral-600">{usage}</p>}
    </div>
  );
}

/** Wireframe row used by Layout Pattern blueprints. */
export function BlueprintRow({
  label,
  height = "md",
  tone = "light",
  cols = 1,
}: {
  label: string;
  height?: "xs" | "sm" | "md" | "lg";
  tone?: "light" | "mid" | "dark" | "accent";
  cols?: number;
}) {
  const heights = { xs: "h-6", sm: "h-10", md: "h-16", lg: "h-24" };
  const tones = {
    light: "bg-neutral-100 text-neutral-600",
    mid: "bg-neutral-200 text-neutral-700",
    dark: "bg-neutral-800 text-neutral-300",
    accent: "bg-teal-100 text-teal-900",
  };
  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {Array.from({ length: cols }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center justify-center rounded-xs px-2 font-mono text-[10px] tracking-wider uppercase",
            heights[height],
            tones[tone],
          )}
        >
          {i === 0 ? label : ""}
        </div>
      ))}
    </div>
  );
}

/** Layout pattern blueprint: a page anatomy diagram plus its spec. */
export function Blueprint({
  title,
  description,
  children,
  notes,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  notes: string[];
}) {
  return (
    <div className="rounded-lg bg-surface p-6 shadow-e1">
      <h4 className="text-lg font-semibold tracking-tight">{title}</h4>
      <p className="mt-1 text-sm leading-relaxed text-neutral-600">{description}</p>
      <div className="mt-4 flex flex-col gap-1">{children}</div>
      <ul className="mt-4 flex flex-col gap-1.5 border-t border-neutral-100 pt-4">
        {notes.map((note) => (
          <li key={note} className="flex gap-2.5 text-xs leading-relaxed text-neutral-600">
            <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-neutral-400" />
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}
