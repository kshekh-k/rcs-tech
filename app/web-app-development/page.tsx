import { Metadata } from "next";
import webAppDevelopment from "@/data/webAppDevelopment.json";
import Layout from "@/components/Layout";
import ServiceHero from "@/components/ServiceHero";
import ServiceOverview from "@/components/ServiceOverview";
import ServiceFeatures from "@/components/ServiceFeatures";
import WhyChoose from "@/components/WhyChoose";
import Timeline from "@/components/Timeline";
import IndustriesSection from "@/components/Industries";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: webAppDevelopment.seo.title,
  description: webAppDevelopment.seo.description,
  keywords: webAppDevelopment.seo.keywords,
};

export default function WebAppDevelopmentPage() {
  const data = webAppDevelopment;
  return (
    <Layout showCTA={true} showContact={true}>
      <ServiceHero hero={data.hero} />
      <ServiceOverview overview={data.overview} />
      <ServiceFeatures services={data.services} />
      <WhyChoose whychoose={data.whychoose} />
      <Timeline {...data.timeline} />
      <IndustriesSection industries={data.industries} />
      <FAQ {...data.faqSection} />
    </Layout>
  );
}
