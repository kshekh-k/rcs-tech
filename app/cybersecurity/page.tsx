import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { routes } from "@/lib/routes";
import cyberSecurity from "@/data/cyberSecurity.json";
import Layout from "@/components/Layout";
import ServiceHero from "@/components/ServiceHero";
import ServiceOverview from "@/components/ServiceOverview";
import Timeline from "@/components/Timeline";
import IndustriesSection from "@/components/Industries";
import FAQ from "@/components/FAQ";
import ServiceFeatures from "@/components/ServiceFeatures";
import WhyChoose from "@/components/WhyChoose";

export default function SitemapPage() {
const data = cyberSecurity 
  return (
    <Layout showCTA={true} showContact={true}>
      <ServiceHero hero={data.hero} />
      <ServiceOverview overview={data.overview} />
      <ServiceFeatures services={data.services} />
      <WhyChoose benefits={data.benefits} />
      <Timeline {...data.timeline} />
      <IndustriesSection industries={data.industries} />
      <FAQ {...data.faqSection} />
    </Layout>
  );
}
