export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'GST' | 'Income Tax' | 'Audit' | 'Accounting' | 'Business Reg' | 'Compliance';
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'GST' | 'Income Tax' | 'Audit' | 'Registration' | 'Compliance';
  keywords: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'GST Updates' | 'Income Tax News' | 'Business Compliance' | 'Startup Guides' | 'Financial Planning' | 'Corporate Law Updates';
  date: string;
  readTime: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  image: string;
}

export interface TaxGuideItem {
  id: string;
  title: string;
  description: string;
  category: string;
  fileSize: string;
  downloads: number;
}

export interface AppointmentData {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}
