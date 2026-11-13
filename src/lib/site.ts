/**
 * Public URL used for canonical links, Open Graph and the sitemap.
 * Explicit config wins; on Vercel it falls back to the project's production domain.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");

export const site = {
  name: "Luma",
  title: "Luma | Build skills that actually move you forward",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more, one focused lesson at a time.",
  email: "contact@luma.com",
} as const;
