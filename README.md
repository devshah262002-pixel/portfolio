# Dev Shah — Portfolio

Personal portfolio site. Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript.

## Run it

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

## Where the content lives

All copy is data, not markup — edit these two files and the pages rebuild themselves:

| File | Holds |
| --- | --- |
| `src/content/site.ts` | Name, role, contact, intro, pillars, headline metrics, experience, education, skills |
| `src/content/projects.ts` | Every case study: summary, metrics, narrative blocks, stack, confidentiality note |

Adding a case study means appending one object to `projects` in `projects.ts`. The route
(`/work/<slug>`) and the home-page card are generated from it. Set `featured: true` to promote it
into the main grid.

## Diagrams

Case studies use hand-authored inline SVG instead of product screenshots — the client
repositories are private and MEL holds personal data belonging to people with disabilities.

- `src/components/diagrams/primitives.tsx` — `Box`, `Arrow`, `Elbow`, `Figure`, marker defs
- `src/components/diagrams/index.tsx` — one component per diagram, selected by `project.diagram`

Every diagram carries a descriptive `aria-label` for screen readers, and its scroll container is
focusable so keyboard users can pan wide diagrams.

## Accessibility

The site is held to WCAG 2.2 AA:

- Skip link, landmark regions, one `h1` per page, ordered headings
- Visible 3px focus ring on every interactive element
- AA contrast in both colour schemes, defined as tokens in `src/app/globals.css`
- No horizontal scroll at 320px; verified at every breakpoint to 1920px
- `prefers-reduced-motion` honoured — all transitions collapse to near-zero
- Light and dark both follow the visitor's system setting

## Theming

Colour lives entirely in CSS custom properties on `:root` in `globals.css`, with the dark
palette redefined under `@media (prefers-color-scheme: dark)`. Tailwind reads them through
`@theme inline`, so utilities like `bg-surface` and `text-muted` re-theme automatically.

## Deploy

```bash
vercel          # preview
vercel --prod   # production
```

After the first production deploy, update `metadataBase` in `src/app/layout.tsx` to the real
domain so Open Graph URLs resolve correctly.
