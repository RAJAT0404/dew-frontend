import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/data";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import SmartSummary from "@/components/SmartSummary";

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

export default async function ProductPage({ params }: PageProps) {
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
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav
            className="mb-10 flex items-center gap-2 text-[13px] text-faint"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-muted transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="text-line-strong">›</span>
            <Link href="/#products" className="hover:text-muted transition-colors">
              Products
            </Link>
            <span aria-hidden="true" className="text-line-strong">›</span>
            <span className="text-muted truncate max-w-[200px]">{product.name}</span>
          </nav>

          {/* ─── Page Title ─── */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-accent-muted bg-accent-subtle px-2.5 py-1 rounded-md">
                {product.category}
              </span>
              {product.subCategory && (
                <span className="text-[11px] text-faint uppercase tracking-wider">
                  {product.subCategory}
                </span>
              )}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-[14px] text-muted">
              By <span className="font-medium text-ink/80">{product.company}</span>
              <span className="mx-2 text-line-strong">·</span>
              {releaseDateFormatted}
            </p>
          </div>

          {/* ─── Main Grid: Image + Sidebar ─── */}
          <div className="grid lg:grid-cols-5 gap-10 mb-14 animate-fade-in-up delay-100">

            {/* Product Image */}
            <div className="lg:col-span-3 rounded-xl overflow-hidden border border-line bg-canvas relative aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col justify-between gap-6">

              {/* Overview */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-faint mb-3">
                  Overview
                </p>
                <p className="text-[15px] text-ink/85 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Specifications */}
              {product.specifications && (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-faint mb-3">
                    Specifications
                  </p>
                  <dl className="divide-y divide-line">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-baseline py-2.5 gap-4">
                        <dt className="text-[13px] text-muted shrink-0">{key}</dt>
                        <dd className="text-[13px] font-semibold text-ink text-right">{value}</dd>
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
                className="inline-flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors duration-150"
              >
                Visit Supplier Website
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path
                    d="M12 8.667V12a1.333 1.333 0 01-1.333 1.333H4a1.333 1.333 0 01-1.333-1.333V5.333A1.333 1.333 0 014 4h3.333M10 2.667h3.333V6M6.667 9.333L13.333 2.667"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ─── Divider ─── */}
          <hr className="border-line mb-14" />

          {/* ─── Details + Expert Analysis ─── */}
          <div className="grid lg:grid-cols-3 gap-12 mb-14 animate-fade-in-up delay-200">

            {/* Product Details */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-xl font-bold text-ink mb-5">
                Product Details
              </h2>
              <div className="space-y-4 text-[15px] text-ink/80 leading-[1.75]">
                {product.fullDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Smart Summary Component */}
              <SmartSummary product={product} />

              {/* Applications */}
              {product.tags.length > 0 && (
                <div className="mt-10">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-faint mb-3">
                    Applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] font-medium text-muted bg-surface border border-line px-3 py-1.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Expert Analysis */}
            <div className="animate-fade-in-up delay-300">
              <div className="sticky top-28">
                <p className="text-[11px] font-bold uppercase tracking-widest text-faint mb-3">
                  Expert Analysis
                </p>
                <blockquote className="border-l-2 border-accent/30 pl-4 text-[14px] text-ink/85 leading-[1.75] italic">
                  {product.insight}
                </blockquote>
                <p className="mt-5 text-[12px] text-faint leading-relaxed">
                  Synthesized from manufacturer whitepapers, field performance data, and competitive benchmarking.
                </p>
              </div>
            </div>
          </div>

          {/* ─── Related Products ─── */}
          <RelatedProducts currentProductId={product.id} category={product.category} />

          {/* ─── Back link ─── */}
          <div className="mt-12 pt-8 border-t border-line text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-ink transition-colors duration-150"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path
                  d="M13 8H3M7 4l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to all products
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
