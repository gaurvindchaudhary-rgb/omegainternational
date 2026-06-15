import { ServiceItem, FAQItem, BlogArticle, TestimonialItem, TaxGuideItem } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'gst-reg',
    title: 'GST Registration',
    description: 'Assisting domestic companies, startups, and foreign entities in securing GST registration with customized advice on eligibility, multi-state vertical registrations, and voluntary registrations.',
    category: 'GST',
    features: ['Hassle-free registration filing', 'Multi-state registration strategy', 'SEZ & developer unit compliance', 'Amendment and cancellation support']
  },
  {
    id: 'gst-filing',
    title: 'GST Return Filing',
    description: 'Managing monthly, quarterly, and annual return submissions (GSTR-1, GSTR-3B, GSTR-9 & 9C) with complete accuracy, dynamic input tax credit matching, and reconciliation.',
    category: 'GST',
    features: ['Automated reconciliations', 'GSTR-2B Input Tax Credit audits', 'Quarterly Return Monthly Payment (QRMP) consulting', 'E-way bill and E-invoicing advice']
  },
  {
    id: 'gst-adv',
    title: 'GST Advisory & Representation',
    description: 'Providing representation in front of GST authorities, handling audits under Section 65, replying to show-cause notices, and providing structured legal opinions on complex transactions.',
    category: 'GST',
    features: ['Sourced opinion on classification', 'Handling audits & inspections', 'Refund claim processing (LUT / Exports)', 'Appeals and appellate representations']
  },
  {
    id: 'it-filing',
    title: 'Income Tax Return (ITR) Filing',
    description: 'Filing corporate, partnership, NRI, and individual income tax returns with strict compliance, optimizing tax positions under the Old vs New Tax regimes.',
    category: 'Income Tax',
    features: ['Corporate Tax Return (ITR-6)', 'Individuals & HNIs (ITR-1 to ITR-4)', 'NRI tax compliance', 'Capital gains taxation reports']
  },
  {
    id: 'it-planning',
    title: 'Tax Planning & Advisory',
    description: 'Structuring business models, employee remuneration packages, and investment plans to legally minimize corporate and individual taxation liabilities.',
    category: 'Income Tax',
    features: ['Corporate tax structuring', 'Cross-border transfer pricing plans', 'ESOP taxation schemes for startups', 'DTAA benefit consulting']
  },
  {
    id: 'it-notices',
    title: 'Tax Notices Handling',
    description: 'Defending against tax audits, handling assessments under Section 143(3), reassessment under Section 147, and representation to CIT (Appeals).',
    category: 'Income Tax',
    features: ['Reply to Section 139 defect notices', 'Faceless Assessment representations', 'CIT Appeals preparation', 'Rectification requests under Sec 154']
  },
  {
    id: 'statury-audit',
    title: 'Statutory Audit',
    description: 'Performing high-caliber statutory audits in accordance with Indian Companies Act 2013 and ICAI Standards of Auditing to provide true and fair financial opinions to shareholders.',
    category: 'Audit',
    features: ['Companies Act compliance review', 'CARO 2020 reporting', 'Ind AS / GAAP implementations', 'Year-end balance sheet validation']
  },
  {
    id: 'internal-audit',
    title: 'Internal Audit & Risk Advisory',
    description: 'Evaluating internal control frameworks (IFCoFR), identifying operational leakages, and advising management on governance, risk mitigation, and compliance frameworks.',
    category: 'Audit',
    features: ['SOP compliance checks', 'Internal Financial Control reviews', 'Process loop efficiency audits', 'Fraud prevention checks']
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Virtual CFO & Accounting',
    description: 'Delivering end-to-end bookkeeping, accounts payable/receivable cycles, and management reporting (MIS) with high computational precision.',
    category: 'Accounting',
    features: ['Real-time cloud bookkeeping', 'Monthly balance sheets & MIS', 'Depreciation & asset registers', 'Dedicated account manager support']
  },
  {
    id: 'payroll-management',
    title: 'Payroll & Salary Management',
    description: 'Configuring monthly payrolls, TDS calculations on salaries, PF/ESI fillings, and generating professional form 16 declarations.',
    category: 'Accounting',
    features: ['PF, ESIC, Professional Tax filings', 'TDS under Sec 192 compliance', 'Form 16 generation for employees', 'Fringe benefit assessments']
  },
  {
    id: 'pvt-ltd-reg',
    title: 'Pvt Ltd & LLP Registration',
    description: 'Incorporating private limited companies, LLPs, public firms, and Section 8 non-profits with SPICe+ filings, DIN, DSC, and PAN allocations.',
    category: 'Business Reg',
    features: ['SPICe+ submission & MOA/AOA drafting', 'LLP Agreement drafting', 'Digital Signature Certificates (DSC)', 'Bank account configuration assistance']
  },
  {
    id: 'startup-msme',
    title: 'MSME & Startup India Recognition',
    description: 'Securing DPIT registration (DPIIT) to unlock a 3-year income tax holiday under Section 80-IAC, procurement tenders, and Udyam MSME certifications.',
    category: 'Business Reg',
    features: ['DPIIT registration applications', 'Section 80-IAC tax holiday filing', 'Udyam Registration certificates', 'Patent and Trademark discount advice']
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'GST',
    question: 'What are the threshold limits for mandatory GST registration in India?',
    answer: 'For service providers, GST registration is mandatory if annual turnover exceeds ₹20 Lakhs (₹10 Lakhs for Special Category States in Northeast India). For goods suppliers, the threshold is ₹40 Lakhs (₹20 Lakhs for special states). However, mandatory registration is required irrespective of turnover for inter-state suppliers, e-commerce operators, and casual taxable persons.',
    keywords: ['threshold', 'limit', 'registration', 'mandatory', 'turnover', '20 lakhs', '40 lakhs']
  },
  {
    id: 'faq-2',
    category: 'GST',
    question: 'What is GSTR-1, GSTR-3B, and GSTR-9? When are they filed?',
    answer: 'GSTR-1 is the monthly or quarterly return of outward supplies (sales), due by the 11th (monthly) or 13th (quarterly) of the succeeding month. GSTR-3B is a monthly self-declared summary return for paying taxes containing ITC offsets, due by the 20th to 24th of the following month. GSTR-9 is the consolidated annual return, due by 31st December of the subsequent financial year.',
    keywords: ['gstr-1', 'gstr-3b', 'gstr-9', 'due date', 'return', 'monthly', 'quarterly', 'annual']
  },
  {
    id: 'faq-3',
    category: 'GST',
    question: 'How does Input Tax Credit (ITC) reconciliation work via GSTR-2B?',
    answer: 'ITC can only be claimed if the vendor uploads their sales in GSTR-1 and it reflects in the buyer\'s auto-drafted static GSTR-2B. Under CGST Rules, a taxpayer cannot claim ITC unless it appears in GSTR-2B. Monthly reconciliation between purchase registers and GSTR-2B prevents tax leakage and audits by tax officers.',
    keywords: ['itc', 'reconciliation', 'gstr-2b', 'input tax credit', 'vendor', 'reconciled']
  },
  {
    id: 'faq-4',
    category: 'GST',
    question: 'What is an E-Invoice under GST and who is mandated to generate it?',
    answer: 'E-invoicing is the electronic reporting of B2B and export invoices to the government’s Invoice Registration Portal (IRP). Currently, any taxpayer with an aggregate annual turnover exceeding ₹5 Crores in any preceding fiscal year from 2017-18 onwards is legally required to generate E-Invoices with a unique Invoice Reference Number (IRN) and QR code.',
    keywords: ['e-invoice', '5 crores', 'irp', 'irn', 'qr code', 'b2b', 'mandatory']
  },
  {
    id: 'faq-5',
    category: 'Income Tax',
    question: 'What is the main difference between the Old and New Personal Tax Regimes?',
    answer: 'The Old Tax Regime offers higher progressive tax brackets but allows numerous deductions (such as Section 80C up to ₹1.5L, 80D for medical premium, Section 24 for home loan interest). The New Tax Regime (Section 115BAC) features lower, simplified tax rates but discards almost all exemptions and deductions (except standard deduction of ₹75,000 for salaried employees and NPS contribution under Sec 80CCD(2)).',
    keywords: ['old tax regime', 'new tax regime', 'difference', 'deductions', 'exemptions', '80c', '115bac']
  },
  {
    id: 'faq-6',
    category: 'Income Tax',
    question: 'Under what conditions is a corporate tax audit mandatory under Section 44AB?',
    answer: 'A tax audit under Section 44AB is mandatory for businesses if their total sales, turnover, or gross receipts exceed ₹1 Crore in a financial year. However, if cash transactions (both receipts and payments) are limited to 5% or less of total transactions (meaning 95%+ transactions are digital/banking), this threshold is extended to ₹10 Crores. For professionals, the audit threshold is ₹50 Lakhs.',
    keywords: ['tax audit', '44ab', 'threshold', '1 crore', '10 crore', 'digital transactions', 'professional']
  },
  {
    id: 'faq-7',
    category: 'Income Tax',
    question: 'How are Corporate Income Tax rates structured for domestic companies?',
    answer: 'Domestic companies generally pay a corporate tax rate of 30% or a reduced rate of 25% if their total turnover was under ₹400 Crores in the preceding years. Additionally, under Section 115BAA, existing domestic companies can opt for a special tax rate of 22% (effective tax rate of 25.17% including surcharges and cess) if they forego specified incentives or deductions.',
    keywords: ['corporate tax', 'domestic company', '115baa', '22%', '30%', 'turnover', 'india']
  },
  {
    id: 'faq-8',
    category: 'Income Tax',
    question: 'What is TDS, and what are the due dates for TDS return filing?',
    answer: 'Tax Deducted at Source (TDS) requires persons making specified payments (e.g., salary, rent, professional fees) to deduct tax before paying and deposit it with the government. TDS returns must be filed quarterly: Q1 (due 31st July), Q2 (due 31st October), Q3 (due 31st January), and Q4 (due 31st May). TDS deposit must be done by the 7th of the succeeding month.',
    keywords: ['tds', 'quarterly returns', 'due dates', 'deposit', '24q', '26q']
  },
  {
    id: 'faq-9',
    category: 'Income Tax',
    question: 'What are the consequences of filing an Income Tax Return (ITR) late?',
    answer: 'Filing ITR after the deadline (generally July 31st for non-audit cases) attracts a late filing fee under Section 234F: ₹5,000 if income exceeds ₹5 Lakhs, and ₹1,000 if income is under ₹5 Lakhs. Additionally, interest at 1% per month is charged on unpaid tax under Sec 234A, and you lose the right to carry forward capital or business losses.',
    keywords: ['late filing fee', 'itr late', '234f', 'interest', 'deadline', 'july 31', 'penalty']
  },
  {
    id: 'faq-10',
    category: 'Audit',
    question: 'What is the significance of the CARO 2020 report for corporate audits?',
    answer: 'The Companies (Auditor\'s Report) Order (CARO) 2020 is an expanded auditing directive mandated by the Ministry of Corporate Affairs (MCA). It requires statutory auditors of companies to report on 21 specific elements, including physical verification of inventories, title deeds of properties, default in loans, utilization of working capital, and compliance with corporate whistleblower structures.',
    keywords: ['caro 2020', 'statutory audit', 'mca', 'reporting', 'auditors', 'companies act']
  },
  {
    id: 'faq-11',
    category: 'Audit',
    question: 'When is an Internal Audit legally mandatory for public and private companies?',
    answer: 'Under Section 138 of Companies Act 2013, an internal audit is mandatory for: 1) All listed companies. 2) Unlisted public companies if their paid-up share capital >= ₹50 Cr, turnover >= ₹200 Cr, outstanding loans/deposits >= ₹100 Cr, or outstanding deposits >= ₹25 Cr. 3) Private companies if their turnover >= ₹200 Cr or outstanding loans/borrowings >= ₹100 Cr at any point during the preceding year.',
    keywords: ['internal audit', 'mandatory', 'section 138', 'private company', 'limit', 'public company']
  },
  {
    id: 'faq-12',
    category: 'Registration',
    question: 'What documents are required to incorporate a Private Limited Company in India?',
    answer: 'The essential requirements include: Digital Signature Certificates (DSC) for directors, Director Identification Numbers (DIN), approval of company name via RUN/SPICe+, PAN and Aadhaar of Directors, and registered office proof (NOC from landlord, electricity/water bill, rent agreement). Photographs and residential address proofs of key promoters are also required.',
    keywords: ['pvt ltd', 'incorporation', 'documents', 'spice+', 'din', 'dsc', 'memorandum']
  },
  {
    id: 'faq-13',
    category: 'Registration',
    question: 'What are the core differences between a Private Limited Company and an LLP?',
    answer: 'A Pvt Ltd company is highly structured, has shares that can be easily transferred, is ideal for venture capital funding, and has stricter compliance requirements under ROC. An LLP (Limited Liability Partnership) has lower compliance costs, no dividend distribution taxes on profit withdrawals, relies on a partnership agreement for internal operations, and is generally not preferred by venture capital firms.',
    keywords: ['private limited', 'llp', 'differences', 'compliance', 'funding', 'shares', 'partnership']
  },
  {
    id: 'faq-14',
    category: 'Registration',
    question: 'What is DPIIT registration, and how do startups get a 100% tax exemption?',
    answer: 'DPIIT registration is a certification of recognition by the Department for Promotion of Industry and Internal Trade. Eligible recognized startups can apply for a 100% Income Tax exemption under Section 80-IAC for any 3 consecutive years out of their first 10 years of incorporation, provided their startup has got approval from the Inter-Ministerial Board (IMB) and is engaging in innovation.',
    keywords: ['dpiit', 'startup india', '80-iac', 'tax holiday', 'exemption', 'innovation', 'imb']
  },
  {
    id: 'faq-15',
    category: 'Compliance',
    question: 'What annual ROC filings are mandatory for an active Private Limited Company?',
    answer: 'An active Pvt Ltd must file: 1) Form ADT-1 (Auditor appointment, within 15 days of AGM). 2) Form AOC-4 (Financial statements submission, within 30 days of AGM). 3) Form MGT-7 (Annual Return of details of shareholders & directors, within 60 days of AGM). 4) Form DIR-3 KYC for directors annually. 5) Form MSME-1 (semiannual payment updates).',
    keywords: ['roc', 'mgt-7', 'aoc-4', 'adt-1', 'dir-3 kyc', 'annual filings', 'companies act']
  },
  {
    id: 'faq-16',
    category: 'Compliance',
    question: 'What is the consequence of failing to complete ROC declarations or delayed annual filings?',
    answer: 'A delay in filing ROC forms like AOC-4 and MGT-7 attracts a flat penalty of ₹100 per day per form. Furthermore, companies that do not file returns for two consecutive financial years may be struck off by the ROC under Section 248. Directors can be disqualified for 5 years and DINs deactivated if filings are ignored.',
    keywords: ['penalty', 'strike off', 'roc late', '100 per day', 'mca', 'disqualification', 'director']
  },
  {
    id: 'faq-17',
    category: 'Income Tax',
    question: 'What is Section 194J and Section 194C TDS on payments to contractors/professionals?',
    answer: 'Section 194C mandates TDS at the rate of 1% (for individuals) or 2% (for others) on payments made to contractors if a single payment exceeds ₹30,000 or annual aggregate payments exceed ₹1,00,000. Section 194J requires TDS at 10% (or 2% for call centers/technical services) on professional/technical fee payments exceeding ₹30,000 per financial year.',
    keywords: ['194j', '194c', 'tds rate', 'contractor', 'professional fees', 'deductions', 'limits']
  },
  {
    id: 'faq-18',
    category: 'GST',
    question: 'What is GSTR-9C and who needs to submit dual self-certifications?',
    answer: 'GSTR-9C is a reconciliation statement between the audited financial books and the annual GSTR-9 return filed. Self-certified GSTR-9C is mandatory for taxpayers whose aggregate annual turnover in a financial year exceeds ₹5 Crores. Taxpayers below this threshold are exempted from GSTR-9C but must file GSTR-9 annual returns if turnover is above ₹2 Crores.',
    keywords: ['gstr-9c', 'gstr-9', 'reconciliation', '5 crores', 'audited books', 'exemption']
  },
  {
    id: 'faq-19',
    category: 'Income Tax',
    question: 'How is taxation structured for Non-Resident Indians (NRIs) who have income in India?',
    answer: 'NRIs are taxed in India only on income generated or received within India (such as rental income from Indian property, interest on NRO deposits, capital gains from selling Indian shares/property). Income earned outside India is entirely tax-free. Under Section 195, TDS rates on NRI capital gains are high (20% on long-term gains), but NRIs can apply for a lower deduction certificate from the tax department.',
    keywords: ['nri', 'nro account', 'taxation', 'capital gains', 'section 195', 'foreign income']
  },
  {
    id: 'faq-20',
    category: 'Compliance',
    question: 'What is Transfer Pricing, and when are international transaction audits required?',
    answer: 'Transfer Pricing laws are anti-tax-avoidance frameworks ensuring transactions between related enterprises (such as a foreign parent and an Indian subsidiary) are done at an "Arm’s Length Price" (ALP). If international transactions or specified domestic transactions of an enterprise exceed ₹20 Crores in aggregate, filing Form 3CEB signed by a Chartered Accountant is mandatory, alongside maintaining detailed localized transfer pricing documentation.',
    keywords: ['transfer pricing', 'form 3ceb', 'arm\'s length', '20 crores', 'subsidiary', 'ca audit']
  }
];

