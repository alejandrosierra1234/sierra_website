import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// Replica (Lineto) — the SIERRA brand typeface. Three real weights:
// Light 300, Regular 400 (also serves 500), Bold 700 (also serves 600),
// so font-medium/font-semibold resolve to real cuts, never synthesized.
const replica = localFont({
  src: [
    { path: "../fonts/Replica-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/Replica-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../fonts/Replica-Regular.otf", weight: "400 500", style: "normal" },
    { path: "../fonts/Replica-Italic.otf", weight: "400 500", style: "italic" },
    { path: "../fonts/Replica-Bold.otf", weight: "600 700", style: "normal" },
    { path: "../fonts/Replica-BoldItalic.otf", weight: "600 700", style: "italic" },
  ],
  variable: "--font-replica",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SIERRA — Vertical Textile Manufacturing",
    template: "%s · SIERRA",
  },
  description:
    "SIERRA is a fully vertical textile manufacturer: integrated capabilities, nearshore speed, and full traceability from fiber to finished product.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${replica.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
