// Renders resume/resume.html to a print-ready, ATS-safe PDF in public/.
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";
const require = createRequire(
  "file:///D:/EI_Official/OneDrive - Enable India/Desktop/MEL-Project/automation/package.json"
);
const { chromium } = require("playwright");

const src = pathToFileURL(path.resolve("resume/resume.html")).href;
const out = path.resolve("public/Dev-Shah-Senior-QA-Engineer-SDET.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(src, { waitUntil: "networkidle" });
await page.pdf({ path: out, format: "A4", printBackground: true });
await browser.close();
console.log("wrote", out);
