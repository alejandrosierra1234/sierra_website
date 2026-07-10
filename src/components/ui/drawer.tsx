"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Side panel built on the native <dialog> element. Slides in from the
 * right; used for mobile navigation, filters and secondary tasks.
 */
export function Drawer({
  open,
  onClose,
  title,
  className,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children: React.ReactNode;
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
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="drawer-title"
      className={cn(
        "fixed top-0 right-0 bottom-0 m-0 ml-auto h-dvh max-h-none w-80 max-w-[85vw] rounded-l-lg bg-surface p-0 shadow-e4",
        "open:animate-drawer-in",
        className,
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h2 id="drawer-title" className="text-base font-semibold tracking-tight">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="rounded-sm p-1.5 text-neutral-500 transition-colors duration-150 hover:bg-neutral-100 hover:text-ink"
          >
            <X aria-hidden className="size-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </dialog>
  );
}
