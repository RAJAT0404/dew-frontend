"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/lib/data";
import CategoryDropdown from "./CategoryDropdown";

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
      <div className="flex items-stretch bg-surface border border-line rounded-xl shadow-sm hover:border-accent-border focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15 transition-all duration-200">
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

        {/* Category Dropdown */}
        <CategoryDropdown 
          value={category}
          onChange={setCategory}
        />

        {/* Submit button */}
        <button
          id="search-submit"
          type="submit"
          className="cursor-pointer m-2 px-8 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors duration-150 flex-shrink-0"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </form>
  );
}
