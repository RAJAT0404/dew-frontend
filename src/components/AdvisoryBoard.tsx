import Link from "next/link";

export default function AdvisoryBoard() {
  return (
    <section
      className="relative py-[15vh] overflow-hidden text-white text-center"
      style={{
        background: "linear-gradient(135deg, #0B1628 0%, #0f2a5e 60%, #1a3a7a 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 mx-auto max-w-4xl">
          Shape the Future: Join Our Senior Engineering Advisory Board
        </h2>
        <p className="text-base text-white/60 mb-10">
          Expert Profile, Lifetime Commissions, Industry Influence
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center border-2 border-white hover:bg-transparent hover:text-white text-sm font-semibold px-8 py-3.5 rounded-lg bg-white text-slate-900 transition-all duration-200"
        >
          Meet the Board
        </Link>
      </div>
    </section>
  );
}
