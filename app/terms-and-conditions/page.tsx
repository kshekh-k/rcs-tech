import { Metadata } from "next";
import terms from "@/data/terms.json";
import PolicyPage from "@/components/PolicyPage";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Terms & Conditions | RCS Infra Tech",
  description:
    "Read the Terms & Conditions governing the use of the RCS Infra Tech website and services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsPage() {
  return <Layout showCTA={false}><PolicyPage data={terms} /></Layout>;
}