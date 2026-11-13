import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "accent";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg border px-7 py-3.5 text-small font-bold whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "border-brand bg-brand text-white hover:border-brand-dark hover:bg-brand-dark",
  secondary: "border-line bg-white text-ink hover:border-ink/40 hover:bg-cream",
  accent: "border-sun bg-sun text-ink hover:border-sun-dark hover:bg-sun-dark",
};

/** Anchor styled as one of the design's buttons. */
export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonBase, buttonVariants[variant], className)} {...props} />;
}
