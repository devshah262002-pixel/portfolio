"""Generate resume.html from resume_content.py.

Typography follows 2026 ATS + readability guidance:
  margins 0.8in, body 11pt Calibri, section headings 13pt bold,
  name 20pt, line spacing 1.15, space *before* each block.

No letter-spacing anywhere: it makes Chrome's PDF writer emit glyphs
individually, so headings extract as "E D U C A T I O N".

Usage:  python resume/build-html.py
"""

import html
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import resume_content as C  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "resume.html")

CSS = """
@page { size: A4; margin: 0.7in; }
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Calibri, Carlito, "Helvetica Neue", Arial, sans-serif;
  font-size: 11pt;
  line-height: 1.12;
  color: #14140f;
}
h1 { font-size: 20pt; font-weight: 700; margin: 0 0 2pt; }
.title { font-size: 12pt; font-weight: 700; margin: 0 0 4pt; }
.contact { font-size: 10pt; margin: 0 0 4pt; color: #2b2b26; }
h2 { break-after: avoid;
  font-size: 13pt;
  font-weight: 700;
  margin: 11pt 0 4pt;
  padding-bottom: 3pt;
  border-bottom: 1.2pt solid #14140f;
}
h3 { font-size: 11.5pt; font-weight: 700; margin: 9pt 0 1pt; }
h3:first-of-type { margin-top: 4pt; }
.meta { font-size: 10pt; color: #45443d; margin: 0 0 5pt; }
ul { margin: 0 0 4pt; padding-left: 15pt; }
li { margin-bottom: 2.2pt; }
p { margin: 0 0 4pt; }
.summary { margin-bottom: 2pt; }
.skill { margin: 0 0 4pt; }
.proj { margin: 0 0 6pt; }
.proj-head { break-after: avoid; }
p { orphans: 2; widows: 2; }
.proj-head { font-size: 11.5pt; font-weight: 700; margin: 0 0 1pt; break-after: avoid; }
.proj-org { font-size: 10pt; color: #45443d; margin: 0 0 3pt; }
.proj p { margin: 0 0 3pt; }
.lbl { font-weight: 700; }
.avoid { break-inside: avoid; }
"""


def esc(s):
    return html.escape(s, quote=False)


def build():
    P = []
    P.append("<!doctype html>")
    P.append('<html lang="en"><head><meta charset="utf-8">')
    P.append(f"<title>{esc(C.NAME)} - {esc(C.TITLE)}</title>")
    P.append(f"<style>{CSS}</style></head><body>")

    P.append(f"<h1>{esc(C.NAME)}</h1>")
    P.append(f'<p class="title">{esc(C.TITLE)}</p>')
    P.append(f'<p class="contact">{esc("  |  ".join(C.CONTACT))}</p>')

    P.append("<h2>SUMMARY</h2>")
    P.append(f'<p class="summary">{esc(C.SUMMARY)}</p>')

    P.append("<h2>CORE SKILLS</h2>")
    for label, items in C.SKILLS:
        P.append(f'<p class="skill"><span class="lbl">{esc(label)}:</span> {esc(items)}</p>')

    P.append("<h2>PROFESSIONAL EXPERIENCE</h2>")
    for job in C.EXPERIENCE:
        P.append('<div class="avoid">')
        P.append(f"<h3>{esc(job['role'])} - {esc(job['org'])}</h3>")
        P.append(f'<p class="meta">{esc(job["meta"])}</p>')
        P.append("<ul>")
        for b in job["bullets"]:
            P.append(f"<li>{esc(b)}</li>")
        P.append("</ul></div>")

    P.append("<h2>KEY PROJECTS</h2>")
    for pr in C.PROJECTS:
        P.append('<div class="proj">')
        P.append(f'<p class="proj-head">{esc(pr["name"])}</p>')
        P.append(f'<p class="proj-org">{esc(pr["org"])}  |  {esc(pr["stack"])}</p>')
        if pr.get("compact"):
            P.append(f"<p>{esc(pr['what'])} <span class=\"lbl\">Contribution:</span> {esc(pr['did'])}</p>")
        else:
            P.append(f"<p>{esc(pr['what'])}</p>")
            P.append(f'<p><span class="lbl">Contribution:</span> {esc(pr["did"])}</p>')
        P.append("</div>")

    P.append("<h2>EDUCATION, TRAINING AND LANGUAGES</h2>")
    P.append(f"<p>{esc(C.EDUCATION)}</p>")
    P.append(
        f'<p><span class="lbl">Training:</span> {esc(C.TRAINING)}. '
        f'<span class="lbl">Languages:</span> {esc(C.LANGUAGES)}</p>'
    )

    P.append("</body></html>")

    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(P) + "\n")
    return OUT


if __name__ == "__main__":
    print("wrote", build())
