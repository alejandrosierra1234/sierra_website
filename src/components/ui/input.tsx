import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Form field wrapper: pairs a visible label with any control and wires
 * hint/error text. Every input on the site must be labeled through Field
 * (or carry an explicit aria-label in icon-only cases like Search).
 */
export function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required && (
          <span aria-hidden className="text-danger">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-sm text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${htmlFor}-hint`} className="text-sm text-neutral-600">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

const controlBase = cn(
  "w-full rounded-md border border-neutral-200 bg-surface text-base text-ink placeholder:text-neutral-400",
  "transition-colors duration-150 ease-precise hover:border-neutral-400",
  "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal-700 focus-visible:border-transparent",
  "disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
  "aria-invalid:border-danger",
);

export function Input({
  className,
  invalid,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      className={cn(controlBase, "h-11 px-3.5", className)}
    />
  );
}

export function Textarea({
  className,
  invalid,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      {...props}
      aria-invalid={invalid || undefined}
      className={cn(controlBase, "min-h-24 px-3.5 py-2.5", className)}
    />
  );
}

export function Select({
  className,
  invalid,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  return (
    <div className="relative">
      <select
        {...props}
        aria-invalid={invalid || undefined}
        className={cn(controlBase, "h-11 appearance-none pr-9 pl-3.5", className)}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-500"
      />
    </div>
  );
}

export function Checkbox({
  label,
  className,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label htmlFor={id} className={cn("flex items-start gap-2.5 text-sm text-ink", className)}>
      <input
        type="checkbox"
        id={id}
        {...props}
        className="mt-0.5 size-4 shrink-0 rounded-xs border-neutral-300 accent-teal-700"
      />
      <span>{label}</span>
    </label>
  );
}
