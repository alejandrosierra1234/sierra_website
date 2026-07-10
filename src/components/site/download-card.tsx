import { Download, FileText } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Row card for spec sheets, certificates and catalogs.
 * File format and size are always visible before the user commits.
 */
export function DownloadCard({
  title,
  format,
  size,
  href = "#",
  className,
}: {
  title: string;
  format: string;
  size: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      download
      className={cn(
        "group flex items-center gap-4 rounded-lg bg-surface p-4 shadow-e1",
        "transition-shadow duration-150 ease-precise hover:shadow-e2",
        className,
      )}
    >
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-neutral-100 text-neutral-700">
        <FileText aria-hidden className="size-5" strokeWidth={1.5} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold tracking-tight">{title}</span>
        <span className="mt-0.5 block font-mono text-xs tracking-wide text-neutral-500 uppercase">
          {format} · {size}
        </span>
      </span>
      <Download
        aria-hidden
        className="size-4 shrink-0 text-neutral-400 transition-colors duration-150 group-hover:text-teal-800"
      />
    </a>
  );
}
