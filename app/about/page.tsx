import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "What Maple Gadget is, how we review, and why Canada needed its own review publication.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">About</p>
      <h1 className="font-display mt-3 text-4xl font-bold text-white">
        Tech reviews for Canadians, by Canadians.
      </h1>

      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist-300">
        <p>
          Almost every major review site prices in US dollars, links to US
          stores, and quietly assumes you live south of the border. Canadians
          are left converting currencies, hunting for local stock, and guessing
          whether that &ldquo;great deal&rdquo; even ships here.
        </p>
        <p>
          <strong className="text-white">Maple Gadget exists to fix that.</strong>{" "}
          Every review and roundup is built around two questions: what&apos;s the
          best option, and what does it actually cost <em>in Canada</em>? Prices
          in CAD. Stock checked at Amazon.ca, Best Buy Canada, Canada Computers,
          Memory Express, and other Canadian retailers.
        </p>
      </div>

      <h2 className="font-display mt-12 text-2xl font-bold text-white">How we review</h2>
      <div className="mt-6 space-y-6">
        <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
          <p className="font-display text-sm font-semibold text-maple-400">Hands-on reviews</p>
          <p className="mt-2 text-sm leading-relaxed text-mist-400">
            When we&apos;ve tested a product ourselves, we say so, including how
            long we used it and what we used it for. Long-term, lived-with-it
            impressions beat launch-day unboxings, and that&apos;s what we aim for.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
          <p className="font-display text-sm font-semibold text-maple-400">Research roundups</p>
          <p className="mt-2 text-sm leading-relaxed text-mist-400">
            For &ldquo;best of&rdquo; lists, we compare specs, professional
            measurements, and trusted reviews, and we state the methodology up
            front. We never imply hands-on testing that didn&apos;t happen.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
          <p className="font-display text-sm font-semibold text-maple-400">Deals</p>
          <p className="mt-2 text-sm leading-relaxed text-mist-400">
            Every deal is verified at publish time: real discount, real Canadian
            retailer, price in CAD. If it sells out or the price changes, the
            listing comes down.
          </p>
        </div>
      </div>

      <h2 className="font-display mt-12 text-2xl font-bold text-white">How we make money</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-mist-300">
        Maple Gadget will be reader-supported. We haven&apos;t joined any
        affiliate programs yet, so there are currently no affiliate links on this
        site. When that changes, our disclosure will be updated the same day.
        What won&apos;t change: rankings are never for sale, commission rates
        never influence scores, and sponsors never see reviews before
        publication. Read the full{" "}
        <a href="/disclosure" className="text-maple-400 underline hover:text-maple-500">
          affiliate disclosure
        </a>
        .
      </p>
    </div>
  );
}
