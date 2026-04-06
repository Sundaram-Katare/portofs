import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import HighlightsSection from '../components/HighlightsSection';
import Work from '../components/Work';

export default function Home() {
  return (
    <div className="bg-white flex flex-col min-h-screen px-32 py-4 space-y-12">
      <Navbar />
      <Hero />
      <Projects />
      <Work />
      <HighlightsSection />
    </div>
  );
}
