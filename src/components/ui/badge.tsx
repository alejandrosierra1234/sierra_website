import { cn } from "@/lib/cn";

export type BadgeVariant =
  | "neutral"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "outline";

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-neutral-100 text-neutral-700",
  accent: "bg-clay-100 text-clay-900",
  success: "bg-[#e3efe8] text-success",
  warning: "bg-[#f5ecda] text-warning",
  danger: "bg-[#f6e4e4] text-danger",
  outline: "border border-neutral-300 text-neutral-700",
};

export function Badge({
  variant = "neutral",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-xs px-2 py-0.5 font-mono text-xs font-medium tracking-wide uppercase",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
