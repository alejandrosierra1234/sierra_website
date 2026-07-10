"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Modal dialog built on the native <dialog> element: focus trapping,
 * Escape-to-close and top-layer stacking come from the platform.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  footer,
  className,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // Click on the backdrop (the dialog element itself) dismisses.
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="modal-title"
      className={cn(
        "m-auto w-[calc(100vw-2rem)] max-w-lg rounded-lg bg-surface p-0 shadow-e4",
        "open:animate-modal-in",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 p-6 pb-0">
        <div>
          <h2 id="modal-title" className="text-lg font-semibold tracking-tight">
            {title}
          </h2>
          {description && <p className="mt-1 text-sm text-neutral-600">{description}</p>}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="rounded-sm p-1.5 text-neutral-500 transition-colors duration-150 hover:bg-neutral-100 hover:text-ink"
        >
          <X aria-hidden className="size-4" />
        </button>
      </div>
      {children && <div className="p-6">{children}</div>}
      {footer && (
        <div className="flex justify-end gap-3 border-t border-neutral-200 px-6 py-4">{footer}</div>
      )}
    </dialog>
  );
}
