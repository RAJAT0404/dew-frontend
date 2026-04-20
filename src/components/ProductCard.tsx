import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      id={`product-card-${product.id}`}
      className="group flex flex-col bg-surface border border-line rounded-xl overflow-hidden hover:border-accent-border hover:shadow-md transition-all duration-250"
    >
      {/* Product image */}
      <div className="aspect-[4/3] overflow-hidden bg-canvas relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2.5 p-5 flex-1">
        {/* Category badge */}
        <span className="self-start text-[11px] font-semibold uppercase tracking-widest text-accent-muted bg-accent-subtle px-2.5 py-1 rounded-md">
          {product.category}
        </span>

        {/* Product name */}
        <h3 className="font-display text-lg font-semibold text-ink leading-snug group-hover:text-accent transition-colors duration-200">
          {product.name}
        </h3>

        {/* Company */}
        <p className="text-sm text-muted font-medium -mt-1">
          {product.company}
        </p>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed line-clamp-2 mt-auto">
          {product.shortDescription}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-3 mt-2 border-t border-line">
          <span className="text-xs text-faint">
            {new Date(product.releaseDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
            View details
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
