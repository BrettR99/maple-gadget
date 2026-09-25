import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPost, getSlugs, categorySlug } from "@/lib/posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const md = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display mt-10 text-2xl font-bold text-white" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display mt-8 text-xl font-bold text-white" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 text-[15px] leading-relaxed text-mist-300" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-mist-300" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-relaxed text-mist-300" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-maple-400 underline hover:text-maple-500"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  },
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 rounded-2xl border-l-4 border-maple-500 bg-ink-800 px-6 py-4 text-[15px] italic leading-relaxed text-mist-300"
      {...props}
    />
  ),
};

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <Link href="/reviews" className="text-sm font-medium text-maple-400 hover:text-maple-500">
        ← All reviews
      </Link>

      <Link
        href={`/reviews/category/${categorySlug(post.category)}`}
        className="mt-6 block w-fit text-xs font-semibold uppercase tracking-widest text-maple-400 hover:text-maple-500"
      >
        {post.category}
      </Link>
      <h1 className="font-display mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-mist-400">{post.excerpt}</p>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-mist-500">
        <span>Updated {post.date}</span>
        {post.sample && (
          <span className="rounded-full bg-gold-400/15 px-2.5 py-1 font-semibold text-gold-400">
            Sample layout: placeholder content
          </span>
        )}
      </div>

      {typeof post.rating === "number" && (
        <div className="card-glow mt-8 rounded-3xl bg-ink-900 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-mist-500">
                Maple Gadget score
              </p>
              <p className="font-display mt-1 text-5xl font-bold text-white">
                {post.rating.toFixed(1)}
                <span className="text-xl text-mist-500"> / 10</span>
              </p>
            </div>
            {post.price && (
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-widest text-mist-500">
                  Typical CAD price
                </p>
                <p className="font-display mt-1 text-3xl font-bold text-gold-400">{post.price}</p>
              </div>
            )}
          </div>
          {post.verdict && (
            <p className="mt-5 border-t border-white/10 pt-5 text-[15px] leading-relaxed text-mist-300">
              <strong className="text-white">Verdict: </strong>
              {post.verdict}
            </p>
          )}
          {(post.pros || post.cons) && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {post.pros && (
                <div className="rounded-2xl bg-ink-800 p-5">
                  <p className="text-sm font-semibold text-emerald-400">Pros</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-mist-300">
                    {post.pros.map((pro) => (
                      <li key={pro}>+ {pro}</li>
                    ))}
                  </ul>
                </div>
              )}
              {post.cons && (
                <div className="rounded-2xl bg-ink-800 p-5">
                  <p className="text-sm font-semibold text-maple-400">Cons</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-mist-300">
                    {post.cons.map((con) => (
                      <li key={con}>− {con}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <span className="flex-1 cursor-not-allowed rounded-full bg-maple-500/40 px-6 py-3 text-center text-sm font-semibold text-white/70">
              Check price at Amazon.ca (soon)
            </span>
            <span className="flex-1 cursor-not-allowed rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-mist-400">
              Check price at Best Buy (soon)
            </span>
          </div>
          <p className="mt-3 text-center text-xs text-mist-500">
            No affiliate links yet. Price buttons activate when our affiliate
            accounts are live.{" "}
            <Link href="/disclosure" className="underline hover:text-mist-300">
              Learn more
            </Link>
          </p>
        </div>
      )}

      <div className="mt-8">
        <ReactMarkdown components={md}>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-12 rounded-3xl border border-white/10 bg-ink-900 p-6 text-xs leading-relaxed text-mist-500">
        <p className="font-semibold text-mist-300">Our methodology for this piece</p>
        <p className="mt-2">
          {post.sample
            ? "This is a sample layout with placeholder content, showing how reviews and roundups will look on Maple Gadget."
            : "Tested products are marked as hands-on with real-world use. Research roundups state exactly which sources and data were used. We never imply testing that didn't happen."}{" "}
          <Link href="/about" className="underline hover:text-mist-300">
            How we review
          </Link>
        </p>
      </div>
    </article>
  );
}
