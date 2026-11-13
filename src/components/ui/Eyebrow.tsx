import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "brand" | "light";
  className?: string;
};

const tones = {
  brand: "text-brand",
  light: "text-white",
} as const;

/** Small uppercase label shown above section headings. */
export function Eyebrow({ children, tone = "brand", className }: EyebrowProps) {
  return <p className={cn("text-eyebrow uppercase", tones[tone], className)}>{children}</p>;
}
