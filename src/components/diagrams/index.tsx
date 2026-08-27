import { Arrow, Box, Defs, Elbow, Figure, LaneLabel } from "./primitives";

/* ------------------------------------------------------------------ MEL */
function MelDiagram({ caption }: { caption: string }) {
  const m = "mk-mel";
  return (
    <Figure
      caption={caption}
      viewBox="0 0 900 430"
      label="MEL architecture: three clients — web, Windows desktop and Android — call one Hono API secured by JWT and role-based access control. The API reads and writes PostgreSQL through Drizzle, Redis, AWS S3 and NATS. The Android client keeps a local offline store that reconciles through a dedicated sync endpoint."
    >
      <Defs id={m} />
      <LaneLabel x={30} y={26} text="Clients" />
      <Box x={30} y={40} w={196} h={62} title="Web app" sub="React 19 · Vite" tone="a" />
      <Box x={250} y={40} w={196} h={62} title="Windows desktop" sub="Tauri 2" tone="a" />
      <Box x={470} y={40} w={196} h={62} title="Android" sub="Tauri 2" tone="a" />
      <Box
        x={694}
        y={40}
        w={176}
        h={62}
        title="Local store"
        sub="offline-first"
        tone="c"
        dashed
      />

      <Arrow x1={666} y1={71} x2={690} y2={71} marker={m} />
      <Arrow x1={128} y1={102} x2={128} y2={162} marker={m} />
      <Arrow x1={348} y1={102} x2={348} y2={162} marker={m} />
      <Arrow x1={568} y1={102} x2={568} y2={162} marker={m} />
      <Elbow
        points={[
          [782, 102],
          [782, 132],
          [700, 132],
          [700, 162],
        ]}
        marker={m}
        dashed
        label="sync"
        labelAt={[742, 126]}
      />

      <LaneLabel x={30} y={152} text="API" />
      <Box
        x={30}
        y={166}
        w={840}
        h={70}
        title="Hono API  ·  TypeScript"
        sub="JWT + RBAC scoping  ·  Zod validation  ·  i18n (EN / HI / KN)  ·  /sync compound cursor"
        tone="b"
      />

      <Arrow x1={128} y1={236} x2={128} y2={294} marker={m} />
      <Arrow x1={348} y1={236} x2={348} y2={294} marker={m} />
      <Arrow x1={568} y1={236} x2={568} y2={294} marker={m} />
      <Arrow x1={782} y1={236} x2={782} y2={294} marker={m} />

      <LaneLabel x={30} y={284} text="Data & services" />
      <Box x={30} y={298} w={196} h={62} title="PostgreSQL" sub="Drizzle ORM" tone="d" />
      <Box x={250} y={298} w={196} h={62} title="Redis" sub="cache · queues" tone="d" />
      <Box x={470} y={298} w={196} h={62} title="AWS S3" sub="documents · evidence" tone="d" />
      <Box x={694} y={298} w={176} h={62} title="NATS" sub="events" tone="d" />

      <text x={30} y={396} fill="var(--muted)" fontSize={11.5}>
        22 feature modules · Candidates, Trainings, Courses, Centres, Campaigns, Settlements,
        Workplace Support, Committees, Master Data, Reports
      </text>
      <text x={30} y={414} fill="var(--muted)" fontSize={11.5}>
        Every list endpoint is scoped by the caller&apos;s role before it returns a row.
      </text>
    </Figure>
  );
}

