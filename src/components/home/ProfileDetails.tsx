import Image from 'next/image';
import type { ReactNode } from 'react';
import { certifications, education, experience, languages, siteConfig } from '@/config';
import { profileConfig } from '@/config/profile.config';
import SkillsPanel from '@/components/about/SkillsPanel';
import styles from './HomeProfile.module.css';

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={styles.section}>
      <h2 id={`${id}-title`} className={styles.heading}><span aria-hidden="true">&gt; </span>{title}</h2>
      {children}
    </section>
  );
}


export default function ProfileDetails() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.layout}>
      <h1 className="text-3xl sm:text-4xl font-bold mb-7">Profile</h1>
      <div className={styles.content}>
        <figure className={`${styles.terminalPhoto} ${styles.profilePhoto}`}>
          <div className={styles.terminalBar}>
            <span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span>
            <span>achref / profile-banner.webp</span>
          </div>
          <Image
            src={profileConfig.portrait.src}
            alt={`Portrait of ${siteConfig.fullName}`}
            width={profileConfig.portrait.width}
            height={profileConfig.portrait.height}
            sizes="(min-width: 1360px) 1296px, 100vw"
            priority
            className={styles.profilePortrait}
          />
        </figure>
        <Section id="education" title="Academic Background">
          <div className={styles.entries}>
            {education.map(item => (
              <article key={item.id} className={styles.entry}>
                <p className={styles.date}>{item.startDate}–{item.endDate}</p>
                <h3>{item.degree}</h3>
                <p className={styles.organisation}>{item.institution}</p>
                {item.description && <p>{item.description}</p>}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Internships & Experience">
          <div className={styles.entries}>
            {experience.map(item => (
              <article key={item.id} className={styles.entry}>
                <p className={styles.date}>{item.startDate}–{item.endDate}</p>
                <h3>{item.role}</h3>
                <p className={styles.organisation}>{item.company}</p>
                {item.intro && <p>{item.intro}</p>}
                {!!item.bullets?.length && <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
              </article>
            ))}
          </div>
        </Section>

        <SkillsPanel />

        <Section id="training" title="Certifications & Training">
          <div className={styles.training}>
            <div><h3>Cisco Networking Academy</h3><ul>{certifications.map(item => <li key={item.id}>{item.name}</li>)}</ul><p className={styles.trainingNote}>Networking coursework completed through Cisco Networking Academy.</p></div>
            <div><h3>Languages</h3><ul>{languages.map(item => <li key={item.id}>{item.name} — {item.proficiency}</li>)}</ul></div>
          </div>
        </Section>


      </div>
    </main>
  );
}
