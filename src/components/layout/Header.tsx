"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import type { NavLink } from "@/data/content";
import { cn } from "@/lib/cn";

type HeaderProps = {
  links: NavLink[];
  login: NavLink;
  cta: NavLink;
};

const DESKTOP_QUERY = "(min-width: 64rem)";

export function Header({ links, login, cta }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    // The panel only exists on small screens, so close it when the layout switches to desktop.
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => event.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <div className="mx-auto grid h-[68px] w-full max-w-[1280px] grid-cols-[1fr_auto] items-center px-5 md:px-10 lg:h-[69px] lg:grid-cols-[1fr_auto_1fr] xl:px-20">
        <Link href="/" aria-label="Luma, back to top" className="justify-self-start rounded-sm text-ink">
          <Logo aria-hidden />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-small text-body transition-colors hover:text-ink motion-reduce:transition-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-self-end gap-2 lg:flex">
          <Link
            href={login.href}
            className="rounded-lg px-4 py-2.5 text-small text-body transition-colors hover:text-ink motion-reduce:transition-none"
          >
            {login.label}
          </Link>
          <ButtonLink href={cta.href} className="px-5 py-2.5">
            {cta.label}
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-1.5 grid size-9 place-items-center justify-self-end rounded-lg text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div
          id={menuId}
          className={cn(
            "absolute inset-x-0 top-full border-b border-line bg-cream shadow-card lg:hidden",
            "transition duration-200 starting:-translate-y-2 starting:opacity-0 motion-reduce:transition-none",
          )}
        >
          <nav aria-label="Mobile" className="mx-auto max-w-[1280px] px-5 pt-2 pb-6 md:px-10">
            <ul className="divide-y divide-line">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="block py-3.5 text-body font-semibold text-ink hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ButtonLink href={login.href} variant="secondary" onClick={close}>
                {login.label}
              </ButtonLink>
              <ButtonLink href={cta.href} onClick={close}>
                {cta.label}
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
