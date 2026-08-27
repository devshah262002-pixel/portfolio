"""Single source of truth for the resume.

build-docx.py (DOCX + TXT) and build-html.py (PDF) both read this file,
so the three formats can never drift apart.

Formatting targets follow 2026 ATS/readability guidance:
  margins 0.8in, body 11pt Calibri, section headings 13pt bold,
  name 20pt, line spacing 1.12, space *before* blocks.
"""

NAME = "Dev Shah"
TITLE = "Senior QA Engineer - SDET"
CONTACT = [
    "Bengaluru, India",
    "+91 96621 22232",
    "devshah262002@gmail.com",
    "linkedin.com/in/dev-shah-654777389",
]

SUMMARY = (
    "Senior QA Engineer and SDET with nearly three years owning quality end to end - test "
    "strategy, automation across web, Android and desktop, and WCAG 2.1 / 2.2 AA "
    "accessibility. Sole quality owner on a live React 19 and Hono / PostgreSQL platform, "
    "where I authored a 1,028-case suite, built the team's test-management tooling as a "
    "deployed product, and merged 206 commits into the product itself."
)

# Skills sit high on the page: recruiters scan for them, and ATS keyword
# matching weights early content slightly higher.
SKILLS = [
    (
        "Test automation",
        "Playwright, Selenium WebDriver, Appium, TestNG, Cucumber (BDD), Page Object Model, "
        "REST API automation, Postman, TestRigor, Vitest, JavaScript / TypeScript, Python",
    ),
    (
        "QA practice",
        "Test planning and strategy, end-to-end testing (web, mobile and desktop), manual and "
        "regression testing, functional and UI testing, exploratory and edge-case testing, UAT "
        "coordination and sign-off, release readiness reporting, defect management, database "
        "validation (SQL / MS SQL), security spot-checks",
    ),
    (
        "Accessibility",
        "WCAG 2.1 / 2.2 AA, axe-core, keyboard and focus-order audits, screen-reader testing, "
        "inclusive design testing, responsive testing 320px-1920px, 200-400% zoom reflow",
    ),
    (
        "CI/CD and test infrastructure",
        "GitHub Actions, CI pipeline maintenance and debugging, automated regression runs, "
        "Docker, containerised build pipelines, Android emulator and AVD provisioning, Vercel",
    ),
    (
        "Tools and process",
        "Git, GitHub, GitLab, Jira, Agile / Scrum (SDLC / STLC), Maven, Zoho",
    ),
]

# Experience covers ownership, scope and outcomes. Project detail lives in
# PROJECTS so the two sections do not repeat each other.
EXPERIENCE = [
    {
        "role": "Senior QA Engineer / Full-Stack SDET",
        "org": "Codesage (deployed at EnAble India)",
        "meta": "Bengaluru, India | Feb 2026 - Present | Full-time",
        "bullets": [
            "Sole quality owner for MEL, a multi-module platform serving people with disabilities "
            "across web, Windows desktop and Android in three languages.",
            "Authored and maintain a 1,028-case test suite across 22 modules, with per-role "
            "variants covering nine role types and their data-visibility rules.",
            "Built the team's test-management tooling as a deployed product, replacing a manual "
            "reconciliation across Excel, Jira and a screenshots folder.",
            "Led accessibility to WCAG 2.1 / 2.2 AA and remediated the findings in the product "
            "code myself - 206 of my commits (~50,000 lines) are merged across the frontend and "
            "backend.",
            "Drove UAT cycles end to end, producing the sign-off packages, release notes and "
            "production readiness reports the client signs against.",
        ],
    },
    {
        "role": "QA Automation Engineer",
        "org": "Ace Infoway Pvt. Ltd.",
        "meta": "Ahmedabad, India | Nov 2023 - Jan 2026 | Full-time",
        "bullets": [
            "Built and maintained Selenium and Playwright frameworks on the Page Object Model with "
            "Cucumber BDD, covering web, Android and iOS from a single unified codebase.",
            "Automated 70% of regression testing, cutting manual effort per sprint by 50%.",
            "Executed 600+ test cases per release at 100% functional coverage, with consistently "
            "bug-free production builds.",
            "Performed database validation with SQL and MS SQL, and integrated TestRigor for "
            "scriptless, self-healing automation.",
        ],
    },
]

