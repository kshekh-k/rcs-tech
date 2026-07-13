import { Metadata } from "next";
import privacy from "@/data/privacy.json";
import PolicyPage from "@/components/PolicyPage";
import Layout from "@/components/Layout";
export const metadata: Metadata = {
  title: "Privacy Policy | RCS Infra Tech",
  description:
    "Learn how RCS Infra Tech collects, uses, stores, and protects your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <Layout showCTA={false}><PolicyPage data={privacy} /></Layout>;
}