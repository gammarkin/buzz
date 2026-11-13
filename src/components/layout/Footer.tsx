import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import type { FooterColumn } from "@/data/content";

type FooterProps = {
  tagline: string;
  columns: FooterColumn[];
  copyright: string;
};

export function Footer({ tagline, columns, copyright }: FooterProps) {
  return (
    <footer className="bg-ink pt-[60px] pb-5 lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,208px)] lg:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" aria-label="Luma, back to top" className="flex w-fit rounded-sm text-white">
              <Logo aria-hidden />
            </Link>
            <p className="mt-3 max-w-[240px] text-small text-fog max-lg:max-w-none">{tagline}</p>
          </div>

          {columns.map((column) => {
            const headingId = `footer-${column.title.toLowerCase()}`;
            return (
              <nav key={column.title} aria-labelledby={headingId}>
                <h2 id={headingId} className="text-eyebrow text-mist uppercase">
                  {column.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-small">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-small text-fog transition-colors hover:text-white motion-reduce:transition-none"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        <div className="mt-12 border-t border-body pt-6 lg:mt-16">
          <p className="text-center text-caption text-white lg:text-left lg:text-mist">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
