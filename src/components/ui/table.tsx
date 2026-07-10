import { cn } from "@/lib/cn";

/**
 * Data table for technical specifications. Wide tables scroll inside the
 * wrapper — the page never scrolls horizontally.
 */
export function Table({
  caption,
  className,
  children,
}: {
  /** Visually hidden caption describing the table for screen readers. */
  caption?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("overflow-x-auto rounded-lg bg-surface shadow-e1", className)}>
      <table className="w-full border-collapse text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        {children}
      </table>
    </div>
  );
}

export function THead({ children }: { children: React.ReactNode }) {
  return <thead className="border-b border-neutral-100">{children}</thead>;
}

export function TBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-neutral-100">{children}</tbody>;
}

export function Tr({ className, children }: { className?: string; children: React.ReactNode }) {
  return <tr className={cn("transition-colors duration-150 hover:bg-neutral-50", className)}>{children}</tr>;
}

export function Th({
  className,
  numeric,
  children,
}: {
  className?: string;
  numeric?: boolean;
  children: React.ReactNode;
}) {
  return (
    <th
      scope="col"
      className={cn(
        "px-4 py-3 font-mono text-xs font-medium tracking-wider text-neutral-500 uppercase",
        numeric && "text-right",
        className,
      )}
    >
      {children}
    </th>
  );
}

export function Td({
  className,
  numeric,
  children,
}: {
  className?: string;
  /** Right-aligned with tabular figures — use for every numeric column. */
  numeric?: boolean;
  children: React.ReactNode;
}) {
  return (
    <td className={cn("px-4 py-3 align-top text-ink", numeric && "text-right font-mono tabular-nums", className)}>
      {children}
    </td>
  );
}