# Each project: what it is, then what I actually contributed.
PROJECTS = [
    {
        "name": "MEL Platform",
        "org": "Codesage for EnAble India",
        "stack": "React 19, TypeScript, Hono, PostgreSQL, Tauri, Playwright, i18next",
        "what": (
            "Operational platform tracking a person with a disability from campaign "
            "registration through training to settled employment. Four repositories, 22 "
            "modules, nine roles, shipping to browser, Windows desktop and offline-capable "
            "Android in English, Hindi and Kannada."
        ),
        "did": (
            "Owned quality end to end: authored the 1,028-case suite with per-role variants "
            "and ran a wireframe-versus-build comparison across every Master Data entity, so "
            "specification drift surfaced before UAT. Caught defects that passed happy-path "
            "scripts - an offline sync cursor silently dropping same-tick records, and future "
            "dates accepted as a date of birth. Also shipped production code: the settlement "
            "follow-up scheduler and an app-wide centre/state scope switcher across API and UI. "
            "Built the self-contained Appium and emulator harness - pinned JDK, Android SDK, AVD "
            "and a Docker APK pipeline - that extended the same coverage to the Tauri Android and "
            "Windows desktop builds."
        ),
    },
    {
        "name": "MEL Test Dashboard",
        "org": "Codesage for EnAble India - sole author",
        "stack": "Vercel serverless, Upstash Redis, Playwright, Python, Jira REST API",
        "what": (
            "Internal test-management product built to replace reconciling test cases in Excel, "
            "bugs in Jira and evidence in a screenshots folder. One screen unifying 1,028 test "
            "cases, run history and a Jira board."
        ),
        "did": (
            "Sole designer, engineer and maintainer across 95 commits. Built the Python step "
            "compiling UAT workbooks into a static page, serverless routes behind cookie-gated "
            "edge middleware, and Redis-backed shared status. Added a live QA queue where a "
            "Playwright watcher picks up requested tests, runs them unattended and posts "
            "results back to Jira with screenshots attached."
        ),
    },
    {
        "name": "Accessibility programme",
        "org": "Codesage for EnAble India",
        "stack": "axe-core, Playwright, TypeScript, screen readers, eslint-plugin-jsx-a11y",
        "what": (
            "WCAG 2.1 / 2.2 AA conformance across two products whose users are, by definition, "
            "the people most affected by inaccessible interfaces."
        ),
        "did": (
            "Built the axe-core and Playwright scan framework with keyboard, tab-order and "
            "OTP-navigation specs, plus a custom Node checker emitting per-module Excel "
            "reports for non-technical stakeholders. Ran the manual passes automation cannot "
            "cover - focus continuity, live-region announcements, table semantics - and verified "
            "reflow from 320px to 1920px at 200-400% zoom, then remediated the findings in the "
            "product code myself."
        ),
    },
    {
        "name": "DISH - Disability Information and Support Hub",
        "org": "Codesage for EnAble India",
        "stack": "Playwright, axe-core, PostgreSQL, Qdrant vector store, speech-to-text",
        "what": (
            "AI-powered information assistant for people with disabilities - semantic search over "
            "a curated corpus with a voice interface, delivered across eight repositories."
        ),
        "did": (
            "Owned the WCAG 2.1 AA audit and the automated functional suite. A semantic "
            "search engine has no fixed expected output, so I asserted on properties that hold "
            "regardless of the model's response: answers stay grounded and sourced, guardrails "
            "hold on out-of-scope input, and the interface stays operable by keyboard and screen "
            "reader while an answer streams."
        ),
    },
    {
        "name": "SupplAI",
        "org": "Codesage",
        "stack": "Playwright, JavaScript, SQL, GPS telematics integration",
        "what": (
            "Logistics planning and fleet management platform - journey creation, truck and "
            "driver allocation, live GPS tracking, and a control room handling stops, breakdowns "
            "and alerts across 15 modules."
        ),
        "did": (
            "Built end-to-end Playwright regression across customers, drivers, fleet and the "
            "journey lifecycle, concentrating on state transitions rather than individual "
            "screens because that is where the defects lived. Covered filter edge cases where "
            "combinations failed, ran XSS and boundary probes against free-text fields "
            "rendered into control-room dashboards, and automated Excel reporting."
        ),
    },
    {
        "compact": True,
        "name": "Earlier projects - Rotawiz, Biomap, SelfDrive, Smoker Zone",
        "org": "Ace Infoway",
        "stack": "Selenium, Playwright, Appium, Cucumber BDD, TestNG, Maven, SQL",
        "what": (
            "Healthcare rostering (Australia), a multi-role wellness platform, and two further "
            "web and mobile products."
        ),
        "did": (
            "Automated Dashboard, Appointments, Billing, Reports, Users and Inquiries across web, "
            "Android and iOS from one unified codebase, with Cucumber scenarios readable by "
            "non-technical stakeholders. On the wellness platform I supplied the role as test "
            "data rather than baking it into each spec, so four roles reused one suite. Drove the "
            "70% regression automation and 600+ cases per release."
        ),
    },
]

EDUCATION = (
    "B.Tech, Computer Engineering - CHARUSAT (Charotar University of Science and Technology), "
    "Gujarat | Nov 2020 - Jan 2024"
)

TRAINING = (
    "Playwright Automation (self-directed); Selenium WebDriver with Java (Udemy); "
    "Agile Testing Foundations"
)

LANGUAGES = "English (Proficient), Hindi (Native)"
