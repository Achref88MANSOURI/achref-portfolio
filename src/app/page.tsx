import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeProfile from '@/components/home/HomeProfile';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] font-display">
      <Header />
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <HomeProfile />
        <Footer />
      </div>
    </div>
  );
}
