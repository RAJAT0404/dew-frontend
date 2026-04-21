import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalog | Dew",
  description: "Explore our complete directory of high-performance industrial engineering products, from centrifugal pumps to advanced manufacturing solutions.",
};

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-canvas">
      {/* 1. NAVBAR — Standard non-glass version for white background */}
      <div className="relative h-28">
        <Navbar glass={false} />
      </div>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1">
        <Suspense 
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
                <p className="text-muted font-medium">Loading catalog...</p>
              </div>
            </div>
          }
        >
          <ProductCatalog />
        </Suspense>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}