/* ------------------------------------------------------- Test Dashboard */
function DashboardDiagram({ caption }: { caption: string }) {
  const m = "mk-dash";
  return (
    <Figure
      caption={caption}
      viewBox="0 0 900 430"
      label="Test Dashboard flow: Excel UAT workbooks are compiled by a Python build step into a static dashboard page served behind edge middleware. Serverless API routes read and write status in Upstash Redis. A QA queue feeds a Playwright watcher which executes the run, captures evidence, and posts results back to Redis and to Jira through a server-side proxy."
    >
      <Defs id={m} />

      <LaneLabel x={30} y={26} text="Build" />
      <Box x={30} y={40} w={230} h={62} title="Excel UAT workbooks" sub="source of truth" tone="c" />
      <Arrow x1={260} y1={71} x2={306} y2={71} marker={m} />
      <Box x={310} y={40} w={200} h={62} title="Python build" sub="workbook → HTML" tone="c" />
      <Arrow x1={510} y1={71} x2={556} y2={71} marker={m} />
      <Box x={560} y={40} w={230} h={62} title="Static dashboard page" sub="no framework, no build server" tone="a" />

      <Arrow x1={675} y1={102} x2={675} y2={158} marker={m} />

      <LaneLabel x={30} y={148} text="Serve" />
      <Box x={560} y={162} w={230} h={58} title="Edge middleware" sub="signed-cookie gate" tone="b" />
      <Arrow x1={560} y1={191} x2={514} y2={191} marker={m} />
      <Box x={310} y={162} w={200} h={58} title="Serverless API" sub="status · runs · Jira proxy" tone="b" />
      <Arrow x1={310} y1={191} x2={264} y2={191} marker={m} />
      <Box x={30} y={162} w={230} h={58} title="Upstash Redis" sub="shared run status" tone="d" />

      <Elbow
        points={[
          [360, 220],
          [360, 264],
          [130, 264],
          [130, 286],
        ]}
        marker={m}
        label="test requested"
        labelAt={[248, 258]}
      />

      <LaneLabel x={30} y={276} text="Execute" />
      <Box x={30} y={290} w={200} h={62} title="QA queue" sub="anyone can request a test" tone="c" />
      <Arrow x1={230} y1={321} x2={276} y2={321} marker={m} />
      <Box x={280} y={290} w={200} h={62} title="Playwright watcher" sub="polls · runs headless" tone="a" />
      <Arrow x1={480} y1={321} x2={526} y2={321} marker={m} />
      <Box x={530} y={290} w={180} h={62} title="Run + evidence" sub="steps · screenshots" tone="a" />
      <Arrow x1={710} y1={321} x2={756} y2={321} marker={m} />
      <Box x={760} y={290} w={110} h={62} title="Jira" sub="REST API" tone="b" />

      <Elbow
        points={[
          [815, 290],
          [815, 236],
          [450, 236],
          [450, 224],
        ]}
        marker={m}
        dashed
        label="result posted back"
        labelAt={[636, 230]}
      />

      <text x={30} y={398} fill="var(--muted)" fontSize={11.5}>
        1,028 test cases served · 207 Playwright run scripts · the whole surface folded into a
        12-function budget
      </text>
    </Figure>
  );
}

/* --------------------------------------------------------- Accessibility */
function A11yDiagram({ caption }: { caption: string }) {
  const m = "mk-a11y";
  return (
    <Figure
      caption={caption}
      viewBox="0 0 900 424"
      label="Accessibility pipeline: each build is checked on two parallel tracks. The automated track runs axe-core scans, keyboard specs and lint rules. The manual track covers screen-reader passes, focus continuity, zoom reflow and contrast. Both converge into a findings report, which drives remediation commits back into the build."
    >
      <Defs id={m} />

      <Box x={30} y={158} w={168} h={70} title="Build under test" sub="web · desktop · Android" tone="a" />

      <Elbow points={[[198, 178], [230, 178], [230, 88], [262, 88]]} marker={m} />
      <Elbow points={[[198, 208], [230, 208], [230, 300], [262, 300]]} marker={m} />

      <LaneLabel x={266} y={44} text="Automated" />
      <rect x={262} y={54} width={330} height={148} rx={10} fill="var(--accent-soft)" stroke="var(--accent-line)" />
      <Box x={278} y={68} w={298} h={38} title="axe-core scans · WCAG A / AA" tone="b" />
      <Box x={278} y={112} w={298} h={38} title="Keyboard & tab-order specs" tone="b" />
      <Box x={278} y={156} w={298} h={38} title="jsx-a11y lint · @axe-core/react" tone="b" />

      <LaneLabel x={266} y={244} text="Manual" />
      <rect x={262} y={254} width={330} height={104} rx={10} fill="var(--surface-2)" stroke="var(--border)" />
      <Box x={278} y={266} w={298} h={38} title="Screen reader · focus continuity" tone="c" />
      <Box x={278} y={312} w={298} h={38} title="Zoom reflow 200–400% · contrast" tone="c" />

      <Elbow points={[[592, 128], [630, 128], [630, 178], [662, 178]]} marker={m} />
      <Elbow points={[[592, 306], [630, 306], [630, 208], [662, 208]]} marker={m} />

      <Box x={666} y={158} w={204} h={70} title="Findings report" sub="HTML · JSON · Excel" tone="d" />

      <Elbow
        points={[
          [768, 228],
          [768, 396],
          [114, 396],
          [114, 232],
        ]}
        marker={m}
        dashed
        label="remediation commits — I fix what I find"
        labelAt={[441, 388]}
      />
    </Figure>
  );
}

