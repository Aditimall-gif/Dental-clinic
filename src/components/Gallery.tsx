import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../config/assets';

gsap.registerPlugin(ScrollTrigger);

const images = [
  ASSETS.GALLERY_1,
  ASSETS.GALLERY_2,
  ASSETS.GALLERY_3,
  ASSETS.GALLERY_4,
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Calculate how far to scroll horizontally
    const scrollWidth = wrapper.scrollWidth - window.innerWidth;

    gsap.to(wrapper, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="clinic" ref={sectionRef} className="h-screen bg-lumina-dark flex items-center overflow-hidden">
      <div className="absolute top-12 left-6 md:left-12 z-10">
         <span className="text-white/60 uppercase tracking-[0.2em] text-sm font-medium">
            The Clinic Gallery
          </span>
      </div>
      
      <div ref={wrapperRef} className="flex gap-8 px-6 md:px-12 items-center h-[60vh]">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="relative w-[80vw] md:w-[50vw] lg:w-[40vw] h-full shrink-0 rounded-2xl overflow-hidden"
          >
            <img 
              src={img} 
              alt={`Gallery image ${idx + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
