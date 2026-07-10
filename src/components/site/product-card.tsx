import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

/**
 * Product tile for catalog grids. The whole card is one link;
 * specs are shown as quiet mono chips, never more than three.
 */
export function ProductCard({
  name,
  category,
  specs = [],
  href = "#",
  className,
}: {
  name: string;
  category: string;
  specs?: string[];
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-lg bg-surface shadow-e1",
        "transition-shadow duration-150 ease-precise hover:shadow-e2",
        className,
      )}
    >
      <div className="swatch-weave aspect-4/3 w-full transition-opacity duration-150 group-hover:opacity-90" />
      <div className="p-5">
        <p className="eyebrow">{category}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight transition-colors duration-150 group-hover:text-teal-800">
          {name}
        </h3>
        {specs.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {specs.slice(0, 3).map((spec) => (
              <Badge key={spec} variant="outline">
                {spec}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
