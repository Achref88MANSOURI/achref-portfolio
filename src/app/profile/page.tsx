import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProfileDetails from '@/components/home/ProfileDetails';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/profile',
  title: 'Profile | Achref Mansouri',
  description: 'Academic background, internships, technical skills, training and languages.',
});

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] font-display">
      <Header />
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <ProfileDetails />
        <Footer />
      </div>
    </div>
  );
}
