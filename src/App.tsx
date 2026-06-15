import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Calculators from './components/Calculators';
import StatsTimeline from './components/StatsTimeline';
import BlogFAQs from './components/BlogFAQs';
import InteractiveWidgets from './components/InteractiveWidgets';
import Footer from './components/Footer';

export default function App() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Heights of nav bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Calculators', href: 'calculators' },
    { label: 'Process', href: 'process' },
    { label: 'Blogs & FAQs', href: 'blog' },
    { label: 'Guides', href: 'guides' }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1F2937] font-sans relative antialiased selection:bg-[#D4AF37]/30">
      
      {/* 1. Header Sticky Nav */}
      <Navbar
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenBooking={() => {
          setSelectedService('General Consultation');
          setIsBookingOpen(true);
        }}
        onOpenChat={() => setIsChatOpen(!isChatOpen)}
        navItems={navItems}
      />

      {/* 2. Hero Billboard */}
      <Hero
        onOpenBooking={() => {
          setSelectedService('General Consultation');
          setIsBookingOpen(true);
        }}
        onOpenChat={() => setIsChatOpen(true)}
        onScrollToCalculators={() => handleScrollToSection('calculators')}
      />

      {/* 3. Corporate Biography & Founder Panel */}
      <About />

      {/* 4. Active Service Directory */}
      <Services onBookService={handleBookService} />

      {/* 5. Custom GST & Income Tax Calculators */}
      <Calculators />

      {/* 6. Growth Stats & Step Roadmap */}
      <StatsTimeline />

      {/* 7. Categorized Journals & Search-enabled FAQ dossier */}
      <BlogFAQs />

      {/* 8. Comprehensive Client Portal, Scheduler & Interactive Handbooks */}
      <InteractiveWidgets
        isPortalOpen={isPortalOpen}
        onClosePortal={() => setIsPortalOpen(false)}
        isBookingOpen={isBookingOpen}
        onCloseBooking={() => setIsBookingOpen(false)}
        isChatOpen={isChatOpen}
        onCloseChat={() => setIsChatOpen(false)}
        initialServiceSelection={selectedService}
      />

      {/* 9. Elite Corporate Footer */}
      <Footer
        onScrollTo={handleScrollToSection}
        onOpenBooking={() => {
          setSelectedService('General Consultation');
          setIsBookingOpen(true);
        }}
      />

    </div>
  );
}
