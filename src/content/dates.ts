// Every date-derived figure on the site is computed here, so nothing goes stale.
// Keep CAREER_START in step with resume/resume_content.py.

export const CAREER_START = new Date(2023, 7, 1); // Aug 2023

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const word = (n: number) => WORDS[n] ?? String(n);

/** Years since CAREER_START, one decimal — same rounding as the resume and the tailor engine. */
export function experienceYears(today = new Date()): number {
  const days = (today.getTime() - CAREER_START.getTime()) / 86_400_000;
  return Math.round((days / 365.25) * 10) / 10;
}

/** "nearly three years", "three years", "over three years": whatever is true today. */
export function experiencePhrase(today = new Date()): string {
  const years = experienceYears(today);
  const whole = Math.floor(years);
  const frac = years - whole;
  if (frac >= 0.75) return `nearly ${word(whole + 1)} years`;
  if (frac < 0.25) return `${word(whole)} years`;
  return `over ${word(whole)} years`;
}

/**
 * LinkedIn-style duration, counting both the start and end month:
 * Aug 2023 — Jan 2026 is "2 years 6 months". Omit `end` for a current role.
 */
export function durationLabel(start: [number, number], end?: [number, number], today = new Date()): string {
  const [sy, sm] = start;
  const [ey, em] = end ?? [today.getFullYear(), today.getMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} ${y === 1 ? "year" : "years"}`);
  if (m) parts.push(`${m} ${m === 1 ? "month" : "months"}`);
  return parts.join(" ");
}
