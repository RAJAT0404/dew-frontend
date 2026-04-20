"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { categories } from "@/lib/data";

const categoryIcons: Record<string, React.ReactNode> = {
  "Centrifugal Pumps": (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" />
    </svg>
  ),
  "Submersible Pumps": (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <path d="M10 3v14M6 7l4-4 4 4M4 17h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Positive Displacement": (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 5v10M13 5v10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  "Axial Flow Pumps": (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <path d="M10 3l7 7-7 7-7-7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  "Peristaltic Pumps": (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <path d="M3 10c2-4 4-4 6 0s4 4 6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  "Self-Priming Pumps": (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Multistage Pumps": (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
      <rect x="4" y="4" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="7" y="7" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
};

export default function CategoryPills() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const displayCategories = categories.filter((c) => c !== "All Categories");

  const handleCategoryClick = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeCategory === cat) {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`/?${params.toString()}#products`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2.5">
      {displayCategories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer font-medium ${
              isActive
                ? "bg-accent text-white border-accent shadow-sm"
                : "text-muted bg-surface border-line hover:border-accent-border hover:text-accent hover:bg-accent-subtle"
            }`}
          >
            <span className={isActive ? "text-white" : "text-faint"}>
              {categoryIcons[cat] ?? (
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              )}
            </span>
            {cat}
          </button>
        );
      })}
    </div>
  );
}
