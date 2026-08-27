import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { site } from "@/content/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-face",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devshah.vercel.app"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#f1efe9" };

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <div aria-hidden className="grain" />

        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        {/* Thin editorial masthead — a rule, a name, three words. */}
        <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm">
          <nav
            aria-label="Primary"
            className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-3.5 sm:px-10"
          >
            <Link href="/" className="group flex items-baseline gap-3">
              <span className="font-display text-xl leading-none tracking-tight">{site.name}</span>
              <span className="label hidden sm:inline">{site.roleShort}</span>
            </Link>
            <ul className="flex items-center gap-5 sm:gap-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="label transition-colors hover:text-ink hover:underline hover:underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main id="main" className="relative z-[2]">
          {children}
        </main>

        {/* Oversized signature footer. */}
        <footer className="relative z-[2] border-t border-rule bg-ink text-paper">
          <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-16 sm:px-10 sm:pt-24">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                  Available for work
                </p>
                <p className="mt-4 max-w-md font-display text-3xl leading-[1.06] sm:text-5xl">
                  Let&apos;s talk about testing what actually matters.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-8 inline-block bg-lime px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
                >
                  {site.email}
                </a>
              </div>
              <ul className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.12em] md:text-right">
                <li>
                  <a
                    className="text-paper/70 transition-colors hover:text-lime"
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    className="text-paper/70 transition-colors hover:text-lime"
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li className="text-paper/40">{site.location}</li>
              </ul>
            </div>

            {/* The name, set as large as the viewport allows. */}
            <p
              aria-hidden
              className="mt-16 select-none font-display leading-[0.8] tracking-[-0.03em] text-paper/15"
              style={{ fontSize: "clamp(4rem, 19vw, 18rem)" }}
            >
              {site.name}
            </p>

            <p className="mt-6 border-t border-paper/10 pt-6 font-mono text-[10px] leading-relaxed tracking-wide text-paper/40 sm:text-[11px]">
              Built with Next.js and Tailwind, held to the same WCAG 2.2 AA bar as the products
              described here — keyboard operable throughout, visible focus on every control, AA
              contrast on all text, and no motion for anyone who has asked their system to reduce
              it.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
