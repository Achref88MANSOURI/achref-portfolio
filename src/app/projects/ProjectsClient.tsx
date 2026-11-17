import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectCover from '@/components/projects/ProjectCover';
import { projects } from '@/config';
import styles from './Projects.module.css';

/** Server-rendered cards: every summary is readable without selecting a project. */
export default function ProjectsClient() {
  const visibleProjects = projects.filter(project => project.visibility === 'public');

  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] font-display">
      <Header />
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <main id="main-content" tabIndex={-1} className={styles.main}>
          <header className={styles.intro}>
            <p className={styles.eyebrow}>Infrastructure · Detection · Automation</p>
            <h1>Projects</h1>
            <p>Four case studies connecting network infrastructure, security operations and analyst-assisted automation. Each describes the problem, my contribution and the available evidence.</p>
          </header>
          <div className={styles.list}>
            {visibleProjects.map(project => (
              <article key={project.id} aria-labelledby={`project-${project.id}`} className={styles.card}>
                <div className={styles.cover}><ProjectCover project={project} /></div>
                <div className={styles.body}>
                  <p className={styles.context}>{project.context || project.type.replaceAll('_', ' ')}</p>
                  <h2 id={`project-${project.id}`}><Link href={`/projects/${project.id}`}>{project.name}</Link></h2>
                  <p className={styles.problem}>{project.problem || project.description}</p>
                  {!!project.contributions?.length && (
                    <div>
                      <h3>My contribution</h3>
                      <ul>{project.contributions.slice(0, 3).map(contribution => <li key={contribution}>{contribution}</li>)}</ul>
                    </div>
                  )}
                  <p className={styles.technologies}>{project.tags.slice(0, 7).join(' · ')}</p>
                  <div className={styles.actions}>
                    <Link href={`/projects/${project.id}`} className={styles.primary}>View project →</Link>
                    {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
