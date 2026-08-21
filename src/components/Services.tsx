import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../config/assets';
import { Stethoscope, Sparkles, Activity, ShieldCheck, Smile, Baby } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive care to maintain optimal oral health and prevent future issues.',
    icon: Stethoscope,
    image: ASSETS.TREATMENT_ROOM,
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Bespoke smile makeovers, including veneers and bonding, for a flawless aesthetic.',
    icon: Sparkles,
    image: ASSETS.DENTIST_TREATMENT,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements using advanced surgical techniques.',
    icon: ShieldCheck,
    image: ASSETS.CONSULTATION,
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional-grade whitening treatments for a brilliantly bright smile.',
    icon: Smile,
    image: ASSETS.GALLERY_2,
  },
  {
    title: 'Invisalign',
    description: 'Clear, comfortable aligners to discreetly straighten your teeth over time.',
    icon: Activity,
    image: ASSETS.GALLERY_1,
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle, specialized care to ensure a positive dental experience for children.',
    icon: Baby,
    image: ASSETS.GALLERY_3,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-lumina-wood uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-lumina-dark mb-6">
            Comprehensive Care. <br/>
            <span className="italic text-lumina-teal">Exceptional Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative overflow-hidden rounded-2xl bg-lumina-ivory border border-lumina-dark/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-[400px]"
              >
                {/* Background Image that reveals on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-lumina-dark/80" />
                </div>

                <div className="relative z-10 p-10 flex flex-col h-full justify-between transition-colors duration-500 group-hover:text-white">
                  <div>
                    <div className="w-14 h-14 rounded-full bg-lumina-beige flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-lumina-teal group-hover:text-white" />
                    </div>
                    <h3 className="font-serif text-2xl mb-4 text-lumina-dark group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-lumina-dark/60 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center text-sm font-medium text-lumina-teal group-hover:text-white transition-colors duration-500 uppercase tracking-widest cursor-pointer">
                    <span className="group-hover:mr-4 transition-all duration-300">Learn More</span>
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
