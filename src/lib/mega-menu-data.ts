import {
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Calendar,
  CircleHelp,
  Droplet,
  Droplets,
  Factory,
  FileText,
  Fingerprint,
  Globe,
  HardHat,
  HeartPulse,
  History,
  Home,
  Lightbulb,
  Layers,
  Leaf,
  Mail,
  MapPin,
  Newspaper,
  Package,
  PenTool,
  RefreshCw,
  ShieldCheck,
  Shirt,
  Sparkles,
  Sprout,
  Tag,
  TrendingUp,
  Truck,
  Users,
  Waves,
  Zap,
  Download,
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
    key: "solutions",
    label: "Solutions",
    columns: [
      {
        links: [
          { label: "Full Package", description: "End-to-end production, from fiber to finished goods.", icon: Package, href: "#" },
          { label: "Private Label", description: "Your brand, engineered and manufactured by us.", icon: Tag, href: "#" },
          { label: "Product Development", description: "Concept to first sample, in weeks not months.", icon: PenTool, href: "#" },
          { label: "Nearshoring", description: "North American lead times, without the compromise.", icon: MapPin, href: "#" },
          { label: "Manufacturing Network", description: "One partner, coordinated across every facility.", icon: Factory, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "21 days",
      label: "fiber to finished garment",
      body: "Compare that to 60–90 days for a trans-Pacific supply chain.",
      cta: { label: "Explore Nearshoring", href: "#" },
    },
  },
  {
    key: "capabilities",
    label: "Capabilities",
    columns: [
      {
        title: "Production",
        links: [
          { label: "Fiber", description: "Natural and technical fibers, sourced and spun in-house.", icon: Sprout, href: "#" },
          { label: "Yarn", description: "Ring-spun, open-end and technical yarns, built to spec.", icon: Waves, href: "#" },
          { label: "Fabric", description: "Knits and wovens, dyed and finished under one roof.", icon: Layers, href: "#" },
          { label: "Dyeing", description: "Continuous and batch dyeing with in-line colorimetry.", icon: Droplet, href: "#" },
        ],
      },
      {
        title: "Engineering",
        links: [
          { label: "Finishing", description: "Mechanical and chemical finishes, tuned to performance.", icon: Sparkles, href: "#" },
          { label: "Innovation", description: "Material R&D and technical textile development.", icon: Lightbulb, href: "#" },
          { label: "Quality", description: "In-line testing against ISO and customer standards.", icon: ShieldCheck, href: "#" },
          { label: "Logistics", description: "Bonded warehousing and ground freight across the region.", icon: Truck, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "40M+",
      label: "meters produced annually",
      body: "Serving apparel, workwear and technical partners across North America.",
      cta: { label: "Explore Manufacturing", href: "#" },
    },
  },
  {
    key: "industries",
    label: "Industries",
    columns: [
      {
        links: [
          { label: "Apparel", description: "Fashion and basics, engineered for retail speed.", icon: Shirt, href: "#" },
          { label: "Workwear", description: "Durable fabrics for demanding daily use.", icon: HardHat, href: "#" },
          { label: "Uniforms", description: "Consistent, compliant textiles at program scale.", icon: Users, href: "#" },
          { label: "Healthcare", description: "Certified technical textiles for clinical settings.", icon: HeartPulse, href: "#" },
          { label: "Home", description: "Woven and knitted constructions for living spaces.", icon: Home, href: "#" },
          { label: "Industrial", description: "Technical fabrics engineered to performance spec.", icon: Factory, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "quote",
      quote: "SIERRA re-engineered our supply chain around a 21-day cycle. Nothing else in the region compares.",
      attribution: "VP Sourcing, national apparel brand",
      cta: { label: "Read the case study", href: "#" },
    },
  },
  {
    key: "sustainability",
    label: "Sustainability",
    columns: [
      {
        links: [
          { label: "RegenTrace", description: "Fiber-to-shelf traceability, verified at every stage.", icon: Fingerprint, href: "#" },
          { label: "Circularity", description: "Recycled inputs and closed-loop production lines.", icon: RefreshCw, href: "#" },
          { label: "Renewable Energy", description: "Solar and grid-renewable power across our facilities.", icon: Zap, href: "#" },
          { label: "Certifications", description: "OEKO-TEX®, GOTS and GRS, audited annually.", icon: BadgeCheck, href: "#" },
          { label: "Water Stewardship", description: "Closed-loop water systems, measured and published.", icon: Droplets, href: "#" },
          { label: "ESG", description: "Governance and reporting aligned to global standards.", icon: Leaf, href: "#" },
        ],
      },
    ],
    feature: {
      kind: "stat",
      value: "41%",
      label: "less water per kilogram since 2020",
      body: "Audited annually; certificates available for download.",
      cta: { label: "View our impact report", href: "#" },
    },
  },
  {
    key: "resources",
    label: "Resources",
    columns: [
      {
        links: [
          { label: "Blog", description: "Notes on materials, process and the industry.", icon: Newspaper, href: "#" },
          { label: "Insights", description: "Data and analysis from our production floor.", icon: TrendingUp, href: "#" },
          { label: "White Papers", description: "Deep technical reference for engineering teams.", icon: FileText, href: "#" },
          { label: "Events", description: "Where to meet us, on the trade show floor.", icon: Calendar, href: "#" },
          { label: "Downloads", description: "Spec sheets, certificates and the full catalog.", icon: Download, href: "#" },
          { label: "FAQs", description: "Answers to the questions we hear most.", icon: CircleHelp, href: "#" },
        ],
      },
    ],
  },
  {
    key: "company",
    label: "Company",
    columns: [
      {
        links: [
          { label: "About", description: "Who we are and what we build.", icon: Building2, href: "#" },
          { label: "History", description: "Three decades of vertical integration.", icon: History, href: "#" },
          { label: "Leadership", description: "The team responsible for what we ship.", icon: Award, href: "#" },
          { label: "Careers", description: "Open roles across engineering and production.", icon: Briefcase, href: "#" },
          { label: "Global Network", description: "Our facilities, mapped end to end.", icon: Globe, href: "#" },
          { label: "Contact", description: "Reach a production engineer directly.", icon: Mail, href: "#" },
        ],
      },
    ],
  },
];
