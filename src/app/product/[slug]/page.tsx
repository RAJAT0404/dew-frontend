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

      <main className="flex-1 pt-28 pb-16">
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
            <h1
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-[1.12] mb-5"
            >
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
              <span className="font-medium text-ink">{product.company}</span>
              <span className="w-1 h-1 rounded-full bg-line-strong flex-shrink-0" aria-hidden="true" />
              <span>{releaseDateFormatted}</span>
              <div className="flex items-center gap-3 ml-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-muted bg-accent-subtle px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
                <span className="text-[10px] font-medium text-faint uppercase tracking-wider">
                  {product.subCategory}
                </span>
              </div>
            </div>
          </section>

          {/* ─── Main — Image + Info ─── */}
          <section className="grid lg:grid-cols-5 gap-8 mb-4 animate-fade-in-up delay-100">
            {/* Image */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-line bg-canvas shadow-sm relative aspect-[4/3]">
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
              <div className="bg-surface border border-line rounded-xl p-6 shadow-sm">
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">
                  Overview
                </h2>
                <p className="text-base text-ink leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Specifications Card */}
              {product.specifications && (
                <div className="bg-surface border border-line rounded-xl p-6 shadow-sm">
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-5">
                    Technical Specifications
                  </h2>
                  <dl className="flex flex-col gap-3.5 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-baseline gap-4 border-b border-line/60 pb-2.5 last:border-0 last:pb-0">
                        <dt className="text-muted flex-shrink-0 font-medium">{key}</dt>
                        <dd className="font-semibold text-ink text-right">{value}</dd>
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
          <div className="grid lg:grid-cols-3 gap-12 mb-8">
            <div className="lg:col-span-2 animate-fade-in-up delay-200">
              <h2 className="font-display text-2xl font-bold text-ink mb-3">
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
               <div className="bg-surface border border-line rounded-2xl p-6 sticky top-28 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent border border-accent/10">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-ink">
                      Expert Analysis
                    </h2>
                    <p className="text-[10px] text-muted uppercase font-bold tracking-widest leading-none mt-1">
                      Intelligence Summary
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <svg viewBox="0 0 24 24" fill="none" className="absolute -top-2 -left-2 w-8 h-8 text-accent/5 -z-10" aria-hidden="true">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H14.017C12.9124 7 12.017 7.89543 12.017 9V19C12.017 20.1046 12.9124 21 14.017 21Z" fill="currentColor" />
                  </svg>
                  <p className="text-[15px] text-ink/90 leading-relaxed font-medium italic">
                    &quot;{product.insight}&quot;
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-line">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <p className="text-[10px] text-ink uppercase font-bold tracking-tight">
                      Technical Verification
                    </p>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Data synthesized from manufacturer whitepapers, verified field performance, and competitive benchmarking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <RelatedProducts currentProductId={product.id} category={product.category} />

          {/* Back link */}
          <div className="mt-8 text-center">
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
