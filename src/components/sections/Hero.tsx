import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StarIcon } from "@/components/ui/icons";
import { hero, learnerAvatars, sectionIds } from "@/data/content";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip bg-cream py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
        <div className="mx-auto w-full max-w-[560px] lg:mx-0 lg:flex-1">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-4 font-display text-display-sm font-extrabold text-ink lg:text-[3.5rem]/[4rem] xl:text-display"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[480px] text-lead-sm text-body lg:text-lead">{hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`#${sectionIds.courses}`}>Explore courses</ButtonLink>
            <ButtonLink href={`#${sectionIds.howItWorks}`} variant="secondary">
              See how it works
            </ButtonLink>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <AvatarStack avatars={learnerAvatars.slice(0, 3)} size={32} ringClassName="ring-cream" />
            <p className="text-small text-body">
              <strong className="font-bold text-ink">Trusted by {hero.learners}</strong> learners
            </p>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative order-first mx-auto aspect-[362/380] w-full max-w-[480px] lg:order-none lg:mx-0 lg:aspect-[500/520] lg:w-[44%] lg:max-w-[500px] xl:w-[500px]">
      {/* Decorative shapes behind the photo */}
      <div
        aria-hidden="true"
        className="absolute top-[6.3%] -right-[11px] h-[90%] w-[75%] rounded-2xl bg-peach lg:top-[24px] lg:-right-[39px] lg:h-[90%] lg:w-[89px]"
      />
      <div
        aria-hidden="true"
        className="absolute top-[80%] -left-[10px] size-16 rounded-full bg-brand-soft lg:top-[77.5%] lg:-left-[45px] lg:size-[106px]"
      />

      <div className="absolute inset-y-0 right-2 left-2 overflow-hidden rounded-2xl bg-brand-soft lg:inset-0 lg:rounded-3xl">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1280px) 500px, (min-width: 1024px) 44vw, (min-width: 528px) 464px, calc(100vw - 56px)"
          className="object-cover"
        />
      </div>

      <div className="absolute top-1.5 left-0 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-badge lg:top-4 lg:-left-[22px]">
        <span className="rounded-lg bg-brand-soft px-1 text-small font-bold text-brand">{hero.coursesCount}</span>
        <span className="text-small text-ink">expert-led courses</span>
      </div>

      <div className="absolute top-[78%] -right-[11px] flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-badge lg:top-[84%] lg:-right-6 xl:-right-[57px]">
        <span className="flex gap-0.5 text-sun" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} />
          ))}
        </span>
        <span className="text-small text-ink">{hero.rating} avg rating</span>
      </div>
    </div>
  );
}
