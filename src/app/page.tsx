import { Suspense } from "react";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import AdvisoryBoard from "@/components/AdvisoryBoard";
import EngineeringServices from "@/components/EngineeringServices";
import PremiumPartners from "@/components/PremiumPartners";
import ProductFeed from "@/components/ProductFeed";
import Footer from "@/components/Footer";
import SplitSection from "@/components/SplitSection";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <>
      <main>
        {/* 1. HERO — Navbar is embedded inside as an absolute overlay */}
        <Hero />

        {/* 2. SEARCH */}
        <section className="py-20 bg-canvas/30 border-b border-line/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 animate-fade-in-up delay-300">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-ink tracking-tight">
                Advanced Engineering Search
              </h2>
              <p className="text-sm text-muted mt-3 max-w-lg mx-auto">
                Discover premium products, technical data, and expert manufacturers across all engineering categories.
              </p>
            </div>
            <SearchBar />
          </div>
        </section>

        {/* 3. VALUE PROPS — Advanced Sourcing, Verified Data, Expert Network */}
        <ValueProps />

        {/* 4. SPLIT — ENGINEERS / SUPPLIERS */}
        <SplitSection />

        {/* 5. PRODUCT FEED — searchable catalog */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-slate-500">
              Loading products…
            </div>
          }
        >
          <ProductFeed />
        </Suspense>

        {/* 6. ADVISORY BOARD — dark blue CTA */}
        <AdvisoryBoard />

        {/* 7. ENGINEERING SERVICES — Tools, Jobs, Knowledge */}
        <EngineeringServices />

        {/* 8. PREMIUM PARTNERS — scrollable list */}
        <PremiumPartners />
      </main>

      {/* 9. FOOTER */}
      <Footer />
    </>
  );
}
