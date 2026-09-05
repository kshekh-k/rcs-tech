import { Metadata } from "next";
import privacy from "@/data/privacy.json";
import PolicyPage from "@/components/PolicyPage";
import Layout from "@/components/Layout";
import JsonLd from "@/components/JsonLd";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: "RCS Infra Tech | Privacy Policy & Data Protection",
  description:
    "Learn how RCS Infra Tech collects, uses, stores, and safeguards your personal data and corporate communications in accordance with privacy laws.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy-policy" },
  ]);

  return (
    <Layout showCTA={false}>
      <JsonLd id="privacy-breadcrumb-schema" data={breadcrumbSchema} />
      <PolicyPage data={privacy} />
    </Layout>
  );
}