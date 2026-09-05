import { Metadata } from "next";
import terms from "@/data/terms.json";
import PolicyPage from "@/components/PolicyPage";
import Layout from "@/components/Layout";
import JsonLd from "@/components/JsonLd";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: "RCS Infra Tech | Terms & Conditions",
  description:
    "Read the terms and conditions governing the use of RCS Infra Tech web services, enterprise software, IT consulting, and infrastructure contracts.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Terms & Conditions", item: "/terms-and-conditions" },
  ]);

  return (
    <Layout showCTA={false}>
      <JsonLd id="terms-breadcrumb-schema" data={breadcrumbSchema} />
      <PolicyPage data={terms} />
    </Layout>
  );
}