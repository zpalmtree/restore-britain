import Hero from '@/components/sections/Hero';
import LoweSpeech from '@/components/sections/LoweSpeech';
import StatsBar from '@/components/sections/StatsBar';
import PolicyPillars from '@/components/sections/PolicyPillars';
import CtaBanner from '@/components/sections/CtaBanner';
import LatestNews from '@/components/sections/LatestNews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LoweSpeech />
      <StatsBar />
      <PolicyPillars />
      <CtaBanner />
      <LatestNews />
    </>
  );
}
