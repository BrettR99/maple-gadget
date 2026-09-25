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
          Maple Gadget is intended to be a reader-supported publication. The
          honest current status: <strong className="text-white">there are no
          affiliate links on this site, and we have no affiliate relationships
          with any retailer.</strong> When that changes, for example if we
          join programs like Amazon.ca Associates, Best Buy Canada, or Walmart
          Canada, this page will be updated the same day to name every program.
        </p>
        <p>
          The commitments below apply from day one and don&apos;t change:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Rankings and scores are never sold. No brand can pay for placement, and commission rates never influence scores.</li>
          <li>We don&apos;t inflate scores to sell more units.</li>
          <li>Hands-on reviews always state what was actually tested, for how long.</li>
          <li>Research roundups always state their methodology.</li>
          <li>Negative findings are published. A bad product gets a bad review, affiliate link or not.</li>
        </ul>
        <p>
          If you ever feel a review reads like an ad, tell us. That&apos;s a bug,
          not the business model.
        </p>
        <p className="text-sm text-mist-500">Last updated: September 2026.</p>
      </div>
    </div>
  );
}
