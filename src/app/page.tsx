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
      <main className="flex-1">
        {/* 1. HERO — Navbar is embedded inside as an absolute overlay */}
        <Hero />

        {/* SEARCH */}
        <section className="-translate-y-1/2">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 animate-fade-in-up delay-300">
            <SearchBar />
          </div>
        </section>

        {/* 2. VALUE PROPS — Advanced Sourcing, Verified Data, Expert Network */}
        <ValueProps />

        {/* 3. SPLIT — ENGINEERS / SUPPLIERS */}
        <SplitSection />

        {/* 4. PRODUCT FEED — searchable catalog */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-slate-500">
              Loading products…
            </div>
          }
        >
          <ProductFeed />
        </Suspense>

        {/* 5. ADVISORY BOARD — dark blue CTA */}
        <AdvisoryBoard />

        {/* 6. ENGINEERING SERVICES — Tools, Jobs, Knowledge */}
        <EngineeringServices />

        {/* 7. PREMIUM PARTNERS — scrollable list */}
        <PremiumPartners />
      </main>

      {/* 7. FOOTER */}
      <Footer />
    </>
  );
}
