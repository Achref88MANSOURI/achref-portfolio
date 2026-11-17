import Link from 'next/link';
import { profileConfig } from '@/config/profile.config';
import { getSkillsGroupedByCategory } from '@/config';
export default function SkillsPanel() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border border-[var(--terminal-border)] bg-[var(--terminal-surface)] rounded p-5 sm:p-6 space-y-5 scroll-mt-24">
      <h2 id="skills-title" className="case-heading font-bold">Technical Skills</h2>
      <p className="text-sm text-[var(--terminal-text-muted)]">Tools used in the case studies, alongside network and access security foundations.</p>
      <div className="grid sm:grid-cols-2 gap-5">
        {Object.entries(getSkillsGroupedByCategory()).map(([category, skills]) => (
          <div key={category} className="min-w-0">
            <h3 className="text-[var(--terminal-accent)] font-bold text-sm mb-2">{category}</h3>
            <p className="text-sm mb-2 text-[var(--terminal-text-muted)]">{profileConfig.skillUsage[category]}</p>
            <p className="text-sm leading-relaxed">{skills.map(skill => skill.name).join(' · ')}</p>
          </div>
        ))}
      </div>
      <Link href="/projects" className="inline-block text-[var(--terminal-accent)] underline text-sm">Explore supporting projects →</Link>
    </section>
  );
}
