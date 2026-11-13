import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { collage, community, sectionIds, type CollageColumn } from "@/data/content";
import { cn } from "@/lib/cn";

export function Community() {
  return (
    <section
      id={sectionIds.community}
      aria-labelledby="community-title"
      className="bg-cream py-[60px] lg:py-[100px]"
    >
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[60px]">
        <div className="lg:flex-1">
          <Eyebrow>{community.eyebrow}</Eyebrow>
          <h2
            id="community-title"
            className="mt-2 font-display text-h2-sm font-extrabold text-ink lg:text-h2"
          >
            {community.title}
          </h2>
          <p className="mt-6 text-lead-sm text-body lg:mt-8 lg:text-lead">{community.description}</p>
          <ButtonLink href={community.cta.href} variant="secondary" className="mt-6 lg:mt-8">
            {community.cta.label}
          </ButtonLink>
        </div>

        <div className="lg:flex-1">
          <PhotoCollage columns={collage} />
        </div>
      </Container>
    </section>
  );
}

/** Numeric custom properties consumed by the collage's calc() sizes. */
function vars(values: Record<string, number>) {
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [`--${key}`, value])) as CSSProperties;
}

type PhotoCollageProps = { columns: CollageColumn[] };

/**
 * Masonry-like photo arrangement. Sizes are the design's pixel values multiplied by a unit
 * (--u) derived from the container width, so the composition scales without distortion.
 */
function PhotoCollage({ columns }: PhotoCollageProps) {
  return (
    <div className="@container mx-auto w-full max-w-[362px] md:max-w-[530px] lg:mx-0">
      <div className="relative flex h-[calc(var(--u)*310)] items-center justify-between [--u:calc(100cqw/362)] md:h-[calc(var(--u)*522)] md:justify-start md:gap-[calc(var(--u)*16)] md:[--u:calc(100cqw/530)]">
        <span
          aria-hidden="true"
          className="absolute top-[calc(var(--u)*-9)] left-[calc(var(--u)*16)] size-[calc(var(--u)*330)] rounded-full bg-brand-soft md:top-[calc(var(--u)*11)] md:left-[calc(var(--u)*15)] md:size-[calc(var(--u)*500)]"
        />

        {columns.map((column) => (
          <div
            key={column.photos[0].src.src}
            style={vars({ mo: column.offset?.mobile ?? 0, do: column.offset?.desktop ?? 0 })}
            className={cn(
              "relative flex flex-col gap-[calc(var(--u)*8)] pt-[calc(var(--u)*var(--mo))] md:gap-[calc(var(--u)*12.84)] md:pt-[calc(var(--u)*var(--do))]",
              column.align === "end" && "items-end",
            )}
          >
            {column.photos.map((photo) => (
              <div
                key={photo.src.src}
                style={vars({ mw: photo.mobile.w, mh: photo.mobile.h, dw: photo.desktop.w, dh: photo.desktop.h })}
                className="relative h-[calc(var(--u)*var(--mh))] w-[calc(var(--u)*var(--mw))] overflow-hidden rounded-[5px] bg-brand-soft shadow-photo md:h-[calc(var(--u)*var(--dh))] md:w-[calc(var(--u)*var(--dw))] md:rounded-[4px]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 140px, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
