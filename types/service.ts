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
  highlight: string;
  description: string;
  titleRight: string;
  DescRight: string;
  cyberRiskReduction: string[];
  features: string[];
}

export interface ServiceFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}
export interface ServiceCTA {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  checks: string[];
}

export interface ServiceSection {
  title: string;
  highlight: string;
  titleend: string;
  subtitle: string;
  service: ServiceFeature[];
  cta: ServiceCTA;
}

export interface WhychooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface Whychoosestat {
  number: string;
  label: string;
}

export interface Whychoose {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  items: WhychooseItem[];
  stats: Whychoosestat[];
}

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  items: WhychooseItem[];
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

export interface IndustryItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
  from: string;
  to: string;
}

export interface IndustryCTA {
  title: string;
  highlight: string;
  subtitle: string;
}

export interface Industries {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  items: IndustryItem[];
  cta: IndustryCTA;
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
  services: ServiceSection;
  Whychoose: Whychoose;
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

