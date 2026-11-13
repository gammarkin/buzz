import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QuoteIcon } from "@/components/ui/icons";
import { stats, testimonial } from "@/data/content";

export function Testimonial() {
  return (
    <section aria-label="What learners say" className="bg-white py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between">
        <figure className="lg:max-w-[600px]">
          <QuoteIcon className="text-brand" />
          <blockquote className="mt-4 font-display text-quote-sm font-semibold text-ink lg:text-quote">
            <p>{testimonial.quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={testimonial.avatar.src}
              alt={testimonial.avatar.alt}
              width={48}
              height={48}
              className="size-12 rounded-full bg-brand-soft object-cover"
            />
            <span>
              <span className="block text-copy leading-[1.625rem] font-bold text-ink lg:leading-7">{testimonial.name}</span>
              <span className="block text-small text-body">{testimonial.role}</span>
            </span>
          </figcaption>
        </figure>

        <ul className="grid grid-cols-3 gap-0 lg:w-[401px] lg:shrink-0 lg:grid-cols-1 lg:gap-[17px] lg:border-l lg:border-line lg:pl-12">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-display text-display-sm font-extrabold text-brand lg:text-display">{stat.value}</p>
              <p className="mt-1 pr-2 text-small text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
