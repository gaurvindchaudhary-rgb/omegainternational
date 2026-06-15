import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, GraduationCap, Lock, PhoneCall, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenBooking: () => void;
  onOpenChat: () => void;
  navItems: { label: string; href: string }[];
}

export default function Navbar({ onOpenPortal, onOpenBooking, onOpenChat, navItems }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A2540]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#D4AF37]/20'
          : 'bg-[#0A2540]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center space-x-3 group"
          >
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8962D] p-2.5 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              <Landmark className="h-6 w-6 text-[#0A2540]" />
            </div>
            <div>
              <span className="text-xl font-bold font-sans tracking-wide text-white block uppercase leading-none">
                Omega
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mt-1">
                International Consultants
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              id="cta-client-portal"
              onClick={onOpenPortal}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-xs font-semibold uppercase tracking-wider text-[#D4AF37] rounded-md transition-all duration-300 bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10"
            >
              <Lock className="h-3.5 w-3.5" />
              <span>Client Portal</span>
            </button>
            <button
              id="cta-appointment-booking"
              onClick={onOpenBooking}
              className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8962D] text-xs font-bold uppercase tracking-widest text-[#0A2540] rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={onOpenPortal}
              className="p-1.5 text-gray-400 hover:text-[#D4AF37]"
              title="Client Portal"
            >
              <Lock className="h-5 w-5 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A2540] border-t border-[#D4AF37]/20 py-4 px-4 ease-in duration-300 animate-fadeIn">
          <div className="flex flex-col space-y-3 pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[15px] font-medium text-gray-300 hover:text-[#D4AF37] py-2 transition-colors border-b border-gray-850"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-sm font-semibold uppercase tracking-wider text-[#D4AF37] rounded-md"
            >
              <Lock className="h-4 w-4" />
              <span>Client Portal Login</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8962D] text-sm font-bold uppercase tracking-wider text-[#0A2540] rounded-md shadow"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Free Consultation</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 bg-[#00A86B] hover:bg-[#00945D] text-sm font-bold uppercase tracking-wider text-white rounded-md shadow"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Talk with Tax AI</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
