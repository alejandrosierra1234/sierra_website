import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// SIERRA brand typography — two families, fixed roles (see /style-guide):
//   Replica → display & headings (--font-display)
//   Aeonik  → body & UI text (--font-sans)
//   Geist Mono → technical content (--font-mono)
// Only approved weights ship; the full families live in src/fonts.

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
      className={`${replica.variable} ${aeonik.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
