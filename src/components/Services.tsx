import React, { useState } from 'react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';
import { Landmark, ArrowUpRight, CheckCircle, Percent, Files, Users, Coins, Briefcase } from 'lucide-react';

interface ServicesProps {
  onBookService: (serviceTitle: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'GST' | 'Income Tax' | 'Audit' | 'Accounting' | 'Business Reg'>('All');

  // Map category to icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'GST':
        return <Percent className="h-5 w-5 text-[#D4AF37]" />;
      case 'Income Tax':
        return <Coins className="h-5 w-5 text-[#00A86B]" />;
      case 'Audit':
        return <Files className="h-5 w-5 text-[#D4AF37]" />;
      case 'Accounting':
        return <Landmark className="h-5 w-5 text-[#00A86B]" />;
      default:
        return <Briefcase className="h-5 w-5 text-[#D4AF37]" />;
    }
  };

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'All') return true;
    return service.category === activeCategory;
  });

  const categories: { code: 'All' | 'GST' | 'Income Tax' | 'Audit' | 'Accounting' | 'Business Reg'; label: string }[] = [
    { code: 'All', label: 'All Services' },
    { code: 'GST', label: 'GST Advisory' },
    { code: 'Income Tax', label: 'Income Tax' },
    { code: 'Audit', label: 'Audit & Assurance' },
    { code: 'Accounting', label: 'Accounting & Payroll' },
    { code: 'Business Reg', label: 'Business Incorporation' }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 text-[#1F2937] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full inline-block font-bold">
              Expertise Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-[#0A2540] mt-4">
              Advanced Financial & Taxation Suite
            </h2>
            <p className="text-gray-500 font-sans mt-3 text-sm sm:text-base leading-relaxed">
              We deliver full-suite financial auditing and tax restructuring advice, bringing institutional scale solutions directly to high-performing business leaders.
            </p>
          </div>
          
          <button
            onClick={() => onBookService('General Consultation')}
            className="w-fit inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0A2540] bg-[#D4AF37] px-5 py-3 rounded-md hover:bg-[#B8962D] transition-colors"
          >
            <span>View Pricing Schedule</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-10 border-b border-gray-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.code}
              onClick={() => setActiveCategory(cat.code)}
              className={`px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.code
                  ? 'bg-[#0A2540] text-[#D4AF37] shadow-md border-b-2 border-[#D4AF37]'
                  : 'bg-white text-gray-505 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#D4AF37]/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Title Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#0A2540] transition-colors duration-300">
                    {getCategoryIcon(service.category)}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-sans text-[#0A2540] tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm font-sans font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list inside card */}
                <div className="space-y-2 border-t border-gray-50 pt-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#00A86B] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-650 font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card action prompt */}
              <button
                onClick={() => onBookService(service.title)}
                className="w-full inline-flex items-center justify-between py-2 px-3 bg-gray-50 hover:bg-[#0A2540] hover:text-[#D4AF37] border border-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-600 rounded-lg transition-colors group/btn"
              >
                <span>Inquire on service</span>
                <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover/btn:text-[#D4AF37] transition-colors" />
              </button>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner regarding additional tailored corporate scopes */}
        <div className="mt-16 bg-[#0A2540] text-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 h-64 w-64 bg-[#D4AF37]/5 rounded-full filter blur-2xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                Specialized Enterprise Strategy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight">
                Require global holding company structuring or cross-border transfer pricing audit?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light leading-relaxed">
                Our Senior Partners advise multinational organizations on double taxation avoidance agreements (DTAA), custom tariff classifications, and high-stakes income tax notices representations.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onBookService('Enterprise Tax Advisory')}
                className="px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8962D] text-[#0A2540] text-xs font-mono font-bold uppercase tracking-widest rounded-md hover:scale-105 transition-transform"
              >
                Book Partner Session
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
