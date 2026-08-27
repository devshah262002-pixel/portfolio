export const site = {
  name: "Dev Shah",
  role: "Senior QA Engineer — SDET",
  roleShort: "Senior QA Engineer",
  tagline:
    "Senior QA Engineer and SDET who owns quality end to end — test strategy, automation across web and mobile, accessibility, and the tooling the team tests with.",
  location: "Bengaluru, India",
  email: "devshah262002@gmail.com",
  phone: "+91 96621 22232",
  linkedin: "https://www.linkedin.com/in/dev-shah-654777389",
  pronouns: "he/him",
  availability: "Open to Senior QA / SDET roles — Bengaluru or remote",
  cv: "/Dev-Shah-Senior-QA-Engineer-SDET.pdf",
  intro: [
    "I am a Senior QA Engineer and SDET with nearly three years in test automation, currently owning quality end to end on MEL — a live platform that helps people with disabilities move through skill training, employment and post-placement support.",
    "My work does not stop at finding defects. I write the test strategy, automate the regression suite across web, Android and desktop, enforce WCAG 2.2 AA, and build the internal tooling my team runs its testing on. When a fix is faster to ship than to describe, I ship it — 206 of my commits are merged into the product's own React and Hono codebases.",
  ],
  pillars: [
    {
      title: "Test strategy & execution",
      body:
        "Test plans, UAT cycles, release sign-offs and production readiness reports. I authored and maintain a 1,028-case suite covering every module of a multi-role platform.",
    },
    {
      title: "Automation engineering",
      body:
        "Playwright, Selenium and Appium frameworks on the Page Object Model with Cucumber BDD — one codebase covering web, Android and iOS, plus API-level automation.",
    },
    {
      title: "Accessibility (WCAG 2.1 / 2.2 AA)",
      body:
        "Axe-core scans, keyboard and focus-order audits, screen-reader checks, and responsive coverage from 320px to 1920px at up to 400% zoom — for products whose users are people with disabilities.",
    },
    {
      title: "QA tooling & product code",
      body:
        "I built my team's test-management dashboard as a deployed product, with a Playwright runner that executes queued tests and posts results straight back to Jira.",
    },
  ],
  headlineMetrics: [
    { value: "2.9", label: "years in QA automation" },
    { value: "1,028", label: "test cases authored & owned" },
    { value: "206", label: "commits merged to production code" },
    { value: "WCAG 2.2", label: "AA enforced across the product" },
  ],
};

export type ExperienceEntry = {
  role: string;
  org: string;
  place: string;
  period: string;
  duration: string;
  engagement: string;
  current?: boolean;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior QA Engineer — Full-Stack SDET",
    org: "Codesage (deployed at EnAble India)",
    place: "Bengaluru, India",
    period: "Feb 2026 — Present",
    duration: "6 months",
    engagement: "Full-time · Client site",
    current: true,
    points: [
      "Own end-to-end quality on MEL, a React 19 and Hono / PostgreSQL platform serving people with disabilities across skill training, employment and post-placement support.",
      "Authored and maintain a 1,028-case test suite across Candidates, Trainings, Courses, Centres, Campaigns, Settlements, Workplace Support, Committees and Master Data.",
      "Built the MEL Test Dashboard — a deployed test-management product with a Playwright runner and two-way Jira integration.",
      "Extended coverage to the Tauri Android and Windows desktop builds with a self-contained Appium and emulator harness.",
      "Enforced WCAG 2.1 / 2.2 AA and responsive coverage across every breakpoint, and led the in-product accessibility remediation sweep.",
      "Shipped 206 merged commits of feature and fix code across the frontend and backend when a fix was faster to write than to hand off.",
    ],
  },
  {
    role: "QA Automation Engineer",
    org: "Ace Infoway Pvt. Ltd.",
    place: "Ahmedabad, India",
    period: "Nov 2023 — Jan 2026",
    duration: "2 years 2 months",
    engagement: "Full-time",
    points: [
      "Built and maintained Selenium and Playwright automation frameworks on the Page Object Model with Cucumber BDD, covering web, Android and iOS from a single unified codebase.",
      "Automated 70% of regression testing, cutting manual effort per sprint by 50%.",
      "Executed 600+ test cases per release with 100% functional coverage and consistently bug-free production builds.",
      "Performed database validation with SQL and MS SQL, and integrated TestRigor for scriptless, self-healing automation.",
      "Worked in Agile teams using Git, GitLab and Jira.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Engineering",
  school: "Charotar University of Science & Technology (CHARUSAT)",
  place: "Gujarat, India",
  period: "Nov 2020 — Jan 2024",
};

export const training = [
  "Playwright Automation — self-directed",
  "Selenium WebDriver with Java — Udemy",
  "Agile Testing Foundations — self-directed",
];

export const languages = ["English (Proficient)", "Hindi (Native)"];

export const skillGroups = [
  {
    group: "Test automation",
    items: [
      "Playwright",
      "Selenium WebDriver",
      "Appium",
      "TestNG",
      "Cucumber (BDD)",
      "Page Object Model",
      "REST API automation",
      "Postman",
      "TestRigor (AI / self-healing)",
      "Vitest",
    ],
  },
  {
    group: "QA practice",
    items: [
      "Test planning & strategy",
      "End-to-end testing (web & mobile)",
      "Manual + automation testing",
      "Functional, regression & UI testing",
      "UAT coordination & sign-off",
      "Release readiness reporting",
      "Database validation (SQL / MS SQL)",
      "Cross-platform testing (web / Android / iOS / desktop)",
      "Exploratory & edge-case testing",
      "Security spot-checks (XSS, input validation)",
    ],
  },
  {
    group: "Accessibility",
    items: [
      "WCAG 2.1 / 2.2 AA",
      "Inclusive design testing",
      "axe-core",
      "Keyboard & focus-order audits",
      "Screen-reader testing",
      "eslint-plugin-jsx-a11y",
      "Responsive testing 320px → 1920px",
      "200–400% zoom reflow",
    ],
  },
  {
    group: "Engineering",
    items: [
      "TypeScript",
      "React 19",
      "Hono",
      "Node.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "Python",
      "Tauri",
      "Docker",
    ],
  },
  {
    group: "Tools & process",
    items: [
      "Git / GitHub / GitLab",
      "Jira (REST API)",
      "Agile / Scrum (SDLC / STLC)",
      "Vercel",
      "Maven",
      "Zoho",
      "Confluence-style specs & FRDs",
    ],
  },
];

export type EarlierProject = {
  name: string;
  org: string;
  period: string;
  note: string;
  coverage: string[];
};

/**
 * Engagements from the Ace Infoway years that do not yet have a full case study.
 * Give one a `note` with real substance and it can graduate into `projects.ts`.
 */
export const earlierProjects: EarlierProject[] = [
  {
    name: "SelfDrive",
    org: "Ace Infoway Pvt. Ltd.",
    period: "2023 — 2026",
    note: "Web and mobile QA across the release cycle.",
    coverage: ["End-to-end (web & mobile)", "Manual + automation", "Functional & regression"],
  },
  {
    name: "Smoker Zone",
    org: "Ace Infoway Pvt. Ltd.",
    period: "2023 — 2026",
    note: "Web and mobile QA across the release cycle.",
    coverage: ["End-to-end (web & mobile)", "Manual + automation", "UI & regression"],
  },
];
