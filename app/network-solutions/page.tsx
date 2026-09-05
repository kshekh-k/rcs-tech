import { Metadata } from "next";
import networkSolutions from "@/data/networkSolutions.json";
import Layout from "@/components/Layout";
import ServiceHero from "@/components/ServiceHero";
import ServiceOverview from "@/components/ServiceOverview";
import ServiceFeatures from "@/components/ServiceFeatures";
import WhyChoose from "@/components/WhyChoose";
import Timeline from "@/components/Timeline";
import IndustriesSection from "@/components/Industries";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { constructMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: "RCS Infra Tech | Enterprise Network & NOC Solutions",
  description:
    "Build secure networking infrastructure with end-to-end WiFi & LAN setup, router/switch configuration, VPNs, and 24x7 NOC monitoring.",
  keywords: networkSolutions.seo.keywords,
  path: "/network-solutions",
  image: "/images/network-solutions-hero.png",
});

export default function NetworkSolutionsPage() {
  const data = networkSolutions;
  const serviceSchema = getServiceSchema({
    name: "Network Solutions",
    description: metadata.description as string,
    path: "/network-solutions",
    image: "/images/network-solutions-hero.png",
  });
  const faqSchema = getFAQSchema(data.faqSection);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Network Solutions", item: "/network-solutions" },
  ]);

  return (
    <Layout showCTA={true} showContact={true}>
      <JsonLd id="network-service-schema" data={serviceSchema} />
      <JsonLd id="network-faq-schema" data={faqSchema} />
      <JsonLd id="network-breadcrumb-schema" data={breadcrumbSchema} />

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
