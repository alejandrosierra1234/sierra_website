import { redirect } from "next/navigation";

// The Design System is the first page of the SIERRA website. Until the
// public pages are built (see /style-guide → Layout Patterns), the root
// route resolves to the Style Guide.
export default function Home() {
  redirect("/style-guide");
}
