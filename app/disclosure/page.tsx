import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description: "How Maple Gadget makes money and what that means for our reviews.",
};

export default function Disclosure() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">Trust</p>
      <h1 className="font-display mt-3 text-4xl font-bold text-white">Affiliate disclosure</h1>

      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mist-300">
        <p>
          Maple Gadget is a reader-supported publication. That means some of the
          links on this site are affiliate links: if you click one and make a
          purchase, we may earn a commission from the retailer at no additional
          cost to you.
        </p>
        <p>
          Current and planned affiliate relationships include programs such as
          Amazon.ca Associates, and may in future include retailers like Best Buy
          Canada, Walmart Canada, and software or service providers. This page
          will be updated as relationships change.
        </p>
        <p>
          <strong className="text-white">What this doesn&apos;t change:</strong>
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Rankings and scores are never sold. No brand can pay for placement.</li>
          <li>We don&apos;t inflate scores to sell more units.</li>
          <li>Hands-on reviews always state what was actually tested, for how long.</li>
          <li>Research roundups always state their methodology.</li>
          <li>Negative findings are published. A bad product gets a bad review, affiliate link or not.</li>
        </ul>
        <p>
          If you ever feel a review reads like an ad, tell us — that&apos;s a bug,
          not the business model.
        </p>
        <p className="text-sm text-mist-500">Last updated: September 2026.</p>
      </div>
    </div>
  );
}
