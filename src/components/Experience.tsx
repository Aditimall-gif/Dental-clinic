import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../config/assets';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src={ASSETS.CLINIC_EXTERIOR}
          alt="Clinic Environment"
          className="w-full h-[120%] object-cover origin-top -top-[10%]"
        />
        <div className="absolute inset-0 bg-lumina-dark/40" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 drop-shadow-lg">
          Designed to calm.<br />
          <span className="italic font-light">Engineered to heal.</span>
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto drop-shadow-md">
          Step into a space where every sensory detail has been curated to alleviate anxiety and elevate your standard of care.
        </p>
      </div>
    </section>
  );
}
