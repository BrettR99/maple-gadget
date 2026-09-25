import Link from "next/link";
import { getPosts, categorySlug } from "@/lib/posts";

const CATEGORIES = [
  "Gaming",
  "Smartphones",
  "TVs",
  "Cameras",
  "Accessories",
  "Sound & Audio",
  "Computers",
  "Smart home",
];

function RatingBadge({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-800 px-3 py-1 text-sm font-semibold">
      <span className="text-gold-400">★</span>
      <span className="text-white">{rating.toFixed(1)}</span>
      <span className="font-normal text-mist-500">/ 10</span>
    </span>
  );
}

function TrustItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900 p-5">
      <h3 className="font-display text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{text}</p>
    </div>
  );
}

export default function Home() {
  const posts = getPosts().filter((p) => !p.sample);
  const samples = getPosts().filter((p) => p.sample);
  const featured = posts[0] ?? samples[0];
  const latest = [...posts.slice(1), ...samples].slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="bg-grid relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(720px 380px at 50% -80px, rgba(229,56,59,0.22), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:pt-28">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-800/80 px-4 py-1.5 text-xs font-medium text-mist-300">
            <span className="inline-block h-2 w-2 rounded-full bg-maple-500" />
            Independent reviews · Made in Canada
          </p>
          <h1
            className="font-display mx-auto mt-6 max-w-3xl animate-fade-up text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Honest tech &amp; gaming reviews,{" "}
            <span className="text-maple-400">priced for Canadians.</span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-mist-400 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Every pick with CAD pricing and Canadian availability. No sponsored
            rankings, no US prices, no guesswork. Just what&apos;s actually
            worth your money in Canada.
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/reviews"
              className="w-full rounded-full bg-maple-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-maple-600 sm:w-auto"
            >
              Browse reviews
            </Link>
            <Link
              href="/deals"
              className="w-full rounded-full border border-white/15 bg-ink-800 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 sm:w-auto"
            >
              This week&apos;s deals
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-ink-900/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-8 lg:grid-cols-4">
          <TrustItem title="Prices in CAD" text="Every price you see is Canadian dollars at Canadian retailers." />
          <TrustItem title="Actually available" text="We check stock at Amazon.ca, Best Buy Canada, Canada Computers & more." />
          <TrustItem title="Hands-on or labeled" text="Tested gear is marked tested. Research roundups say exactly how they were built." />
          <TrustItem title="Reader-supported" text="No affiliate links yet. When they arrive, they'll keep the lights on, and they'll never decide the rankings." />
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="border-b border-white/10 bg-ink-900/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-white">The weekly rhythm</h2>
            <p className="mt-1 text-sm text-mist-400">
              New picks on a schedule, so you know when to check back.
            </p>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-3 md:max-w-2xl">
            <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">Tuesdays</p>
              <p className="mt-1 text-sm font-medium text-white">New reviews drop</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">Sunday nights</p>
              <p className="mt-1 text-sm font-medium text-white">Fresh deals for the week ahead</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">All week</p>
              <p className="mt-1 text-sm font-medium text-white">Short videos</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED + LATEST */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Latest reviews</h2>
          <Link href="/reviews" className="text-sm font-medium text-maple-400 hover:text-maple-500">
            All reviews →
          </Link>
        </div>

        {featured ? (
          <Link
            href={`/reviews/${featured.slug}`}
            className="card-glow group mt-8 grid overflow-hidden rounded-3xl bg-ink-900 md:grid-cols-2"
          >
            <div className="relative flex min-h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 p-10">
              <div className="bg-grid absolute inset-0 opacity-60" />
              <span className="animate-floaty font-display text-7xl font-bold text-white/10 transition-colors group-hover:text-maple-500/25">
                MG
              </span>
              {featured.sample && (
                <span className="absolute left-4 top-4 rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-400">
                  Sample layout
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">
                {featured.category}
              </p>
              <h3 className="font-display mt-3 text-2xl font-bold leading-snug text-white group-hover:underline sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4">
                {typeof featured.rating === "number" && <RatingBadge rating={featured.rating} />}
                <span className="text-xs text-mist-500">{featured.date}</span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-white/15 p-12 text-center">
            <p className="font-display text-lg font-semibold text-white">Reviews are on the way</p>
            <p className="mt-2 text-sm text-mist-400">
              We&apos;re testing gear and building roundups. Check back soon.
            </p>
          </div>
        )}

        {latest.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((p) => (
              <Link
                key={p.slug}
                href={`/reviews/${p.slug}`}
                className="group rounded-3xl border border-white/10 bg-ink-900 p-6 transition-colors hover:border-white/25"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-maple-400">
                  {p.category}
                </p>
                <h3 className="font-display mt-2.5 text-lg font-bold leading-snug text-white group-hover:underline">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mist-400">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-3">
                  {typeof p.rating === "number" && <RatingBadge rating={p.rating} />}
                  {p.sample && (
                    <span className="rounded-full bg-gold-400/15 px-2.5 py-1 text-xs font-semibold text-gold-400">
                      Sample
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* DEALS CTA */}
      <section className="border-y border-white/10 bg-gradient-to-br from-maple-600/25 via-ink-900 to-ink-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Canadian tech deals, every week.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist-300 sm:text-base">
              Price drops and real discounts at Canadian retailers, verified in
              CAD and updated weekly. The fastest way Maple Gadget pays for itself.
            </p>
          </div>
          <Link
            href="/deals"
            className="shrink-0 rounded-full bg-maple-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-maple-600"
          >
            See this week&apos;s deals
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Browse by category</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CATEGORIES.map((c) => {
            const count = posts.filter((p) => p.category === c).length;
            const tile = (
              <>
                <p className="font-display text-sm font-semibold text-white">{c}</p>
                <p className="mt-1 text-xs text-mist-500">
                  {count > 0
                    ? `${count} article${count === 1 ? "" : "s"}`
                    : "Coming soon"}
                </p>
              </>
            );
            const className =
              "rounded-2xl border border-white/10 bg-ink-900 p-5 text-center transition-colors hover:border-maple-500/50";
            return count > 0 ? (
              <Link key={c} href={`/reviews/category/${categorySlug(c)}`} className={className}>
                {tile}
              </Link>
            ) : (
              <div key={c} className={className}>
                {tile}
              </div>
            );
          })}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl border border-white/10 bg-ink-900 p-8 sm:p-12">
          <h2 className="font-display text-2xl font-bold text-white">How we review</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-display text-sm font-semibold text-maple-400">01. Hands-on first</p>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">
                When we&apos;ve tested a product ourselves, we say so, and tell
                you for how long and how it was used.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-maple-400">02. Research, labeled</p>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">
                Roundups are built from specs, measurements, and trusted reviews,
                with the methodology stated up front and never implied.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-maple-400">03. Canada, always</p>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">
                Prices in CAD, stock checked at Canadian stores. If it&apos;s
                not reasonably available in Canada, it doesn&apos;t make the list.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-block text-sm font-medium text-maple-400 hover:text-maple-500"
          >
            More about Maple Gadget →
          </Link>
        </div>
      </section>
    </div>
  );
}
