import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Clinic', href: '#clinic' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-lumina-ivory/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start z-50">
          <span className={`font-serif text-2xl tracking-widest leading-none ${isScrolled ? 'text-lumina-dark' : 'text-white'}`}>LUMINA</span>
          <span className={`text-[10px] tracking-[0.3em] font-medium mt-1 ${isScrolled ? 'text-lumina-dark/60' : 'text-white/70'}`}>DENTAL</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-lumina-teal ${
                isScrolled ? 'text-lumina-dark/80' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#appointment"
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              isScrolled
                ? 'bg-lumina-dark text-white hover:bg-lumina-teal'
                : 'bg-white text-lumina-dark hover:bg-lumina-ivory'
            }`}
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden z-50 p-2 -mr-2 ${
            isScrolled || isMobileMenuOpen ? 'text-lumina-dark' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-lumina-ivory z-40 transition-transform duration-500 flex flex-col justify-center items-center ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } lg:hidden`}
        >
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-serif text-3xl text-lumina-dark hover:text-lumina-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              className="mt-8 px-8 py-4 bg-lumina-teal text-white rounded-full font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
