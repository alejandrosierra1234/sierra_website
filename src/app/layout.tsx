import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// SIERRA brand typography — three families, all our own (see /style-guide):
//   Replica      → display & headings (--font-display)
//   Aeonik       → body & UI text (--font-sans)
//   Replica Mono → technical content: specs, figures, eyebrows (--font-mono)
// No third-party typefaces. Only approved cuts ship; full families live in
// src/fonts.

const replica = localFont({
  src: [
    { path: "../fonts/Replica-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/Replica-Regular.otf", weight: "400 500", style: "normal" },
    { path: "../fonts/Replica-Italic.otf", weight: "400 500", style: "italic" },
    { path: "../fonts/Replica-Bold.otf", weight: "600 700", style: "normal" },
    { path: "../fonts/Replica-BoldItalic.otf", weight: "600 700", style: "italic" },
  ],
  variable: "--font-replica",
  display: "swap",
});

const aeonik = localFont({
  src: [
    { path: "../fonts/Aeonik-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Aeonik-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Aeonik-RegularItalic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/Aeonik-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Aeonik-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../fonts/Aeonik-Bold.ttf", weight: "600 700", style: "normal" },
    { path: "../fonts/Aeonik-BoldItalic.ttf", weight: "600 700", style: "italic" },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

// Replica Mono ships a single Regular cut; declare it across the 400–500
// range so mono labels at font-medium render in the real face (at its
// natural weight) rather than a synthesized bold.
const replicaMono = localFont({
  src: [{ path: "../fonts/ReplicaMonoLL-Regular.otf", weight: "400 500", style: "normal" }],
  variable: "--font-replica-mono",
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
    <html
      lang="en"
      className={`${replica.variable} ${aeonik.variable} ${replicaMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
