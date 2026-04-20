"use client";

import Link from "next/link";
import { useState } from "react";

const columns = [
  {
    heading: "Platform",
    links: [
      { label: "About Us", href: "/" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Pricing", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Careers", href: "/" },
      { label: "Press", href: "/" },
      { label: "Blog", href: "/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms", href: "/" },
      { label: "Privacy", href: "/" },
      { label: "Cookies", href: "/" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#0B1628] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">

        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-bold text-white mb-5">{col.heading}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Email signup column */}
          <div>
            <p className="text-sm font-bold text-white mb-5">Email Signup</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 min-w-0 bg-[#0B1628] border border-white/20 text-white placeholder:text-white/35 text-sm px-4 py-2 rounded-l-md outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-white text-[#0B1628] text-sm font-semibold px-4 py-2 rounded-r-md hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Design Engineering World. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
