import { Chapter, Blueprint, BlueprintRow } from "./doc";

export function PatternsChapter() {
  return (
    <Chapter
      id="patterns"
      number="05 · Layout patterns"
      title="Layout patterns"
      lede="Reusable page anatomies. Every future page is assembled from these blueprints using the components above — new layouts require updating this chapter first."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Blueprint
          title="Home"
          description="The four-beat brand story at full scale."
          notes={[
            "Hero with stats row carries the single display headline.",
            "Capabilities as a 3-up card grid; industries as a 4-up card grid.",
            "One dark landmark section (vertical integration story).",
            "CTA block always precedes the footer.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Hero + stats" height="lg" tone="light" />
          <BlueprintRow label="Capabilities ×3" height="md" tone="light" cols={3} />
          <BlueprintRow label="Vertical integration (dark)" height="md" tone="dark" />
          <BlueprintRow label="Industries ×4" height="md" tone="light" cols={4} />
          <BlueprintRow label="Sustainability band" height="sm" tone="accent" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Industry"
          description="One industry’s needs mapped to our capabilities."
          notes={[
            "Compact hero names the industry and its core promise.",
            "Relevant products surface as a product-card grid.",
            "Proof: specs table or certifications relevant to the industry.",
            "FAQ accordion handles procurement questions.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Compact hero" height="md" tone="light" />
          <BlueprintRow label="Capability fit ×3" height="md" tone="light" cols={3} />
          <BlueprintRow label="Products ×3" height="md" tone="light" cols={3} />
          <BlueprintRow label="Certifications table" height="sm" tone="light" />
          <BlueprintRow label="FAQ accordion" height="sm" tone="light" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Product (catalog)"
          description="Filterable, paginated product grid."
          notes={[
            "Search + filter drawer trigger sit above the grid.",
            "12 products per page in a 3-up grid; pagination below.",
            "Empty state offers filter reset and a contact path.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Compact hero" height="sm" tone="light" />
          <BlueprintRow label="Search + filters" height="xs" tone="accent" />
          <BlueprintRow label="Products ×12" height="md" tone="light" cols={3} />
          <BlueprintRow label="Pagination" height="xs" tone="light" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Product detail"
          description="The material, its evidence, and a path to sampling."
          notes={[
            "Swatch gallery left, summary and actions right (stacks below md).",
            "Tabs: Specifications / Certifications / Care.",
            "Downloads (TDS, certificates) as download cards.",
            "Related products close the page before the CTA.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Gallery · Summary + actions" height="lg" tone="light" cols={2} />
          <BlueprintRow label="Spec tabs + table" height="md" tone="light" />
          <BlueprintRow label="Downloads" height="sm" tone="light" />
          <BlueprintRow label="Related ×3" height="md" tone="light" cols={3} />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Sustainability"
          description="Audited numbers first, narrative second."
          notes={[
            "Stats hero leads with measured impact figures.",
            "Certifications as a badge/table section — verifiable claims only.",
            "Process narrative alternates default/muted sections.",
            "Reports and certificates as download cards.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Hero + impact stats" height="md" tone="light" />
          <BlueprintRow label="Certifications" height="sm" tone="light" />
          <BlueprintRow label="Process narrative" height="md" tone="light" />
          <BlueprintRow label="Water / energy / waste ×3" height="md" tone="light" cols={3} />
          <BlueprintRow label="Reports (downloads)" height="sm" tone="light" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Nearshoring"
          description="The speed argument, made with numbers."
          notes={[
            "Hero contrasts lead times (21 days vs. 60–90) in the stats row.",
            "Comparison table: SIERRA vs. trans-Pacific supply chain.",
            "Logistics map/diagram as the dark landmark section.",
            "FAQ accordion answers switching-cost questions.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Hero + lead-time stats" height="md" tone="light" />
          <BlueprintRow label="Comparison table" height="md" tone="light" />
          <BlueprintRow label="Logistics (dark)" height="md" tone="dark" />
          <BlueprintRow label="FAQ accordion" height="sm" tone="light" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Company"
          description="Who runs the machines and why it matters."
          notes={[
            "Compact hero states the company thesis, not a welcome.",
            "Timeline section for history; stats for scale.",
            "Facilities as cards with honest photography.",
            "Careers teaser links out; no separate mission fluff section.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Compact hero" height="sm" tone="light" />
          <BlueprintRow label="Thesis + stats" height="md" tone="light" />
          <BlueprintRow label="Timeline" height="md" tone="light" />
          <BlueprintRow label="Facilities ×3" height="md" tone="light" cols={3} />
          <BlueprintRow label="Careers teaser" height="sm" tone="accent" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Resources"
          description="Everything downloadable, searchable in one place."
          notes={[
            "Search filters the full document library live.",
            "Download cards grouped by type (catalogs, TDS, certificates).",
            "Pagination beyond 12 items per group.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Compact hero + search" height="sm" tone="light" />
          <BlueprintRow label="Catalogs" height="sm" tone="light" />
          <BlueprintRow label="Data sheets" height="sm" tone="light" />
          <BlueprintRow label="Certificates" height="sm" tone="light" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Blog"
          description="Industrial storytelling on a strict grid."
          notes={[
            "Featured post spans two columns; the rest are 3-up cards.",
            "Category tabs filter; pagination below the grid.",
            "Post pages use a 680px measure with pull-quote and figure styles.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Compact hero + category tabs" height="sm" tone="light" />
          <BlueprintRow label="Featured post" height="md" tone="accent" />
          <BlueprintRow label="Posts ×9" height="md" tone="light" cols={3} />
          <BlueprintRow label="Pagination" height="xs" tone="light" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Events"
          description="Where to meet us, with zero ambiguity."
          notes={[
            "Upcoming events as rows: date (mono), fair name, location, booth, action.",
            "Past events collapse into an accordion archive.",
            "Each event’s action is specific: “Book a meeting at ITMA”.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Compact hero" height="sm" tone="light" />
          <BlueprintRow label="Upcoming events (table)" height="md" tone="light" />
          <BlueprintRow label="Past events (accordion)" height="sm" tone="light" />
          <BlueprintRow label="CTA block" height="sm" tone="dark" />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>

        <Blueprint
          title="Contact"
          description="The conversation starter — short form, real people, real places."
          notes={[
            "Form left, direct contacts and locations right (stacks below md).",
            "Six fields maximum; success confirms inline with response time.",
            "Facility addresses in mono with timezone-aware office hours.",
          ]}
        >
          <BlueprintRow label="Navbar" height="xs" tone="mid" />
          <BlueprintRow label="Compact hero" height="sm" tone="light" />
          <BlueprintRow label="Form · Contacts + locations" height="lg" tone="light" cols={2} />
          <BlueprintRow label="Footer" height="sm" tone="mid" />
        </Blueprint>
      </div>
    </Chapter>
  );
}