export const blogData: BlogArticle[] = [
  {
    id: 'art-1',
    category: 'GST Updates',
    title: 'GST Council Updates: Changes in E-Invoicing Thresholds and Composition Scheme',
    excerpt: 'Detailed review of latest notifications relating to mandatory billing compliance frameworks for MSMEs and electronic registration rules.',
    content: 'The dynamic shift in the Goods and Services Tax (GST) landscape continues as the Central Board of Indirect Taxes and Customs (CBIC) implements new regulatory compliance thresholds. In this update, domestic enterprises whose annual consolidated sales exceed ₹5 Crores must immediately onboard themselves to the Invoice Registration Portal (IRP) for real-time E-Invoicing integration. We discuss what digital systems your company needs to deploy to avoid trade blockage...',
    date: 'June 01, 2026',
    readTime: '5 min read'
  },
  {
    id: 'art-2',
    category: 'Income Tax News',
    title: 'De-mystifying Section 115BAC: How to Transition to the New Regime Post-Budget',
    excerpt: 'Navigate the default tax structure update, evaluate if loss offsets fit your personal accounting, and optimize your overall annual wealth layout.',
    content: 'Understanding the mechanics of personal corporate payroll is vital as Section 115BAC emerges as the default taxation matrix. With the Standard Deduction increased to ₹75,000 for salaried Indian workers, many mid-tier taxpayers are looking to migrate from former investment-heavy deductions to tax-rate optimization models. Here, the MD of Omega International, Ankur Chaturvedi, explains step-by-step comparative mathematical assessments...',
    date: 'May 28, 2026',
    readTime: '7 min read'
  },
  {
    id: 'art-3',
    category: 'Business Compliance',
    title: 'The Essential ROC Compliance Checklist for Private Limited Companies for FY 2026-27',
    excerpt: 'An administrative roadmap detailing AOC-4, MGT-7 deadlines, and director regulatory statements as mandated by the Ministry of Corporate Affairs.',
    content: 'Corporate transparency remains the top focus area for India\'s Ministry of Corporate Affairs (MCA). For directors and finance heads, avoiding severe penalties of ₹100 per day begins with tracking the standard board meetings, maintaining continuous internal financial registers, and executing annual returns. We lay out the six key MCA filings required of private entities...',
    date: 'May 15, 2026',
    readTime: '6 min read'
  },
  {
    id: 'art-4',
    category: 'Startup Guides',
    title: 'Startup India Tax Exemption (80-IAC): How to Secure State Approvals and Grants',
    excerpt: 'Step-by-step pathway on filing Inter-Ministerial Board applications for qualifying tech startups seeking long-term developmental tax relief.',
    content: 'The Indian startup sandbox is highly lucrative, yet many entrepreneurs are unaware about DPIIT tax benefits. Unlocking the 3-year consolidated income tax holiday under Section 80-IAC is. highly competitive and requires meticulous presentation of innovation indicators to the Inter-Ministerial Board. In this exclusive guide, we provide visual instructions and document drafting outlines directly from our advisory experiences with successful startups...',
    date: 'April 20, 2026',
    readTime: '8 min read'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Vikramaditya Shastry',
    role: 'CEO & Co-Founder',
    company: 'QuantumCore Technologies',
    rating: 5,
    content: 'Omega International turned our incredibly complex multi-state GST classification hurdle into a simplified, streamlined compliance cycle. Ankur Chaturvedi and his corporate compliance division operate at Big-4 speeds, providing personal access and absolute clarity on ROC laws.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 't-2',
    name: 'Meenakshi Iyer',
    role: 'Director of Finance',
    company: 'Vedic Organic Organics Pvt Ltd',
    rating: 5,
    content: 'We migrated our statutory audits and payroll computations over to Omega two years ago. The virtual CFO services have given our steering committee real-time oversight of regulatory filings, while their expert replies to complex tax assessments saved us from costly litigation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 't-3',
    name: 'Rajeev Malhotra',
    role: 'Managing Director',
    company: 'Malhotra Infrastructure Group',
    rating: 5,
    content: 'For an infrastructure player, navigating tax withholding, works contracts under GST, and transfer pricing on international material procurement can be a nightmare. Omega\'s structured legal advisory and robust representations have defended our balance sheet through multiple tax audits.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export const taxGuidesData: TaxGuideItem[] = [
  {
    id: 'g-1',
    title: 'Indian Income Tax Handbook FY 2026-27',
    description: 'A comprehensive comparative analysis of the Old vs New tax regimes under latest legislative amendments.',
    category: 'Income Tax',
    fileSize: '4.2 MB',
    downloads: 1450
  },
  {
    id: 'g-2',
    title: 'Comprehensive Guide to GST E-Invoicing & ITC Matching',
    description: 'Detailed instructions on setting up automated billing bridges and reconciling GSTR-2B with sales journals.',
    category: 'GST Advisory',
    fileSize: '3.1 MB',
    downloads: 2890
  },
  {
    id: 'g-3',
    title: 'ROC Compliance Playbook for SME Directors',
    description: 'A practical roadmap detailing statutory compliance obligations, audit checks, and board meeting regulations.',
    category: 'Corporate Compliance',
    fileSize: '2.8 MB',
    downloads: 980
  },
  {
    id: 'g-4',
    title: 'DPIIT Startup India & 80-IAC Blueprint',
    description: 'How to structure business profiles and pitch proposals to secure a 3-year tax holiday from government panels.',
    category: 'Startup Advisory',
    fileSize: '5.0 MB',
    downloads: 2150
  }
];
