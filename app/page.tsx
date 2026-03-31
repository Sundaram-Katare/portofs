import Navbar from '../components/Navbar'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="bg-white min-h-screen px-32 py-4 ">
      <Navbar />
      <Hero />
    </div>
  );
}
