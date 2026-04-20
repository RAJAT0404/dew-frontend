import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-4">
            Ready to discover your next product?
          </h2>
          <p className="text-base text-white/60 mb-8">
            Join thousands of engineers already using Dew to source better products, faster.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors duration-150"
            >
              Browse Products
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-6 py-3.5 rounded-lg transition-all duration-150"
            >
              Submit a Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
