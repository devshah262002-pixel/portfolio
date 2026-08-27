import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

export const viewport = {
  themeColor: "#fbf8f4",
};

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        {/* Floating pill nav — detached from the page edge. */}
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
          <nav
            aria-label="Primary"
            className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-2xl border border-line bg-surface/80 px-3 py-2.5 shadow-nav backdrop-blur-xl sm:gap-6 sm:rounded-full sm:px-5 sm:py-3"
          >
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2.5 text-ink transition-opacity hover:opacity-70"
            >
              <span
                aria-hidden
                className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent font-mono text-xs font-bold text-white"
              >
                DS
              </span>
              <span className="text-sm font-semibold tracking-tight sm:text-base">{site.name}</span>
            </Link>

            <ul className="flex items-center gap-0.5 sm:gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-full px-2.5 py-1.5 text-sm text-ink-soft transition-colors hover:bg-accent-soft hover:text-accent sm:px-3.5 sm:py-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="hidden sm:block">
                <Link
                  href="/#contact"
                  className="ml-1 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main id="main" className="pt-20 sm:pt-28">
          {children}
        </main>

        {/* Floating footer card. */}
        <footer className="px-4 pb-6 pt-16 sm:px-8 sm:pb-10">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-6 py-12 shadow-lg sm:px-12 sm:py-16">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-white">{site.name}</p>
                <p className="mt-2 text-sm text-white/60">
                  {site.role} · {site.location}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-6 inline-block rounded-full bg-accent-bright px-5 py-2.5 text-sm font-semibold text-[#2b1206] transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation
                </a>
              </div>
              <ul className="flex flex-col gap-3 text-sm sm:text-right">
                <li>
                  <a
                    className="text-white/80 transition-colors hover:text-accent-bright"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 transition-colors hover:text-accent-bright"
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/80 transition-colors hover:text-accent-bright"
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </div>
            <p className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/45">
              Built with Next.js and Tailwind, and held to the same WCAG 2.2 AA bar as the products
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
