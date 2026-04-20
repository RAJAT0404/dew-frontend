import Link from "next/link";
import Image from "next/image";
import { products, type Product } from "@/lib/data";

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Find products in the same category, excluding the current one
  const related = products
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, 3);

  // If not enough in same category, just pick some others
  if (related.length < 3) {
    const others = products
      .filter((p) => p.id !== currentProductId && !related.find((r) => r.id === p.id))
      .slice(0, 3 - related.length);
    related.push(...others);
  }

  return (
    <section className="mt-20 pt-20 border-t border-line">
      <h2 className="font-display text-2xl font-bold text-ink mb-8">
        Related Products
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-accent-muted mb-2 block">
                {product.category}
              </span>
              <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted line-clamp-1 mt-1">
                {product.company}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
