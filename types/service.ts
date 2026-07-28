export interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface Hero {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  highlights: string[];
}

export interface Overview {
  badge: string;
  title: string;
  description: string;
  features: string[];
}

export interface ServiceFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  items: BenefitItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Process {
  badge: string;
  title: string;
  steps: ProcessStep[];
}

export interface Industries {
  badge: string;
  title: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  badge: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface CTA {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface ServicePage {
  seo: SEO;
  hero: Hero;
  overview: Overview;
  services: ServiceFeature[];
  benefits: Benefits;
  process: Process;
  industries: Industries;
  faq: FAQItem[];
  cta: CTA;
}

export interface TimelineItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineSection {
  badge?: string;
  title: string;
  subtitle?: string;
  items: TimelineItem[];
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface FeatureGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
}

