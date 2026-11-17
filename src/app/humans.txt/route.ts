import { siteConfig } from '@/config';
import { siteUrl } from '@/lib/seo';

// humans.txt: who made the site and with what. Only fields that are already public on the site go in.
export function GET() {
  const links = (siteConfig.social.professional ?? []).filter((link) => link.showInFooter);

  const lines = [
    '/* TEAM */',
    `Name: ${siteConfig.fullName}`,
    `Handle: ${siteConfig.username}`,
    `Role: ${siteConfig.role}`,
    `Site: ${siteUrl}`,
    ...links.map((link) => `${link.name}: ${link.url}`),
    '',
    '/* SITE */',
    'Stack: Next.js, React, TypeScript, Tailwind CSS',
    'Template: Cyberfolio by iamxorum (MIT); personalised by Achref Mansouri',
  ];

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
