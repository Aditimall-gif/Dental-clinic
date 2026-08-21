import { ASSETS } from '../config/assets';

const doctors = [
  {
    name: 'Dr. Eleanor Vance',
    role: 'Founder & Lead Aesthetic Dentist',
    image: ASSETS.DOCTOR_1,
    description: 'Specializing in advanced cosmetic procedures and smile design, Dr. Vance brings over 15 years of elite aesthetic experience.',
  },
  {
    name: 'Dr. Julian Thorne',
    role: 'Implantologist & Oral Surgeon',
    image: ASSETS.DOCTOR_2,
    description: 'A leader in precision surgical dentistry, Dr. Thorne utilizes 3D guided technology for flawless implant placement.',
  },
  {
    name: 'Dr. Maya Lin',
    role: 'Orthodontic Specialist',
    image: ASSETS.DOCTOR_3,
    description: 'Dedicated to structural harmony, Dr. Lin crafts perfectly aligned smiles using discreet, modern orthodontic systems.',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 md:py-32 bg-lumina-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-lumina-wood uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
            Meet Our Specialists
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-lumina-dark mb-6">
            Masters of their craft.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {doctors.map((doc) => (
            <div key={doc.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-lumina-beige">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-lumina-dark mb-2">{doc.name}</h3>
              <p className="text-lumina-teal font-medium text-sm tracking-wide uppercase mb-4">{doc.role}</p>
              <p className="text-lumina-dark/60 font-light leading-relaxed">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
