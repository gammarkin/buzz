# Luma, Buzzvel Front-End Challenge 2026

A responsive landing page for "Luma", an online learning platform, built from the supplied Figma design (desktop 1280px and mobile 402px frames).

**Live preview:** https://buzz-gules-delta.vercel.app (deployed on Vercel from `main` on every push)

**Stack:** Next.js 16.4 (App Router, Turbopack, Cache Components) · React 19.3 · TypeScript (strict) · Tailwind CSS 4.3 · Vitest

## Getting started

Requires Node.js 20.9 or newer (developed on Node 26).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                         |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Development server                   |
| `npm run build`     | Production build                     |
| `npm start`         | Serves the production build          |
| `npm run lint`      | ESLint (Next.js core web vitals + TS) |
| `npm run typecheck` | `tsc --noEmit`                       |
| `npm test`          | Unit tests (Vitest)                  |

Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://luma.example.com`) so canonical, Open Graph and sitemap URLs point to the deployed domain. It defaults to `http://localhost:3000`.

## Project structure

```
src/
  app/                 layout (fonts, metadata), page, server action, OG image, robots, sitemap
  assets/images/       photos exported from Figma, resized and compressed
  components/
    layout/            Header (mobile menu), Footer
    sections/          one component per page section
    contact/           ContactForm (client component)
    ui/                Button, Container, Eyebrow, SectionHeader, AvatarStack, ResponsiveText, Logo, icons
  data/content.ts      typed mock content for every section
  lib/                 contact validation (+ tests), media query hook, site config, class name helper
```

## Key decisions

- **Design tokens from Figma.** Colors, type scale, spacing and radii were read from the Figma file through its REST API and mapped to a Tailwind `@theme` in `globals.css`. Each text style has a desktop token and a `-sm` mobile token (e.g. `text-h2-sm lg:text-h2`), so components read like the design.
- **Typed, reusable components.** Content lives in `src/data/content.ts` with exported types. Sections compose small primitives (`SectionHeader`, `ButtonLink`, `Eyebrow`, `AvatarStack`) instead of repeating markup.
- **Server Components by default.** Only the header (menu state) and the contact form are client components. Everything else ships as static HTML. The whole page is prerendered at build time.
- **Contact form.** Validation lives in `src/lib/contact.ts` and runs twice: on the client for instant feedback, and again in a Server Action (`src/app/actions.ts`). The Server Action is mocked: it waits 600 ms and stores nothing. The form also works without JavaScript. Errors are linked with `aria-describedby`, invalid fields get `aria-invalid`, the first invalid field is focused, and the success message is announced through `role="status"`.
- **Photo collage.** The masonry collage uses container query units. Every size is the Figma pixel value multiplied by `100cqw / artboard width`, so the composition matches the 362px and 530px frames exactly and scales without distortion in between.
- **Responsive range.** The design only has 402px and 1280px frames. For tablet (`md`, 768px) I used two-column categories, three-column steps and stacked hero/feature sections. Two-column layouts start at `lg` (1024px), where the hero heading uses an intermediate size so it doesn't crowd the image.
- **Images.** Photos were exported from Figma and resized/compressed with sharp (1.7 MB down to 452 KB). They are served through `next/image` (AVIF/WebP, responsive `sizes`, blur placeholders, lazy below the fold). The hero photo is the LCP element on every breakpoint, so it is preloaded.
- **Fonts.** Inter and Plus Jakarta Sans are self-hosted via `next/font` with `display: swap` and metric-adjusted fallbacks, so CLS stays at 0. Only the heading font is preloaded, so the body font doesn't compete with the hero image for bandwidth.
- **CSS inlining.** `experimental.inlineCss` is on. It's a single page with an 8 KB Tailwind bundle, so inlining removes a render-blocking request.
- **Motion.** Motion is limited to short hover/focus transitions and the menu reveal. All of it is disabled under `prefers-reduced-motion`, and smooth scrolling is only enabled when motion is allowed.
- **Metadata & SEO.** Title, description, canonical URL, Open Graph and Twitter tags, plus a generated Open Graph image (`next/og`, rendered with the brand font). Also JSON-LD (`EducationalOrganization`), `robots.txt`, `sitemap.xml` and an SVG favicon.

## Design fidelity

The page reproduces both Figma frames exactly, including a few details that could be improved. They are part of the design, so they were implemented as they are. In a real project I would raise them with the design team to confirm, and they would stay as designed until then:

