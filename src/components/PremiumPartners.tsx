"use client";

import { useRef } from "react";

const partners = [
  { name: "Analytis Business", subtitle: "Locatix Engineering Services" },
  { name: "Precision Dynamics", subtitle: "Industrial Manufacturing Division" },
  { name: "CoreTech Systems", subtitle: "OEM Component Specialists" },
  { name: "Vertex Fabrication", subtitle: "Custom Engineering Solutions" },
  { name: "NordMech GmbH", subtitle: "European Supplier Network" },
  { name: "Aquaflow Industries", subtitle: "Fluid Systems & Pumping" },
];

export default function PremiumPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 260 : -260, behavior: "smooth" });
  };

  return (
    <section className="bg-[#fafbfd] py-24 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1557C8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Premium Partners</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 shadow-sm"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 shadow-sm"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable partner list */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 -mx-2 px-2"
          style={{ scrollbarWidth: "none" }}
        >
          {partners.map((p, idx) => (
            <div
              key={p.name}
              className="flex-shrink-0 w-80 bg-white border border-slate-100 rounded-2xl p-6 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-6">
                <p className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors">{p.name}</p>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">{p.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Projects</p>
                  <p className="text-sm font-bold text-slate-700">{(idx + 1) * 12}+</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Experience</p>
                  <p className="text-sm font-bold text-slate-700">{8 + idx} yrs</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} viewBox="0 0 20 20" fill={star <= 4 ? "#F59E0B" : "#E2E8F0"} className="w-3 h-3">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold text-accent group-hover:underline">View Profile</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
