import Image from "next/image";
import type { Photo } from "@/data/content";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: Photo[];
  size: 32 | 40;
  /** Ring color that separates overlapping avatars, matching the section background. */
  ringClassName: string;
  className?: string;
};

/** Overlapping row of round avatars. Decorative: the adjacent text carries the meaning. */
export function AvatarStack({ avatars, size, ringClassName, className }: AvatarStackProps) {
  return (
    <div className={cn("flex", className)} aria-hidden="true">
      {avatars.map((avatar, index) => (
        <Image
          key={avatar.src.src}
          src={avatar.src}
          alt=""
          width={size}
          height={size}
          className={cn("rounded-full bg-brand-soft ring-2", ringClassName, index > 0 && "-ml-2")}
        />
      ))}
    </div>
  );
}
