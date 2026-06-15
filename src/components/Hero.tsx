import { Shield, Sparkles, Building2, Globe2, Layers, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenChat: () => void;
  onScrollToCalculators: () => void;
}

export default function Hero({ onOpenBooking, onOpenChat, onScrollToCalculators }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-[#0A2540] via-[#0E355B] to-[#0A2540] text-white pt-28 flex items-center overflow-hidden">
      {/* Visual background decorations resembling modern abstract chart lines or geometric grids */}
      <div className="absolute inset-0 z-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative gradient overlay blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[150px] opacity-10 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-120 h-120 bg-[#00A86B] rounded-full filter blur-[180px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full w-fit">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">
                A trusted Chartered Accountant Ecosystem
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white leading-[1.12]">
              Expert Tax & Financial Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#00A86B]">Modern Businesses</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl">
              Helping businesses navigate India\'s complex taxation matrices, compliance frameworks, statutory audits, and corporate law structures with deep advisory expertise.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-cta-consultation"
                onClick={onOpenBooking}
                className="px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8962D] text-sm font-bold uppercase tracking-widest text-[#0A2540] rounded-lg shadow-xl hover:shadow-[#D4AF37]/10 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Book Free Consultation</span>
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-cta-advisor"
                onClick={onOpenChat}
                className="px-6 py-4 bg-transparent border border-white/30 hover:border-[#D4AF37] text-sm font-bold uppercase tracking-widest text-white rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A86B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A86B]"></span>
                </span>
                <span>Talk to Tax AI</span>
              </button>
            </div>

            {/* Quick interactive shortcut */}
            <div className="pt-6">
              <button 
                onClick={onScrollToCalculators}
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors group"
              >
                <span>Try GST & Income Tax Calculators</span>
                <span className="border-b border-[#D4AF37] group-hover:border-white transition-colors h-0 w-8 inline-block ml-1"></span>
              </button>
            </div>
          </div>

          {/* Graphical/Interactive sidebar within Hero resembling a secure financial safe card panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-tr from-[#0a2f53] to-[#123e6b] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-[#00A86B] text-white text-[10px] uppercase font-mono py-1 px-2.5 rounded-md tracking-wider flex items-center space-x-1 shadow-md">
                <CheckCircle2 className="h-3 w-3" />
                <span>ISO 9001:2015 Certified</span>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold font-sans text-white border-b border-white/10 pb-3 flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-[#D4AF37]" />
                  <span>Big-4 Compliance Standards</span>
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  We render meticulous corporate advisory in line with legal codes under the Institute of Chartered Accountants of India (ICAI) directives.
                </p>

                {/* Grid layout of indicators inside card */}
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                    <span className="block text-2xl font-extrabold text-[#D4AF37] tracking-tight">500+</span>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 mt-1">Clients Served</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                    <span className="block text-2xl font-extrabold text-[#D4AF37] tracking-tight">10+ Yrs</span>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 mt-1">Core Experience</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                    <span className="block text-2xl font-extrabold text-[#D4AF37] tracking-tight">GST/IT</span>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 mt-1">Nodal Advisors</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                    <span className="block text-2xl font-extrabold text-[#00A86B] tracking-tight">PAN IND</span>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 mt-1">Sovereign Range</span>
                  </div>
                </div>

                <div className="bg-emerald-500/10 border border-[#00A86B]/30 rounded-lg p-3.5 flex items-start space-x-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold font-sans text-white">Real-time GSTR-2B matching audit activated</h4>
                    <p className="text-[10px] text-gray-300 mt-0.5">We audit your vendor ledger monthly to maximize your claimable Credits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust banners bottom ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-[#081e35] py-4 border-t border-white/5 z-20">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase font-mono text-gray-400">
            <span className="flex items-center space-x-2">
              <Building2 className="h-4 w-4 text-[#D4AF37]" />
              <span>Incubating Startups & MSMEs Since 2016</span>
            </span>
            <span className="flex items-center space-x-2">
              <Globe2 className="h-4 w-4 text-[#D4AF37]" />
              <span>Full Double-Income Avoidance Strategy (DTAA)</span>
            </span>
            <span className="flex items-center space-x-2">
              <Layers className="h-4 w-4 text-[#D4AF37]" />
              <span>Ministry of Corporate Affairs Certified Registrars</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
