import { MapPin } from 'lucide-react';

export default function Map() {
  return (
    <section className="relative h-[60vh] bg-lumina-beige">
      {/* Map Placeholder - easily swappable with a real Google Maps iframe */}
      <div className="absolute inset-0 bg-lumina-beige">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.75479008985!2d-118.42391054366606!3d34.02018898166567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1689791402263!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) opacity(70%) contrast(1.2)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center pointer-events-auto">
          <div className="w-12 h-12 bg-lumina-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-lumina-teal" />
          </div>
          <h3 className="font-serif text-2xl text-lumina-dark mb-2">Lumina Dental</h3>
          <p className="text-lumina-dark/60 font-light text-sm mb-6">
            123 Luxury Avenue, Suite 400<br />
            Beverly Hills, CA 90210
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 border border-lumina-dark text-lumina-dark text-sm font-medium hover:bg-lumina-dark hover:text-white transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
