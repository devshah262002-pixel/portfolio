import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      {(eyebrow || title) && (
        <header className="mb-12 sm:mb-16">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <span aria-hidden className="h-px w-8 bg-accent-bright" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h2>
          )}
          {lead && (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {lead}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent-line hover:bg-accent-soft hover:text-accent">
      {children}
    </li>
  );
}

export function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="card card-lift px-5 py-6">
      <p className="font-mono text-3xl font-semibold tracking-tight text-accent">{value}</p>
      <p className="mt-3 text-sm leading-snug text-muted">{label}</p>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-2xl border border-accent-line bg-accent-soft px-6 py-5">
      <p className="text-sm leading-relaxed text-ink-soft">{children}</p>
    </aside>
  );
}
