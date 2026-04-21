"use client";

import { useState, useRef, useEffect } from "react";
import { categories } from "@/lib/data";

interface CategoryDropdownProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function CategoryDropdown({ value, onChange, className = "" }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayValue = value || "All Categories";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (category: string) => {
    onChange(category === "All Categories" ? "" : category);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative flex-shrink-0 ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full h-full px-5 text-sm font-medium text-muted hover:text-ink transition-colors duration-150 outline-none cursor-pointer min-w-[200px]"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="whitespace-nowrap">{displayValue}</span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className={`w-4 h-4 ml-3 text-faint flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 top-full mt-2 w-64 bg-surface border border-line rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in py-1"
          role="listbox"
        >
          <div className="max-h-72 overflow-y-auto scrollbar-hide">
            {categories.map((cat, index) => {
              const isSelected = (value === "" && cat === "All Categories") || value === cat;
              return (
                <div key={cat} className={index !== categories.length - 1 ? "border-b border-line/30" : ""}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(cat)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left transition-colors duration-150 ${
                      isSelected 
                        ? "bg-accent-subtle text-accent font-semibold" 
                        : "text-muted hover:bg-canvas hover:text-ink"
                    }`}
                  >
                    <span className="truncate">{cat}</span>
                    {isSelected && (
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                        <path d="M12 5L6.5 10.5L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* Subtle footer gradient for scroll depth */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-surface to-transparent pointer-events-none opacity-50" />
        </div>
      )}
    </div>
  );
}
