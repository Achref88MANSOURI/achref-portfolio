import Image from 'next/image';
import Link from 'next/link';
import { contentConfig, siteConfig } from '@/config';
import { profileConfig } from '@/config/profile.config';
import styles from './HomeProfile.module.css';

/** Essential profile content is server-rendered and never gated by animation or viewport state. */
export default function HomeProfile() {

  return (
    <main id="main-content" tabIndex={-1} className={styles.layout}>
      <section id="focus" className={styles.hero} aria-label="Introduction">
        <figure className={styles.terminalPhoto}>
          <div className={styles.terminalBar}>
            <span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span>
            <span>achref / portrait.jpg</span>
          </div>
          <Image src={siteConfig.profileImage} alt="Achref Mansouri at a GDG On Campus SUP’COM event"
            width={720} height={720} sizes="(min-width: 900px) 40vw, 100vw" priority className={styles.portrait} />
        </figure>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>Cybersecurity portfolio · {siteConfig.location}</p>
          <h1>{siteConfig.fullName}</h1>
          <p className={styles.role}>{siteConfig.role}</p>
          <p className={styles.domains}>{contentConfig.home.hero.subtitle}</p>
          <p>{profileConfig.summary} My practical work connects detection, enrichment and analyst-controlled incident workflows.</p>
          <p className={styles.academicSummary}>SUP’COM · ICT engineering, 2024–2027 (expected)<br />Previously: IPEI Monastir · preparatory cycle, 2022–2024</p>
          <ul className={styles.highlights} aria-label="Practical experience highlights">
            <li>SOC automation internship at 3S</li><li>Cloud-based intrusion detection lab</li><li>Cisco configuration security auditing</li>
          </ul>
          <p className={styles.availability}>{siteConfig.status}</p>
          <div id="contact" className={styles.links}>
            <Link href="/cv" className={styles.primaryLink}>View CV ↗</Link>
            <Link href="/projects">Explore projects →</Link>
            <a href={`mailto:${profileConfig.email}`}>Contact ↗</a>
          </div>
          <div className={styles.socials}>{(siteConfig.social.professional ?? []).map(social => <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">{social.name} ↗</a>)}</div>
        </div>
      </section>

      <nav aria-label="Explore the portfolio" className={styles.destinationLinks}>
        <Link href="/profile">Profile →</Link>
        <Link href="/projects">Projects →</Link>
        <Link href="/community">Community →</Link>
      </nav>
    </main>
  );
}
