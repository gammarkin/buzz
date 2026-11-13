import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { categories, sectionIds, type Category } from "@/data/content";

export function Categories() {
  return (
    <section
      id={sectionIds.courses}
      aria-labelledby="categories-title"
      className="bg-white py-[60px] lg:py-[100px]"
    >
      <Container>
        <SectionHeader
          id="categories-title"
          eyebrow="Find your next skill"
          title="Learn something worth knowing."
          description="Short, practical courses designed around skills you can put to work immediately."
          className="max-w-[560px]"
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <li key={category.number} className="flex">
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

type CategoryCardProps = { category: Category };

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group relative flex w-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card focus-within:border-brand/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:min-h-[265px] lg:p-7">
      <span className="mb-[21px] self-start rounded-md bg-brand-soft px-2 py-1 text-eyebrow text-brand">
        {category.number}
      </span>
      <h3 className="font-display text-h3-sm font-bold text-ink lg:text-h3">{category.title}</h3>
      <p className="mt-3 text-small text-muted">{category.description}</p>

      <Link
        href={category.href}
        className="mt-auto flex items-center gap-2 pt-5 text-small font-bold text-ink after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-brand"
      >
        Explore<span className="sr-only"> {category.title} courses</span>
        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
      </Link>
    </article>
  );
}
