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
      <div className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-4xl px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span> All work
          </Link>

          <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {project.org} · {project.period}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            {project.tagline}
          </p>

          <dl className="mt-9 grid gap-x-10 gap-y-5 border-t border-line pt-7 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                My role
              </dt>
              <dd className="mt-1.5 text-sm text-ink-soft">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Product
              </dt>
              <dd className="mt-1.5 text-sm text-ink-soft">{project.kind}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ----------------------------------------------------------- body */}
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
          {project.summary}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {project.metrics.map((m) => (
            <MetricTile key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        <ProjectDiagram name={project.diagram} caption={project.diagramCaption} />

        <div className="space-y-12">
          {project.blocks.map((b) => (
            <section key={b.heading}>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{b.heading}</h2>
              {b.body && (
                <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
                  {b.body}
                </p>
              )}
              {b.bullets && (
                <ul className="mt-5 space-y-3">
                  {b.bullets.map((li) => (
                    <li
                      key={li.slice(0, 32)}
                      className="flex gap-3 text-base leading-relaxed text-muted"
                    >
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* ---------------------------------------------------------- stack */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Stack</h2>
          <div className="mt-7 grid gap-7 sm:grid-cols-2">
            {project.stack.map((g) => (
              <div key={g.group}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
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
        </section>

        {project.confidential && (
          <aside className="mt-14 rounded-xl border border-line bg-warn-soft px-5 py-4">
            <h2 className="text-sm font-semibold text-warn">A note on confidentiality</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.confidential}</p>
          </aside>
        )}

        {/* ----------------------------------------------------------- next */}
        <nav
          aria-label="More work"
          className="mt-16 flex flex-col gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            href="/#work"
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span> All work
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group text-right text-sm font-semibold text-accent"
          >
            <span className="block text-xs font-normal uppercase tracking-[0.14em] text-muted">
              Next case study
            </span>
            <span className="mt-1 inline-block text-base">
              {next.name}{" "}
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
