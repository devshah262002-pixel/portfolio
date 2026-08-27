import Link from "next/link";
import { allProjects } from "@/content/projects";
import {
  earlierProjects,
  education,
  experience,
  languages,
  site,
  skillGroups,
  training,
} from "@/content/site";

const marqueeItems = [
  "Playwright",
  "Selenium",
  "Appium",
  "axe-core",
  "WCAG 2.2 AA",
  "Postman",
  "TypeScript",
  "React 19",
  "Hono",
  "PostgreSQL",
  "Jira",
  "Cucumber BDD",
  "TestRigor",
  "Tauri",
  "Docker",
  "SQL",
];

export default function Home() {
  return (
    <>
      {/* ============================================================ hero */}
      <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <h1
            className="display text-balance"
            style={{ fontSize: "clamp(2.9rem, 9.2vw, 9.5rem)" }}
          >
            I own quality <span className="mark">end&nbsp;to&nbsp;end</span> — and build the tooling
            my team <em className="italic">tests with.</em>
          </h1>

          <div className="lg:pb-4">
            <p className="inline-flex items-center gap-2 bg-lime px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink" />
              {site.availability}
            </p>
            <a
              href={site.cv}
              download
              className="mt-4 inline-flex items-center gap-2 border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Download CV
              <span aria-hidden>↓</span>
              <span className="sr-only">(PDF)</span>
            </a>

            <p className="label mt-6">Currently</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {site.role} at Codesage, deployed at EnAble India — owning quality on MEL, a platform
              for people with disabilities.
            </p>
            <p className="label mt-6">Based in</p>
            <p className="mt-2 text-sm text-ink-soft">{site.location}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-rule pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.headlineMetrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-5xl leading-none sm:text-6xl">{m.value}</p>
              <p className="label mt-3">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= marquee */}
      <div
        aria-hidden
        className="marquee border-y border-rule bg-lime py-3 text-ink"
      >
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex shrink-0">
              {marqueeItems.map((t) => (
                <span
                  key={t}
                  className="flex shrink-0 items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.16em]"
                >
                  {t}
                  <span className="opacity-40">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Tools I work with: {marqueeItems.join(", ")}.
      </p>

      {/* =========================================================== work */}
      <section id="work" className="mx-auto max-w-[1600px] scroll-mt-20 px-5 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-6 border-b border-rule pb-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <p className="label">Index — Selected work</p>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Client repositories are private and MEL holds personal data belonging to people with
            disabilities. These case studies describe architecture, decisions and outcomes — never
            records or source.
          </p>
        </div>

        <ol>
          {allProjects.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className="row group block py-7 sm:py-9">
                <div className="grid items-baseline gap-x-6 gap-y-3 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-y-0">
                  <span className="font-mono text-xs text-muted row-meta">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h2
                      className="display truncate-none"
                      style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.6rem)" }}
                    >
                      {p.name}
                    </h2>
                    <p className="row-meta mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {p.tagline}
                    </p>
                    <p className="row-meta mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      {p.tags.join("  ·  ")}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 sm:justify-end">
                    <span className="row-meta hidden font-mono text-xs uppercase tracking-[0.12em] text-muted md:block">
                      {p.period}
                    </span>
                    <span aria-hidden className="row-arrow font-display text-3xl leading-none">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        {/* earlier engagements — a compact register, not cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <p className="label">Earlier engagements</p>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {earlierProjects.map((p) => (
              <li key={p.name} className="border-t border-rule pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl leading-none">{p.name}</h3>
                  <span className="font-mono text-[11px] text-muted">{p.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{p.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.note}</p>
                <p className="mt-3 font-mono text-[11px] leading-relaxed text-muted">
                  {p.coverage.join("  ·  ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================================================== about */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-rule bg-paper-2 px-5 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="label">About</p>
            <p className="mt-4 font-display text-3xl leading-[1.05] sm:text-4xl">
              Quality is the whole job, not the last step.
            </p>
          </div>

          <div>
            <div className="prose-body space-y-6">
              {site.intro.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-soft sm:text-xl">
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {site.pillars.map((p, i) => (
                <li key={p.title} className="border-t border-rule-strong pt-5">
                  <p className="font-mono text-[11px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-none">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================================================== experience */}
      <section
        id="experience"
        className="mx-auto max-w-[1600px] scroll-mt-20 px-5 py-20 sm:px-10 sm:py-28"
      >
        <div className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="label">Experience</p>
            <p className="mt-4 font-display text-3xl leading-[1.05] sm:text-4xl">
              Where I have done it.
            </p>
          </div>

          <ol className="space-y-16">
            {experience.map((e) => (
              <li key={e.org} className="border-t border-rule-strong pt-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl leading-none sm:text-5xl">{e.role}</h3>
                  {e.current && (
                    <span className="bg-lime px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {e.org} · {e.place}
                </p>
                <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {e.period} · {e.duration} · {e.engagement}
                </p>
                <ul className="mt-7 grid gap-x-12 gap-y-4 sm:grid-cols-2">
                  {e.points.map((pt) => (
                    <li key={pt.slice(0, 30)} className="text-sm leading-relaxed text-ink-soft">
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================================================= skills */}
      <section
        id="skills"
        className="scroll-mt-20 border-t border-rule bg-paper-2 px-5 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="label">Capabilities</p>
            <p className="mt-4 font-display text-3xl leading-[1.05] sm:text-4xl">
              What I work with.
            </p>
          </div>

          <div className="space-y-12">
            {skillGroups.map((g) => (
              <div key={g.group} className="border-t border-rule-strong pt-5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                  {g.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-base text-ink-soft sm:text-lg">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="grid gap-10 border-t border-rule-strong pt-5 sm:grid-cols-3">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                  Education
                </h3>
                <p className="mt-4 font-display text-xl leading-tight">{education.degree}</p>
                <p className="mt-2 text-sm text-muted">{education.school}</p>
                <p className="mt-1 font-mono text-[11px] text-muted">{education.period}</p>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                  Training
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {training.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                  Languages
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== contact */}
      <section
        id="contact"
        className="mx-auto max-w-[1600px] scroll-mt-20 px-5 py-20 sm:px-10 sm:py-28"
      >
        <div className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <p className="label">Contact</p>
          <div>
            <p
              className="display text-balance"
              style={{ fontSize: "clamp(2.2rem, 5.6vw, 5.5rem)" }}
            >
              Test strategy, accessibility, or building software for people the industry usually{" "}
              <span className="mark">designs around.</span>
            </p>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <li>
                <p className="label">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="underline-grow mt-2 inline-block break-all text-base"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="label">Phone</p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="underline-grow mt-2 inline-block text-base"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <p className="label">CV</p>
                <a href={site.cv} download className="underline-grow mt-2 inline-block text-base">
                  Download PDF ↓
                </a>
              </li>
              <li>
                <p className="label">LinkedIn</p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-grow mt-2 inline-block text-base"
                >
                  dev-shah ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
