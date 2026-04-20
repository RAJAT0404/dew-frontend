import Link from "next/link";

export default function SplitSection() {
  return (
    <section className="py-[12vh] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-ink tracking-tight">
            Built for every side of the supply chain
          </h2>
          <p className="text-sm text-muted mt-3 max-w-lg">
            Whether you&apos;re sourcing components or selling them, Dew puts the right information at your fingertips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Engineers */}
          <div className="relative border border-line rounded-2xl p-8 md:p-10 flex flex-col gap-5 bg-surface hover:border-accent-border transition-colors duration-200 overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-accent/[0.03] rounded-bl-[100px]" aria-hidden="true" />

            <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="font-display text-2xl font-bold text-ink">
              For Engineers
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-muted">
              {[
                "Discover products across every category",
                "Compare technical specifications side by side",
                "Read AI-powered market intelligence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" aria-hidden="true">
                    <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/#products"
              id="split-engineers-cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover mt-2 transition-colors duration-150 self-start"
            >
              Explore Products
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Suppliers */}
          <div className="relative border border-line rounded-2xl p-8 md:p-10 flex flex-col gap-5 bg-surface hover:border-emerald-border transition-colors duration-200 overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald/[0.03] rounded-bl-[100px]" aria-hidden="true" />

            <div className="w-10 h-10 rounded-lg bg-emerald-bg flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald" aria-hidden="true">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="font-display text-2xl font-bold text-ink">
              For Suppliers
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-muted">
              {[
                "Showcase products to a targeted audience",
                "Reach engineers actively sourcing solutions",
                "Build visibility and brand credibility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-emerald mt-0.5 flex-shrink-0" aria-hidden="true">
                    <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/submit"
              id="split-suppliers-cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-text mt-2 transition-colors duration-150 self-start"
            >
              Submit Product
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
