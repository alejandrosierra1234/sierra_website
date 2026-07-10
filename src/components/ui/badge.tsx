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
  accent: "bg-teal-100 text-teal-900",
  success: "bg-green-100 text-success",
  warning: "bg-yellow-100 text-warning",
  danger: "bg-red-100 text-danger",
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
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-xs font-medium tracking-wide uppercase",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
