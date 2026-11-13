import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "accent";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

// Filled buttons are 52px tall; only the outlined one adds a 1px border (54px), as in the design.
export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-small font-bold whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-line bg-white text-ink hover:border-ink/40 hover:bg-cream",
  accent: "bg-sun text-ink hover:bg-sun-dark",
};

/** Anchor styled as one of the design's buttons. */
export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonBase, buttonVariants[variant], className)} {...props} />;
}
