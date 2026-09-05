import { Metadata } from "next";
import hardwareSolutions from "@/data/hardwareSolutions.json";
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
  title: "RCS Infra Tech | Enterprise IT Hardware Solutions",
  description:
    "Equip your organization with corporate laptops, server racks, smart panels, networking switches, and AMC IT hardware procurement services.",
  keywords: hardwareSolutions.seo.keywords,
  path: "/hardware-solutions",
  image: "/images/hardware-solutions-hero.png",
});

export default function HardwareSolutionsPage() {
  const data = hardwareSolutions;
  const serviceSchema = getServiceSchema({
    name: "Hardware Solutions",
    description: metadata.description as string,
    path: "/hardware-solutions",
    image: "/images/hardware-solutions-hero.png",
  });
  const faqSchema = getFAQSchema(data.faqSection);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Hardware Solutions", item: "/hardware-solutions" },
  ]);

  return (
    <Layout showCTA={true} showContact={true}>
      <JsonLd id="hardware-service-schema" data={serviceSchema} />
      <JsonLd id="hardware-faq-schema" data={faqSchema} />
      <JsonLd id="hardware-breadcrumb-schema" data={breadcrumbSchema} />

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
