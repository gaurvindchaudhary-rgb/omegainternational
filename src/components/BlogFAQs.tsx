import React, { useState } from 'react';
import { blogData, faqData } from '../data';
import { BlogArticle, FAQItem } from '../types';
import { Search, ChevronDown, ChevronUp, FileText, Calendar, Clock, ArrowRight, HelpCircle } from 'lucide-react';

export default function BlogFAQs() {
  
  // --------- BLOG STATE ----------
  const [selectedBlogCat, setSelectedBlogCat] = useState<string>('All');
  
  // --------- FAQ STATE ----------
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [selectedFaqCat, setSelectedFaqCat] = useState<string>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1'); // Expanded first item by default

  const blogCategories = ['All', 'GST Updates', 'Income Tax News', 'Business Compliance', 'Startup Guides'];
  const faqCategories = ['All', 'GST', 'Income Tax', 'Audit', 'Registration', 'Compliance'];

  // Filter Blog Papers
  const filteredBlogs = selectedBlogCat === 'All'
    ? blogData
    : blogData.filter(item => item.category === selectedBlogCat);

  // Filter and Search FAQs
  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedFaqCat === 'All' || item.category === selectedFaqCat;
    
    // Check keyword or question or answer matches query
    const matchQuery = faqSearchQuery.trim() === '' || 
      item.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
      item.keywords.some(k => k.toLowerCase().includes(faqSearchQuery.toLowerCase()));

    return matchesCategory && matchQuery;
  });

  const toggleFaq = (id: string) => {
    if (expandedFaqId === id) {
      setExpandedFaqId(null);
    } else {
      setExpandedFaqId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-white text-[#1F2937] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================= BLOGS INNER PORTION ======================= */}
        <div id="blog" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full inline-block font-bold">
                Knowledge Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-[#0A2540] mt-4">
                Regulatory Compliance Journals
              </h2>
              <p className="text-gray-500 font-sans mt-3 text-sm sm:text-base max-w-xl">
                Read practical insights, statutory deadline schedules, and advisory guides authored by our managing director, Ankur Chaturvedi.
              </p>
            </div>

            {/* Blog filters */}
            <div className="flex flex-wrap gap-1.5">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedBlogCat(c)}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedBlogCat === c
                      ? 'bg-[#0A2540] text-[#D4AF37] shadow'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {c.replace(' Updates', '').replace(' News', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((b) => (
              <article
                key={b.id}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D4AF37]/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 text-[10px] font-mono uppercase text-gray-400 mb-4 border-b border-gray-200/50 pb-3">
                    <span className="text-[#00A86B] font-bold bg-[#00A86B]/10 px-2 py-0.5 rounded">
                      {b.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {b.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {b.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-sans text-[#0A2540] tracking-tight hover:text-[#D4AF37] cursor-pointer mb-3 leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm font-light font-sans leading-relaxed mb-6">
                    {b.excerpt}
                  </p>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#0A2540] hover:text-[#D4AF37] transition-colors cursor-pointer group">
                  <span>Read full analysis</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ======================= FAQS INNER PORTION ======================= */}
        <div className="border-t border-gray-100 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00A86B] bg-[#00A86B]/10 px-3.5 py-1.5 rounded-full inline-block font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-[#0A2540] mt-4">
              Comprehensive Taxation Dossier
            </h2>
            <p className="text-gray-500 font-sans mt-5 leading-relaxed text-sm">
              Discover immediate, thoroughly formulated clarifications relating to corporate compliance, company formations, and auditing standards.
            </p>
          </div>

          {/* Search and Category filtration block */}
          <div className="max-w-4xl mx-auto bg-gray-50 p-5 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-10 shadow-sm">
            
            {/* Search Input */}
            <div className="flex-1 relative">
              <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                placeholder="Search GSTR, old regime, Section 44AB, standard deductions..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              />
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap gap-1">
              {faqCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedFaqCat(cat)}
                  className={`px-3 py-2 rounded text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedFaqCat === cat
                      ? 'bg-[#00A86B] text-white shadow'
                      : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Layout items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item) => {
                const isOpen = expandedFaqId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-gray-50/70 border-[#D4AF37]/35 shadow-sm'
                        : 'bg-white border-gray-150 hover:bg-gray-50/30'
                    }`}
                  >
                    {/* Collapsible header */}
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-start space-x-3.5">
                        <HelpCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
                        <div>
                          <span className="text-xs font-mono uppercase tracking-widest text-[#00A86B] font-bold block mb-1">
                            {item.category}
                          </span>
                          <span className="text-sm sm:text-base font-bold font-sans text-[#0A2540] tracking-tight group-hover:text-[#D4AF37] transition-colors">
                            {item.question}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-1 rounded-full bg-gray-100 group-hover:bg-[#0A2540]/5 transition-colors">
                        {isOpen ? <ChevronUp className="h-4 w-4 text-[#0A2540]" /> : <ChevronDown className="h-4 w-4 text-gray-450" />}
                      </div>
                    </button>

                    {/* Collapsible expanded content */}
                    {isOpen && (
                      <div className="px-5 pb-5 pl-[46px] border-t border-gray-100 pt-4 bg-white animate-slideDown">
                        <p className="text-xs sm:text-sm text-gray-650 font-sans leading-relaxed">
                          {item.answer}
                        </p>
                        
                        {/* Keyword list pills */}
                        <div className="flex flex-wrap gap-1 mt-4">
                          {item.keywords.map((k, kIdx) => (
                            <span key={kIdx} className="text-[10px] font-mono bg-gray-50 text-gray-400 py-0.5 px-2 rounded-full">
                              #{k}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <p className="text-sm font-sans text-gray-400">
                  No matching fiscal queries found for your search term. Try "threshold", "Section 115", or "GSTR-1".
                </p>
              </div>
            )}
          </div>

          {/* Quick FAQ summary notes */}
          <div className="max-w-4xl mx-auto mt-8 text-center text-xs text-gray-400 font-mono tracking-wide">
            <span>Scroll above to access our Live AI Tax Assistant for custom complex queries • 24/7 Service</span>
          </div>

        </div>

      </div>
    </section>
  );
}
