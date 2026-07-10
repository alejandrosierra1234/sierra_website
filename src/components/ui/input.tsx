import { Check } from "lucide-react";
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

/**
 * Checkbox with a fully custom control — never the native OS box. The real
 * <input> stays (form-native, keyboard- and screen-reader-accessible) but
 * is visually hidden; the box and check are drawn with peer utilities.
 */
export function Checkbox({
  label,
  className,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label htmlFor={id} className={cn("flex items-start gap-2.5 text-sm text-ink", className)}>
      <span className="relative mt-0.5 inline-flex shrink-0">
        <input
          type="checkbox"
          id={id}
          {...props}
          className="peer size-[18px] shrink-0 cursor-pointer appearance-none rounded-xs border border-neutral-300 bg-surface transition-colors duration-150 ease-precise checked:border-teal-700 checked:bg-teal-700 hover:border-neutral-400 checked:hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:bg-neutral-100"
        />
        <Check
          aria-hidden
          strokeWidth={3}
          className="pointer-events-none absolute inset-0 m-auto size-3 scale-50 text-paper opacity-0 transition-all duration-150 ease-precise peer-checked:scale-100 peer-checked:opacity-100"
        />
      </span>
      <span>{label}</span>
    </label>
  );
}
