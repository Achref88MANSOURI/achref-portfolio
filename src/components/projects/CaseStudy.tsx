import type { Project } from '@/config';
import ZoomImage from '@/components/ZoomImage';

export default function CaseStudy({ project }: { project: Project }) {
  const sections = [
    ['My contribution', project.contributions],
    ['Architecture & workflow', project.workflow],
    ['Project materials', project.materials],
    ['Design approach', project.designNotes],
  ] as const;

  return (
    <div className="space-y-8 min-w-0">
      {project.context && <p className="font-mono text-primary text-sm">{project.context}</p>}
      {project.problem && <section><h2 className="case-heading">Project focus</h2><p>{project.problem}</p></section>}
      {sections.map(([title, items]) => items?.length ? (
        <section key={title}>
          <h2 className="case-heading">{title}</h2>
          {title === 'Architecture & workflow' ? (
            <ol className="space-y-3 list-decimal pl-6">{items.map(item => <li className="border border-[var(--terminal-border)] rounded p-3" key={item}>{item}</li>)}</ol>
          ) : (
            <ul className="list-disc pl-5 space-y-2">{items.map(item => <li key={item}>{item}</li>)}</ul>
          )}
        </section>
      ) : null)}
      {!!project.gallery?.length && (
        <section>
          <h2 className="case-heading">Project gallery</h2>
          <p className="text-sm text-[var(--terminal-text-dim)]">Explore the architecture and interfaces. Select an image to view it in detail.</p>
          {project.gallery.map(media => (
            <div key={media.src}>
              <ZoomImage src={media.src} alt={media.caption} width={media.width} height={media.height} />
              <a className="text-primary text-xs underline" href={media.src} target="_blank" rel="noreferrer">Open full-resolution image</a>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
