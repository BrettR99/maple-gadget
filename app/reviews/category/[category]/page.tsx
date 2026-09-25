import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategorySlugs,
  getCategoryName,
  getPostsByCategory,
  categorySlug,
} from "@/lib/posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const name = getCategoryName(category);
  if (!name) return {};
  return {
    title: `${name} reviews`,
    description: `Every Maple Gadget review and roundup in ${name}, with Canadian prices and availability.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const name = getCategoryName(category);
  if (!name) notFound();
  const posts = getPostsByCategory(category);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Link href="/reviews" className="text-sm font-medium text-maple-400 hover:text-maple-500">
        ← All reviews
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-maple-400">
        Category
      </p>
      <h1 className="font-display mt-3 text-4xl font-bold text-white">{name}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-400 sm:text-base">
        {posts.length === 1
          ? "1 article so far. More on the way."
          : `${posts.length} articles so far. More on the way.`}
      </p>

      {posts.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-white/15 p-12 text-center">
          <p className="font-display text-lg font-semibold text-white">Nothing here yet</p>
          <p className="mt-2 text-sm text-mist-400">
            We&apos;re working on it. Check back soon.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/reviews/${p.slug}`}
              className="group flex flex-col rounded-3xl border border-white/10 bg-ink-900 p-6 transition-colors hover:border-white/25"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">
                  {p.category}
                </p>
                {p.sample && (
                  <span className="rounded-full bg-gold-400/15 px-2.5 py-1 text-xs font-semibold text-gold-400">
                    Sample
                  </span>
                )}
              </div>
              <h2 className="font-display mt-2.5 text-lg font-bold leading-snug text-white group-hover:underline">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-400">{p.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                {typeof p.rating === "number" ? (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                    <span className="text-gold-400">★</span>
                    <span className="text-white">{p.rating.toFixed(1)}</span>
                    <span className="font-normal text-mist-500">/ 10</span>
                  </span>
                ) : (
                  <span />
                )}
                <span className="text-xs text-mist-500">{p.date}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
