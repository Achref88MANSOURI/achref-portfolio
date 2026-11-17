import ZoomImage from '@/components/ZoomImage';
import { profileConfig } from '@/config/profile.config';

export default function Community() {
  return (
    <section id="community" aria-labelledby="community-title" className="border border-[var(--terminal-border)] bg-[var(--terminal-surface)] rounded p-5 sm:p-6 scroll-mt-24">
      <h2 id="community-title" className="case-heading font-bold">Community & Leadership</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {profileConfig.community.map(item => (
          <article key={item.title} className="min-w-0">
            <h3 className="text-[var(--terminal-accent)] font-bold text-sm">{item.title}</h3>
            <p className="text-sm mt-2">{item.description}</p>
            <ZoomImage src={item.image} alt={item.alt} width={item.width} height={item.height} />
          </article>
        ))}
      </div>
    </section>
  );
}
