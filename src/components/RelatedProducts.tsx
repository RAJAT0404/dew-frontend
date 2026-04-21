import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const related = products
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, 3);

  if (related.length < 3) {
    const others = products
      .filter((p) => p.id !== currentProductId && !related.find((r) => r.id === p.id))
      .slice(0, 3 - related.length);
    related.push(...others);
  }

  return (
    <section className="mt-10 pt-8 border-t border-line">
      <h2 className="font-display text-base font-bold text-ink mb-4">
        Related Products
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group block bg-surface border border-line rounded-xl overflow-hidden hover:border-accent-border hover:shadow-md transition-all duration-200"
          >
            <div className="aspect-[16/9] relative overflow-hidden bg-canvas">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="px-4 py-3">
              <span className="text-[9px] font-semibold uppercase tracking-widest text-accent-muted mb-1 block">
                {product.category}
              </span>
              <h3 className="font-display text-sm font-bold text-ink group-hover:text-accent transition-colors leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-muted mt-0.5">{product.company}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
