import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

/** Decorative by default: icons sit next to visible text. */
const base = { "aria-hidden": true, focusable: false, fill: "none" } as const;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M4.78 10.96h12.44M12.04 16.15l5.18-5.19-5.18-5.18"
        stroke="currentColor"
        strokeWidth="1.56"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        d="M3.77 7.77h18.46M3.77 12.9h18.46M3.77 18.03h18.46"
        stroke="currentColor"
        strokeWidth="1.54"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.54" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} width="14" height="14" viewBox="0 0 14 14" {...props}>
      <path
        d="M7 1l1.54 3.12L12 4.76 9.5 7.19l.59 3.44L7 8.77l-3.09 1.86.59-3.44L2 4.76l3.46-.64L7 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base} width="24" height="22" viewBox="0 0 24 22" {...props}>
      <path
        d="M23.76 4.38c0 1.05-.34 3.06-1.02 6.03-.68 2.98-1.43 6.84-2.27 11.59h-2.42c-.6-3.86-1.28-7.54-2.04-11.04-.73-3.5-1.1-5.69-1.1-6.58 0-1.2.37-2.23 1.1-3.09C16.74.43 17.85 0 19.34 0c1.43 0 2.53.43 3.29 1.29.76.86 1.13 1.89 1.13 3.09zm-14.95 0c0 1.05-.34 3.06-1.02 6.03-.68 2.98-1.44 6.84-2.27 11.59H3.13c-.7-4.44-1.4-8.22-2.11-11.35C.34 7.49 0 5.4 0 4.38c0-1.2.37-2.23 1.1-3.09C1.83.43 2.94 0 4.42 0c1.41 0 2.5.43 3.25 1.29.76.86 1.14 1.89 1.14 3.09z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChatBubbleIcon(props: IconProps) {
  return (
    <svg {...base} width="24" height="24" viewBox="0 0 24 24" {...props}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 12.5a.5.5 0 100-1 .5.5 0 000 1zM7 12.5a.5.5 0 100-1 .5.5 0 000 1z" />
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2.5 21.5 7 20.66A9.95 9.95 0 0012 22z" />
      </g>
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M10 5v5l3.33 1.67M18.33 10a8.33 8.33 0 11-16.66 0 8.33 8.33 0 0116.66 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Decorative iconoir glyphs used in the final call to action. */

export function BoldIcon(props: IconProps) {
  return (
    <svg {...base} width="102" height="102" viewBox="0 0 102 102" {...props}>
      <path
        d="M51.3 49.88l-13.41-3.59m13.41 3.59s11.17 3 14.17-8.18c2.99-11.17-8.18-14.17-8.18-14.17l-11.4-3.05a2.08 2.08 0 00-2.55 1.47l-5.45 20.34m13.41 3.59s13.41 3.6 10.12 15.89c-3.3 12.29-16.7 8.7-16.7 8.7l-11.4-3.06a2.08 2.08 0 01-1.47-2.55l6.05-20.57"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.51"
      />
    </svg>
  );
}

export function CodepenIcon(props: IconProps) {
  return (
    <svg {...base} width="80" height="80" viewBox="0 0 80 80" {...props}>
      <path
        d="M70 30v20M10 50V30M40 70V50M40 10v20M40 50L10 30l30-20 30 20-30 20zM40 70L10 50l30-20 30 20-30 20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatFilledIcon(props: IconProps) {
  return (
    <svg {...base} width="32" height="32" viewBox="0 0 32 32" {...props}>
      <path
        d="M16 29.33c7.36 0 13.33-5.97 13.33-13.33S23.36 2.67 16 2.67 2.67 8.64 2.67 16c0 2.43.65 4.7 1.78 6.67l-1.12 6 6-1.12A13.27 13.27 0 0016 29.33z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardIcon(props: IconProps) {
  return (
    <svg {...base} width="62" height="62" viewBox="0 0 62 62" {...props}>
      <path
        d="M38.75 40.82c0-4.57-7.75-12.4-7.75-12.4s-7.75 7.83-7.75 12.4c0 4.56 3.47 8.26 7.75 8.26s7.75-3.7 7.75-8.26z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.52"
      />
      <path
        d="M31 10.33v10.34M9.04 19.38l7.75 7.75M45.21 27.13l7.75-7.75M5.17 43.92H15.5M46.5 43.92h10.33"
        stroke="currentColor"
        strokeWidth="1.52"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CashIcon(props: IconProps) {
  return (
    <svg {...base} width="48" height="48" viewBox="0 0 48 48" {...props}>
      <path
        d="M20 38V10m8 0h14.8c.66 0 1.2.54 1.2 1.2v25.6c0 .66-.54 1.2-1.2 1.2H28V10zm0 0h-8m8 28h-8m0 0H5.2c-.66 0-1.2-.54-1.2-1.2V11.2c0-.66.54-1.2 1.2-1.2H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19.7c0-.83-.83-1.4-1.5-.92a5.97 5.97 0 000 9.75c.67.49 1.5-.08 1.5-.91v-7.92zM34 19.7c0-.83.83-1.4 1.5-.92a5.97 5.97 0 010 9.75c-.67.49-1.5-.08-1.5-.91v-7.92z"
        fill="currentColor"
      />
    </svg>
  );
}
