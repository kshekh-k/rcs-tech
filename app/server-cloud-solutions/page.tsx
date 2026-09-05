import { Metadata } from "next";
import serverCloudSolutions from "@/data/serverCloudSolutions.json";
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
  title: "RCS Infra Tech | Server & Cloud Solutions",
  description:
    "Modernize IT infrastructure with secure server management, cloud migration, DevOps automation, private cloud, and disaster recovery.",
  keywords: serverCloudSolutions.seo.keywords,
  path: "/server-cloud-solutions",
  image: "/images/server-cloud-solutions-hero.png",
});

export default function ServerCloudSolutionsPage() {
  const data = serverCloudSolutions;
  const serviceSchema = getServiceSchema({
    name: "Server & Cloud Solutions",
    description: metadata.description as string,
    path: "/server-cloud-solutions",
    image: "/images/server-cloud-solutions-hero.png",
  });
  const faqSchema = getFAQSchema(data.faqSection);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Server & Cloud Solutions", item: "/server-cloud-solutions" },
  ]);

  return (
    <Layout showCTA={true} showContact={true}>
      <JsonLd id="server-cloud-service-schema" data={serviceSchema} />
      <JsonLd id="server-cloud-faq-schema" data={faqSchema} />
      <JsonLd id="server-cloud-breadcrumb-schema" data={breadcrumbSchema} />

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
