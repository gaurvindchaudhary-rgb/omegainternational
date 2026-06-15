import React, { useState, useEffect, useRef } from 'react';
import { taxGuidesData } from '../data';
import { TaxGuideItem, AppointmentData } from '../types';
import { 
  Lock, KeyRound, ArrowRight, User, AlertCircle, FileText, CheckCircle2, 
  Calendar, Clock, UserCheck, Send, X, Bot, Landmark, FileCheck, LogOut, Check, ArrowDownToLine, Loader2
} from 'lucide-react';

interface InteractiveWidgetsProps {
  isPortalOpen: boolean;
  onClosePortal: () => void;
  isBookingOpen: boolean;
  onCloseBooking: () => void;
  isChatOpen: boolean;
  onCloseChat: () => void;
  initialServiceSelection?: string;
}

export default function InteractiveWidgets({
  isPortalOpen,
  onClosePortal,
  isBookingOpen,
  onCloseBooking,
  isChatOpen,
  onCloseChat,
  initialServiceSelection = ''
}: InteractiveWidgetsProps) {

  // ==========================================
  // 1. CLIENT PORTAL SIMULATION STATE & LOGIC
  // ==========================================
  const [portalStep, setPortalStep] = useState<'credentials' | 'otp' | 'dashboard'>('credentials');
  const [portalUsername, setPortalUsername] = useState('quantumcore');
  const [portalPassword, setPortalPassword] = useState('password');
  const [portalOtp, setPortalOtp] = useState('');
  const [portalError, setPortalError] = useState('');
  const [portalLoading, setPortalLoading] = useState(false);

  const handlePortalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!portalUsername.trim() || !portalPassword.trim()) {
      setPortalError('Please enter both username and password.');
      return;
    }
    setPortalLoading(true);
    setPortalError('');
    setTimeout(() => {
      setPortalLoading(false);
      setPortalStep('otp');
    }, 1200);
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (portalOtp === '1234' || portalOtp === '') {
      setPortalLoading(true);
      setPortalError('');
      setTimeout(() => {
        setPortalLoading(false);
        setPortalStep('dashboard');
      }, 1000);
    } else {
      setPortalError('Invalid security code. Enter "1234" or submit blank to proceed.');
    }
  };

  const handleLogout = () => {
    setPortalStep('credentials');
    setPortalOtp('');
    setPortalError('');
  };


  // ==========================================
  // 2. APPOINTMENT SCHEDULER STATE & LOGIC
  // ==========================================
  const [bookingStep, setBookingStep] = useState<'form' | 'confirmed'>('form');
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingData, setBookingData] = useState<AppointmentData>({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    service: initialServiceSelection || 'GST Advisory',
    date: '2026-06-20',
    time: '11:00 AM',
    message: ''
  });

  useEffect(() => {
    if (initialServiceSelection) {
      setBookingData(prev => ({ ...prev, service: initialServiceSelection }));
    }
  }, [initialServiceSelection]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.name || !bookingData.email || !bookingData.phone) {
      alert('Please fill out Name, E-mail, and Phone Number.');
      return;
    }
    setBookingLoading(true);
    setTimeout(() => {
      setBookingLoading(false);
      setBookingStep('confirmed');
    }, 1800);
  };

  const resetBookingForm = () => {
    setBookingStep('form');
    setBookingData({
      name: '',
      companyName: '',
      phone: '',
      email: '',
      service: 'GST Advisory',
      date: '2026-06-20',
      time: '11:00 AM',
      message: ''
    });
  };


  // ==========================================
  // 3. TAX GUIDE DOWNLOAD PROGRESS STATE
  // ==========================================
  const [guides, setGuides] = useState<TaxGuideItem[]>(taxGuidesData);
  const [downloadingGuideId, setDownloadingGuideId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const startDownload = (id: string) => {
    setDownloadingGuideId(id);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingGuideId(null);
            // Increment download count locally
            setGuides(prevGuides => 
              prevGuides.map(g => g.id === id ? { ...g, downloads: g.downloads + 1 } : g)
            );
            alert('Your tax advisory handbook has been simulated and saved to downloads.');
          }, 400);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };


  // ==========================================
  // 4. CHAT ASSISTANT STATE & CHAT LOGIC
  // ==========================================
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { 
      sender: 'bot', 
      text: 'Good day. I am Ankur’s AI Advisory Assistant. Ask me anything about GSTR filings, Section 44AB audits, Old vs New tax regimes, or incorporating Pvt Ltd/LLP entities in India. How can I help you?', 
      time: '10:52 AM' 
    }
  ]);
  const [userQuery, setUserQuery] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const currentMsg = userQuery;
    setUserQuery('');
    
    const nowStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender: 'user', text: currentMsg, time: nowStr }]);
    setIsChatLoading(true);

    try {
      // Connect to server api
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: currentMsg })
      });

      if (!response.ok) {
        throw new Error('API server unreachable');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply, time: nowStr }]);
    } catch (err) {
      // Graceful local fallback simulation in case Gemini key is missing or server is offline
      setTimeout(() => {
        let reply = 'I apologize, but my core server is finalizing connections. Let me answer using our local compliance knowledge base: ';
        
        const q = currentMsg.toLowerCase();
        if (q.includes('gst') || q.includes('gstr')) {
          reply += 'Under GSTR guidelines, any service provider crossing ₹20 Lakhs in aggregate turnover must obtain registration. Monthly files GSTR-1 and GSTR-3B must be reconciled against GSTR-2B by the 20th to avoid late fees of ₹50/day.';
        } else if (q.includes('old') || q.includes('new') || q.includes('regime') || q.includes('slab')) {
          reply += 'For FY 2026-27, the New Regime is the default selection yielding slighter rates (up to 3L NIL, 3-7L 5%, 7-10L 10%, etc.) with a Salaried Standard Deduction of ₹75,000. Under the Old Regime, deductions like Sec 80C are allowed but rates are higher.';
        } else if (q.includes('audit') || q.includes('44ab')) {
          reply += 'Statutory tax auditing under Section 44AB triggers if business turnover exceeds ₹1 Crore, or ₹10 Crores if 95% of transactions are digitised with banking channels. Professional audits trigger over ₹50 Lakhs.';
        } else if (q.includes('incorporat') || q.includes('pvt') || q.includes('llp')) {
          reply += 'Private Limited companies mandate Spice+ filings, DSC matching, and have strict annual compliance AOC-4 and MGT-7 requirements. LLPs feature lower ongoing ROC oversight and lower initial costs.';
        } else {
          reply = `Hello. Our Managing Director, Ankur Chaturvedi, and his senior associates can consult deeply on your query. Let us schedule an assessment or type an alternative query regarding GST, New Regimes, or Audit thresholds.`;
        }
        
        setMessages(prev => [...prev, { sender: 'bot', text: reply, time: nowStr }]);
      }, 800);
    } finally {
      setIsChatLoading(false);
    }
  };


  return (
    <>
      {/* ======================================================== */}
      {/* 1. PORTAL LOGIN MODAL                                    */}
      {/* ======================================================== */}
      {isPortalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col justify-between">
            {/* Modal Header */}
            <div className="bg-[#0A2540] text-white px-6 py-5 flex items-center justify-between border-b border-[#D4AF37]/35">
              <div className="flex items-center space-x-2.5">
                <Lock className="h-5 w-5 text-[#D4AF37]" />
                <div>
                  <h3 className="text-sm font-bold font-sans uppercase tracking-widest text-[#D4AF37]">
                    Omega Secure Client Terminal
                  </h3>
                  <p className="text-[10px] text-gray-300 font-mono tracking-wider mt-0.5">Dual-Factor Verification Protocol</p>
                </div>
              </div>
              <button onClick={onClosePortal} className="text-gray-400 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content depending on login state */}
            <div className="p-6 sm:p-8">
              
              {/* Credentials Phase */}
              {portalStep === 'credentials' && (
                <form onSubmit={handlePortalLogin} className="space-y-5">
                  <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl text-xs text-gray-650 leading-relaxed flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Demo Client Access</strong>: Enter corporate username 
                      <span className="bg-yellow-100 px-1 py-0.5 rounded font-bold mx-1">quantumcore</span> 
                      and password 
                      <span className="bg-yellow-100 px-1 py-0.5 rounded font-bold mx-1">password</span> 
                      to trigger a dual-factor OTP sequence.
                    </div>
                  </div>

                  {portalError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-650 text-xs rounded-lg font-bold">
                      {portalError}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-1.5">
                      Client ID / Username
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        value={portalUsername}
                        onChange={(e) => setPortalUsername(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <KeyRound className="h-4 w-4" />
                      </span>
                      <input
                        type="password"
                        value={portalPassword}
                        onChange={(e) => setPortalPassword(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={portalLoading}
                    className="w-full py-3 bg-[#0A2540] hover:bg-[#123e6b] text-[#D4AF37] font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {portalLoading ? <Loader2 className="h-4 w-4 animate-spin text-[#D4AF37]" /> : <span>Request Dual-Factor OTP</span>}
                  </button>
                </form>
              )}

              {/* OTP Code Verification Phase */}
              {portalStep === 'otp' && (
                <form onSubmit={handleOtpVerify} className="space-y-4 text-center">
                  <div className="py-4">
                    <Lock className="h-10 w-10 text-[#D4AF37] mx-auto mb-4" />
                    <h4 className="text-base font-bold text-[#0A2540]">Enterprise OTP Sent</h4>
                    <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
                      A secured code has been dispatched to your pre-verified mobile number. For simulation, enter code: <strong className="text-emerald-600">1234</strong>
                    </p>
                  </div>

                  {portalError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-650 text-xs rounded-lg font-bold">
                      {portalError}
                    </div>
                  )}

                  <input
                    type="text"
                    placeholder="Enter security OTP"
                    value={portalOtp}
                    onChange={(e) => setPortalOtp(e.target.value)}
                    maxLength={6}
                    className="w-36 text-center text-lg font-mono font-bold tracking-widest px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2540] mx-auto block"
                  />

                  <div className="pt-4 flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setPortalStep('credentials')}
                      className="flex-1 py-2.5 border border-gray-200 text-gray-500 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={portalLoading}
                      className="flex-1 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8962D] text-[#0A2540] font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center"
                    >
                      {portalLoading ? <Loader2 className="h-4 w-4 animate-spin text-[#0A2540]" /> : <span>Verify Security Code</span>}
                    </button>
                  </div>
                </form>
              )}

              {/* Verified Dashboard Phase */}
              {portalStep === 'dashboard' && (
                <div className="space-y-6">
                  {/* Account Heading */}
                  <div className="p-4 bg-[#0A2540] text-white rounded-xl flex items-center justify-between border border-[#D4AF37]/35">
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-[#D4AF37] block">Authenticated Organization</span>
                      <strong className="text-sm font-sans tracking-wide block">QuantumCore Technologies Pvt Ltd</strong>
                      <span className="text-[9px] text-[#00A86B] font-mono flex items-center mt-1">
                        <CheckCircle2 className="h-3 w-3 mr-1" /> ACTIVE GSTIN: 27AABCQ1234F1Z8
                      </span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="p-2 bg-white/10 hover:bg-red-500 hover:text-white rounded-lg transition-colors text-gray-300"
                      title="Term Session"
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Filings Status Table */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                      Statutory Filings Dashboard (Q1 2026)
                    </h4>
                    
                    <div className="border border-gray-100 rounded-xl overflow-hidden text-xs">
                      <div className="grid grid-cols-3 bg-gray-50 py-2.5 px-4 font-bold text-gray-700 font-mono">
                        <span>Form ID</span>
                        <span>Filing Month</span>
                        <span>State Status</span>
                      </div>
                      
                      <div className="divide-y divide-gray-100">
                        <div className="grid grid-cols-3 py-3 px-4 items-center">
                          <span className="font-semibold text-gray-800">GSTR-1</span>
                          <span className="text-gray-500">May 2026</span>
                          <span className="text-emerald-600 font-bold flex items-center">
                            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-1.5"></span> FILED
                          </span>
                        </div>
                        <div className="grid grid-cols-3 py-3 px-4 items-center">
                          <span className="font-semibold text-gray-800">GSTR-3B</span>
                          <span className="text-gray-500">May 2026</span>
                          <span className="text-emerald-600 font-bold flex items-center">
                            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-1.5"></span> FILED
                          </span>
                        </div>
                        <div className="grid grid-cols-3 py-3 px-4 items-center">
                          <span className="font-semibold text-gray-800">ROC AOC-4</span>
                          <span className="text-gray-500">FY 2025-26</span>
                          <span className="text-emerald-700 font-bold flex items-center">
                            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-1.5"></span> SUBMITTED
                          </span>
                        </div>
                        <div className="grid grid-cols-3 py-3 px-4 items-center animate-pulse">
                          <span className="font-semibold text-gray-800">Tax Audit 3CA</span>
                          <span className="text-gray-500">FY 2025-26</span>
                          <span className="text-[#D4AF37] font-bold flex items-center">
                            <span className="h-1.5 w-1.5 bg-yellow-500 rounded-full mr-1.5 animate-ping"></span> IN PROGRESS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ledger Download block */}
                  <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-between">
                    <div>
                      <h5 className="text-xs font-bold text-[#0A2540]">May 2026 GST Reconciliation Ledger</h5>
                      <p className="text-[10px] text-gray-400 mt-0.5">Audited matching vs GSTR-2B logs.</p>
                    </div>
                    <button 
                      onClick={() => alert('Downloading GST-2B Ledger report for May 2026.')}
                      className="px-3 py-1.5 bg-[#00A86B] text-white rounded text-xs uppercase font-bold text-center flex items-center space-x-1 hover:bg-[#00945D]"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Report</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. APPOINTMENT SCHEDULER MODAL                             */}
      {/* ======================================================== */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col justify-between">
            {/* Header */}
            <div className="bg-[#0A2540] text-white px-6 py-5 flex items-center justify-between border-b border-[#D4AF37]/35">
              <div className="flex items-center space-x-2.5">
                <Calendar className="h-5 w-5 text-[#D4AF37]" />
                <div>
                  <h3 className="text-sm font-bold font-sans uppercase tracking-widest text-[#D4AF37]">
                    Schedule Technical Consultation
                  </h3>
                  <p className="text-[10px] text-gray-300 font-mono tracking-wider mt-0.5">Direct Access to Senior Advisory Partners</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  onCloseBooking();
                  resetBookingForm();
                }} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              
              {bookingStep === 'form' ? (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Anant Ambani"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Reliance Corporate Ltd"
                        value={bookingData.companyName}
                        onChange={(e) => setBookingData({ ...bookingData, companyName: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                        Active Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                        E-mail Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="anant@reliance.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                        Consultation Slot
                      </label>
                      <select
                        value={bookingData.service}
                        onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                      >
                        <option>GST Registration</option>
                        <option>GST Return Filing</option>
                        <option>GST Advisory</option>
                        <option>Income Tax Filing</option>
                        <option>Statutory Audit</option>
                        <option>Company Registration</option>
                        <option>Enterprise Tax Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                        Date Picker
                      </label>
                      <input
                        type="date"
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                        Hour Session
                      </label>
                      <select
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                      >
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>02:00 PM</option>
                        <option>04:00 PM</option>
                        <option>05:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                      Brief Description of Tax Issue / Case
                    </label>
                    <textarea
                      rows={3}
                      placeholder="We need advice on setting up an LLP and transferring GSTR-2B ITC from previous proprietorship ledger accounts."
                      value={bookingData.message}
                      onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={bookingLoading}
                    className="w-full py-3.5 bg-[#00A86B] hover:bg-[#00945D] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    {bookingLoading ? <Loader2 className="h-4 w-4 animate-spin text-white" /> : <span>Confirm Consultation & Dispatch Invite</span>}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-[#00A86B] mx-auto" />
                  <div>
                    <h4 className="text-lg font-bold text-[#0A2540] font-sans">Corporate Session Confirmed</h4>
                    <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto leading-relaxed">
                      Your technical assessment with <strong className="text-stone-800">Ankur Chaturvedi</strong> on <strong className="text-stone-800">{bookingData.date} ({bookingData.time})</strong> has been successfully booked.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl inline-block text-left text-xs text-gray-650 max-w-md">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <UserCheck className="h-4 w-4 text-[#D4AF37]" />
                        <span><strong>Service</strong>: {bookingData.service}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-[#00A86B]" />
                        <span>Google Meet & Calendar Link dispatched to: <strong>{bookingData.email}</strong></span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      onCloseBooking();
                      resetBookingForm();
                    }}
                    className="w-48 py-2.5 bg-[#0A2540] hover:bg-[#123e6b] text-white text-xs uppercase font-mono font-bold tracking-wider rounded-lg block mx-auto transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}


      {/* ======================================================== */}
      {/* 3. TAX GUIDE DOWNLOADS PANEL                             */}
      {/* ======================================================== */}
      <div id="guides" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-[#0A2540] tracking-tight">
              Corporate Compliance Handbooks
            </h2>
            <p className="text-gray-500 font-sans mt-3 text-sm leading-relaxed">
              Acquire localized regulatory guidance handbooks drafted explicitly for Indian enterprise founders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-[#D4AF37]/35 transition-colors">
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="h-7 w-7 text-[#0A2540]" />
                    <span className="text-[9px] font-mono font-bold uppercase py-0.5 px-2 bg-gray-100 text-gray-500 rounded">
                      {item.fileSize}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-[#00A86B] mb-1">
                    {item.category}
                  </h3>
                  <h4 className="text-sm font-bold font-sans text-[#0A2540] tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-sans leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  {downloadingGuideId === item.id ? (
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-mono text-[#0A2540] font-bold">
                        <span>Compiling Ledger PDF...</span>
                        <span>{downloadProgress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#00A86B]" style={{ width: `${downloadProgress}%` }}></div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => startDownload(item.id)}
                      className="w-full py-2 bg-gray-50 hover:bg-[#0A2540] hover:text-[#D4AF37] uppercase font-mono font-bold tracking-widest text-[9px] rounded-md text-gray-550 border border-gray-100 transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <ArrowDownToLine className="h-3.5 w-3.5" />
                      <span>Fetch Companion Handbook</span>
                    </button>
                  )}
                  
                  <span className="block text-[8px] font-mono text-center text-gray-400 mt-2.5 uppercase tracking-wide">
                    {item.downloads.toLocaleString()} Active Downloads
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>


      {/* ======================================================== */}
      {/* 4. AI CHAT ADVISOR OVERLAY DRAWER                        */}
      {/* ======================================================== */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md scale-up-center select-none shadow-2xl">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-2xl flex flex-col h-[520px] justify-between relative">
            
            {/* Chat header */}
            <div className="bg-[#0A2540] text-white py-4 px-5 flex items-center justify-between border-b border-[#D4AF37]/35">
              <div className="flex items-center space-x-3">
                <div className="h-9 w-9 bg-gradient-to-tr from-[#D4AF37] to-[#00A86B] p-0.5 rounded-xl shadow-md">
                  <div className="h-full w-full bg-[#0A2540] rounded-[10px] flex items-center justify-center">
                    <Bot className="h-4 w-4 text-[#D4AF37]" />
                  </div>
                </div>
                <div>
                  <strong className="text-xs sm:text-sm font-sans tracking-wide block">Omega Tax AI</strong>
                  <span className="text-[9px] text-[#00A86B] font-mono flex items-center">
                    <span className="h-1.5 w-1.5 bg-[#00A86B] rounded-full mr-1.5 animate-pulse"></span>
                    <span>Chartered Advisor Core</span>
                  </span>
                </div>
              </div>
              <button onClick={onCloseChat} className="text-gray-400 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chats Messages Display */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/70 select-text">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex items-start max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                  
                  {/* Bot micro icon */}
                  {m.sender === 'bot' && (
                    <div className="h-6 w-6 rounded-md bg-[#0A2540]/15 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 border border-white/10">
                      <Bot className="h-3.5 w-3.5 text-[#0A2540]" />
                    </div>
                  )}

                  {/* Message bubble */}
                  <div className={`p-3 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#0C3054] to-[#144270] text-white rounded-br-none'
                      : 'bg-white border border-gray-150 text-gray-800 rounded-bl-none'
                  }`}>
                    <p className="whitespace-pre-line">{m.text}</p>
                    <span className="block text-[8px] text-right text-gray-400 mt-1.5 font-mono">
                      {m.time}
                    </span>
                  </div>

                </div>
              ))}
              
              {/* Typing states loader */}
              {isChatLoading && (
                <div className="flex items-start max-w-[80%]">
                  <div className="h-6 w-6 rounded-md bg-[#0A2540]/15 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <Bot className="h-3 w-3 text-[#0A2540]" />
                  </div>
                  <div className="p-3.5 bg-white border border-gray-150 rounded-2xl rounded-bl-none flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick interactive buttons suggestion line */}
            <div className="px-4 py-1.5 bg-white border-t border-gray-150 flex flex-wrap gap-1 items-center overflow-x-auto whitespace-nowrap">
              <button 
                onClick={() => setUserQuery('GST registration thresholds')} 
                className="text-[10px] font-mono text-gray-500 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded transition-transform active:scale-95 border border-gray-150"
              >
                GST Thresholds
              </button>
              <button 
                onClick={() => setUserQuery('New vs Old income tax slabs')} 
                className="text-[10px] font-mono text-gray-500 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded transition-transform active:scale-95 border border-gray-150"
              >
                Old vs New tax Slabs
              </button>
              <button 
                onClick={() => setUserQuery('Pvt Ltd ROC annual compliance')} 
                className="text-[10px] font-mono text-gray-500 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded transition-transform active:scale-95 border border-gray-150"
              >
                ROC Compliances
              </button>
            </div>

            {/* Chats send input layout */}
            <form onSubmit={handleSendMessage} className="bg-white p-3.5 border-t border-gray-150 flex items-center space-x-2">
              <input
                type="text"
                required
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Ask your tax or incorporation query..."
                className="flex-1 px-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-xs sm:text-sm"
              />
              <button
                type="submit"
                disabled={isChatLoading}
                className="p-2.5 bg-[#00A86B] hover:bg-[#00945D] text-white rounded-xl transition-colors shadow flex items-center justify-center flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

          </div>
        </div>
      )}

    </>
  );
}
