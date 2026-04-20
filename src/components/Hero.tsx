import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-172 flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="Industrial manufacturing — robotic arm in a factory"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark navy gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8, 20, 50, 0.85) 40%, rgba(8, 20, 50, 0.5) 75%, rgba(8, 20, 50, 0.2) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Navbar floats over the hero */}
      <Navbar />

      {/* Content — bottom-left area */}
      <div className="relative z-10 flex-1 flex items-end pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 text-balance">
              The Intelligence Layer for Global Engineering
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              Unlocking the world&apos;s technical content, component data, and
              supply chain intelligence.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/#products"
                id="hero-browse-cta"
                className="inline-flex items-center justify-center bg-transparent text-white hover:bg-white hover:text-slate-900 text-sm font-semibold px-7 py-3.5 rounded-lg border-2 border-white transition-colors"
              >
                Explore Directory
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors duration-150 shadow-lg shadow-accent/30"
              >
                Start RFQ
              </Link>
            </div>

            {/* Mission tagline */}
            <p className="text-sm text-white/45 font-medium">
              Our mission: An engineer-first ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
