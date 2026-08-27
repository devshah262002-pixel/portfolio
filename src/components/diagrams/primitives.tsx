import type { ReactNode } from "react";

export const TONES = {
  a: "var(--d1)",
  b: "var(--d2)",
  c: "var(--d3)",
  d: "var(--d4)",
  n: "var(--border-strong)",
} as const;

export type Tone = keyof typeof TONES;

export function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  tone = "n",
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  tone?: Tone;
  dashed?: boolean;
}) {
  const cx = x + w / 2;
  const hasSub = Boolean(sub);
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={9}
        fill="var(--surface)"
        stroke={dashed ? TONES[tone] : "var(--border-strong)"}
        strokeWidth={dashed ? 1.5 : 1}
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      <rect x={x} y={y + 9} width={3} height={h - 18} rx={1.5} fill={TONES[tone]} />
      <text
        x={cx}
        y={hasSub ? y + h / 2 - 5 : y + h / 2 + 4}
        textAnchor="middle"
        fill="var(--text)"
        fontSize={13}
        fontWeight={600}
      >
        {title}
      </text>
      {hasSub && (
        <text x={cx} y={y + h / 2 + 13} textAnchor="middle" fill="var(--muted)" fontSize={11}>
          {sub}
        </text>
      )}
    </g>
  );
}

export function Arrow({
  x1,
  y1,
  x2,
  y2,
  dashed = false,
  marker,
  label,
  labelSide = "right",
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
  marker: string;
  label?: string;
  labelSide?: "right" | "left" | "above";
}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="var(--border-strong)"
        strokeWidth={1.5}
        strokeDasharray={dashed ? "5 4" : undefined}
        markerEnd={`url(#${marker})`}
      />
      {label && (
        <text
          x={labelSide === "above" ? mx : mx + (labelSide === "right" ? 8 : -8)}
          y={labelSide === "above" ? my - 7 : my + 4}
          textAnchor={labelSide === "above" ? "middle" : labelSide === "right" ? "start" : "end"}
          fill="var(--muted)"
          fontSize={11}
        >
          {label}
        </text>
      )}
    </g>
  );
}

export function Elbow({
  points,
  marker,
  dashed = false,
  label,
  labelAt,
}: {
  points: [number, number][];
  marker: string;
  dashed?: boolean;
  label?: string;
  labelAt?: [number, number];
}) {
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke="var(--border-strong)"
        strokeWidth={1.5}
        strokeDasharray={dashed ? "5 4" : undefined}
        markerEnd={`url(#${marker})`}
      />
      {label && labelAt && (
        <text x={labelAt[0]} y={labelAt[1]} textAnchor="middle" fill="var(--muted)" fontSize={11}>
          {label}
        </text>
      )}
    </g>
  );
}

export function LaneLabel({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fill="var(--muted)"
      fontSize={10.5}
      fontWeight={600}
      letterSpacing={1.4}
      style={{ textTransform: "uppercase" }}
    >
      {text}
    </text>
  );
}

export function Defs({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border-strong)" />
      </marker>
    </defs>
  );
}

export function Figure({
  caption,
  viewBox,
  label,
  children,
}: {
  caption: string;
  viewBox: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-14">
      {/* Focusable so keyboard users can scroll a wide diagram — WCAG 2.1.1. */}
      <div
        className="diagram-wrap border border-rule bg-surface p-5 sm:p-8"
        tabIndex={0}
        role="group"
        aria-label={`${caption} Scrollable diagram.`}
      >
        <svg
          viewBox={viewBox}
          role="img"
          aria-label={label}
          className="h-auto w-full"
          fontFamily="var(--font-sans-stack)"
        >
          {children}
        </svg>
      </div>
      <figcaption className="mt-4 font-mono text-[11px] leading-relaxed tracking-wide text-muted">{caption}</figcaption>
    </figure>
  );
}
