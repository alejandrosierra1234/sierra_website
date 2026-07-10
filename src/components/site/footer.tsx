import Link from "next/link";

const columns = [
  {
    title: "Capabilities",
    links: ["Spinning", "Weaving", "Dyeing & Finishing", "Cut & Sew", "Logistics"],
  },
  {
    title: "Industries",
    links: ["Apparel", "Workwear", "Home Textiles", "Automotive", "Medical"],
  },
  {
    title: "Company",
    links: ["About", "Sustainability", "Nearshoring", "Careers", "News"],
  },
  {
    title: "Resources",
    links: ["Catalog", "Certifications", "Blog", "Events", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[2fr_3fr]">
        <div>
          <p className="font-semibold tracking-[0.3em] text-paper">SIERRA</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            Fully vertical textile manufacturing. From fiber to finished
            product — one partner, one standard, full traceability.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-300 transition-colors duration-150 ease-precise hover:text-paper"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="container-page flex flex-col justify-between gap-3 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SIERRA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors duration-150 hover:text-paper">
              Privacy
            </Link>
            <Link href="#" className="transition-colors duration-150 hover:text-paper">
              Terms
            </Link>
            <Link href="/style-guide" className="transition-colors duration-150 hover:text-paper">
              Design System
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
