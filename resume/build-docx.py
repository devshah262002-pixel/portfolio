"""Build ATS-safe .docx and .txt resumes from resume_content.py.

ATS rules followed here:
  - Single column. No tables, text boxes, columns or shapes.
  - No document header/footer — many parsers skip that region entirely.
  - Contact details sit in the body, on one line, as real text.
  - Standard section headings in plain uppercase paragraphs.
  - Real bullet lists via the List Bullet style.
  - One standard font (Calibri) at normal sizes.
  - No images, icons or text rendered inside graphics.

Usage:  python resume/build-docx.py
"""

import os
import sys

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, RGBColor

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import resume_content as C  # noqa: E402

OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public")
BASENAME = "Dev-Shah-Senior-QA-Engineer-SDET"
INK = RGBColor(0x14, 0x14, 0x0F)


def tighten(p, before=0, after=4):
    pf = p.paragraph_format
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.line_spacing = 1.08
    return p


def build_docx():
    doc = Document()

    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(10.5)
    normal.font.color.rgb = INK

    for section in doc.sections:
        section.top_margin = section.bottom_margin = Pt(36)
        section.left_margin = section.right_margin = Pt(40)

    # --- name / title / contact -------------------------------------
    p = tighten(doc.add_paragraph(), after=2)
    r = p.add_run(C.NAME)
    r.bold = True
    r.font.size = Pt(22)

    p = tighten(doc.add_paragraph(), after=2)
    r = p.add_run(C.TITLE)
    r.bold = True
    r.font.size = Pt(11.5)

    p = tighten(doc.add_paragraph(), after=10)
    p.add_run(" | ".join(C.CONTACT)).font.size = Pt(9.5)

    def heading(text):
        p = tighten(doc.add_paragraph(), before=10, after=3)
        r = p.add_run(text.upper())
        r.bold = True
        r.font.size = Pt(10.5)
        return p

    def bullets(items):
        for it in items:
            bp = doc.add_paragraph(it, style="List Bullet")
            tighten(bp, after=2)
            for run in bp.runs:
                run.font.size = Pt(10.5)

    # --- summary -----------------------------------------------------
    heading("Summary")
    tighten(doc.add_paragraph(C.SUMMARY), after=4)

    # --- experience --------------------------------------------------
    heading("Experience")
    for job in C.EXPERIENCE:
        p = tighten(doc.add_paragraph(), before=6, after=1)
        r = p.add_run(f"{job['role']} - {job['org']}")
        r.bold = True
        r.font.size = Pt(11)

        p = tighten(doc.add_paragraph(), after=3)
        p.add_run(job["meta"]).font.size = Pt(9.5)

        bullets(job["bullets"])

    # --- projects ----------------------------------------------------
    heading("Selected Projects")
    bullets(C.PROJECTS)

    # --- skills ------------------------------------------------------
    heading("Skills")
    for label, items in C.SKILLS:
        p = tighten(doc.add_paragraph(), after=2)
        r = p.add_run(f"{label}: ")
        r.bold = True
        r.font.size = Pt(10.5)
        p.add_run(items).font.size = Pt(10.5)

    # --- education / training ----------------------------------------
    heading("Education")
    tighten(doc.add_paragraph(C.EDUCATION), after=4)

    heading("Training and Languages")
    p = tighten(doc.add_paragraph(), after=2)
    p.add_run("Training: ").bold = True
    p.add_run(C.TRAINING)
    p = tighten(doc.add_paragraph(), after=2)
    p.add_run("Languages: ").bold = True
    p.add_run(C.LANGUAGES)

    for p in doc.paragraphs:
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT  # never justify: ATS and readability

    path = os.path.join(OUT_DIR, BASENAME + ".docx")
    doc.save(path)
    return path


def build_txt():
    """Plain-text fallback — the format no parser can misread."""
    L = []
    L.append(C.NAME)
    L.append(C.TITLE)
    L.append(" | ".join(C.CONTACT))
    L.append("")
    L.append("SUMMARY")
    L.append(C.SUMMARY)
    L.append("")
    L.append("EXPERIENCE")
    for job in C.EXPERIENCE:
        L.append("")
        L.append(f"{job['role']} - {job['org']}")
        L.append(job["meta"])
        L.extend(f"- {b}" for b in job["bullets"])
    L.append("")
    L.append("SELECTED PROJECTS")
    L.extend(f"- {p}" for p in C.PROJECTS)
    L.append("")
    L.append("SKILLS")
    L.extend(f"{label}: {items}" for label, items in C.SKILLS)
    L.append("")
    L.append("EDUCATION")
    L.append(C.EDUCATION)
    L.append("")
    L.append("TRAINING AND LANGUAGES")
    L.append(f"Training: {C.TRAINING}")
    L.append(f"Languages: {C.LANGUAGES}")

    path = os.path.join(OUT_DIR, BASENAME + ".txt")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(L) + "\n")
    return path


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("wrote", build_docx())
    print("wrote", build_txt())
