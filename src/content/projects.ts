export type Metric = { value: string; label: string };
export type Block = { heading: string; body?: string; bullets?: string[] };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  org: string;
  period: string;
  role: string;
  kind: string;
  featured: boolean;
  order: number;
  summary: string;
  metrics: Metric[];
  tags: string[];
  diagram: string;
  diagramCaption: string;
  blocks: Block[];
  stack: { group: string; items: string[] }[];
  confidential?: string;
};

export const projects: Project[] = [
  {
    slug: "mel-platform",
    name: "MEL Platform",
    tagline:
      "Quality ownership on a tri-lingual, offline-capable platform that follows a person with a disability from first contact to settled employment.",
    org: "Codesage · EnAble India",
    period: "Feb 2026 — Present",
    role: "Senior QA Engineer — end-to-end quality owner, and contributing engineer",
    kind: "Full-stack product · Web, Windows desktop, Android",
    featured: true,
    order: 1,
    summary:
      "MEL — Monitoring, Evaluation and Learning — is the operational backbone of EnAble India's grassroots programme. It tracks one candidate through a long, human journey: campaign or walk-in, registration, a seven-step profile, training, self-employment settlement, 45- and 90-day follow-ups, and finally settled. Field officers use it in Grassroots Service Centres on patchy connections, in three languages, on phones and laptops. I own quality across all of it.",
    metrics: [
      { value: "4", label: "repositories in the system" },
      { value: "1,028", label: "test cases authored & owned" },
      { value: "22", label: "feature modules under test" },
      { value: "3", label: "languages (EN / HI / KN)" },
      { value: "206", label: "of my commits merged" },
      { value: "~50k", label: "lines of product code written" },
    ],
    tags: ["React 19", "Hono", "PostgreSQL", "Playwright", "Tauri", "WCAG 2.2 AA"],
    diagram: "mel",
    diagramCaption:
      "MEL system architecture — three clients over one Hono API, with an offline sync path for field devices.",
    blocks: [
      {
        heading: "The testing problem",
        body:
          "MEL is not one app. The same feature has to behave identically in a browser, in a Tauri desktop build, and in a Tauri Android build that may be offline for hours — then reconcile when it syncs. Every screen exists in English, Hindi and Kannada. Every record is scoped by role: a field officer sees only their own centre, a State Head sees their states, an admin sees everything. A single candidate-status change can be correct on web and wrong on the offline path.",
        bullets: [
          "Multiple role types with different visibility, each a separate data path to verify",
          "Three languages, two of which produce longer strings that break tight layouts",
          "Three runtime targets, one of which writes to a local store and syncs later",
          "Users are people with disabilities — accessibility is a functional requirement, not a polish item",
        ],
      },
      {
        heading: "How I set quality up",
        bullets: [
          "Wrote the test suite module by module — Candidates, Trainings, Courses, Centres, Campaigns, Settlements, Workplace Support, Committees, Master Data, Reports and Notifications — to 1,028 cases with per-role variants.",
          "Ran a wireframe-versus-build comparison for every Master Data entity, sub-view by sub-view, so specification drift was caught before UAT rather than during it.",
          "Drove UAT cycles end to end and produced the sign-off packages, release notes and production readiness reports the client signs against.",
          "Built role-and-data-path smoke suites so a scope-visibility regression fails fast instead of surfacing in the field.",
          "Extended the same coverage onto Android through a self-contained Appium and emulator harness, with mobile UAT sheets mirroring the web ones.",
        ],
      },
      {
        heading: "Defects worth naming",
        body:
          "The bugs I am proudest of are the quiet ones — the kind that pass a happy-path script and lose real data.",
        bullets: [
          "Offline sync silently dropped rows: the scoped sync cursor keyed on a timestamp alone, so records written in the same tick were skipped forever. Fixed with a compound cursor.",
          "Duplicate-key failures surfaced as opaque 500s because the ORM wrapped the Postgres unique violation. Mapped to a proper 409 with a usable message.",
          "Future dates were accepted as a candidate's date of birth. Caught in UAT and tracked as a fail across two runs until it was fixed.",
          "A training could be archived while candidates were still on its roster — on the offline path as well as online.",
          "Editing a GSC centre did not prefill its pincodes, so saving quietly narrowed the centre's coverage area.",
        ],
      },
      {
        heading: "Where I crossed into the codebase",
        body:
          "On a small team, handing over a one-line fix costs more than writing it. Over six months, 206 of my commits were merged across the frontend and backend — roughly 50,000 lines added. Several shipped as matched frontend and backend pairs on the same ticket.",
        bullets: [
          "Settlement module and the 45- and 90-day follow-up scheduler, including sequence gating and draft persistence",
          "An application-wide centre and state scope switcher — API and UI, one ticket",
          "Server-side search, filtering, pagination and denormalised counts across every Master Data tab",
          "Committee PDF export, end to end",
          "English-only input validation enforced across the whole API and app",
          "URL-backed list filters, so a filtered view can be shared as a link",
          "The accessibility remediation sweep described in its own case study",
        ],
      },
    ],
    stack: [
      {
        group: "Frontend",
        items: [
          "React 19",
          "TypeScript",
          "Vite",
          "TanStack Router",
          "TanStack Query",
          "Tailwind v4",
          "shadcn/ui + Radix",
          "React Hook Form + Zod",
          "Zustand",
          "i18next (EN/HI/KN)",
          "Recharts",
          "Leaflet",
        ],
      },
      {
        group: "Backend",
        items: [
          "Hono",
          "Drizzle ORM",
          "PostgreSQL",
          "Redis",
          "NATS",
          "AWS S3",
          "Firebase Admin",
          "Sentry",
          "pdfmake",
          "OTP / MFA",
          "JWT + RBAC",
        ],
      },
      {
        group: "Clients",
        items: ["Web", "Tauri — Windows desktop", "Tauri — Android", "Offline-first sync"],
      },
      {
        group: "Quality",
        items: ["Playwright", "axe-core", "Vitest", "Appium", "Jira", "UAT sign-off"],
      },
    ],
    confidential:
      "MEL holds personal data belonging to people with disabilities, and the repositories are private client work. This case study describes architecture and process only — no screenshots, no records, no source.",
  },

  {
    slug: "mel-test-dashboard",
    name: "MEL Test Dashboard",
    tagline:
      "I could not find a test-management tool that fit how we work, so I built and shipped one. Sole author, 95 commits.",
    org: "Codesage · EnAble India",
    period: "May 2026 — Present",
    role: "Sole designer, engineer and maintainer",
    kind: "Internal product · Serverless web app",
    featured: true,
    order: 2,
    summary:
      "Our test cases lived in Excel, our bugs lived in Jira, our evidence lived in a folder of screenshots, and nothing connected them. Answering “what is the state of this release?” meant reconciling three sources by hand. So I built one screen that unifies test cases, runs and Jira — with a Playwright watcher that picks up queued tests, executes them, and posts the results back on its own.",
    metrics: [
      { value: "95", label: "commits — sole author" },
      { value: "1,028", label: "test cases served" },
      { value: "207", label: "Playwright automation scripts" },
      { value: "12", label: "serverless function budget, met" },
    ],
    tags: ["Playwright", "Python", "Upstash Redis", "Jira REST", "Vercel"],
    diagram: "dashboard",
    diagramCaption:
      "From Excel workbook to executed run and back to Jira — the dashboard's full loop.",
    blocks: [
      {
        heading: "What it does",
        bullets: [
          "Serves every test case in the suite with live Pass / Fail / On Hold status, persisted to Redis so the whole team sees the same state on refresh.",
          "Shows a run panel per execution: pointwise steps, expected versus observed, and pass/fail screenshots with element-level highlighting.",
          "Embeds a Jira board — tasks and bugs by status and by date — with comments, status transitions, assignee changes and screenshot paste, all from inside the dashboard.",
          "Runs a live QA queue: anyone can request a test, a Playwright watcher picks it up, executes it and posts the result back with evidence attached.",
          "Carries a wireframe-versus-build Compare tab that walks every Master Data entity sub-view by sub-view.",
          "Generates an analytics view that reacts to the selected date window.",
        ],
      },
      {
        heading: "How it is built",
        body:
          "A Python build step reads the UAT workbooks and emits a single pre-built HTML page, so the dashboard has no client-side framework and no build server — it loads instantly. State and auth live in serverless functions behind edge middleware.",
        bullets: [
          "Python generator turns Excel UAT sheets into the dashboard page; re-run it whenever the workbook changes",
          "Serverless API routes for auth, status, test cases, runs, test requests and the Jira proxy",
          "Edge middleware gates every request on a signed cookie before anything renders",
          "Upstash Redis holds status so it is shared, not per-browser",
          "The Jira REST API is proxied server-side so no token ever reaches the client",
        ],
      },
      {
        heading: "A constraint I had to design around",
        body:
          "The hosting plan caps a project at twelve serverless functions, and a naive route-per-endpoint layout blew past it. Rather than upgrade, I folded the attachment proxy into the Jira issue route and the watcher control into the test-requests route — collapsing the surface without losing a feature. The deployment has stayed inside the budget since.",
      },
      {
        heading: "Why it mattered",
        bullets: [
          "Release status became one URL instead of a manual reconciliation across three tools.",
          "Evidence stopped going missing — screenshots attach to the run, and the run attaches to the ticket.",
          "The suite grew from 833 to 1,021 cases in a single July import without the tooling straining.",
          "Queued regression runs execute unattended and report themselves.",
        ],
      },
    ],
    stack: [
      { group: "Runtime", items: ["Vercel serverless functions", "Edge middleware", "Node.js"] },
      { group: "Data", items: ["Upstash Redis", "Excel workbooks as source of truth"] },
      { group: "Build", items: ["Python", "Static HTML generation"] },
      {
        group: "Automation",
        items: ["Playwright", "207 run scripts", "Headless watcher process"],
      },
      { group: "Integration", items: ["Jira REST API", "Attachment proxy", "Cookie auth"] },
    ],
  },

  {
    slug: "accessibility-engineering",
    name: "Accessibility Engineering",
    tagline:
      "WCAG 2.1 / 2.2 AA on products built for people with disabilities — audited, automated, and then actually fixed.",
    org: "Codesage · EnAble India",
    period: "Apr 2026 — Present",
    role: "Accessibility lead — audit, automation and remediation",
    kind: "Practice · Automation framework + in-product remediation",
    featured: true,
    order: 3,
    summary:
      "When the people using your product are blind, low-vision, deaf, or navigating with one hand on a switch device, accessibility stops being a compliance checkbox and becomes the feature. I run this as three connected pieces: an automated scan framework, a manual audit discipline that catches what scanners cannot, and the remediation work in the product itself.",
    metrics: [
      { value: "AA", label: "WCAG 2.1 / 2.2 conformance target" },
      { value: "320px", label: "narrowest supported viewport" },
      { value: "400%", label: "zoom reflow verified" },
      { value: "2", label: "products audited (MEL, DISH)" },
    ],
    tags: ["axe-core", "Playwright", "WCAG 2.1 / 2.2 AA", "Screen readers"],
    diagram: "a11y",
    diagramCaption:
      "The accessibility pipeline — automated scans catch the mechanical failures, manual passes catch the ones that matter most.",
    blocks: [
      {
        heading: "The automation layer",
        body:
          "A Playwright and TypeScript framework built around axe-core, running against staging and production on demand.",
        bullets: [
          "Axe-core scans per route, asserted at WCAG 2.0 / 2.1 Level A and AA",
          "Dedicated keyboard specs: tab order, focus trapping, and OTP-field navigation",
          "HTML and JSON reporters so a run is both human-readable and machine-diffable",
          "Environment switching between stage and production from one config",
          "A second, custom Node checker that emits per-module Excel and HTML reports for stakeholders who do not read test output",
          "In the product itself: eslint-plugin-jsx-a11y in CI, @axe-core/react in development, and a dedicated Playwright a11y project",
        ],
      },
      {
        heading: "What automation cannot catch",
        body:
          "Axe-core will tell you an input has no label. It will not tell you that after a user activates “View All” and comes back, focus has been dumped at the top of the document and they have lost their place. Those failures are the ones that make a product unusable, and they only surface under manual keyboard and screen-reader passes.",
        bullets: [
          "Focus continuity — every dashboard link needs its own restore target when the user comes back",
          "Focus round-trips through “View All” and detail pages, including when the restore target sits inside a collapsed section that must be expanded first",
          "Live-region announcements for values that change without a navigation, such as a statistics total",
          "History-aware Back behaviour, so Back does what the user meant rather than what the router defaulted to",
          "Table semantics — headers, scope and captions a screen reader can actually navigate",
          "Landing focus on the page, not the shell, when a tab opens",
        ],
      },
      {
        heading: "Remediation, not just reporting",
        body:
          "I did not hand the findings over and move on. The accessibility fixes across the dashboard, Master Data, Centres, Reports, Support Requests and Notifications are in my own merged commits — focus order, table semantics, announcement regions, and the restore logic that makes them hold.",
      },
      {
        heading: "Responsive coverage",
        bullets: [
          "Every breakpoint from 320px to 1920px verified per module, with evidence captured",
          "Reflow verified at 200% and 400% zoom — no horizontal scrolling, no clipped content",
          "Longer Hindi and Kannada strings verified against tight layouts",
          "Mobile card layouts introduced where wide tables could not reflow honestly",
        ],
      },
    ],
    stack: [
      {
        group: "Scanning",
        items: ["axe-core", "@axe-core/playwright", "@axe-core/react", "eslint-plugin-jsx-a11y"],
      },
      {
        group: "Framework",
        items: ["Playwright", "TypeScript", "HTML + JSON reporters", "Custom Node checker"],
      },
      {
        group: "Manual",
        items: ["Screen readers", "Keyboard-only passes", "Zoom reflow", "Colour-contrast verification"],
      },
      {
        group: "Standards",
        items: ["WCAG 2.1 AA", "WCAG 2.2 AA", "POUR principles", "Compliance checklists"],
      },
    ],
  },

  {
    slug: "mobile-automation-harness",
    name: "Mobile & Desktop Test Harness",
    tagline:
      "A self-contained Appium and emulator rig that tests the Android build without touching the machine's global setup.",
    org: "Codesage · EnAble India",
    period: "Jul 2026 — Present",
    role: "Framework author",
    kind: "Automation infrastructure",
    featured: true,
    order: 4,
    summary:
      "MEL ships as a browser app, a Windows desktop app and an Android app from one Tauri codebase — which means the same regression has to run on all three. I built a harness that keeps its own JDK, Android SDK and emulator image inside a single folder, so it is reproducible on any machine and leaves no global installs behind.",
    metrics: [
      { value: "3", label: "runtime targets covered" },
      { value: "2", label: "mobile platforms configured" },
      { value: "0", label: "global installs required" },
    ],
    tags: ["Appium", "Android SDK", "Docker", "Page Object Model"],
    diagram: "mobile",
    diagramCaption:
      "The harness is self-contained — JDK, SDK, AVD, Appium and the APK builder all live inside one folder.",
    blocks: [
      {
        heading: "Why self-contained",
        body:
          "Mobile test setups rot. Someone updates a global JDK, an SDK licence changes, and the suite that passed last week will not start. I pinned every dependency inside the project folder — the JDK, the Android SDK, the AVD image and the Appium server — so the rig either works everywhere or fails identically everywhere.",
      },
      {
        heading: "What is in it",
        bullets: [
          "Page Object Model classes: BasePage, LoginPage, CandidatePage and CandidateProfilePage",
          "Separate Android and iOS platform configurations behind one shared framework",
          "An authentication hook so specs start from a signed-in state instead of re-driving login",
          "Discovery and probe runners that map an unfamiliar screen's controls before a spec is written against it",
          "Per-role application review sweeps that capture every module for a given role in one pass",
          "A Docker-based APK builder that produces the Tauri Android artefact reproducibly",
          "Mobile UAT sheets mirroring the web suites, so coverage is comparable across platforms",
        ],
      },
      {
        heading: "Where it pays off",
        body:
          "Offline behaviour is the hardest thing to verify by hand, and it is exactly what a field officer depends on. Having a scriptable emulator meant I could reproduce the sync-cursor defect deterministically — write two records inside the same tick, force a sync, and watch one vanish — instead of arguing about whether it was real.",
      },
    ],
    stack: [
      { group: "Mobile", items: ["Appium", "Android SDK + AVD", "UiAutomator2", "iOS config"] },
      {
        group: "Structure",
        items: ["Page Object Model", "Auth hooks", "Discovery runners", "Node.js"],
      },
      { group: "Build", items: ["Docker", "Tauri Android", "Reproducible APK pipeline"] },
      {
        group: "Desktop",
        items: ["Tauri Windows build verification", "Release artefact checks"],
      },
    ],
  },

  {
    slug: "dish",
    name: "DISH — Disability Information & Support Hub",
    tagline:
      "Accessibility audit and functional automation for an AI search assistant built for people with disabilities.",
    org: "Codesage · EnAble India",
    period: "2026",
    role: "Accessibility audit and test automation owner",
    kind: "AI / RAG product · 8 repositories",
    featured: false,
    order: 5,
    summary:
      "DISH is an AI-powered information assistant for people with disabilities — semantic search over a curated corpus, with a voice interface for users who cannot type. It spans eight interdependent repositories delivered on a patch-and-extend strategy. My remit was the part that decides whether it is usable at all: the WCAG 2.1 AA audit and the automated functional suite.",
    metrics: [
      { value: "8", label: "repositories in scope" },
      { value: "10", label: "feature areas" },
      { value: "46", label: "in-scope delivery items" },
      { value: "AA", label: "WCAG 2.1 conformance target" },
    ],
    tags: ["Playwright", "axe-core", "Qdrant", "WCAG 2.1 AA"],
    diagram: "dish",
    diagramCaption:
      "DISH retrieval path — query rewriting into a vector store, with speech-to-text as a first-class input.",
    blocks: [
      {
        heading: "What I owned",
        bullets: [
          "The full WCAG 2.1 AA accessibility audit across the product's web interface",
          "A Playwright suite covering the search path end to end, including the question-and-answer flow with embedded media",
          "Report generators producing complete, shareable WCAG and functional reports for the client",
          "Verification of the voice interface as an input path, not as a bolt-on",
        ],
      },
      {
        heading: "Testing an AI product",
        body:
          "A semantic search engine has no fixed expected output, so assertions cannot be string equality. The suite verifies the properties that must hold regardless of what the model returns — that a query produces a grounded, sourced answer; that guardrails hold on out-of-scope input; that the interface stays fully operable by keyboard and screen reader while the answer streams in; and that speech-to-text degrades gracefully when the engine is unavailable.",
      },
      {
        heading: "Why the accessibility work was the critical path",
        body:
          "The users of a disability information hub are, by definition, the people most affected by inaccessible interfaces. A search product they cannot operate is not a partially working product — it is a non-functional one. That framing drove the audit's priority order.",
      },
    ],
    stack: [
      {
        group: "Product",
        items: [
          "PostgreSQL",
          "Qdrant vector store",
          "LLM semantic search",
          "Query rewriting",
          "Speech-to-text",
        ],
      },
      {
        group: "My tooling",
        items: ["Playwright", "TypeScript", "axe-core", "Custom report generators"],
      },
      {
        group: "Standards",
        items: ["WCAG 2.1 AA", "Ethical-AI guardrail checks", "Data governance review"],
      },
    ],
  },

  {
    slug: "supplai",
    name: "SupplAI",
    tagline:
      "End-to-end regression and security spot-checks on a logistics planning and live fleet-tracking platform.",
    org: "Codesage",
    period: "Feb — Mar 2026",
    role: "Senior QA Engineer — regression and edge-case coverage",
    kind: "Logistics & fleet management",
    featured: false,
    order: 6,
    summary:
      "SupplAI plans journeys, allocates trucks and drivers, and tracks them live over a GPS integration while a control room watches for stops, breakdowns and alerts. It was my first engagement in this role, and the domain punishes shallow testing: a journey has a lifecycle, and most real defects live in the transitions rather than in any single screen.",
    metrics: [
      { value: "15", label: "modules covered" },
      { value: "5", label: "formal test reports delivered" },
      { value: "GPS", label: "live telematics integration" },
    ],
    tags: ["Playwright", "JavaScript", "XSS probes", "Excel reporting"],
    diagram: "supplai",
    diagramCaption:
      "The journey lifecycle — most defects live in the transitions, not the screens.",
    blocks: [
      {
        heading: "Coverage",
        bullets: [
          "Master data administration, journey creation and bulk journey upload",
          "Journey confirmation, planning and fleet allocation under division-based rules",
          "Live operations tracking, stop management, breakdown and alert handling",
          "Control room logs, ETA and time logic, journey completion, archive and reporting",
        ],
      },
      {
        heading: "What I automated",
        bullets: [
          "Playwright specs across customers, drivers, fleet and a full end-to-end regression path",
          "Filter edge-case coverage, where combinations rather than single filters produced the failures",
          "Cross-verification runs reconciling the specification against actual behaviour",
          "Automated Excel report generation so results landed in the format the client already used",
        ],
      },
      {
        heading: "Security spot-checks",
        body:
          "Fleet platforms accept a lot of free text — customer names, waypoint labels, log notes — and all of it is rendered back into dashboards. I ran cross-site-scripting probes and whitespace and boundary tests against those inputs alongside the functional suite, on the principle that an input field nobody validated is a defect waiting for a worse discoverer.",
      },
    ],
    stack: [
      { group: "Automation", items: ["Playwright", "JavaScript", "Excel report generators"] },
      {
        group: "Domain",
        items: ["Journey lifecycle", "Fleet allocation", "GPS telematics", "Control room operations"],
      },
      {
        group: "Practice",
        items: ["E2E regression", "Filter edge cases", "XSS probes", "Cross-verification"],
      },
    ],
  },

  {
    slug: "biomap",
    name: "Biomap",
    tagline:
      "Role-based end-to-end automation for a wellness platform, built on reusable data-driven components.",
    org: "Ace Infoway Pvt. Ltd.",
    period: "2023 — 2026",
    role: "QA Automation Engineer",
    kind: "Wellness platform · Multi-role web application",
    featured: false,
    order: 7,
    summary:
      "Biomap serves four distinct roles — Admin, Relationship Manager, Subject Matter Expert and Client — and each of them sees a different version of the same modules. Automating that naively means writing the suite four times. I built it once, data-driven, and parameterised the role.",
    metrics: [
      { value: "4", label: "roles automated" },
      { value: "5", label: "core modules covered" },
    ],
    tags: ["Selenium", "Playwright", "Page Object Model", "SQL"],
    diagram: "pom",
    diagramCaption:
      "One Page Object layer, four role datasets — the pattern that kept the suite from being written four times.",
    blocks: [
      {
        heading: "Scope",
        bullets: [
          "Dashboard, Appointments, Billing, Reports and Inquiries",
          "Full coverage across the Admin, Relationship Manager, Subject Matter Expert and Client roles",
          "Reusable, data-driven components so a role became a dataset rather than a duplicated suite",
        ],
      },
      {
        heading: "Approach",
        body:
          "Page Object Model with the role supplied as test data rather than baked into the spec. Adding a role meant adding a data row, and a permission change was verified across every module in one run instead of four.",
      },
    ],
    stack: [
      {
        group: "Automation",
        items: ["Selenium WebDriver", "Playwright", "Page Object Model", "Data-driven design"],
      },
      {
        group: "Practice",
        items: ["Regression suites", "Role-based coverage", "Database validation (SQL)"],
      },
      { group: "Process", items: ["Agile / Scrum", "Git", "GitLab", "Jira"] },
    ],
  },

  {
    slug: "rotawiz",
    name: "Rotawiz",
    tagline:
      "End-to-end automation for an Australian healthcare rostering product, across web, Android and iOS from one codebase.",
    org: "Ace Infoway Pvt. Ltd.",
    period: "2023 — 2026",
    role: "QA Automation Engineer",
    kind: "Healthcare rostering · Web + mobile",
    featured: false,
    order: 8,
    summary:
      "Rostering software for healthcare carries real consequences — a scheduling defect is a shift nobody covers. Rotawiz needed regression coverage across Dashboard, Appointments, Billing, Reports and Users, on web and on both mobile platforms, without maintaining three separate suites.",
    metrics: [
      { value: "3", label: "platforms from one codebase" },
      { value: "70%", label: "of regression automated" },
      { value: "600+", label: "test cases per release" },
      { value: "50%", label: "manual effort reduced" },
    ],
    tags: ["Selenium", "Appium", "Cucumber BDD", "TestNG"],
    diagram: "unified",
    diagramCaption:
      "One framework, three targets — the unified web, Android and iOS codebase behind the Ace Infoway suites.",
    blocks: [
      {
        heading: "Scope",
        bullets: [
          "Dashboard, Appointments, Billing, Reports and Users",
          "Web, Android and iOS coverage under a single unified automation codebase",
          "Cucumber BDD scenarios readable by non-technical stakeholders",
        ],
      },
      {
        heading: "Results",
        bullets: [
          "70% of regression testing automated, cutting manual effort by half each sprint",
          "600+ test cases executed per release at 100% functional coverage",
          "Consistently bug-free production builds across the engagement",
          "TestRigor integrated for scriptless, self-healing coverage on the most brittle flows",
        ],
      },
    ],
    stack: [
      {
        group: "Automation",
        items: [
          "Selenium WebDriver",
          "Playwright",
          "Appium",
          "TestNG",
          "Cucumber (BDD)",
          "Maven",
        ],
      },
      { group: "Platforms", items: ["Web", "Android", "iOS"] },
      {
        group: "Practice",
        items: ["Regression automation", "TestRigor", "SQL / MS SQL validation"],
      },
      { group: "Process", items: ["Agile / Scrum", "Git", "GitLab", "Jira"] },
    ],
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export const allProjects = [...projects].sort((a, b) => a.order - b.order);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
