import React, { useState } from 'react';
import { Award, Eye, Scale, Users, FileSignature, CheckCircle2, Quote } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'profile' | 'vision' | 'ethics'>('profile');

  return (
    <section id="about" className="py-24 bg-white text-[#1F2937] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full inline-block font-bold">
            Corporate Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-[#0A2540] mt-4">
            About Omega International Consultants
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#0A2540] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 font-sans mt-5 leading-relaxed text-sm sm:text-base">
            Equipping business ventures with highly competent corporate registration, risk advisory, internal audit, and forward-looking GST & income tax consultations.
          </p>
        </div>

        {/* Main Content Layout with grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Company ethos & values */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-sans text-[#0A2540] tracking-tight">
                Our Client-Centric Consulting Mandate
              </h3>
              <p className="text-gray-600 font-sans font-light mt-4 leading-relaxed text-sm sm:text-base">
                In India\'s fast-moving statutory climate, we don\'t merely file forms. We configure long-term structural tax strategies that guard our clients\' net capital. Underpinning every engagement is our baseline of ethical consulting, total transparency, and swift turnaround.
              </p>
            </div>

            {/* Core Values grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start space-x-3.5 hover:shadow-md transition-all duration-300">
                <div className="bg-[#0A2540]/5 p-2.5 rounded-lg">
                  <Award className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans text-[#0A2540]">Professional Expertise</h4>
                  <p className="text-xs text-gray-500 mt-1">Backed by seasoned Chartered Accountants and corporate secretaries.</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start space-x-3.5 hover:shadow-md transition-all duration-300">
                <div className="bg-[#0A2540]/5 p-2.5 rounded-lg">
                  <Users className="h-5 w-5 text-[#00A86B]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans text-[#0A2540]">Client-Centric Growth</h4>
                  <p className="text-xs text-gray-500 mt-1">Bespoke advisory suited to startups, corporates, and HNIs.</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start space-x-3.5 hover:shadow-md transition-all duration-300">
                <div className="bg-[#0A2540]/5 p-2.5 rounded-lg">
                  <Scale className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans text-[#0A2540]">Ethical Transparency</h4>
                  <p className="text-xs text-gray-500 mt-1">No hidden billing lines. Strict adherence to ICAI standards.</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start space-x-3.5 hover:shadow-md transition-all duration-300">
                <div className="bg-[#0A2540]/5 p-2.5 rounded-lg">
                  <FileSignature className="h-5 w-5 text-[#00A86B]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans text-[#0A2540]">Long-Term Alliances</h4>
                  <p className="text-xs text-gray-500 mt-1">Guiding businesses through capitalization to global expansions.</p>
                </div>
              </div>
            </div>

            {/* Sub-tabs with deep content */}
            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-gray-50">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex-1 py-3 text-xs uppercase tracking-widest font-bold ${
                    activeTab === 'profile'
                      ? 'bg-white text-[#0A2540] border-t-2 border-[#D4AF37]'
                      : 'text-gray-500 hover:text-[#0A2540] hover:bg-white/5'
                  }`}
                >
                  Founder Profile
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 py-3 text-xs uppercase tracking-widest font-bold ${
                    activeTab === 'vision'
                      ? 'bg-white text-[#0A2540] border-t-2 border-[#D4AF37]'
                      : 'text-gray-500 hover:text-[#0A2540] hover:bg-white/5'
                  }`}
                >
                  Vision & Mission
                </button>
                <button
                  onClick={() => setActiveTab('ethics')}
                  className={`flex-1 py-3 text-xs uppercase tracking-widest font-bold ${
                    activeTab === 'ethics'
                      ? 'bg-white text-[#0A2540] border-t-2 border-[#D4AF37]'
                      : 'text-gray-500 hover:text-[#0A2540] hover:bg-white/5'
                  }`}
                >
                  Our Professional Pledge
                </button>
              </div>

              <div className="p-5 bg-white">
                {activeTab === 'profile' && (
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <strong>Ankur Chaturvedi</strong> acts as the Founding Managing Director of Omega International Consultants. Blessed with a decade of premium tax compliance advisory experience, his vision drives our specialized practices.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center space-x-2 text-gray-650">
                        <CheckCircle2 className="h-4 w-4 text-[#00A86B]" />
                        <span>Corporate Law Litigator</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-650">
                        <CheckCircle2 className="h-4 w-4 text-[#00A86B]" />
                        <span>GST Appellate Advisor</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-650">
                        <CheckCircle2 className="h-4 w-4 text-[#00A86B]" />
                        <span>Ex-Big 4 Senior Consultant</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-650">
                        <CheckCircle2 className="h-4 w-4 text-[#00A86B]" />
                        <span>FPI Capital Flow Structurer</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold font-mono text-[#D4AF37] uppercase tracking-wider">Vision Statement</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      "To be recognized as India\'s primary, ethical fiscal advisory hub, bridging the operational speed gaps between high-growth startups and complex governmental compliance, establishing absolute trust on a global platform."
                    </p>
                    <h5 className="text-xs font-bold font-mono text-[#00A86B] uppercase tracking-wider mt-3">Mission Statement</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      "Empowering local MSMEs and large business corporations alike with deep statutory intelligence, reliable virtual accounting structures, and continuous, clear compliance paths."
                    </p>
                  </div>
                )}

                {activeTab === 'ethics' && (
                  <div className="space-y-2 text-xs text-gray-500 leading-relaxed">
                    <p>
                      Our practices comply actively with Section 22 of the CA Act 1949. We promise:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 mt-1 text-gray-500">
                      <li>Complete cryptographic data protection for internal registers & portals.</li>
                      <li>Standardized pricing indices for filing, audits, and declarations.</li>
                      <li>Double audit confirmation checks on statutory submissions before final submission.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right panel: Premium Founder Highlight with Card */}
          <div className="lg:col-span-6 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-[45%] -translate-y-[45%] w-[100%] h-[100%] bg-gradient-to-br from-[#0A2540]/5 to-[#D4AF37]/5 rounded-3xl -z-10 pointer-events-none"></div>

            <div className="bg-gradient-to-br from-[#0A2540] to-[#0A3056] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-[#D4AF37]/20">
              
              {/* Premium background gold lines */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-[#D4AF37]/5 rounded-full filter blur-xl"></div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 pb-6 border-b border-white/15">
                {/* Simulated portrait image placeholder representing Ankur Chaturvedi */}
                <div className="relative">
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-emerald-100 to-[#123e6b] p-1 shadow-lg hover:scale-105 transition-transform duration-300">
                    <div className="h-full w-full rounded-[14px] bg-[#0A2540] overflow-hidden flex items-center justify-center">
                      <span className="font-sans text-3xl font-extrabold text-[#D4AF37]">AC</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 bg-[#D4AF37] text-[#0A2540] p-1 rounded-full shadow border-2 border-[#0A2540]">
                    <FileSignature className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold font-sans text-white">Ankur Chaturvedi</h4>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono block mt-1">
                    Founder & Managing Director
                  </span>
                  <p className="text-[10px] text-gray-400 font-mono tracking-wider mt-1.5 flex items-center justify-center sm:justify-start space-x-1.5">
                    <span>F.C.A, B.Com, LLB</span>
                    <span>•</span>
                    <span>Ex-PwC Associate</span>
                  </p>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="pt-6 relative">
                <Quote className="absolute top-2 -left-2 h-10 w-10 text-white/5 pointer-events-none" />
                <p className="text-gray-300 font-sans italic text-xs sm:text-sm leading-relaxed pl-4">
                  "When we established Omega, a core idea drove us: navigating India\'s taxation architecture shouldn\'t be an obstacle to business scaling. We built a platform designed to treat compliance as an asset, delivering Big-4 standard audit parameters directly to startups and corporate teams."
                </p>
                <div className="mt-5 text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono font-bold block">
                    — Managing Director's Dispatch
                  </span>
                </div>
              </div>

              {/* Expertise Highlights inside card */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                <div className="px-2 py-2 bg-white/5 rounded-lg border border-white/5">
                  <span className="block text-xs font-mono font-bold text-[#D4AF37]">98.7%</span>
                  <span className="block text-[8px] uppercase text-gray-400 mt-1">Notice Resolution</span>
                </div>
                <div className="px-2 py-2 bg-white/5 rounded-lg border border-white/5">
                  <span className="block text-xs font-mono font-bold text-[#D4AF37]">12+ Yrs</span>
                  <span className="block text-[8px] uppercase text-gray-400 mt-1">Direct Advisory</span>
                </div>
                <div className="px-2 py-2 bg-white/5 rounded-lg border border-white/5">
                  <span className="block text-xs font-mono font-bold text-[#D4AF37]">DPIIT</span>
                  <span className="block text-[8px] uppercase text-gray-400 mt-1">Board Expert</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
