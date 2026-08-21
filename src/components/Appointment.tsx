import { useState } from 'react';
import { ASSETS } from '../config/assets';

export default function Appointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real implementation would send data here
  };

  return (
    <section id="appointment" className="py-24 md:py-32 bg-lumina-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20">
            <span className="text-lumina-wood uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Reserve Your Visit
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-lumina-dark mb-10">
              Request an Appointment
            </h2>

            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in duration-700">
                <div className="w-16 h-16 bg-lumina-teal/10 text-lumina-teal rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-lumina-dark mb-4">Request Received</h3>
                <p className="text-lumina-dark/70 font-light">
                  Thank you for choosing Lumina Dental. Our concierge team will contact you shortly to confirm your preferred time.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-lumina-dark/60 mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-lumina-dark/20 py-3 focus:outline-none focus:border-lumina-teal transition-colors rounded-none text-lumina-dark" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-lumina-dark/60 mb-2">Phone</label>
                    <input required type="tel" className="w-full bg-transparent border-b border-lumina-dark/20 py-3 focus:outline-none focus:border-lumina-teal transition-colors rounded-none text-lumina-dark" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-lumina-dark/60 mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b border-lumina-dark/20 py-3 focus:outline-none focus:border-lumina-teal transition-colors rounded-none text-lumina-dark" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-lumina-dark/60 mb-2">Service</label>
                    <select className="w-full bg-transparent border-b border-lumina-dark/20 py-3 focus:outline-none focus:border-lumina-teal transition-colors rounded-none text-lumina-dark">
                      <option>General Checkup</option>
                      <option>Cosmetic Consultation</option>
                      <option>Teeth Whitening</option>
                      <option>Invisalign</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-lumina-dark/60 mb-2">Preferred Date</label>
                    <input type="date" className="w-full bg-transparent border-b border-lumina-dark/20 py-3 focus:outline-none focus:border-lumina-teal transition-colors rounded-none text-lumina-dark" />
                  </div>
                </div>

                <button type="submit" className="w-full mt-8 px-8 py-4 bg-lumina-dark text-white font-medium hover:bg-lumina-teal transition-colors duration-300">
                  Request Appointment
                </button>
              </form>
            )}
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 min-h-[400px] relative">
            <img src={ASSETS.TREATMENT_ROOM} alt="Treatment Room" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
