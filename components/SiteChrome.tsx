import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/reviews", label: "Reviews" },
  { href: "/deals", label: "Deals" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Maple Gadget home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mist-300 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/deals"
          className="rounded-full bg-maple-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-maple-600"
        >
          This week&apos;s deals
        </Link>
      </div>
      <nav className="flex items-center gap-6 overflow-x-auto border-t border-white/5 px-5 py-2.5 sm:hidden">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-mist-300 hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-mist-400">
              Honest tech &amp; gaming reviews for Canadians — every pick with
              CAD pricing and Canadian availability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="font-display text-sm font-semibold text-white">Site</h4>
              <ul className="mt-3 space-y-2 text-sm text-mist-400">
                <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
                <li><Link href="/deals" className="hover:text-white">Deals</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-white">Trust</h4>
              <ul className="mt-3 space-y-2 text-sm text-mist-400">
                <li><Link href="/about" className="hover:text-white">How we review</Link></li>
                <li><Link href="/disclosure" className="hover:text-white">Affiliate disclosure</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-white">Follow</h4>
              <ul className="mt-3 space-y-2 text-sm text-mist-400">
                <li><span className="text-mist-500">YouTube — soon</span></li>
                <li><span className="text-mist-500">TikTok — soon</span></li>
                <li><span className="text-mist-500">Instagram — soon</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-mist-500">
          <p>© 2026 Maple Gadget. Made in Canada.</p>
          <p className="mt-2">
            As a reader-supported publication, we may earn a commission from
            qualifying purchases made through links on this site — at no extra
            cost to you. Read our <Link href="/disclosure" className="underline hover:text-mist-300">affiliate disclosure</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
