"""Single source of truth for the resume.

Both build-docx.py (DOCX + TXT) and resume.html read the same facts.
Keep this file and resume.html in step when editing.
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
    "Senior QA Engineer and SDET who owns quality end to end - test strategy, automation across "
    "web, Android and desktop, and WCAG 2.1 / 2.2 AA accessibility. Currently the quality owner on "
    "a live React 19 and Hono / PostgreSQL platform, where I authored a 1,028-case test suite "
    "across 22 modules, built the team's test-management tooling as a deployed product, and merged "
    "206 commits of feature and fix code into the product itself."
)

EXPERIENCE = [
    {
        "role": "Senior QA Engineer / Full-Stack SDET",
        "org": "Codesage (deployed at EnAble India)",
        "meta": "Bengaluru, India | Feb 2026 - Present | Full-time",
        "bullets": [
            "Own end-to-end quality on MEL, a platform helping people with disabilities through "
            "skill training, employment and post-placement support - a React 19 and Hono / "
            "PostgreSQL product shipping to web, Windows desktop and Android in three languages "
            "(English, Hindi, Kannada).",
            "Authored and maintain a 1,028-case test suite across 22 modules - Candidates, "
            "Trainings, Courses, Centres, Campaigns, Settlements, Workplace Support, Committees, "
            "Master Data and Reports - with per-role variants for nine role types.",
            "Designed and built the MEL Test Dashboard, a deployed test-management product "
            "unifying test cases, runs and Jira, with a Playwright watcher that executes queued "
            "tests unattended and posts results back with evidence. Sole author, 95 commits.",
            "Extended regression coverage to the Tauri Android and Windows desktop builds through "
            "a self-contained Appium and emulator harness with a Docker-based APK pipeline.",
            "Led accessibility across the product: axe-core automation, manual keyboard and "
            "screen-reader audits, and responsive verification from 320px to 1920px at 200-400% "
            "zoom.",
            "Found and drove fixes for defects that passed happy-path scripts - an offline sync "
            "cursor silently dropping same-timestamp rows, unique-violation errors surfacing as "
            "opaque 500s, and future dates accepted as a date of birth.",
            "Shipped 206 merged commits (approximately 50,000 lines) of feature and fix code "
            "across the frontend and backend, including the settlement follow-up scheduler, an "
            "app-wide centre/state scope switcher, server-side master-data search, and committee "
            "PDF export.",
            "Drove UAT cycles end to end and produced the sign-off packages, release notes and "
            "production readiness reports the client signs against.",
        ],
    },
    {
        "role": "QA Automation Engineer",
        "org": "Ace Infoway Pvt. Ltd.",
        "meta": "Ahmedabad, India | Nov 2023 - Jan 2026 | Full-time",
        "bullets": [
            "Built and maintained Selenium and Playwright automation frameworks on the Page Object "
            "Model with Cucumber BDD, covering web, Android and iOS from a single unified "
            "codebase.",
            "Automated 70% of regression testing, cutting manual effort per sprint by 50%.",
            "Executed 600+ test cases per release at 100% functional coverage, with consistently "
            "bug-free production builds.",
            "Performed database validation with SQL and MS SQL, and integrated TestRigor for "
            "scriptless, self-healing automation.",
            "Worked in Agile teams using Git, GitLab and Jira.",
        ],
    },
]

PROJECTS = [
    "MEL Platform (EnAble India) - four-repository full-stack system with role-based access, a "
    "tri-lingual UI, and an offline-first Android client. Quality owner.",
    "MEL Test Dashboard - serverless test-management product on Vercel and Upstash Redis, with a "
    "Playwright runner and two-way Jira REST integration. Sole author.",
    "DISH - Disability Information and Support Hub - AI search assistant for people with "
    "disabilities across eight repositories. Owned the WCAG 2.1 AA audit and the Playwright "
    "functional suite.",
    "SupplAI - logistics planning and live fleet tracking with GPS telematics. End-to-end "
    "Playwright regression, filter edge cases and cross-site-scripting probes.",
    "Rotawiz - Australian healthcare rostering product. End-to-end automation across web, Android "
    "and iOS from one codebase.",
    "Biomap - wellness platform. Role-based automation across Admin, Relationship Manager, Subject "
    "Matter Expert and Client using reusable, data-driven components.",
    "SelfDrive and Smoker Zone - web and mobile QA across the release cycle.",
]

SKILLS = [
    (
        "Test automation",
        "Playwright, Selenium WebDriver, Appium, TestNG, Cucumber (BDD), Page Object Model, "
        "REST API automation, Postman, TestRigor, Vitest",
    ),
    (
        "QA practice",
        "Test planning and strategy, end-to-end testing (web and mobile), manual and regression "
        "testing, functional and UI testing, UAT coordination and sign-off, release readiness "
        "reporting, database validation (SQL / MS SQL), cross-platform testing (web / Android / "
        "iOS / desktop), security spot-checks (XSS, input validation)",
    ),
    (
        "Accessibility",
        "WCAG 2.1 / 2.2 AA, axe-core, keyboard and focus-order audits, screen-reader testing, "
        "inclusive design testing, responsive testing 320px-1920px, 200-400% zoom reflow",
    ),
    (
        "Engineering",
        "TypeScript, React 19, Hono, Node.js, PostgreSQL, Drizzle ORM, Redis, Python, Tauri, Docker",
    ),
    (
        "Tools and process",
        "Git, GitHub, GitLab, Jira, Agile / Scrum (SDLC / STLC), Maven, Vercel, Zoho",
    ),
]

EDUCATION = (
    "B.Tech, Computer Engineering - CHARUSAT (Charotar University of Science and Technology), "
    "Gujarat | Nov 2020 - Jan 2024"
)

TRAINING = (
    "Playwright Automation (self-directed); Selenium WebDriver with Java (Udemy); "
    "Agile Testing Foundations (self-directed)"
)

LANGUAGES = "English (Proficient), Hindi (Native)"
