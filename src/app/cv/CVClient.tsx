'use client';
import PageShell from '@/components/layout/PageShell';
import CVTemplate from '@/components/documents/CVTemplate';
import ScaleToFit from '@/components/ScaleToFit';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { siteConfig, cvConfig, experience, education, certifications, languages, hobbies, projects } from '@/config';
import type { ContributionStats } from '@/lib/github-contributions';
export default function CVClient({email,phone}: {email?:string;phone?:string;contributionStats?:Record<string,ContributionStats|null>}) {
 const download=usePdfDownload();
 const props={style:cvConfig.styles[0],siteConfig,experience,education,certifications,languages,hobbies,projects,summary:cvConfig.summary,useColumnLayout:false};
 const save=()=>download.download(async()=>{const [{pdf},{default:CVDocument}]=await Promise.all([import('@react-pdf/renderer'),import('@/components/documents/CVDocument')]);return {blob:await pdf(<CVDocument {...props} email={email} phone={phone}/>).toBlob(),filename:'Achref_Mansouri_CV.pdf'};});
 return <PageShell boot={false} width="medium"><section className="space-y-5"><h1 className="text-3xl font-mono text-primary">Curriculum vitae</h1><p>Download my CV, generated from the experience, education and projects presented in this portfolio.</p><p><a href="mailto:achref.mansouri@supcom.tn" className="text-primary underline">achref.mansouri@supcom.tn</a> · Tunis, Tunisia</p><button type="button" disabled={download.isDownloading} onClick={save} className="rounded bg-primary text-[var(--terminal-on-primary)] font-bold px-5 py-3">{download.isDownloading ? 'Generating PDF…' : 'Download generated CV (PDF)'}</button>{download.error && <p role="alert">{download.error}</p>}{download.succeeded && <p role="status">PDF generated. Check your downloads.</p>}<div className="overflow-hidden rounded bg-white"><ScaleToFit><CVTemplate {...props}/></ScaleToFit></div></section></PageShell>;
}