/* ------------------------------------------------------- Mobile harness */
function MobileDiagram({ caption }: { caption: string }) {
  const m = "mk-mob";
  return (
    <Figure
      caption={caption}
      viewBox="0 0 900 390"
      label="Mobile harness: one folder holds a pinned JDK, Android SDK, AVD image, Appium server, the Page Object framework and a Docker APK builder. The builder produces the Tauri Android artefact, which is installed onto the emulator and driven by Appium."
    >
      <Defs id={m} />

      <rect x={26} y={40} width={520} height={300} rx={12} fill="var(--surface-2)" stroke="var(--border)" strokeDasharray="6 5" />
      <text x={44} y={68} fill="var(--muted)" fontSize={11.5} fontWeight={600} letterSpacing={1.2}>
        SELF-CONTAINED PROJECT FOLDER — NO GLOBAL INSTALLS
      </text>

      <Box x={46} y={84} w={230} h={56} title="Pinned JDK" sub="version-locked" tone="n" />
      <Box x={296} y={84} w={230} h={56} title="Android SDK + AVD" sub="fixed emulator image" tone="n" />
      <Box x={46} y={156} w={230} h={56} title="Appium server" sub="UiAutomator2" tone="b" />
      <Box x={296} y={156} w={230} h={56} title="Docker APK builder" sub="reproducible artefact" tone="c" />
      <Box
        x={46}
        y={228}
        w={480}
        h={92}
        title="Page Object framework"
        sub="BasePage · LoginPage · CandidatePage · CandidateProfilePage"
        tone="a"
      />
      <text x={286} y={302} textAnchor="middle" fill="var(--muted)" fontSize={11}>
        auth hooks · discovery runners · Android + iOS platform configs
      </text>

      <Arrow x1={546} y1={184} x2={600} y2={184} marker={m} label="drives" labelSide="above" />

      <Box x={604} y={110} w={266} h={70} title="Android emulator" sub="scriptable, deterministic" tone="d" />
      <Arrow x1={737} y1={180} x2={737} y2={222} marker={m} />
      <Box x={604} y={226} w={266} h={70} title="MEL Android build" sub="Tauri 2 · offline store" tone="a" />

      <text x={604} y={330} fill="var(--muted)" fontSize={11.5}>
        Deterministic offline replay is what
      </text>
      <text x={604} y={348} fill="var(--muted)" fontSize={11.5}>
        made the sync-cursor defect provable.
      </text>
    </Figure>
  );
}

