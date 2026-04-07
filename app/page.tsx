"use client"

import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import HighlightsSection from '../components/HighlightsSection';
import Work from '../components/Work';

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] flex flex-col min-h-screen px-4 sm:px-6 md:px-12 lg:px-32 py-4 space-y-12 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Work />
      <HighlightsSection />
    </div>
  );
}
