"use client";

import { useState } from "react";
import { Product } from "@/lib/data";

interface SmartSummaryProps {
  product: Product;
}

export default function SmartSummary({ product }: SmartSummaryProps) {
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState(product.shortDescription);

  const handleSummarize = () => {
    setIsSummarizing(true);
    // Dummy functionality: simulate AI processing
    setTimeout(() => {
      setIsSummarizing(false);
      setSummary(
        `The ${product.name} by ${product.company} is a premium ${product.category} solution. Key features include ${Object.values(
          product.specifications || {}
        ).slice(0, 2).join(" and ")}. Ideal for ${product.tags.slice(0, 2).join(", ")} applications.`
      );
    }, 1500);
  };

  return (
    <div className="mt-12 p-6 rounded-xl border border-accent/20 bg-accent-subtle/30 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-accent">
            AI-Powered Summary
          </h3>
        </div>
        <button
          onClick={handleSummarize}
          disabled={isSummarizing}
          className="text-[11px] font-semibold text-accent hover:text-accent-hover flex items-center gap-1.5 transition-colors disabled:opacity-50"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className={`w-3.5 h-3.5 ${isSummarizing ? "animate-spin" : ""}`}
          >
            <path
              d="M13.333 8A5.333 5.333 0 018 13.333M2.667 8A5.333 5.333 0 018 2.667M10 2.667h3.333V6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {isSummarizing ? "Synthesizing..." : "Regenerate"}
        </button>
      </div>

      <div className="relative">
        {isSummarizing && (
          <div className="absolute inset-0 bg-accent-subtle/50 backdrop-blur-[2px] flex items-center justify-center rounded-lg z-10">
             <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1 h-1 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1 h-1 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
             </div>
          </div>
        )}
        <p className="text-[14px] text-ink/90 leading-relaxed font-medium">
          {summary}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {product.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] font-bold text-accent-muted uppercase tracking-tighter">
            #{tag.replace(/\s+/g, '')}
          </span>
        ))}
      </div>
    </div>
  );
}
