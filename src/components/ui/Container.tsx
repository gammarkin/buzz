import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

/** Centers content on a 1120px column with the design's side gutters (20 / 40 / 80px). */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-10 xl:px-20", className)}
      {...props}
    />
  );
}
