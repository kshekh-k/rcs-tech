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
import JsonLd from "@/components/JsonLd";
import { constructMetadata } from "@/lib/seo";
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: "RCS Infra Tech | Web & Mobile App Development",
  description:
    "Build high-performance web applications, mobile platforms, Next.js solutions, and multi-tenant SaaS products tailored to scale.",
  keywords: webAppDevelopment.seo.keywords,
  path: "/web-app-development",
  image: "/images/web-app-development-hero.png",
});

export default function WebAppDevelopmentPage() {
  const data = webAppDevelopment;
  const serviceSchema = getServiceSchema({
    name: "Web & App Development",
    description: metadata.description as string,
    path: "/web-app-development",
    image: "/images/web-app-development-hero.png",
  });
  const faqSchema = getFAQSchema(data.faqSection);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Web & App Development", item: "/web-app-development" },
  ]);

  return (
    <Layout showCTA={true} showContact={true}>
      <JsonLd id="web-app-service-schema" data={serviceSchema} />
      <JsonLd id="web-app-faq-schema" data={faqSchema} />
      <JsonLd id="web-app-breadcrumb-schema" data={breadcrumbSchema} />

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
