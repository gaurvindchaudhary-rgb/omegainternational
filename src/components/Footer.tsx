import React, { useState } from 'react';
import { Mail, Phone, MapPin, Landmark, ArrowRight, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenBooking: () => void;
}

export default function Footer({ onScrollTo, onOpenBooking }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setNewsletterEmail('');
      alert('Your e-mail is registered for our double-audit compliance alerts.');
    }, 1200);
  };

  return (
    <footer className="bg-[#04111E] text-white border-t border-white/10 pt-20 relative">
      
      {/* Decorative background grid line */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper dispatch block & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-white/10">
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white">
              Stay Informed on Indian Regulatory & Fiscal Changes
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-xl">
              Our monthly newsletter compiles amendments on GST classifications, draft notifications, ROC deadlines, and corporate strategies. No spam, certified expert insights only.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                type="email"
                required
                placeholder="incorporation@firm.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8962D] text-[#0A2540] text-xs font-bold uppercase tracking-wider rounded-lg hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Major Directory Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16 text-gray-300">
          {/* Brand Box */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center space-x-3 w-fit">
              <div className="bg-[#D4AF37] p-2 rounded-lg shadow">
                <Landmark className="h-5 w-5 text-[#0A2540]" />
              </div>
              <div>
                <span className="text-lg font-bold font-sans tracking-wide text-white block uppercase">Omega</span>
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block">Pvt Ltd Consultants</span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed font-sans font-light">
              Omega International Consultants represents peerless corporate tax structuring, statutory audit guarantees, and virtual CFO intelligence, working in absolute adherence under ICAI ethical blueprints.
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#00A86B] font-mono">
              <ShieldCheck className="h-4 w-4" />
              <span>Section 22 CA Act Compliant Agency</span>
            </div>
          </div>

          {/* Core Services Index */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-white border-l-2 border-[#D4AF37] pl-2.5">
              Services Index
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => onScrollTo('services')} className="hover:text-[#D4AF37] transition-colors">GST Filings & Advisory</button></li>
              <li><button onClick={() => onScrollTo('services')} className="hover:text-[#D4AF37] transition-colors">Income Tax Returns (ITR)</button></li>
              <li><button onClick={() => onScrollTo('services')} className="hover:text-[#D4AF37] transition-colors">Risk Assessment & Audits</button></li>
              <li><button onClick={() => onScrollTo('services')} className="hover:text-[#D4AF37] transition-colors">Pvt Ltd & LLP Formations</button></li>
              <li><button onClick={() => onScrollTo('services')} className="hover:text-[#D4AF37] transition-colors">Udyam Startup Grant Advice</button></li>
            </ul>
          </div>

          {/* Quick Nav Blocks */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-white border-l-2 border-[#00A86B] pl-2.5">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => onScrollTo('about')} className="hover:text-[#D4AF37] transition-colors">About Managing Director</button></li>
              <li><button onClick={() => onScrollTo('calculators')} className="hover:text-[#D4AF37] transition-colors">Interactive tax tools</button></li>
              <li><button onClick={() => onScrollTo('blog')} className="hover:text-[#D4AF37] transition-colors">Advisory journals</button></li>
              <li><button onClick={() => onScrollTo('faq')} className="hover:text-[#D4AF37] transition-colors">Taxation FAQs (20+)</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-[#D4AF37] transition-colors">Partner consultations</button></li>
            </ul>
          </div>

          {/* Indian Office Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-white border-l-2 border-[#D4AF37] pl-2.5">
              Nodal Contact
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-sans">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-[#D3AF37] flex-shrink-0 mt-0.5" />
                <span>
                  405, Eros Corporate Towers, Nehru Place, New Delhi, Delhi 110019, India
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-[#00A86B] flex-shrink-0" />
                <span className="font-mono">+91 11 4050 9900</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-[#00A86B] flex-shrink-0" />
                <span className="hover:text-white transition-colors">compliance@omega.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Declaration Row */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-mono tracking-wide gap-3">
          <span>
            © 2026 Omega International Consultants Pvt Ltd • All Rights Reserved.
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Secured Ledger SSL</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">MCA Disclosures</a>
          </div>
        </div>

      </div>

      {/* Floating Interactive WhatsApp Chat block */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => {
            const num = '911140509900';
            const txt = encodeURIComponent("Hello Omega Team, we'd like to book a tax assessment consultation with Ankur Chaturvedi.");
            window.open(`https://wa.me/${num}?text=${txt}`, '_blank');
          }}
          className="flex items-center space-x-2 px-3.5 py-2 bg-[#00A86B]/90 hover:bg-[#00945D] text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 duration-200 backdrop-blur-sm border border-white/15"
          title="Direct WhatsApp Helpline"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider">helpline</span>
        </button>
      </div>

    </footer>
  );
}
