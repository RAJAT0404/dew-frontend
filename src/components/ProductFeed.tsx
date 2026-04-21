"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CategoryPills from "./CategoryPills";
import ProductCard from "./ProductCard";
import { products } from "@/lib/data";

export default function ProductFeed() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const category = searchParams.get("category") || "";

  const filteredProducts = products.filter((p) => {
    const matchesQuery = !query || 
      p.name.toLowerCase().includes(query) || 
      p.company.toLowerCase().includes(query) || 
      p.tags.some(t => t.toLowerCase().includes(query));
    
    const matchesCategory = !category || p.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <section id="products" className="py-20 bg-surface border-y border-line scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink tracking-tight">
              {category || query ? "Search Results" : "Latest Products"}
            </h2>
            <p className="text-sm text-muted mt-3 max-w-lg">
            Whether you&apos;re sourcing components or selling them, Dew puts the right information at your fingertips.
          </p>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.slice(0,4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-line rounded-2xl bg-canvas">
            <p className="text-muted">No products found matching your criteria.</p>
            <Link href="/#products" className="text-accent font-semibold mt-2 inline-block">
              View all products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
