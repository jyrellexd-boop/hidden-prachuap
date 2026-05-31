import HeroSection from '@/components/home/HeroSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import ReviewSection from '@/components/home/ReviewSection';
import ExploreSection from '@/components/home/ExploreSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <ReviewSection />
      <ExploreSection />
    </div>
  );
}