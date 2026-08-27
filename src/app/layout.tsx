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

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
          <nav
            aria-label="Primary"
            className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 sm:px-8"
          >
            <Link
              href="/"
              className="font-semibold tracking-tight text-ink transition-colors hover:text-accent"
            >
              {site.name}
              <span className="ml-2 hidden font-mono text-xs font-normal text-muted sm:inline">
                {site.role}
              </span>
            </Link>
            <ul className="-mx-2 flex items-center gap-0.5 sm:gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md px-2 py-2 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-accent sm:px-3"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main id="main">{children}</main>

        <footer className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-semibold tracking-tight">{site.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {site.role} · {site.location}
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <li>
                  <a
                    className="text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    className="text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <p className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-muted">
              Built with Next.js and Tailwind, and held to the same WCAG 2.2 AA bar as the products
              described here — keyboard operable throughout, visible focus, AA contrast in both
              colour schemes, and no motion for anyone who has asked their system to reduce it.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
