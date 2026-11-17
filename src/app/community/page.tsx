import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ZoomImage from '@/components/ZoomImage';
import { profileConfig } from '@/config/profile.config';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/community',
  title: 'Community | Achref Mansouri',
  description: 'Student community involvement at GDG On Campus SUP’COM and IndabaX 2025.',
});

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] font-display">
      <Header />
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <main id="main-content" tabIndex={-1} className="py-8 space-y-8">
          <header className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-widest text-[var(--terminal-text-muted)]">Beyond the technical projects</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Community & Leadership</h1>
            <p className="text-sm sm:text-base leading-relaxed">Student associations are another part of my time at SUP’COM. These activities sit alongside my engineering studies and technical work.</p>
          </header>
          {profileConfig.community.map(entry => (
            <section key={entry.id} id={entry.id} aria-labelledby={`${entry.id}-title`} className="border border-[var(--terminal-border)] bg-[var(--terminal-surface)] rounded p-5 sm:p-7 min-w-0">
              <div className="max-w-3xl space-y-3 mb-6">
                <p className="text-sm text-[var(--terminal-accent)]">{entry.organisation}{entry.period && ` · ${entry.period}`}</p>
                <h2 id={`${entry.id}-title`} className="text-xl sm:text-2xl font-bold">{entry.role}</h2>
                <p className="text-sm sm:text-base leading-relaxed">{entry.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-5 items-start">
                {entry.photos.map(photo => <ZoomImage key={photo.src} src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />)}
              </div>
            </section>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}
