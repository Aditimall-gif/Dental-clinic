import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../config/assets';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax scaling for the background image
    gsap.to(imageRef.current, {
      scale: 1.15,
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Content fade and slight upward movement on scroll
    gsap.to(contentRef.current, {
      y: -50,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="relative h-[100svh] w-full overflow-hidden bg-lumina-dark">
      {/* Background Image */}
      <img
        ref={imageRef}
        src={ASSETS.HERO_IMAGE}
        alt="Modern Luxury Dental Clinic"
        className="absolute inset-0 w-full h-full object-cover origin-center"
      />
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      {/* Content */}
      <div 
        ref={contentRef} 
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 mt-16"
      >
        <span className="text-white/80 uppercase tracking-[0.2em] text-sm mb-6 font-medium">
          Welcome to Lumina Dental
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white max-w-5xl leading-[1.1] mb-8 drop-shadow-lg">
          Your Smile. <br />
          <span className="text-white/90 italic font-light">Designed With Care.</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-xl font-light mb-12 drop-shadow-md">
          Premium dental care in a calm, modern environment where architecture meets advanced healthcare.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#appointment"
            className="px-8 py-4 bg-white text-lumina-dark rounded-full font-medium hover:bg-lumina-teal hover:text-white transition-colors duration-300 shadow-lg"
          >
            Book an Appointment
          </a>
          <a
            href="#clinic"
            className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
          >
            Explore Our Clinic
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
