"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, categories, Product } from "@/lib/data";
import ProductCard from "./ProductCard";
import CategoryPills from "./CategoryPills";
import CategoryDropdown from "./CategoryDropdown";

const ITEMS_PER_PAGE = 12; // 4x3 grid

export default function ProductCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "All Categories");

  // Sync state with URL params
  useEffect(() => {
    const q = searchParams.get("q") || "";
    const cat = searchParams.get("category") || "All Categories";
    setSearchQuery(q);
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to first page on filter change
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === "All Categories" || p.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) params.set("q", searchQuery);
    else params.delete("q");
    if (activeCategory !== "All Categories") params.set("category", activeCategory);
    else params.delete("category");
    router.push(`/catalog?${params.toString()}`, { scroll: false });
  };

  return (
    <div id="products" className="max-w-7xl mx-auto px-6 lg:px-10 py-12 scroll-mt-24">
      {/* Search and Filters Header */}
      <div className="flex flex-col space-y-8 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl font-bold text-ink tracking-tight">
              Product Catalog
            </h1>
            <p className="text-muted mt-3 text-lg leading-relaxed">
              Browse our comprehensive directory of industrial engineering solutions, technical data, and expert manufacturers.
            </p>
          </div>
          
          <form 
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-2xl w-full"
          >
            <div className="flex items-stretch bg-surface border border-line rounded-xl shadow-sm hover:border-accent-border focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15 transition-all duration-200">
              {/* Search icon */}
              <div className="flex items-center pl-4 pr-3 text-faint flex-shrink-0">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                  <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Text input */}
              <input
                type="text"
                placeholder="Search products, companies, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-4 text-base text-ink placeholder:text-faint bg-transparent outline-none min-w-0"
              />

              {/* Divider */}
              <div className="w-px bg-line my-3 flex-shrink-0" aria-hidden="true" />

              {/* Category Dropdown */}
              <CategoryDropdown 
                value={activeCategory === "All Categories" ? "" : activeCategory}
                onChange={(val) => {
                  const category = val || "All Categories";
                  setActiveCategory(category);
                  const params = new URLSearchParams(searchParams.toString());
                  if (val) params.set("category", val);
                  else params.delete("category");
                  router.push(`/catalog?${params.toString()}`, { scroll: false });
                }}
              />

              {/* Submit button */}
              <button
                type="submit"
                className="cursor-pointer m-2 px-6 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors duration-150 flex-shrink-0"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="border-t border-line/50 pt-8">
           <CategoryPills />
        </div>
      </div>

      {/* Grid */}
      {paginatedProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-line text-muted hover:bg-canvas disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`min-w-[40px] h-10 rounded-lg font-medium text-sm transition-all ${
                      currentPage === page
                        ? "bg-accent text-white shadow-md shadow-accent/20"
                        : "text-muted hover:bg-canvas hover:text-ink border border-transparent"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-line text-muted hover:bg-canvas disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
          
          <div className="mt-8 text-center text-sm text-faint">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} products
          </div>
        </>
      ) : (
        <div className="py-32 text-center border border-dashed border-line rounded-3xl bg-canvas/50">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-line/20 text-faint mb-4">
             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
          </div>
          <h3 className="text-xl font-semibold text-ink">No products found</h3>
          <p className="text-muted mt-2 max-w-sm mx-auto">
            We couldn't find any products matching your current filters. Try adjusting your search or category selection.
          </p>
          <button 
            onClick={() => router.push('/catalog')}
            className="mt-6 text-accent font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
