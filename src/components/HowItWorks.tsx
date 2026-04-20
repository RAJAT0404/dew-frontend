export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-ink tracking-tight">
            How It Works
          </h2>
          <p className="text-sm text-muted mt-3 max-w-md">
            From search to supplier — three steps to smarter product discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl">
          {[
            {
              step: "01",
              title: "Discover products",
              desc: "Search across categories, manufacturers, and specifications to find what your project needs.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                  <circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              step: "02",
              title: "Explore insights",
              desc: "Read AI-generated intelligence with market analysis, competitive positioning, and technical comparisons.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                  <path d="M12 2l2.5 5.5L20 8.5l-4 4.5 1 6L12 16l-5 3 1-6-4-4.5 5.5-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              step: "03",
              title: "Connect with suppliers",
              desc: "Visit supplier pages, request quotes, and make informed procurement decisions with confidence.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.step} className="flex flex-col gap-4">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-surface border border-line flex items-center justify-center text-accent shadow-sm">
                {item.icon}
              </div>

              <span className="text-[11px] font-bold uppercase tracking-widest text-faint">
                Step {item.step}
              </span>

              <h3 className="font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
