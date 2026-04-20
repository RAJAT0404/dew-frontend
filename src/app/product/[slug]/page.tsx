import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/data";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage(
  { params }: PageProps
) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) notFound();

  const releaseDateFormatted = new Date(product.releaseDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-faint" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-muted transition-colors duration-150">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/#products" className="hover:text-muted transition-colors duration-150">
              Products
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-muted truncate max-w-[200px]">{product.name}</span>
          </nav>

          {/* ─── Header ─── */}
          <section className="mb-10 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-accent-muted bg-accent-subtle px-2.5 py-1 rounded-md">
                {product.category}
              </span>
              <span className="text-[11px] font-medium text-faint">
                {product.subCategory}
              </span>
            </div>

            <h1
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-[1.12] mb-3"
            >
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="font-medium text-ink">{product.company}</span>
              <span className="w-1 h-1 rounded-full bg-line-strong" aria-hidden="true" />
              <span>{releaseDateFormatted}</span>
            </div>
          </section>

          {/* ─── Main — Image + Info ─── */}
          <section className="grid lg:grid-cols-5 gap-8 mb-16 animate-fade-in-up delay-100">
            {/* Image */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-line bg-surface shadow-sm relative aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Aside */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Short description */}
              <div className="bg-surface border border-line rounded-xl p-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-faint mb-3">
                  Quick Description
                </h2>
                <p className="text-base text-ink leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Specifications Card */}
              {product.specifications && (
                <div className="bg-canvas border border-line rounded-xl p-6">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-faint mb-4">
                    Technical Specifications
                  </h2>
                  <dl className="flex flex-col gap-3 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-baseline gap-4 border-b border-line pb-2 last:border-0 last:pb-0">
                        <dt className="text-muted flex-shrink-0">{key}</dt>
                        <dd className="font-medium text-ink text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* CTA */}
              <a
                href={product.supplierUrl}
                id="visit-supplier-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-6 py-4 rounded-lg transition-all duration-150 shadow-sm"
              >
                Visit Supplier Website
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 8.667V12a1.333 1.333 0 01-1.333 1.333H4a1.333 1.333 0 01-1.333-1.333V5.333A1.333 1.333 0 014 4h3.333M10 2.667h3.333V6M6.667 9.333L13.333 2.667" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </section>

          {/* ─── Details + Insights ─── */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 animate-fade-in-up delay-200">
              <h2 className="font-display text-2xl font-bold text-ink mb-6">
                Product Details
              </h2>
              <div className="prose prose-sm max-w-none text-ink/80 leading-relaxed font-sans">
                {product.fullDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="font-display text-xl font-bold text-ink mb-4">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-muted bg-surface border border-line px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-300">
               {/* Insights Card */}
               <div className="bg-emerald-bg border border-emerald-border rounded-2xl p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                      <path d="M10 1l2.5 5.5L18 7.5l-4 4.5 1 6L10 15l-5 3 1-6-4-4.5 5.5-1z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-emerald-text">
                      Insights
                    </h2>
                    <p className="text-[10px] text-emerald-text/70 uppercase font-black tracking-widest leading-none">
                      Intelligence Summary
                    </p>
                  </div>
                </div>

                <p className="text-sm text-emerald-text/90 leading-relaxed italic">
                  &quot;{product.insight}&quot;
                </p>
                
                <div className="mt-6 pt-6 border-t border-emerald-border/30">
                  <p className="text-[10px] text-emerald-text/50 uppercase font-bold tracking-tight">
                    Verified Technical Data Point
                  </p>
                  <p className="text-xs text-emerald-text/80 mt-1 font-medium">
                    Content derived from manufacturer whitepapers and industry benchmarking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <RelatedProducts currentProductId={product.id} category={product.category} />

          {/* Back link */}
          <div className="mt-20 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink transition-colors duration-150"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Discover more products
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
