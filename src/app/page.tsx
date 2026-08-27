import Link from "next/link";
import { Section, Tag } from "@/components/ui";
import { allProjects, featuredProjects } from "@/content/projects";
import {
  earlierProjects,
  education,
  experience,
  languages,
  site,
  skillGroups,
  training,
} from "@/content/site";

export default function Home() {
  const secondary = allProjects.filter((p) => !p.featured);

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <div className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="grid-backdrop absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {site.role} · {site.location}
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            I own quality end to end — and build the tooling my team tests with.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              See selected work
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-lg border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-3 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {site.headlineMetrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-line bg-surface px-5 py-5">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-mono text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
                    {m.value}
                  </span>
                  <span className="mt-2 block text-sm leading-snug text-muted">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ----------------------------------------------------------- about */}
      <Section eyebrow="About" title="Quality is the whole job, not the last step">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="prose-body space-y-5">
            {site.intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-ink-soft sm:text-lg">
                {p}
              </p>
            ))}
          </div>
          <ul className="space-y-4">
            {site.pillars.map((p) => (
              <li key={p.title} className="rounded-xl border border-line bg-surface p-5">
                <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------------ work */}
      <div className="border-y border-line bg-surface/40">
        <Section
          id="work"
          eyebrow="Selected work"
          title="Four pieces of work that show how I operate"
          lead="Client repositories are private and MEL holds personal data belonging to people with disabilities, so these case studies describe architecture, decisions and outcomes — never records or source."
        >
          <ul className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-bg p-6 transition-colors hover:border-accent sm:p-7"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    {p.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">
                    {p.tagline}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
                    {p.metrics.slice(0, 3).map((m) => (
                      <p key={m.label} className="text-xs text-muted">
                        <span className="font-mono text-sm font-semibold text-ink">{m.value}</span>{" "}
                        {m.label}
                      </p>
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-semibold text-accent">
                    Read the case study{" "}
                    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mb-5 mt-14 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Also worth reading
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {secondary.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-bg p-5 transition-colors hover:border-accent"
                >
                  <h4 className="text-base font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {p.name}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {p.org}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.kind}</p>
                  <p className="mt-4 text-xs font-semibold text-accent">
                    Read{" "}
                    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mb-5 mt-14 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Earlier QA engagements
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {earlierProjects.map((p) => (
              <li key={p.name} className="rounded-xl border border-line bg-bg p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-base font-semibold tracking-tight">{p.name}</h4>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {p.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted">{p.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.note}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.coverage.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ------------------------------------------------------ experience */}
      <Section id="experience" eyebrow="Experience" title="Where I have done it">
        <ol className="space-y-10">
          {experience.map((e) => (
            <li
              key={e.org}
              className="relative border-l border-line pl-6 sm:pl-8 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 md:border-l-0 md:pl-0"
            >
              <span
                aria-hidden
                className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full border-2 border-bg bg-accent md:hidden"
              />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {e.period}
                </p>
                <p className="mt-2 text-sm text-muted">{e.place}</p>
                {e.current && (
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-line bg-ok-soft px-3 py-1 text-xs font-semibold text-ok">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ok" />
                    Current
                  </p>
                )}
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                <p className="mt-1 text-base text-ink-soft">{e.org}</p>
                <ul className="mt-5 space-y-3">
                  {e.points.map((pt) => (
                    <li key={pt.slice(0, 30)} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------- skills */}
      <div className="border-y border-line bg-surface/40">
        <Section id="skills" eyebrow="Skills" title="What I work with">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.group}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                  {g.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                Education
              </h3>
              <p className="font-semibold">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-muted">{education.period}</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                Training
              </h3>
              <ul className="space-y-1.5 text-sm text-muted">
                {training.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                Languages
              </h3>
              <ul className="space-y-1.5 text-sm text-muted">
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* --------------------------------------------------------- contact */}
      <Section id="contact" eyebrow="Contact" title="Let's talk">
        <div className="rounded-2xl border border-line bg-surface p-7 sm:p-10">
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            I am always glad to talk about test strategy, accessibility, or what it takes to build
            software that works for people the industry usually designs around.
          </p>
          <dl className="mt-9 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  className="break-all font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                LinkedIn
              </dt>
              <dd className="mt-2">
                <a
                  className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dev-shah ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </>
  );
}