/* ------------------------------------------------------------------ DISH */
function DishDiagram({ caption }: { caption: string }) {
  const m = "mk-dish";
  return (
    <Figure
      caption={caption}
      viewBox="0 0 900 400"
      label="DISH retrieval path: a typed question or a spoken question converted by speech-to-text is rewritten, then matched against a Qdrant vector store populated by an ingestion pipeline. Retrieved chunks pass through the language model and guardrails to produce a grounded, sourced answer. PostgreSQL stores feedback and sessions."
    >
      <Defs id={m} />

      <Box x={30} y={54} w={190} h={56} title="Typed question" sub="keyboard path" tone="a" />
      <Box x={30} y={132} w={190} h={56} title="Spoken question" sub="speech-to-text" tone="a" />

      <Elbow points={[[220, 82], [252, 82], [252, 122], [284, 122]]} marker={m} />
      <Elbow points={[[220, 160], [252, 160], [252, 138], [284, 138]]} marker={m} />

      <Box x={288} y={102} w={190} h={56} title="Query rewriting" sub="intent expansion" tone="b" />
      <Arrow x1={478} y1={130} x2={524} y2={130} marker={m} />
      <Box x={528} y={102} w={190} h={56} title="Qdrant vector store" sub="semantic retrieval" tone="d" />

      <Box x={528} y={228} w={190} h={56} title="Ingestion pipeline" sub="corpus → chunks → vectors" tone="c" />
      <Arrow x1={575} y1={228} x2={575} y2={162} marker={m} />

      <Box x={288} y={168} w={190} h={56} title="LLM + guardrails" sub="ethical-AI checks" tone="b" />
      <Elbow
        points={[
          [670, 158],
          [670, 196],
          [482, 196],
        ]}
        marker={m}
        label="retrieved chunks"
        labelAt={[576, 188]}
      />

      <Arrow x1={383} y1={224} x2={383} y2={266} marker={m} />
      <Box x={218} y={270} w={330} h={62} title="Grounded answer with sources" sub="streamed, keyboard-operable, announced" tone="a" />

      <Box x={30} y={228} w={160} h={56} title="PostgreSQL" sub="feedback · sessions" tone="d" />
      <Elbow
        points={[
          [218, 300],
          [204, 300],
          [204, 268],
          [194, 268],
        ]}
        marker={m}
        dashed
        label="feedback"
        labelAt={[236, 322]}
      />

      <text x={30} y={368} fill="var(--muted)" fontSize={11.5}>
        Assertions target properties that must hold whatever the model returns — grounding, sourcing,
        guardrails, and operability while the answer streams.
      </text>
    </Figure>
  );
}

/* --------------------------------------------------------------- SupplAI */
function SupplaiDiagram({ caption }: { caption: string }) {
  const m = "mk-supp";
  const steps = [
    { t: "Created", s: "manual / bulk" },
    { t: "Confirmed", s: "validated" },
    { t: "Planned", s: "truck + driver" },
    { t: "Live", s: "GPS tracked" },
    { t: "Completed", s: "ETA reconciled" },
    { t: "Archived", s: "reported" },
  ];
  return (
    <Figure
      caption={caption}
      viewBox="0 0 900 340"
      label="SupplAI journey lifecycle: a journey moves from created to confirmed, planned, live, completed and archived. While live, the control room handles stops, breakdowns and alerts. Testing concentrates on the transitions between states rather than on individual screens."
    >
      <Defs id={m} />
      <LaneLabel x={30} y={40} text="Journey lifecycle" />
      {steps.map((st, i) => {
        const x = 30 + i * 143;
        return (
          <g key={st.t}>
            <Box x={x} y={56} w={126} h={62} title={st.t} sub={st.s} tone={i === 3 ? "c" : "a"} />
            {i < steps.length - 1 && (
              <Arrow x1={x + 126} y1={87} x2={x + 139} y2={87} marker={m} />
            )}
          </g>
        );
      })}

      <Elbow points={[[522, 118], [522, 152]]} marker={m} />
      <LaneLabel x={30} y={172} text="Control room — while live" />
      <Box x={30} y={186} w={196} h={58} title="Stop management" tone="b" />
      <Box x={244} y={186} w={196} h={58} title="Breakdown handling" tone="b" />
      <Box x={458} y={186} w={196} h={58} title="Alerts & logs" tone="b" />
      <Box x={672} y={186} w={198} h={58} title="ETA & time logic" tone="b" />

      <text x={30} y={288} fill="var(--muted)" fontSize={11.5}>
        A journey screen can pass in isolation and still be wrong — the defects live where one state
        becomes the next.
      </text>
      <text x={30} y={310} fill="var(--muted)" fontSize={11.5}>
        Free-text fields feeding control-room dashboards were probed for XSS alongside the functional
        suite.
      </text>
    </Figure>
  );
}

