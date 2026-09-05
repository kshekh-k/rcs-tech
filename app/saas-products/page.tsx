import { Metadata } from "next";
import saasProducts from "@/data/saasProducts.json";
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
  title: "RCS Infra Tech | Enterprise SaaS & Cloud Products",
  description:
    "Streamline operational efficiency with certified Microsoft Azure, M365, Google Workspace, Zoho CRM, and Tally on Cloud hosting.",
  keywords: saasProducts.seo.keywords,
  path: "/saas-products",
  image: "/images/saas-products-hero.png",
});

export default function SaasProductsPage() {
  const data = saasProducts;
  const serviceSchema = getServiceSchema({
    name: "SaaS Products",
    description: metadata.description as string,
    path: "/saas-products",
    image: "/images/saas-products-hero.png",
  });
  const faqSchema = getFAQSchema(data.faqSection);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "SaaS Products", item: "/saas-products" },
  ]);

  return (
    <Layout showCTA={true} showContact={true}>
      <JsonLd id="saas-service-schema" data={serviceSchema} />
      <JsonLd id="saas-faq-schema" data={faqSchema} />
      <JsonLd id="saas-breadcrumb-schema" data={breadcrumbSchema} />

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
