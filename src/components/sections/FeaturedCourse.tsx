import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredCourse, sectionIds } from "@/data/content";

export function FeaturedCourse() {
  const course = featuredCourse;

  return (
    <section
      id={sectionIds.featured}
      aria-labelledby="featured-title"
      className="bg-brand py-[60px] lg:py-[100px]"
    >
      <Container className="grid items-center gap-[38px] lg:grid-cols-2 lg:gap-[60px]">
        <div className="relative">
          <div className="relative aspect-[362/280] overflow-hidden rounded-2xl bg-brand-soft/20 lg:aspect-[538/408]">
            <Image
              src={course.image.src}
              alt={course.image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1280px) 530px, (min-width: 1024px) 45vw, calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
          <p className="absolute -top-3 -left-3 rounded-md bg-sun px-3 py-1.5 text-eyebrow text-ink uppercase">
            Featured Course
          </p>
        </div>

        <div>
          <SectionHeader
            id="featured-title"
            eyebrow="Most popular this month"
            title={course.title}
            tone="light"
          />
          <p className="mt-5 text-small text-white lg:text-copy">{course.description}</p>
          <p className="mt-6 text-small text-white lg:text-copy">{course.instructor}</p>

          <ul aria-label="Course details" className="mt-6 flex flex-wrap gap-3">
            {course.meta.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line px-3.5 py-1.5 text-small text-white"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={course.href} variant="accent">
              View course
            </ButtonLink>
            <Link
              href={`#${sectionIds.courses}`}
              className="group inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-small font-bold text-white transition-colors hover:text-sun motion-reduce:transition-none"
            >
              Browse all courses
              <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
