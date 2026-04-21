"use client";

import { useRef } from "react";

const partners = [
  {
    name: "Siemens",
    subtitle: "Industrial Automation & Drives",
    logo: (
      // ABB: bold stacked letters in box
      <svg viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <rect width="34" height="24" rx="2" fill="#0D0D0D" />
        <text x="17" y="17" textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">ABB</text>
      </svg>
    ),
  },
  {
    name: "Bosch",
    subtitle: "Engineering & Technology",
    logo: (
      // Bosch-style: circle badge mark
      <svg viewBox="0 0 68 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <circle cx="12" cy="12" r="11" fill="#0D0D0D" />
        <circle cx="12" cy="12" r="7" fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="white" />
        <text x="28" y="17" fill="#0D0D0D" fontSize="13" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.2">Bosch</text>
      </svg>
    ),
  },
  {
    name: "Parker",
    subtitle: "Motion & Control Technologies",
    logo: (
      // Parker: angular arrow mark
      <svg viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <polygon points="0,12 10,2 20,12 10,22" fill="#0D0D0D" />
        <polygon points="5,12 10,7 15,12 10,17" fill="white" />
        <text x="26" y="17" fill="#0D0D0D" fontSize="13" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.2">Parker</text>
      </svg>
    ),
  },
  {
    name: "ABB",
    subtitle: "Power & Automation",
    logo: (
      // ABB: bold stacked letters in box
      <svg viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <rect width="34" height="24" rx="2" fill="#0D0D0D" />
        <text x="17" y="17" textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">ABB</text>
      </svg>
    ),
  },
  {
    name: "SKF",
    subtitle: "Bearings & Sealing Solutions",
    logo: (
      // Parker: angular arrow mark
      <svg viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <polygon points="0,12 10,2 20,12 10,22" fill="#0D0D0D" />
        <polygon points="5,12 10,7 15,12 10,17" fill="white" />
        <text x="26" y="17" fill="#0D0D0D" fontSize="13" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.2">Parker</text>
      </svg>
    ),
  },
  {
    name: "Festo",
    subtitle: "Pneumatic & Electric Automation",
    logo: (
      // Festo: clean hex mark
      <svg viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <polygon points="12,1 21,6 21,18 12,23 3,18 3,6" fill="#0D0D0D" />
        <text x="12" y="17" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="sans-serif">F</text>
        <text x="28" y="17" fill="#0D0D0D" fontSize="13" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.2">Festo</text>
      </svg>
    ),
  },
];

export default function PremiumPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 280 : -280,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Premium Partners
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-150"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-150"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable partner list */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex-shrink-0 w-60 border border-slate-200 rounded-xl px-5 py-5 hover:border-slate-300 hover:shadow-md transition-all duration-200 cursor-pointer bg-white hover:bg-slate-50"
            >
              {/* Brand logo */}
              <div className="mb-6 h-8 flex items-center">
                {p.logo}
              </div>

              {/* Company name as heading */}
              <p className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                {p.name}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}