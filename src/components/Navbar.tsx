"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Insights", href: "/#products" },
  { label: "Supplier Network", href: "/" },
  { label: "Engineering Tools", href: "/#how-it-works" },
  { label: "Jobs", href: "/" },
  { label: "Knowledge", href: "/" },
  { label: "Advisors", href: "/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 pt-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Floating pill card */}
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-5 py-3.5 gap-6">

          {/* Logo word-mark */}
          <Link href="/" aria-label="Dew Home" className="flex-shrink-0">
            <span className="text-[10px] font-black uppercase tracking-widest text-white leading-snug block">
              DESIGN<br />ENGINEERING<br />WORLD
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7 flex-1 justify-center" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/75 hover:text-white font-medium transition-colors duration-150 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/"
              className="inline-flex items-center bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-150 shadow-sm"
            >
              Get Listed
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-3 animate-fade-in">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/85 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Get Listed
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
