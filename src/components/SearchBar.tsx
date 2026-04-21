"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/lib/data";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);
    router.push(`/#products`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
      role="search"
      aria-label="Search engineering products"
    >
      {/* Main search row */}
      <div className="flex items-stretch bg-surface border border-line rounded-xl shadow-sm hover:border-accent-border focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15 transition-all duration-200 overflow-hidden">
        {/* Search icon */}
        <div className="flex items-center pl-4 pr-3 text-faint flex-shrink-0">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Text input */}
        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pumps, power supplies, manufacturers..."
          className="flex-1 py-6 text-base text-ink placeholder:text-faint bg-transparent outline-none min-w-0"
          autoComplete="off"
          spellCheck={false}
        />

        {/* Divider */}
        <div className="w-px bg-line my-3 flex-shrink-0" aria-hidden="true" />

        {/* Category select */}
        <select
          id="search-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="appearance-none bg-transparent text-sm text-muted px-4 outline-none cursor-pointer hover:text-ink transition-colors duration-150 pr-8 flex-shrink-0"
          aria-label="Filter by category"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%239C9C97' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "16px",
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat === "All Categories" ? "" : cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Submit button */}
        <button
          id="search-submit"
          type="submit"
          className="m-2 px-5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors duration-150 flex-shrink-0"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </form>
  );
}
