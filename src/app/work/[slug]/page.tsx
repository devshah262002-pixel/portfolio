import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDiagram } from "@/components/diagrams";
import { allProjects, getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    openGraph: { title: project.name, description: project.tagline },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = allProjects.findIndex((p) => p.slug === project.slug);
  const next = allProjects[(index + 1) % allProjects.length];

  return (
    <article>
      {/* =========================================================== head */}
      <header className="mx-auto max-w-[1600px] px-5 pb-12 pt-10 sm:px-10 sm:pb-16 sm:pt-16">
        <Link href="/#work" className="label transition-colors hover:text-ink">
          ← Index
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <h1 className="display text-balance" style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)" }}>
            {project.name}
          </h1>
          <p className="text-pretty text-base leading-relaxed text-ink-soft lg:pb-4">
            {project.tagline}
          </p>
        </div>

        <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-rule pt-7 sm:grid-cols-3">
          <div>
            <dt className="label">Client</dt>
            <dd className="mt-2 text-sm text-ink-soft">{project.org}</dd>
          </div>
          <div>
            <dt className="label">Role</dt>
            <dd className="mt-2 text-sm text-ink-soft">{project.role}</dd>
          </div>
          <div>
            <dt className="label">Period</dt>
            <dd className="mt-2 text-sm text-ink-soft">{project.period}</dd>
          </div>
        </dl>
      </header>

      {/* ========================================================= metrics */}
      <div className="border-y border-rule bg-paper-2">
        <dl className="mx-auto grid max-w-[1600px] grid-cols-2 gap-8 px-5 py-10 sm:px-10 lg:grid-cols-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-display text-4xl leading-none sm:text-5xl">
                  {m.value}
                </span>
                <span className="label mt-2 block">{m.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ============================================================ body */}
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-10 sm:py-24">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <p className="label">Overview</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {project.kind}
            </p>
          </div>

          <div className="min-w-0">
            <p className="max-w-[52ch] text-pretty text-xl leading-relaxed text-ink-soft sm:text-2xl">
              {project.summary}
            </p>

            <ProjectDiagram name={project.diagram} caption={project.diagramCaption} />

            <div className="space-y-16">
              {project.blocks.map((b, i) => (
                <section key={b.heading} className="border-t border-rule-strong pt-7">
                  <p className="font-mono text-[11px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    className="display mt-3"
                    style={{ fontSize: "clamp(1.8rem, 3.6vw, 3rem)" }}
                  >
                    {b.heading}
                  </h2>
                  {b.body && (
                    <p className="mt-5 max-w-[68ch] text-base leading-relaxed text-ink-soft sm:text-lg">
                      {b.body}
                    </p>
                  )}
                  {b.bullets && (
                    <ul className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
                      {b.bullets.map((li) => (
                        <li
                          key={li.slice(0, 32)}
                          className="border-t border-rule pt-3 text-sm leading-relaxed text-muted"
                        >
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* stack */}
            <section className="mt-16 border-t border-rule-strong pt-7">
              <h2 className="display" style={{ fontSize: "clamp(1.8rem, 3.6vw, 3rem)" }}>
                Stack
              </h2>
              <div className="mt-8 space-y-8">
                {project.stack.map((g) => (
                  <div key={g.group} className="border-t border-rule pt-4">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                      {g.group}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                      {g.items.map((it) => (
                        <li key={it} className="text-base text-ink-soft">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {project.confidential && (
              <aside className="mt-14 border-l-4 border-lime bg-paper-2 px-6 py-5">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                  A note on confidentiality
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.confidential}</p>
              </aside>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================ next */}
      <nav aria-label="More work" className="border-t border-rule">
        <Link href={`/work/${next.slug}`} className="row group block">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-10 sm:px-10 sm:py-14">
            <span>
              <span className="label">Next</span>
              <span
                className="display mt-2 block"
                style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.6rem)" }}
              >
                {next.name}
              </span>
            </span>
            <span aria-hidden className="row-arrow font-display text-4xl leading-none">
              →
            </span>
          </div>
        </Link>
      </nav>
    </article>
  );
}
