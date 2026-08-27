import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDiagram } from "@/components/diagrams";
import { MetricTile, Tag } from "@/components/ui";
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
      {/* ----------------------------------------------------------- head */}
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob blob-tangerine float-slow absolute -left-24 -top-40 h-[24rem] w-[24rem]" />
          <div className="blob blob-teal float-slower absolute -right-24 -top-20 h-[20rem] w-[20rem] opacity-40" />
          <div className="dot-grid absolute inset-0" />
        </div>

        <div className="mx-auto max-w-4xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-2 text-sm font-medium text-ink-soft shadow-sm backdrop-blur transition-all hover:-translate-x-0.5 hover:text-accent"
          >
            <span aria-hidden>←</span> All work
          </Link>

          <p className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {project.org} · {project.period}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
            {project.tagline}
          </p>

          <dl className="card mt-10 grid gap-x-10 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                My role
              </dt>
              <dd className="mt-2 text-sm text-ink-soft">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Product
              </dt>
              <dd className="mt-2 text-sm text-ink-soft">{project.kind}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ----------------------------------------------------------- body */}
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24">
        <p className="text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
          {project.summary}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {project.metrics.map((m) => (
            <MetricTile key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        <ProjectDiagram name={project.diagram} caption={project.diagramCaption} />

        <div className="space-y-14">
          {project.blocks.map((b, i) => (
            <section key={b.heading}>
              <h2 className="flex items-start gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                <span
                  aria-hidden
                  className="mt-1.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent-soft font-mono text-[11px] font-bold text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{b.heading}</span>
              </h2>
              {b.body && (
                <p className="mt-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                  {b.body}
                </p>
              )}
              {b.bullets && (
                <ul className="mt-6 space-y-3">
                  {b.bullets.map((li) => (
                    <li
                      key={li.slice(0, 32)}
                      className="flex gap-3 text-base leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright"
                      />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* ---------------------------------------------------------- stack */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Stack</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {project.stack.map((g) => (
              <div key={g.group} className="card p-6">
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
        </section>

        {project.confidential && (
          <aside className="mt-14 rounded-2xl border border-accent-line bg-warn-soft px-6 py-5">
            <h2 className="text-sm font-semibold text-warn">A note on confidentiality</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.confidential}</p>
          </aside>
        )}

        {/* ----------------------------------------------------------- next */}
        <nav aria-label="More work" className="mt-16">
          <Link
            href={`/work/${next.slug}`}
            className="card card-lift card-glow group flex items-center justify-between gap-6 p-7 sm:p-8"
          >
            <span>
              <span className="block font-mono text-xs uppercase tracking-[0.14em] text-muted">
                Next case study
              </span>
              <span className="mt-2 block text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                {next.name}
              </span>
            </span>
            <span
              aria-hidden
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent-soft text-lg text-accent transition-all group-hover:bg-accent group-hover:text-white"
            >
              →
            </span>
          </Link>
          <p className="mt-6 text-center">
            <Link
              href="/#work"
              className="link-underline text-sm font-medium text-muted hover:text-accent"
            >
              ← Back to all work
            </Link>
          </p>
        </nav>
      </div>
    </article>
  );
}
