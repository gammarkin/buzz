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
  /** Position on the 1280px artboard: x as a percentage of the width, y in px. */
  x: number;
  y: number;
  size: number;
  className?: string;
  icon?: ComponentType<IconProps>;
};

const ARTBOARD_WIDTH = 1280;

const decorations: Decoration[] = [
  { x: 22, y: 16, size: 108, className: "rounded-full border-2 border-peach" },
  { x: 56, y: 373, size: 120, className: "rounded-full bg-peach" },
  { x: 1064, y: 468, size: 40, className: "rounded-full bg-peach" },
  { x: 1144, y: -24, size: 136, className: "rounded-lg bg-peach" },
  { x: -33, y: 230, size: 66, className: "rounded-lg bg-peach" },
  { x: 1208, y: 429, size: 32, className: "rounded-full border-2 border-peach" },
  { x: 877, y: 43, size: 32, className: "rounded-full border-2 border-peach" },
  { x: 317, y: 42, size: 66, className: "rounded-lg border border-peach" },
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
        {decorations.map(({ x, y, size, className, icon: Icon }) => {
          const style: CSSProperties = {
            left: `${(x / ARTBOARD_WIDTH) * 100}%`,
            top: y,
            width: size,
            height: size,
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
