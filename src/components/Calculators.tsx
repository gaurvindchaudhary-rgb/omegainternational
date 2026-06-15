import React, { useState, useEffect } from 'react';
import { Percent, Coins, ArrowRight, Info, Check, AlertCircle, RefreshCw } from 'lucide-react';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<'gst' | 'incometax'>('gst');

  // ---------- GST CALCULATOR STATE -------------
  const [gstAmount, setGstAmount] = useState<number>(10000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [gstType, setGstType] = useState<'add' | 'remove'>('add');
  const [txLocation, setTxLocation] = useState<'intra' | 'inter'>('intra');

  // Calculated GST values
  const [gstBase, setGstBase] = useState<number>(0);
  const [gstTax, setGstTax] = useState<number>(0);
  const [gstTotal, setGstTotal] = useState<number>(0);

  useEffect(() => {
    let base = 0;
    let tax = 0;
    let total = 0;

    if (gstType === 'add') {
      base = gstAmount;
      tax = (gstAmount * gstRate) / 100;
      total = gstAmount + tax;
    } else {
      total = gstAmount;
      base = (gstAmount * 100) / (100 + gstRate);
      tax = gstAmount - base;
    }

    setGstBase(Math.round(base * 100) / 100);
    setGstTax(Math.round(tax * 100) / 100);
    setGstTotal(Math.round(total * 100) / 100);
  }, [gstAmount, gstRate, gstType]);


  // ---------- INCOME TAX CALCULATOR STATE -------------
  const [grossSalary, setGrossSalary] = useState<number>(1200000);
  const [otherIncome, setOtherIncome] = useState<number>(100000);
  const [deduction80C, setDeduction80C] = useState<number>(150000); // Max 1.5L
  const [deduction80D, setDeduction80D] = useState<number>(25000); // Health insurance
  const [hraInterestDeduction, setHraInterestDeduction] = useState<number>(150000); // Old regime home loan / HRA

  // Tax metrics states
  const [oldTax, setOldTax] = useState<number>(0);
  const [newTax, setNewTax] = useState<number>(0);

  const calculateIncomeTax = () => {
    // ---------------- OLD REGIME CALCULATION ----------------
    // Slabs:
    // up to 2.5L: Nil
    // 2.5L to 5L: 5% (Rebate available if taxable income < 5L)
    // 5L to 10L: 20%
    // above 10L: 30%
    // Standard Deduction: 50,050
    const oldGrossGeneral = grossSalary + otherIncome;
    const oldDeductionsTotal = Math.min(deduction80C, 150000) + Math.min(deduction80D, 50000) + hraInterestDeduction + 50000; // 50k standard deduction
    const oldTaxable = Math.max(0, oldGrossGeneral - oldDeductionsTotal);

    let oldTaxValue = 0;
    if (oldTaxable <= 250000) {
      oldTaxValue = 0;
    } else if (oldTaxable <= 500000) {
      oldTaxValue = (oldTaxable - 250000) * 0.05;
      // Rebate under 87A if taxable income is up to 5 Lakhs
      if (oldTaxable <= 500000) {
        oldTaxValue = 0;
      }
    } else if (oldTaxable <= 1000000) {
      oldTaxValue = 12500 + (oldTaxable - 500000) * 0.20;
    } else {
      oldTaxValue = 112500 + (oldTaxable - 1000000) * 0.30;
    }

    // Add 4% cess
    const finalOldTax = Math.round(oldTaxValue * 1.04);


    // ---------------- NEW REGIME CALCULATION (FY 2026-27 update) ----------------
    // Standard Deduction: 75,000 for salaried employees
    // Slabs (New):
    // up to 3L: Nil
    // 3L to 7L: 5%
    // 7L to 10L: 10%
    // 10L to 12L: 15%
    // 12L to 15L: 20%
    // above 15L: 30%
    // Rebate up to 7 Lakhs net taxable income (tax is zero if taxable income <= 7L)
    const newGrossGeneral = grossSalary + otherIncome;
    const newDeductionsTotal = 75000; // Standard deduction under new regime (No other 80C etc allowed)
    const newTaxable = Math.max(0, newGrossGeneral - newDeductionsTotal);

    let newTaxValue = 0;
    if (newTaxable <= 30000) {
      newTaxValue = 0;
    } else if (newTaxable <= 700000) {
      newTaxValue = (newTaxable - 300000) * 0.05;
      // Rebate applies if taxable <= 7L
      if (newTaxable <= 700000) {
        newTaxValue = 0;
      }
    } else if (newTaxable <= 1000000) {
      // 3L to 7L = 5% of 4L = 20k, plus 10% of above 7L
      newTaxValue = 20000 + (newTaxable - 700000) * 0.10;
    } else if (newTaxable <= 1200000) {
      // plus 15% of above 10L
      newTaxValue = 50000 + (newTaxable - 1000000) * 0.15;
    } else if (newTaxable <= 1500000) {
      // plus 20% of above 12L
      newTaxValue = 80000 + (newTaxable - 1200000) * 0.20;
    } else {
      newTaxValue = 140000 + (newTaxable - 1500000) * 0.30;
    }

    // Add 4% cess
    const finalNewTax = Math.round(newTaxValue * 1.04);

    setOldTax(finalOldTax);
    setNewTax(finalNewTax);
  };

  useEffect(() => {
    calculateIncomeTax();
  }, [grossSalary, otherIncome, deduction80C, deduction80D, hraInterestDeduction]);

  const taxDifference = Math.abs(oldTax - newTax);
  const recommendedRegime = oldTax > newTax ? 'New Tax Regime' : 'Old Tax Regime';

  return (
    <section id="calculators" className="py-24 bg-white text-[#1F2937] relative">
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#D4AF37] via-[#0A2540] to-[#00A86B]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00A86B] bg-[#00A86B]/10 px-3.5 py-1.5 rounded-full inline-block font-bold">
            Interactive Fiscal Sandbox
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-[#0A2540] mt-4">
            GST & Income Tax Simulators
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-[#0A2540] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 font-sans mt-5 leading-relaxed text-sm sm:text-base">
            Equipped with the current financial slabs (FY 2026-27), input your bookkeeping statements and visualize side-by-side comparative deductions.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-gray-200 max-w-lg mx-auto mb-12">
          <button
            onClick={() => setActiveTab('gst')}
            className={`flex-1 flex items-center justify-center space-x-2 py-4 text-xs font-extrabold uppercase tracking-widest border-b-2 transition-all duration-300 ${
              activeTab === 'gst'
                ? 'border-[#D4AF37] text-[#0A2540] bg-gray-50/50'
                : 'border-transparent text-gray-500 hover:text-[#0A2540]'
            }`}
          >
            <Percent className="h-4 w-4" />
            <span>GST Calculator</span>
          </button>
          <button
            onClick={() => setActiveTab('incometax')}
            className={`flex-1 flex items-center justify-center space-x-2 py-4 text-xs font-extrabold uppercase tracking-widest border-b-2 transition-all duration-300 ${
              activeTab === 'incometax'
                ? 'border-[#D4AF37] text-[#0A2540] bg-gray-50/50'
                : 'border-transparent text-gray-500 hover:text-[#0A2540]'
            }`}
          >
            <Coins className="h-4 w-4" />
            <span>Income Tax (New vs Old)</span>
          </button>
        </div>

        {/* Calculator Display Panel */}
        <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-lg">
          
          {/* GST CALCULATOR */}
          {activeTab === 'gst' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
                    Primary Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={gstAmount === 0 ? '' : gstAmount}
                    onChange={(e) => setGstAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
                    Calculation Directives
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setGstType('add')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                        gstType === 'add'
                          ? 'bg-[#0A2540] text-[#D4AF37] border-transparent shadow'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      Add GST
                    </button>
                    <button
                      onClick={() => setGstType('remove')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                        gstType === 'remove'
                          ? 'bg-[#0A2540] text-[#D4AF37] border-transparent shadow'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      Remove GST
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
                    GST Rate (% Standard slabs)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 12, 18, 28].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setGstRate(rate)}
                        className={`py-2.5 rounded-lg text-xs font-mono font-bold transition-all ${
                          gstRate === rate
                            ? 'bg-[#D4AF37] text-[#0A2540] shadow-sm'
                            : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2">
                    Supply Vector
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setTxLocation('intra')}
                      className={`py-2.5 px-3 rounded-lg text-xs font-sans transition-all border ${
                        txLocation === 'intra'
                          ? 'bg-white border-[#00A86B] text-[#00A86B] font-bold shadow-sm'
                          : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      Intra-state (CGST + SGST)
                    </button>
                    <button
                      onClick={() => setTxLocation('inter')}
                      className={`py-2.5 px-3 rounded-lg text-xs font-sans transition-all border ${
                        txLocation === 'inter'
                          ? 'bg-white border-[#00A86B] text-[#00A86B] font-bold shadow-sm'
                          : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      Inter-state (IGST only)
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Display */}
              <div className="bg-[#0A2540] text-white rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
                <h4 className="text-sm font-bold font-mono uppercase tracking-widest text-[#D4AF37] border-b border-white/10 pb-3">
                  Analysis Summary
                </h4>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-gray-305">
                    <span>Base Price (excluding tax)</span>
                    <span className="font-mono text-sm font-semibold">₹{gstBase.toLocaleString('en-IN')}</span>
                  </div>

                  {txLocation === 'intra' ? (
                    <>
                      <div className="flex justify-between items-center text-xs text-gray-305">
                        <span>Central GST (CGST - {gstRate / 2}%)</span>
                        <span className="font-mono text-sm">₹{(gstTax / 2).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-305 border-b border-white/10 pb-4">
                        <span>State GST (SGST - {gstRate / 2}%)</span>
                        <span className="font-mono text-sm">₹{(gstTax / 2).toLocaleString('en-IN')}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center text-xs text-gray-305 border-b border-white/10 pb-4">
                      <span>Integrated GST (IGST - {gstRate}%)</span>
                      <span className="font-mono text-sm">₹{gstTax.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-xs font-bold text-[#D4AF37]">
                    <span>Total GST Tax Liability</span>
                    <span className="font-mono text-base">+ ₹{gstTax.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 font-black text-white">
                    <span className="text-sm uppercase tracking-wide">Gross Consolidated Value</span>
                    <span className="font-sans text-xl sm:text-2xl text-[#00A86B]">
                      ₹{gstTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-start space-x-2.5">
                  <Info className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Invoice generated for B2B supplies under this split must match GSTR-1 parameters. Seek counsel to evaluate eligibility for GSTR-2B Input Tax Credits (ITC).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* INCOME TAX CALCULATOR */}
          {activeTab === 'incometax' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                    Gross Annual Salary (₹)
                  </label>
                  <input
                    type="number"
                    value={grossSalary === 0 ? '' : grossSalary}
                    onChange={(e) => setGrossSalary(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#0A2540] mb-1">
                    Other / Accrued Business Income (₹)
                  </label>
                  <input
                    type="number"
                    value={otherIncome === 0 ? '' : otherIncome}
                    onChange={(e) => setOtherIncome(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] font-sans text-sm"
                  />
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <span className="block text-xs font-extrabold uppercase text-[#0A2540] tracking-wide mb-3">
                    Exemptions (Old Regime Only)
                  </span>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="flex justify-between text-[10px] text-gray-500 mb-1">
                        <span>Sec 80C Ded (EPF, LIC - Max 1.5L)</span>
                        <span className="font-mono text-gray-700">₹{Math.min(deduction80C, 150000).toLocaleString('en-IN')}</span>
                      </label>
                      <input
                        type="number"
                        value={deduction80C === 0 ? '' : deduction80C}
                        onChange={(e) => setDeduction80C(Math.max(0, Number(e.target.value)))}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] font-sans text-xs"
                      />
                    </div>

                    <div>
                      <label className="flex justify-between text-[10px] text-gray-500 mb-1">
                        <span>Sec 80D Health Premium (Max 50K)</span>
                        <span className="font-mono text-gray-700">₹{Math.min(deduction80D, 50000).toLocaleString('en-IN')}</span>
                      </label>
                      <input
                        type="number"
                        value={deduction80D === 0 ? '' : deduction80D}
                        onChange={(e) => setDeduction80D(Math.max(0, Number(e.target.value)))}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] font-sans text-xs"
                      />
                    </div>

                    <div>
                      <label className="flex justify-between text-[10px] text-gray-500 mb-1">
                        <span>HRA, LTA & Home Loan Interest</span>
                        <span className="font-mono text-gray-700">₹{hraInterestDeduction.toLocaleString('en-IN')}</span>
                      </label>
                      <input
                        type="number"
                        value={hraInterestDeduction === 0 ? '' : hraInterestDeduction}
                        onChange={(e) => setHraInterestDeduction(Math.max(0, Number(e.target.value)))}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] font-sans text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Output Display */}
              <div className="space-y-6">
                
                {/* Side-by-side comparative box */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border bg-white border-gray-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-gray-400 block font-mono">Old Regime (Sec 115)</span>
                      <span className="text-xl font-bold font-sans text-[#0A2540] block mt-1">
                        ₹{oldTax.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[9px] text-gray-400 font-sans block mt-4 border-t pt-2">Includes standard 50K ded and investment proof offsets.</span>
                  </div>

                  <div className="p-4 rounded-xl border bg-[#051A30] text-white flex flex-col justify-between relative overflow-hidden">
                    {oldTax > newTax && (
                      <div className="absolute top-0 right-0 bg-[#00A86B] text-white text-[7px] uppercase font-bold py-0.5 px-1.5 rounded-bl">
                        Better Option
                      </div>
                    )}
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#D4AF37] block font-mono">New Regime (Def. 2026-27)</span>
                      <span className="text-xl font-bold font-sans text-white block mt-1">
                        ₹{newTax.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[9px] text-gray-400 font-sans block mt-4 border-t border-white/10 pt-2">Includes standard 75K ded. No 80C, 80D offsets allowed.</span>
                  </div>
                </div>

                {/* Recommendation Banner */}
                <div className="p-4 rounded-xl bg-[#00A86B]/10 border border-[#00A86B]/30 flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#0A2540]">Advisor Strategy Recommendation</h5>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
                      You save approximately <strong className="text-emerald-700 font-mono">₹{taxDifference.toLocaleString('en-IN')}</strong> by selecting the{' '}
                      <strong className="text-[#051A30]">{recommendedRegime}</strong> for filing this financial year.
                    </p>
                  </div>
                </div>

                {/* Warning disclosure */}
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[9px] text-amber-800 leading-relaxed">
                    Disclaimer: These computations do not represent dynamic surcharge bands applicable to tax liabilities exceeding ₹50 Lakhs. Consult our Chartered Accountants to finalize legal filings.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
