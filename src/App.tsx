import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import BeforeAfter from './components/BeforeAfter';
import Doctors from './components/Doctors';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Appointment from './components/Appointment';
import Map from './components/Map';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-lumina-ivory min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <BeforeAfter />
      <Doctors />
      <Gallery />
      <Features />
      <Appointment />
      <Map />
      <Footer />
    </div>
  );
}
