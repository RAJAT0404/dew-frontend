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
    <section id="products" className="py-[12vh] bg-[#fafbfd] border-y border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-none">
              Latest Engineering Solutions
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                Featured Products
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-100">
            {filteredProducts.slice(0, 4).map((p) => (
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
