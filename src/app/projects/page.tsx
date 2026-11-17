import { siteConfig } from '@/config';
import ProjectsClient from './ProjectsClient';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/projects',
  title: `Projects | ${siteConfig.fullName}`,
  description: `Selected projects and work by ${siteConfig.fullName}, ${siteConfig.role}.`,
});

const breadcrumbs = breadcrumbJsonLd([{ name: 'Projects', path: '/projects' }]);

export default function Projects() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <ProjectsClient />
    </>
  );
}
