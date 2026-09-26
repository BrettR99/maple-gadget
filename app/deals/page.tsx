import type { Metadata } from "next";
import { getDeals } from "@/lib/deals";

export const metadata: Metadata = {
  title: "This week's deals",
  description: "Verified tech and gaming deals at Canadian retailers, prices in CAD, updated weekly.",
};

export default function Deals() {
  const deals = getDeals();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">
        Updated weekly
      </p>
      <h1 className="font-display mt-3 text-4xl font-bold text-white">This week&apos;s deals</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-400 sm:text-base">
        Real discounts at Canadian retailers, verified in CAD. We only list
        deals we&apos;d actually recommend, no inflated &ldquo;was&rdquo;
        prices, no junk.
      </p>

      {deals.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-white/10 bg-ink-900 p-10 text-center">
          <p className="font-display text-xl font-bold text-white">
            The first deals roundup drops Sunday night.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-mist-400">
            We&apos;re verifying real discounts at Canadian retailers right now.
            Check back then, no placeholders, no filler.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((d) => (
            <div
              key={d.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-ink-900 p-6"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                {d.save}
              </span>
              <h2 className="font-display mt-3 text-lg font-bold leading-snug text-white">
                {d.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-mist-400">{d.detail}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-white">{d.newPrice}</span>
                <span className="text-sm text-mist-500 line-through">{d.oldPrice}</span>
              </div>
              <p className="mt-1 text-xs text-mist-500">at {d.retailer} · CAD</p>
              <a
                href={d.url}
                target="_blank"
                rel="nofollow noopener"
                className="mt-4 rounded-full bg-maple-500 px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-maple-600"
              >
                Get this deal
              </a>
            </div>
          ))}
        </div>
      )}

      <p className="mt-10 text-center text-xs text-mist-500">
        Deals may sell out or change price. We verify at publish time. There
        are currently no affiliate links on this site.
      </p>
    </div>
  );
}