- The "Meet international students & teachers" paragraph is lorem ipsum.
- The mobile contact form is in Portuguese, while the rest of the page is in English. The mobile copy is marked with `lang="pt-BR"` so screen readers pronounce it correctly.
- The desktop frame labels all three steps "Step 01"; the mobile frame numbers them 01/02/03.
- Two color pairs are 4.45:1, just below WCAG AA (4.5:1): `#e7e7ec` on the blue section and `#6d7384` on the cream background. This is the only failing Lighthouse check.
- The two frames differ in the step 2 copy (mobile adds "actually"), the step 2 icon color and the color of "The people" paragraph.

Where the frames use different copy, `ResponsiveText` renders both versions and shows one with CSS, at the breakpoint where that section's layout changes. The hidden version uses `display: none`, so screen readers only announce the visible one. Form placeholders are attributes, so they switch through a small `useMediaQuery` hook instead.

## Not covered by the design

The brief asks for a reasonable choice where the design is unclear:

- The open state of the mobile menu isn't designed. It opens as a dropdown panel with the nav links and both actions. Escape closes it and returns focus to the toggle, and it also closes on link click or when the viewport reaches desktop width.
- Link destinations aren't defined. Nav and CTA links go to the most relevant in-page section. "Terms" and "Privacy" are placeholders (`#`).
- Validation error and success states aren't designed. They use a red and a green outside the main palette, with messages in English.

## Accessibility

- Landmarks (`header`, `nav`, `main`, `footer`), one `h1`, and every section labelled by its heading through `aria-labelledby`
- "Skip to content" link and a visible `:focus-visible` outline everywhere
- Mobile menu toggle with `aria-expanded` / `aria-controls`, fully keyboard operable
- Descriptive `alt` text for content photos. Decorative images and shapes use `alt=""` / `aria-hidden`.
- Category cards use one stretched link per card, with screen-reader text ("Explore Product Design courses")
- Form labels, inline error messages and a live region for the result
- Color contrast meets WCAG AA everywhere except the two design color pairs listed under "Design fidelity"

## Results

Lighthouse 13.6 on the live preview (Vercel):

|         | Performance | Accessibility | Best Practices | SEO |
| ------- | ----------- | ------------- | -------------- | --- |
| Desktop | 100         | 96            | 100            | 100 |
| Mobile  | 98          | 96            | 100            | 100 |

Accessibility is 96 only because of the design's color contrast (see "Design fidelity"); every other accessibility audit passes. Mobile (simulated slow 4G, 4× CPU): LCP 2.2 s, CLS 0, TBT around 80–270 ms depending on machine load. On a local production build (`npm run build && npm start`), the mobile score is 92–94 with an LCP of about 3.0 s.

Every text layer in both Figma frames (104 desktop, 98 mobile) was checked against the rendered page through the Figma API.

For visual fidelity, I exported every section from Figma as PNG and compared it side by side with a headless Chrome screenshot of the same section at 402 and 1280px. This caught details that measurements alone missed, such as the 12° rotated shapes and heading line breaks. Most section heights now match the frames exactly or within 1–4px. I also checked 768 and 1024px manually. I also tested keyboard navigation and the whole form flow (empty submit, invalid email, success). The unit tests cover the shared validation rules.

## Known gaps

- There is no backend: the form submission is mocked.
- Two color pairs from the design are below WCAG AA contrast (see "Design fidelity").
- On small screens, the form placeholders show the desktop (English) copy until JavaScript loads.
- Mobile LCP (2.3 s live, about 3.0 s locally, on simulated slow 4G) is mostly framework JavaScript and font bytes. Further trimming client JavaScript would be the next step.
- Only Chromium browsers (Chrome, Edge) were tested. Safari and Firefox were not checked on real devices.
- No Storybook. Tests cover the form logic only, not the components visually.
- `inlineCss` is still an experimental Next.js flag.

## AI tools

I used **Claude Code** as a pair programmer:

- Reading the Figma file through the REST API and turning node data (sizes, fonts, colors, spacing) into tokens and layout values
- Exporting and optimizing the images
- Scaffolding the components and writing the README draft

To check the results, I compared rendered element sizes in the browser against the Figma frames at 402 and 1280px and ran Lighthouse on the production build, then fixed the LCP issues it found and documented the contrast issue that comes from the design. I also tested the interactions by hand, kept ESLint and `tsc` clean, added unit tests for the validation logic, and reviewed every component before committing.

## Time spent

About 3 hours in total, spread over a few days. That covers implementation with the AI assistant, reviewing the code, comparing against the design and testing on devices.
