import { cn } from "@/lib/cn";

/**
 * Page hero. One per page; carries the single `display` headline.
 * Stats row is optional — use for capability/scale proof points.
 */
export function Hero({
  eyebrow,
  title,
  lede,
  actions,
  stats,
  tone = "default",
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  actions?: React.ReactNode;
  stats?: { value: string; label: string }[];
  tone?: "default" | "dark";
  /** Reduced height for interior pages. */
  compact?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <section className={cn(dark ? "bg-neutral-900 text-paper" : "bg-paper text-ink")}>
      <div className={cn("container-page", compact ? "py-16 lg:py-20" : "py-20 lg:py-32")}>
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1
            className={cn(
              "mt-4 font-semibold tracking-tight text-balance",
              compact ? "text-4xl lg:text-5xl" : "text-display",
            )}
          >
            {title}
          </h1>
          {lede && (
            <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed lg:text-xl", dark ? "text-neutral-300" : "text-neutral-600")}>
              {lede}
            </p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>

        {stats && stats.length > 0 && (
          <dl className={cn("mt-14 grid grid-cols-2 gap-8 border-t pt-8 lg:grid-cols-4", dark ? "border-neutral-800" : "border-neutral-200")}>
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className={cn("order-2 mt-1 text-sm", dark ? "text-neutral-400" : "text-neutral-600")}>
                  {stat.label}
                </dt>
                <dd className="order-1 font-mono text-3xl font-medium tracking-tight tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
