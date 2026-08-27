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
      className={`mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 ${className}`}
    >
      {(eyebrow || title) && (
        <header className="mb-10 sm:mb-14">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {lead && (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
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
    <li className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-ink-soft">
      {children}
    </li>
  );
}

export function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface px-5 py-5">
      <p className="font-mono text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-snug text-muted">{label}</p>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-xl border border-accent-line bg-accent-soft px-5 py-4">
      <p className="text-sm leading-relaxed text-ink-soft">{children}</p>
    </aside>
  );
}
