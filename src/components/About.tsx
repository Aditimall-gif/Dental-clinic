import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../config/assets';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax on the image
    gsap.fromTo(imageRef.current, 
      { yPercent: -10, scale: 1.05 },
      {
        yPercent: 10,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );

    // Fade up text
    gsap.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-lumina-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div className="relative h-[60vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              ref={imageRef}
              src={ASSETS.CLINIC_RECEPTION}
              alt="Lumina Dental Clinic Reception"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
          </div>

          {/* Text Side */}
          <div ref={textRef} className="flex flex-col justify-center max-w-xl">
            <span className="text-lumina-wood uppercase tracking-[0.2em] text-sm font-medium mb-6 block">
              The Lumina Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-lumina-dark leading-[1.1] mb-8">
              Modern Dentistry. <br />
              <span className="italic font-light text-lumina-teal">A More Comfortable Experience.</span>
            </h2>
            <div className="space-y-6 text-lumina-dark/70 text-lg font-light leading-relaxed">
              <p>
                We believe that visiting the dentist shouldn't feel like a clinical obligation. 
                At Lumina, we have thoughtfully redesigned every aspect of the dental experience to 
                prioritize your comfort, peace of mind, and well-being.
              </p>
              <p>
                From our architecturally curated waiting lounges to our state-of-the-art treatment 
                suites, every detail is engineered to soothe. Combine this with our world-class 
                specialists, and you have a new standard of dental care.
              </p>
            </div>
            
            <div className="mt-12">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                alt="Founder Signature" 
                className="h-12 opacity-60 invert-[0.2] mb-2"
                style={{ filter: 'grayscale(100%) opacity(60%)' }}
              />
              <p className="font-medium text-lumina-dark text-sm">Dr. Eleanor Vance</p>
              <p className="text-lumina-dark/50 text-sm">Founder & Lead Aesthetic Dentist</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
