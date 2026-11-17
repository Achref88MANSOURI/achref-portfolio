/** Set NEXT_PUBLIC_SITE_URL at build time for production. */
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').origin;
