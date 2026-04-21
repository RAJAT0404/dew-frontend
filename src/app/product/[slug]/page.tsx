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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — ${product.company} | Dew`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) notFound();

  const releaseDateFormatted = new Date(product.releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const paragraphs = product.fullDescription.split("\n\n").filter(Boolean);

  // ── Inline company link helper ──
  const COMPANY_URLS: Record<string, string> = {
    Grundfos: "https://www.grundfos.com",
    Xylem: "https://www.xylem.com",
    KSB: "https://www.ksb.com",
    Sulzer: "https://www.sulzer.com",
    Flowserve: "https://www.flowserve.com",
    Wilo: "https://www.wilo.com",
    Ebara: "https://www.ebara.com",
    Netzsch: "https://www.netzsch.com",
    Verder: "https://www.verderliquids.com",
    Kongsberg: "https://www.kongsberg.com",
    "Gorman-Rupp": "https://www.gormanrupp.com",
    Multiquip: "https://www.multiquip.com",
    Pioneer: "https://www.pioneerpump.com",
    Pedrollo: "https://www.pedrollo.com",
  };

  function linkifyInsight(text: string, dark = true) {
    const companies = Object.keys(COMPANY_URLS);
    const escapedNames = companies.map((c) => c.replace(/[-]/g, "\\$&"));
    const pattern = new RegExp(`(${escapedNames.join("|")})`, "g");
    const parts = text.split(pattern);
    const cls = dark
      ? "text-accent-muted underline underline-offset-2 decoration-accent/40 hover:text-white hover:decoration-white/50 transition-colors duration-150"
      : "text-accent hover:text-accent-hover underline underline-offset-2 decoration-accent/30 transition-colors duration-150";
    return parts.map((part, i) => {
      const url = COMPANY_URLS[part];
      if (url) {
        return (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={cls}>
            {part}
          </a>
        );
      }
      return part;
    });
  }

  const referencedCompanies = Object.keys(COMPANY_URLS).filter((c) =>
    product.insight.includes(c)
  );

  return (
    <>
      <Navbar />

      {/* ── HEADER ── */}
      <div
        className="pt-28 pb-10"
        style={{ background: "linear-gradient(135deg, rgba(8,20,50,0.98) 0%, rgba(13,35,90,0.96) 100%), #081432" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-7" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors duration-150 hover:underline underline-offset-2">Home</Link>
            <svg viewBox="0 0 6 10" fill="none" className="w-2 h-2 flex-shrink-0 text-white/20" aria-hidden="true">
              <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/#products" className="hover:text-white/70 transition-colors duration-150 hover:underline underline-offset-2">Products</Link>
            <svg viewBox="0 0 6 10" fill="none" className="w-2 h-2 flex-shrink-0 text-white/20" aria-hidden="true">
              <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white/60 truncate max-w-[200px]">{product.name}</span>
          </nav>

          <div className="animate-fade-in-up">
            {/* Category pill */}
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-accent/20 text-accent-muted border border-accent/30 px-2.5 py-0.5 rounded-full mb-3">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-3">
              {product.name}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-4">
              <span className="font-semibold text-white/70">{product.company}</span>
              <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/40">{releaseDateFormatted}</span>
            </div>

            {/* Short description */}
            <p className="text-white/60 text-[15px] max-w-xl leading-[1.7]">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* ── MAIN GRID — image + sidebar, lifted into the header ── */}
          <section className="grid lg:grid-cols-5 gap-6 -mt-6 mb-10 animate-fade-in-up delay-100">

            {/* Product image */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-line bg-white shadow-xl shadow-black/8 relative aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-6"
                priority
              />
            </div>

            {/* Sidebar — specs + CTA */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {product.specifications && (
                <div className="bg-surface border border-line rounded-xl p-5 shadow-sm flex-1">
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">
                    Technical Specifications
                  </h2>
                  <dl className="flex flex-col gap-2.5 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-baseline gap-3 border-b border-line/60 pb-2 last:border-0 last:pb-0"
                      >
                        <dt className="text-muted flex-shrink-0 font-medium">{key}</dt>
                        <dd className="font-semibold text-ink text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <a
                href={product.supplierUrl}
                id="visit-supplier-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-all duration-150 shadow-sm"
              >
                Visit Supplier Website
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M12 8.667V12a1.333 1.333 0 01-1.333 1.333H4a1.333 1.333 0 01-1.333-1.333V5.333A1.333 1.333 0 014 4h3.333M10 2.667h3.333V6M6.667 9.333L13.333 2.667"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* ── GUIDE BODY ── */}
          <div className="grid lg:grid-cols-3 gap-10 mb-10">

            {/* Left — numbered guide sections */}
            <div className="lg:col-span-2 flex flex-col gap-10 animate-fade-in-up delay-200">

              {/* 01 — Product Details */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] font-black text-accent/40 tracking-widest select-none">01</span>
                  <div className="flex-1 h-px bg-line" />
                  <h2 className="font-display text-base font-bold text-ink whitespace-nowrap">Product Details</h2>
                </div>
                <div className="text-sm text-ink/75 leading-[1.8] space-y-4">
                  {paragraphs.map((para, i) => (
                    <p key={i}>{linkifyInsight(para, false)}</p>
                  ))}
                </div>
              </div>

              {/* 02 — Applications */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] font-black text-accent/40 tracking-widest select-none">02</span>
                  <div className="flex-1 h-px bg-line" />
                  <h2 className="font-display text-base font-bold text-ink whitespace-nowrap">Applications</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-muted bg-surface border border-line px-3 py-1.5 rounded-lg hover:border-accent-border hover:text-accent transition-colors duration-150"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Expert Analysis intel card */}
            <div className="animate-fade-in-up delay-300">
              <div
                className="rounded-2xl p-6 sticky top-28"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(8,20,50,0.97) 0%, rgba(13,35,90,0.99) 100%)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/25 flex items-center justify-center text-accent flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Expert Analysis</h2>
                    <p className="text-[9px] text-white/35 uppercase font-bold tracking-widest mt-0.5">
                      Intelligence Brief
                    </p>
                  </div>
                </div>

                {/* Insight text with inline company links */}
                <p className="text-[13px] text-white/65 leading-[1.75] border-l-2 border-accent/40 pl-3">
                  {linkifyInsight(product.insight)}
                </p>

                {/* Referenced companies */}
                {referencedCompanies.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="text-[9px] text-white/35 uppercase font-bold tracking-widest mb-2.5">
                      Referenced Suppliers
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {referencedCompanies.map((company) => (
                        <a
                          key={company}
                          href={COMPANY_URLS[company]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-semibold text-white/50 bg-white/5 border border-white/10 hover:border-accent/40 hover:text-accent-muted px-2 py-0.5 rounded-md transition-colors duration-150"
                        >
                          {company}
                          <svg viewBox="0 0 10 10" fill="none" className="w-2 h-2" aria-hidden="true">
                            <path d="M8 2H2M8 2v6M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── RELATED PRODUCTS ── */}
          <RelatedProducts currentProductId={product.id} category={product.category} />

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink transition-colors duration-150"
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
              Discover more products
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
