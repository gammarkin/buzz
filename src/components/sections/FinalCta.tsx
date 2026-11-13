import type { ComponentType, CSSProperties } from "react";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import {
  BoldIcon,
  CashIcon,
  ChatFilledIcon,
  CodepenIcon,
  DashboardIcon,
  type IconProps,
} from "@/components/ui/icons";
import { finalCta, learnerAvatars } from "@/data/content";
import { cn } from "@/lib/cn";

type Decoration = {
  /** Unrotated top-left corner on the 1280px artboard: x becomes a percentage of the width, y stays in px. */
  x: number;
  y: number;
  size: number;
  /** Clockwise rotation in degrees, around the shape's center. */
  rotate?: number;
  className?: string;
  icon?: ComponentType<IconProps>;
};

const ARTBOARD_WIDTH = 1280;

const decorations: Decoration[] = [
  { x: 22, y: 16, size: 108, className: "rounded-full border-2 border-peach" },
  { x: 56, y: 373, size: 120, className: "rounded-full bg-peach" },
  { x: 1064, y: 468, size: 40, className: "rounded-full bg-peach" },
  { x: 1154.5, y: -13.5, size: 115, rotate: 12, className: "rounded-lg bg-peach" },
  { x: -28, y: 235, size: 56, rotate: 12, className: "rounded-lg bg-peach" },
  { x: 1208, y: 429, size: 32, className: "rounded-full border-2 border-peach" },
  { x: 877, y: 43, size: 32, className: "rounded-full border-2 border-peach" },
  { x: 322, y: 47, size: 56, rotate: 12, className: "rounded-lg border border-peach" },
  { x: 272, y: 360, size: 101, icon: BoldIcon },
  { x: 1120, y: 220, size: 80, icon: CodepenIcon },
  { x: 141, y: 214, size: 32, icon: ChatFilledIcon },
  { x: 1016, y: 82, size: 61, icon: DashboardIcon },
  { x: 963, y: 381, size: 48, icon: CashIcon },
];

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden bg-butter py-[60px] lg:py-[100px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        {decorations.map(({ x, y, size, rotate, className, icon: Icon }) => {
          const style: CSSProperties = {
            left: `${(x / ARTBOARD_WIDTH) * 100}%`,
            top: y,
            width: size,
            height: size,
            rotate: rotate ? `${rotate}deg` : undefined,
          };
          return Icon ? (
            <Icon key={`${x}-${y}`} style={style} className="absolute text-peach" />
          ) : (
            <span key={`${x}-${y}`} style={style} className={cn("absolute", className)} />
          );
        })}
      </div>

      <Container>
        <div className="mx-auto flex max-w-[656px] flex-col items-center text-center">
          <AvatarStack avatars={learnerAvatars} size={40} ringClassName="ring-sun" />
          <h2
            id="final-cta-title"
            className="mt-8 font-display text-cta-sm font-extrabold text-ink lg:text-cta"
          >
            {finalCta.title}
          </h2>
          <p className="mt-4 text-lead-sm text-body lg:text-lead">{finalCta.description}</p>
          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={finalCta.primary.href}>{finalCta.primary.label}</ButtonLink>
            <ButtonLink href={finalCta.secondary.href} variant="secondary">
              {finalCta.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
