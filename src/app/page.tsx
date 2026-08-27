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
      <div className="relative overflow-hidden">
        {/* Decorative colour clouds drifting behind the type. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob blob-tangerine float-slow absolute -left-24 -top-32 h-[26rem] w-[26rem]" />
          <div className="blob blob-teal float-slower absolute -right-20 top-10 h-[22rem] w-[22rem]" />
          <div className="blob blob-violet float-slow absolute left-1/3 top-64 h-[18rem] w-[18rem] opacity-30" />
          <div className="dot-grid absolute inset-0" />
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent shadow-sm backdrop-blur">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
            {site.role} · {site.location}
          </p>

          <h1 className="mt-7 max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I own quality end to end
            <span className="text-accent"> — and build the tooling</span> my team tests with.
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            {site.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg"
            >
              See selected work
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md"
            >
              Get in touch
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline px-2 py-3.5 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Floating metric cards, fanned with a slight offset. */}
          <dl className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {site.headlineMetrics.map((m, i) => (
              <div
                key={m.label}
                className={`card card-lift px-5 py-6 ${i % 2 === 1 ? "lg:translate-y-5" : ""}`}
              >
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-mono text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                    {m.value}
                  </span>
                  <span className="mt-3 block text-sm leading-snug text-muted">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ----------------------------------------------------------- about */}
      <Section eyebrow="About" title="Quality is the whole job, not the last step">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="prose-body space-y-5">
            {site.intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <ul className="space-y-4">
            {site.pillars.map((p, i) => (
              <li key={p.title} className={`card card-lift p-6 ${i % 2 === 1 ? "lg:ml-6" : ""}`}>
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft font-mono text-xs font-bold text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------------ work */}
      <div className="relative overflow-hidden bg-bg-tint/60 py-4">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob blob-tangerine absolute -right-32 top-1/4 h-[24rem] w-[24rem] opacity-25" />
        </div>
        <Section
          id="work"
          eyebrow="Selected work"
          title="Four pieces of work that show how I operate"
          lead="Client repositories are private and MEL holds personal data belonging to people with disabilities, so these case studies describe architecture, decisions and outcomes — never records or source."
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((p, i) => (
              <li key={p.slug} className={i % 2 === 1 ? "md:translate-y-8" : ""}>
                <Link
                  href={`/work/${p.slug}`}
                  className="card card-lift card-glow group flex h-full flex-col p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      {p.period}
                    </p>
                    <span
                      aria-hidden
                      className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-accent transition-all group-hover:bg-accent group-hover:text-white"
                    >
                      →
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted">{p.tagline}</p>
                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5">
                    {p.metrics.slice(0, 3).map((m) => (
                      <p key={m.label} className="text-xs text-muted">
                        <span className="font-mono text-base font-semibold text-ink">{m.value}</span>{" "}
                        {m.label}
                      </p>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mb-6 mt-24 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Also worth reading
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {secondary.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="card card-lift group flex h-full flex-col p-5">
                  <h4 className="text-base font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {p.name}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {p.org}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.kind}</p>
                  <p className="mt-4 text-xs font-semibold text-accent">
                    Read{" "}
                    <span
                      aria-hidden
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mb-6 mt-16 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Earlier QA engagements
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {earlierProjects.map((p) => (
              <li key={p.name} className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-lg font-semibold tracking-tight">{p.name}</h4>
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
                      className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted"
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
        <ol className="space-y-6">
          {experience.map((e) => (
            <li key={e.org} className="card p-7 sm:p-9">
              <div className="md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {e.period}
                  </p>
                  <p className="mt-2 text-sm text-muted">{e.place}</p>
                  {e.current && (
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-ok-soft px-3 py-1 text-xs font-semibold text-ok">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ok" />
                      Current
                    </p>
                  )}
                </div>
                <div className="mt-6 md:mt-0">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{e.role}</h3>
                  <p className="mt-1 text-base text-ink-soft">{e.org}</p>
                  <ul className="mt-6 space-y-3">
                    {e.points.map((pt) => (
                      <li
                        key={pt.slice(0, 30)}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------- skills */}
      <div className="relative overflow-hidden bg-bg-tint/60 py-4">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob blob-teal absolute -left-32 top-1/3 h-[22rem] w-[22rem] opacity-25" />
        </div>
        <Section id="skills" eyebrow="Skills" title="What I work with">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g, i) => (
              <div key={g.group} className={`card p-6 ${i % 3 === 1 ? "lg:translate-y-5" : ""}`}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  {g.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <Tag key={it}>{it}</Tag>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            <div className="card p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Education
              </h3>
              <p className="font-semibold">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="mt-2 font-mono text-xs text-muted">{education.period}</p>
            </div>
            <div className="card p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Training
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                {training.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Languages
              </h3>
              <ul className="space-y-2 text-sm text-muted">
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
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="blob blob-tangerine absolute -right-16 -top-16 h-64 w-64 opacity-40" />
          </div>
          <p className="max-w-2xl text-pretty text-xl leading-relaxed text-ink-soft">
            I am always glad to talk about test strategy, accessibility, or what it takes to build
            software that works for people the industry usually designs around.
          </p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  className="link-underline break-all font-medium text-ink hover:text-accent"
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
                  className="link-underline font-medium text-ink hover:text-accent"
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
                  className="link-underline font-medium text-ink hover:text-accent"
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
