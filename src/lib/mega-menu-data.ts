import {
  Sprout,
  Waves,
  Layers,
  Droplet,
  Leaf,
  Globe,
  Zap,
  FileText,
  Building2,
  History,
  Users,
  Mail,
  Briefcase,
  MapPin,
  Truck,
  Droplets,
  Fingerprint,
  RefreshCw,
  BadgeCheck,
  Newspaper,
  BookOpen,
  Award,
  type LucideIcon,
} from "lucide-react";

export type MegaMenuLink = {
  label: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export type MegaMenuColumnData = {
  /** Category eyebrow. Omitted when a menu has a single, self-evident column. */
  title?: string;
  links: MegaMenuLink[];
};

export type MegaMenuFeatureData =
  | {
      kind: "stat";
      value: string;
      label: string;
      body: string;
      cta: { label: string; href: string };
    }
  | {
      kind: "quote";
      quote: string;
      attribution: string;
      cta: { label: string; href: string };
    };

export type NavItemData = {
  key: string;
  label: string;
  columns: MegaMenuColumnData[];
  feature?: MegaMenuFeatureData;
};

/**
 * The SIERRA navigation content architecture. Fully data-driven — the
 * Navbar, MegaMenu and MobileMenu components render from this file alone.
 * Add a destination here; it appears consistently everywhere.
 */
export const navItems: NavItemData[] = [
  {
    key: "fiber",
    label: "Fiber",
    columns: [
      {
        title: "Links",
        links: [
          { label: "Cotton", description: "High-performance cotton for premium applications.", icon: Sprout, href: "#" },
          { label: "Organic Cotton", description: "Certified organic cotton from sustainable sources.", icon: Leaf, href: "#" },
          { label: "Recycled Cotton", description: "Post-consumer and post-industrial recycled cotton.", icon: RefreshCw, href: "#" },
          { label: "Wool", description: "Fine wool for luxury and performance textiles.", icon: Sprout, href: "#" },
        ],
      },
      {
        title: "Supporting",
        links: [
          { label: "Synthetic Fibers", description: "Technical synthetics engineered for performance.", icon: Layers, href: "#" },
          { label: "Fiber Development", description: "Custom fiber blending and innovation.", icon: Sprout, href: "#" },
          { label: "Certifications", description: "OEKO-TEX®, GOTS, and GRS certified.", icon: BadgeCheck, href: "#" },
          { label: "Traceability", description: "Fiber-to-shelf tracking and verification.", icon: Fingerprint, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "100%",
      label: "vertical fiber sourcing",
      body: "From cotton fields to yarn production, we control every stage.",
      cta: { label: "Explore Fiber", href: "#" },
    },
  },
  {
    key: "yarn",
    label: "Yarn",
    columns: [
      {
        title: "Links",
        links: [
          { label: "Ring Spun", description: "Classic ring spun yarn for superior strength.", icon: Waves, href: "#" },
          { label: "Open End", description: "High-volume open end production for value.", icon: Waves, href: "#" },
          { label: "Compact", description: "Compact spun yarn for enhanced smoothness.", icon: Waves, href: "#" },
          { label: "Mélange", description: "Specialty mélange yarns in custom colorways.", icon: Waves, href: "#" },
        ],
      },
      {
        title: "Supporting",
        links: [
          { label: "Dyed Yarn", description: "Custom dyed yarns in any specification.", icon: Droplet, href: "#" },
          { label: "Count Range", description: "Ne 4s to Ne 120s available in all styles.", icon: Waves, href: "#" },
          { label: "Testing", description: "ISO and customer spec verification.", icon: BadgeCheck, href: "#" },
          { label: "Quality", description: "Consistent quality across all production.", icon: Layers, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "40M+",
      label: "kilograms spun annually",
      body: "Engineered for consistency and performance at scale.",
      cta: { label: "Explore Yarn", href: "#" },
    },
  },
  {
    key: "fabric",
    label: "Fabric",
    columns: [
      {
        title: "Links",
        links: [
          { label: "Jersey", description: "Lightweight single knits for comfort.", icon: Layers, href: "#" },
          { label: "Rib", description: "Performance ribs for athletic and casual wear.", icon: Layers, href: "#" },
          { label: "Interlock", description: "Stable, substantial knits for structured garments.", icon: Layers, href: "#" },
          { label: "Fleece", description: "Technical fleece for warmth and performance.", icon: Layers, href: "#" },
        ],
      },
      {
        title: "Supporting",
        links: [
          { label: "Piqué", description: "Structured piqué for polo shirts and activewear.", icon: Layers, href: "#" },
          { label: "Dyeing", description: "In-house dyeing with inline colorimetry.", icon: Droplet, href: "#" },
          { label: "Printing", description: "Digital and rotary printing on request.", icon: Layers, href: "#" },
          { label: "Testing", description: "Shrinkage, colorfastness, and durability testing.", icon: BadgeCheck, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "250+",
      label: "fabric styles in catalog",
      body: "Advanced development supported by full vertical integration.",
      cta: { label: "Explore Fabric", href: "#" },
    },
  },
  {
    key: "chemicals",
    label: "Chemicals",
    columns: [
      {
        title: "Links",
        links: [
          { label: "Pretreatment", description: "Advanced pretreatment for fiber preparation.", icon: Droplet, href: "#" },
          { label: "Dyeing", description: "Dyestuffs and auxiliaries for all fiber types.", icon: Droplet, href: "#" },
          { label: "Finishing", description: "Chemical finishes for performance and comfort.", icon: Droplet, href: "#" },
          { label: "Performance Treatments", description: "Water repellency, antimicrobial, and more.", icon: Zap, href: "#" },
        ],
      },
      {
        title: "Supporting",
        links: [
          { label: "Textile Auxiliaries", description: "Specialized auxiliaries for production.", icon: Droplet, href: "#" },
          { label: "Laboratory", description: "On-site testing and formulation.", icon: FileText, href: "#" },
          { label: "Compliance", description: "All products meet global standards.", icon: BadgeCheck, href: "#" },
          { label: "Technical Support", description: "Direct support from our chemistry team.", icon: Mail, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "Zero",
      label: "hazardous chemical restrictions",
      body: "All chemicals selected for safety, sustainability and performance.",
      cta: { label: "Explore Chemicals", href: "#" },
    },
  },
  {
    key: "network",
    label: "Network",
    columns: [
      {
        title: "Geography",
        links: [
          { label: "Honduras", description: "Primary production hub for integrated operations.", icon: MapPin, href: "#" },
          { label: "Guatemala", description: "Specialized fabric and finishing operations.", icon: MapPin, href: "#" },
          { label: "Nicaragua", description: "Strategic expansion for additional capacity.", icon: MapPin, href: "#" },
          { label: "Distribution", description: "Nearshoring logistics across North America.", icon: Truck, href: "#" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Manufacturing Network", description: "Integrated ecosystem across the CAFTA region.", icon: Globe, href: "#" },
          { label: "Nearshoring", description: "21-day lead times from fiber to finished goods.", icon: Truck, href: "#" },
          { label: "Capacity", description: "Scalable production to meet demand.", icon: Layers, href: "#" },
          { label: "Vertical Integration", description: "Every stage of production under one partner.", icon: Building2, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "21 days",
      label: "fiber to finished garment",
      body: "Compare that to 60–90 days for trans-Pacific supply chains.",
      cta: { label: "Explore Network", href: "#" },
    },
  },
  {
    key: "sustainability",
    label: "Sustainability",
    columns: [
      {
        title: "Impact",
        links: [
          { label: "RegenTrace", description: "Fiber-to-shelf traceability and verification.", icon: Fingerprint, href: "#" },
          { label: "Circularity", description: "Recycled inputs and closed-loop production.", icon: RefreshCw, href: "#" },
          { label: "Water", description: "Closed-loop water systems across facilities.", icon: Droplets, href: "#" },
          { label: "Energy", description: "Renewable power for sustainable manufacturing.", icon: Zap, href: "#" },
        ],
      },
      {
        title: "Governance",
        links: [
          { label: "Social Impact", description: "Fair wages and safe working conditions.", icon: Users, href: "#" },
          { label: "Certifications", description: "OEKO-TEX®, GOTS, GRS audited annually.", icon: BadgeCheck, href: "#" },
          { label: "ESG", description: "Reporting aligned to global standards.", icon: Leaf, href: "#" },
          { label: "Goals", description: "Carbon neutral by 2030 commitment.", icon: Zap, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "41%",
      label: "less water per kilogram since 2020",
      body: "Audited annually; impact reports available for download.",
      cta: { label: "View Impact Report", href: "#" },
    },
  },
  {
    key: "insights",
    label: "Insights",
    columns: [
      {
        title: "Content",
        links: [
          { label: "Articles", description: "Perspectives on materials, process and industry.", icon: Newspaper, href: "#" },
          { label: "Case Studies", description: "Real-world outcomes from our partnerships.", icon: BookOpen, href: "#" },
          { label: "White Papers", description: "Deep technical reference for engineering teams.", icon: FileText, href: "#" },
          { label: "Events", description: "Where to meet us on the trade show floor.", icon: Award, href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Downloads", description: "Spec sheets, certificates and full catalog.", icon: FileText, href: "#" },
          { label: "News", description: "Latest updates from SIERRA.", icon: Newspaper, href: "#" },
          { label: "Manufacturing", description: "Insights from our production floor.", icon: Layers, href: "#" },
          { label: "Nearshoring", description: "The future of North American textiles.", icon: MapPin, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "quote",
      quote: "The most innovative textile companies aren't in Asia anymore. They're vertical, local, and sustainable.",
      attribution: "Industry analyst report, 2024",
      cta: { label: "View All Insights", href: "#" },
    },
  },
  {
    key: "company",
    label: "Company",
    columns: [
      {
        links: [
          { label: "About", description: "Who we are and what we build.", icon: Building2, href: "#" },
          { label: "Leadership", description: "The team responsible for what we ship.", icon: Award, href: "#" },
          { label: "History", description: "Three decades of vertical integration.", icon: History, href: "#" },
          { label: "Careers", description: "Open roles across engineering and production.", icon: Briefcase, href: "#" },
          { label: "Contact", description: "Reach a production engineer directly.", icon: Mail, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "30+",
      label: "years of vertical integration",
      body: "Building SIERRA as the world's most reliable textile partner.",
      cta: { label: "Learn About SIERRA", href: "#" },
    },
  },
];
