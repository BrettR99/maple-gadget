import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This week's deals",
  description: "Verified tech and gaming deals at Canadian retailers, prices in CAD, updated weekly.",
};

const deals = [
  {
    title: "Sample deal: wireless gaming headset",
    retailer: "Amazon.ca",
    oldPrice: "$199.99",
    newPrice: "$149.99",
    save: "Save $50",
    detail: "Placeholder example showing how weekly deals will look.",
  },
  {
    title: "Sample deal: 27\" 1440p 165Hz monitor",
    retailer: "Best Buy Canada",
    oldPrice: "$429.99",
    newPrice: "$329.99",
    save: "Save $100",
    detail: "Placeholder example showing how weekly deals will look.",
  },
  {
    title: "Sample deal: mechanical keyboard",
    retailer: "Canada Computers",
    oldPrice: "$139.99",
    newPrice: "$99.99",
    save: "Save $40",
    detail: "Placeholder example showing how weekly deals will look.",
  },
];

export default function Deals() {
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

      <div className="mt-8 rounded-3xl border border-gold-400/25 bg-gold-400/5 p-6">
        <p className="text-sm leading-relaxed text-mist-300">
          <strong className="text-gold-400">Sample deals below.</strong> The
          weekly deals roundup launches with the first real content drop. These
          placeholders show the format.
        </p>
      </div>

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
            <span className="mt-4 cursor-not-allowed rounded-full bg-ink-700 px-6 py-2.5 text-center text-sm font-semibold text-mist-400">
              Get this deal (soon)
            </span>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-mist-500">
        Deals may sell out or change price. We verify at publish time. There
        are currently no affiliate links on this site.
      </p>
    </div>
  );
}
