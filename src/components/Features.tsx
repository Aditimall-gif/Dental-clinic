import { Shield, Sparkles, UserCheck, Heart } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Advanced Technology',
    description: 'We utilize state-of-the-art 3D imaging, digital impressions, and laser dentistry for precision and comfort.'
  },
  {
    icon: UserCheck,
    title: 'Personalized Care',
    description: 'Every treatment plan is bespoke, tailored specifically to your facial structure, aesthetic goals, and health needs.'
  },
  {
    icon: Shield,
    title: 'Experienced Specialists',
    description: 'Our team comprises board-certified specialists who are leaders in their respective fields of modern dentistry.'
  },
  {
    icon: Heart,
    title: 'Comfortable Environment',
    description: 'Designed to soothe the senses, our clinic features noise-canceling headphones, warm tones, and sedation options.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white border-y border-lumina-beige/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col">
                <Icon className="w-8 h-8 text-lumina-teal mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-lumina-dark mb-3">{feature.title}</h3>
                <p className="text-lumina-dark/60 font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
