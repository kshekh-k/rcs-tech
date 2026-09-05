import { Metadata } from "next";
import cyberSecurity from "@/data/cyberSecurity.json";
import Layout from "@/components/Layout";
import ServiceHero from "@/components/ServiceHero";
import ServiceOverview from "@/components/ServiceOverview";
import Timeline from "@/components/Timeline";
import IndustriesSection from "@/components/Industries";
import FAQ from "@/components/FAQ";
import ServiceFeatures from "@/components/ServiceFeatures";
import WhyChoose from "@/components/WhyChoose";
import JsonLd from "@/components/JsonLd";
import { constructMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: "RCS Infra Tech | Cybersecurity, VAPT & SOC Services",
  description:
    "Protect your enterprise with cybersecurity services including Firewall Management, VAPT, Endpoint Security, 24x7 SOC monitoring, IAM, and email security.",
  keywords: cyberSecurity.seo.keywords,
  path: "/cybersecurity",
  image: "/images/cybersecurity-hero-5.png",
});

export default function CybersecurityPage() {
  const data = cyberSecurity;
  const serviceSchema = getServiceSchema({
    name: "Cybersecurity Services",
    description: metadata.description as string,
    path: "/cybersecurity",
    image: "/images/cybersecurity-hero-7.png",
  });
  const faqSchema = getFAQSchema(data.faqSection);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Cybersecurity Services", item: "/cybersecurity" },
  ]);

  return (
    <Layout showCTA={true} showContact={true}>
      <JsonLd id="cybersecurity-service-schema" data={serviceSchema} />
      <JsonLd id="cybersecurity-faq-schema" data={faqSchema} />
      <JsonLd id="cybersecurity-breadcrumb-schema" data={breadcrumbSchema} />

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
