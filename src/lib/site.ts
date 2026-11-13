/** Public URL used for canonical links, Open Graph and the sitemap. Set it per environment. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const site = {
  name: "Luma",
  title: "Luma | Build skills that actually move you forward",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more, one focused lesson at a time.",
  email: "contact@luma.com",
} as const;
