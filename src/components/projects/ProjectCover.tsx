import Image from 'next/image';
import type { Project } from '@/config';

/** Covers reuse the source-matched media; Cisco has an intentional typographic treatment. */
export default function ProjectCover({ project }: { project: Project }) {
  if (project.cover) {
    return (
      <figure className="min-w-0">
        <Image src={project.cover.src} alt={project.cover.caption} width={project.cover.width} height={project.cover.height}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          className="w-full h-auto object-contain rounded border border-[var(--terminal-border)] bg-[var(--terminal-bg)]" />
        <figcaption className="mt-2 text-xs leading-relaxed text-[var(--terminal-text-muted)]">{project.cover.caption}</figcaption>
      </figure>
    );
  }
  return (
    <div className="rounded border border-[var(--terminal-border)] bg-[var(--terminal-bg)] p-5 sm:p-7 space-y-4">
      <p className="text-xs uppercase tracking-widest text-[var(--terminal-text-muted)]">Static configuration analysis</p>
      <p className="text-2xl font-bold text-[var(--terminal-accent)]">Cisco IOS / IOS-XE</p>
      <ol className="space-y-2 text-sm leading-relaxed">
        <li>01 · Configuration → TTP parsing</li>
        <li>02 · RouterContractV1 → validated JSON</li>
        <li>03 · CIS-inspired checks → findings & evidence</li>
      </ol>
      <p className="text-xs text-[var(--terminal-text-muted)]">Configuration review · structured findings · remediation guidance</p>
    </div>
  );
}
