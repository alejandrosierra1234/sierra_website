import { cn } from "@/lib/cn";

const tones = {
  default: "bg-paper text-ink",
  muted: "bg-neutral-50 text-ink",
  dark: "bg-neutral-900 text-paper",
} as const;

export type SectionTone = keyof typeof tones;

/**
 * Standard page section: consistent vertical rhythm, optional
 * eyebrow / title / lede header. All page content lives in Sections.
 */
export function Section({
  id,
  tone = "default",
  eyebrow,
  title,
  lede,
  className,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  lede?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 lg:py-32", tones[tone], className)}>
      <div className="container-page">
        {(eyebrow || title || lede) && (
          <header className="mb-12 max-w-2xl lg:mb-20">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                {title}
              </h2>
            )}
            {lede && (
              <p className={cn("mt-4 text-lg leading-relaxed", tone === "dark" ? "text-neutral-300" : "text-neutral-600")}>
                {lede}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
