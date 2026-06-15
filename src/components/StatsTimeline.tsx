import React from 'react';
import { CalendarRange, Activity, MessageSquare, Verified, Trophy, Network, UserCheck, ShieldCheck, Flame } from 'lucide-react';

export default function StatsTimeline() {
  
  const stats = [
    { label: 'Happy Corporate Clients', val: '500+', desc: 'Across India & Overseas' },
    { label: 'Transactions Audited', val: '₹100 Cr+', desc: 'Consolidated Ledgers' },
    { label: 'Client Retention Index', val: '95%', desc: 'Long-term advisory bonds' },
    { label: 'Advisory Years', val: '10+ Yrs', desc: 'Elite core experience' }
  ];

  const reasons = [
    { title: 'Experienced Professionals', desc: 'A vetted assembly of Chartered Accountants, LLBs, and CS professionals.', icon: <UserCheck className="h-4 w-4 text-[#D4AF37]" /> },
    { title: 'Transparent Pricing Index', desc: 'Pre-declared service indices with flat rates and zero surprise ledger lines.', icon: <ShieldCheck className="h-4 w-4 text-[#00A86B]" /> },
    { title: 'Dedicated Support Desk', desc: 'Dedicated client managers handling filings with active ticketing channels.', icon: <MessageSquare className="h-4 w-4 text-[#D4AF37]" /> },
    { title: 'Timely Compliance Checks', desc: 'Never miss an ROC or GST filing. Bulletproof automated warnings.', icon: <Flame className="h-4 w-4 text-[#00A86B]" /> },
    { title: 'PAN India Services Scope', desc: 'Incorporate and file across all 28 states and union territories smoothly.', icon: <Network className="h-4 w-4 text-[#D4AF37]" /> },
    { title: 'Personalized Consulting', desc: 'Advisory structures shaped uniquely to scale your individual enterprise.', icon: <Trophy className="h-4 w-4 text-[#00A86B]" /> }
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', tag: 'Initial Intake', desc: 'Meet our Senior Partner to lay down raw company parameters, compliance histories, and outstanding requirements.' },
    { step: '02', title: 'Assessment', tag: 'Tax Audit', desc: 'We execute a diagnostic check on your ledger accounts, GSTR-2B credit loops, and former ROC submissions.' },
    { step: '03', title: 'Strategy Planning', tag: 'Bespoke Blueprint', desc: 'Our tax experts construct a fiscal action plan optimizing corporate structures and tax regimes under current government slabs.' },
    { step: '04', title: 'Documentation', tag: 'Dossier Assembly', desc: 'Meticulous preparation of constitutional agreements, SPICe+ forms, reply briefs, or statutory statements.' },
    { step: '05', title: 'Execution', tag: 'Portal Filing', desc: 'Submitting compliance dossiers directly to GSTN, MCA, or Income Tax systems with double auditor validation stamps.' },
    { step: '06', title: 'Ongoing Support', tag: 'Dedicated Care', desc: 'Providing active monthly GSTR audits, continuous compliance alerts, and ongoing Virtual CFO intelligence reporting.' }
  ];

  return (
    <section id="whychooseus" className="py-24 bg-[#0A2540] text-white overflow-hidden relative border-b border-white/5">
      
      {/* Decorative items */}
      <div className="absolute top-1/2 left-0 h-64 w-64 bg-[#D4AF37]/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-[#00A86B]/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* why choose us highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full inline-block font-bold">
              Core Value Proposal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight leading-tight">
              Why Indian Corporate Houses Prefer Omega
            </h2>
            <p className="text-gray-300 font-sans font-light text-sm sm:text-base leading-relaxed">
              We operate under a single unified baseline: high-stakes tax compliance is not merely bookkeeping, it is a risk management policy for your balance sheet.
            </p>

            {/* Quick Stats Grid inside sidebar */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-colors">
                  <span className="block text-2xl font-black text-[#D4AF37] font-sans">{s.val}</span>
                  <span className="block text-[11px] font-bold text-white uppercase mt-1">{s.label}</span>
                  <span className="block text-[9px] text-gray-400 mt-0.5">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white/5 border border-white/5 hover:border-[#00A86B]/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 space-y-3"
                >
                  <div className="bg-white/10 p-2 rounded-lg w-fit">
                    {r.icon}
                  </div>
                  <h3 className="text-sm font-bold font-sans text-white uppercase tracking-wider">
                    {r.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans font-light">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* PROCESS timeline SECTION */}
        <div id="process" className="border-t border-white/10 pt-24">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00A86B] bg-[#00A86B]/15 border border-[#00A86B]/40 px-3.5 py-1.5 rounded-full inline-block font-bold">
              Execution Strategy Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white mt-4">
              Our Structured Consulting Flow
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#00A86B] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-300 font-sans mt-5 leading-relaxed text-sm">
              We follow a strict 6-step compliance engineering framework, keeping all operations fully synchronized and audited.
            </p>
          </div>

          {/* Timeline flow */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Center connecting line for timeline */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#00A86B] to-[#D4AF37]/20 pointer-events-none"></div>

            <div className="space-y-12">
              {processSteps.map((p, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Visual Milestone Pin on centerline */}
                    <div className="absolute left-4 md:left-1/2 top-0 transform -translate-x-[45%] md:-translate-x-1/2 z-20 flex items-center justify-center">
                      <div className="h-7 w-7 rounded-full bg-[#0A2540] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg">
                        <span className="text-[9px] font-mono font-bold text-[#D4AF37]">{p.step}</span>
                      </div>
                    </div>

                    {/* Timeline Box */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className="p-6 bg-white/5 border border-white/10 hover:border-[#D4AF37]/35 rounded-2xl relative transition-all duration-350 shadow hover:shadow-xl">
                        
                        {/* Box arrows */}
                        <div className={`hidden md:block absolute top-1.5 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ${
                          isEven 
                            ? 'right-full border-r-[10px] border-r-white/10' 
                            : 'left-full border-l-[10px] border-l-white/10'
                        }`}></div>

                        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                            {p.tag}
                          </span>
                          <span className="text-xs uppercase tracking-widest text-[#00A86B] font-mono bg-[#00A86B]/10 px-2 py-0.5 rounded">
                            Step {p.step}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold font-sans tracking-tight text-white mb-2">
                          {p.title}
                        </h3>

                        <p className="text-xs text-gray-300 leading-relaxed font-sans font-light">
                          {p.desc}
                        </p>
                      </div>
                    </div>

                    {/* Empty block on desktop for proper timeline sizing */}
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