/* ------------------------------------------------------------ POM / role */
function PomDiagram({ caption }: { caption: string }) {
  const m = "mk-pom";
  return (
    <Figure
      caption={caption}
      viewBox="0 0 900 340"
      label="Data-driven role coverage: a single set of specs drives a shared Page Object layer against the application. Role identity is supplied as test data rather than duplicated per role, so four roles reuse one suite."
    >
      <Defs id={m} />

      <LaneLabel x={30} y={40} text="Role datasets" />
      <Box x={30} y={54} w={168} h={44} title="Admin" tone="c" />
      <Box x={30} y={106} w={168} h={44} title="Relationship Manager" tone="c" />
      <Box x={30} y={158} w={168} h={44} title="Subject Matter Expert" tone="c" />
      <Box x={30} y={210} w={168} h={44} title="Client" tone="c" />

      <Elbow points={[[198, 76], [241, 76], [241, 153], [280, 153]]} marker={m} />
      <Elbow points={[[198, 128], [241, 128], [241, 153], [280, 153]]} marker={m} />
      <Elbow points={[[198, 180], [241, 180], [241, 153], [280, 153]]} marker={m} />
      <Elbow points={[[198, 232], [241, 232], [241, 153], [280, 153]]} marker={m} />

      <Box x={284} y={122} w={200} h={62} title="One spec suite" sub="role = data, not code" tone="a" />
      <Arrow x1={484} y1={153} x2={530} y2={153} marker={m} />
      <Box x={534} y={122} w={200} h={62} title="Page Object layer" sub="shared selectors" tone="b" />
      <Arrow x1={734} y1={153} x2={780} y2={153} marker={m} />
      <Box x={784} y={122} w={86} h={62} title="App" tone="d" />

      <text x={284} y={244} fill="var(--muted)" fontSize={11.5}>
        Adding a role is a data row. A permission change is verified across
      </text>
      <text x={284} y={262} fill="var(--muted)" fontSize={11.5}>
        every module in one run instead of four.
      </text>
      <text x={284} y={294} fill="var(--muted)" fontSize={11.5}>
        Modules covered: Dashboard · Appointments · Billing · Reports · Inquiries
      </text>
    </Figure>
  );
}

/* ----------------------------------------------------- Unified 3-target */
function UnifiedDiagram({ caption }: { caption: string }) {
  const m = "mk-uni";
  return (
    <Figure
      caption={caption}
      viewBox="0 0 900 340"
      label="Unified automation codebase: one framework built on the Page Object Model with Cucumber BDD drives web through Selenium and Playwright, and Android and iOS through Appium, with TestRigor and SQL validation alongside."
    >
      <Defs id={m} />

      <Box
        x={250}
        y={40}
        w={400}
        h={76}
        title="One automation framework"
        sub="Page Object Model · Cucumber BDD · TestNG · Maven"
        tone="a"
      />

      <Elbow points={[[450, 116], [450, 146], [160, 146], [160, 178]]} marker={m} />
      <Arrow x1={450} y1={116} x2={450} y2={178} marker={m} />
      <Elbow points={[[450, 116], [450, 146], [740, 146], [740, 178]]} marker={m} />

      <Box x={40} y={182} w={240} h={68} title="Web" sub="Selenium · Playwright" tone="b" />
      <Box x={330} y={182} w={240} h={68} title="Android" sub="Appium" tone="b" />
      <Box x={620} y={182} w={240} h={68} title="iOS" sub="Appium" tone="b" />

      <Box x={40} y={274} w={380} h={46} title="TestRigor — scriptless, self-healing" tone="c" />
      <Box x={480} y={274} w={380} h={46} title="SQL / MS SQL data validation" tone="d" />
    </Figure>
  );
}

/* ------------------------------------------------------------- selector */
export function ProjectDiagram({ name, caption }: { name: string; caption: string }) {
  switch (name) {
    case "mel":
      return <MelDiagram caption={caption} />;
    case "dashboard":
      return <DashboardDiagram caption={caption} />;
    case "a11y":
      return <A11yDiagram caption={caption} />;
    case "mobile":
      return <MobileDiagram caption={caption} />;
    case "dish":
      return <DishDiagram caption={caption} />;
    case "supplai":
      return <SupplaiDiagram caption={caption} />;
    case "pom":
      return <PomDiagram caption={caption} />;
    case "unified":
      return <UnifiedDiagram caption={caption} />;
    default:
      return null;
  }
}
