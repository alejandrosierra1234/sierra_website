"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// The Design System is the first page of the SIERRA website. Until the
// public pages are built (see /style-guide → Layout Patterns), the root
// route resolves to the Style Guide. Client-side redirect because the
// site is statically exported (server redirects are unavailable).
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/style-guide");
  }, [router]);

  return (
    <main className="container-page py-24">
      <p className="text-sm text-neutral-600">
        Redirecting to the{" "}
        <Link href="/style-guide" className="font-medium text-clay-700 underline underline-offset-4">
          SIERRA Design System
        </Link>
        …
      </p>
    </main>
  );
}
