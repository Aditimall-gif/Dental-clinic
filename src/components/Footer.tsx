export default function Footer() {
  return (
    <footer id="contact" className="bg-lumina-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex flex-col items-start mb-6 inline-block">
              <span className="font-serif text-2xl tracking-widest leading-none">LUMINA</span>
              <span className="text-[10px] tracking-[0.3em] font-medium mt-1 text-white/70">DENTAL</span>
            </a>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">
              Redefining the standard of modern dental care through architecture, empathy, and expertise.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider text-white/90">Contact</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li>
                <a href="tel:+13105550198" className="hover:text-lumina-teal transition-colors">
                  +1 (310) 555-0198
                </a>
              </li>
              <li>
                <a href="mailto:hello@luminadental.com" className="hover:text-lumina-teal transition-colors">
                  hello@luminadental.com
                </a>
              </li>
              <li className="leading-relaxed">
                123 Luxury Avenue, Suite 400<br />
                Beverly Hills, CA 90210
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider text-white/90">Hours</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li className="flex justify-between"><span>Mon - Thu</span> <span>8am - 6pm</span></li>
              <li className="flex justify-between"><span>Friday</span> <span>8am - 4pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>By Appointment</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider text-white/90">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all text-xs font-medium tracking-wider">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all text-xs font-medium tracking-wider">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all text-xs font-medium tracking-wider">
                X
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Lumina Dental. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
