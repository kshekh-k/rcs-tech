import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import USP from "@/components/USP";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "RCS Infra Tech | Enterprise IT Solutions, Cybersecurity & Cloud",
  description:
    "RCS Infra Tech delivers enterprise IT solutions including cybersecurity, cloud infrastructure, networking, ERP systems, SaaS products, web development, and managed IT services.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <IndustriesSection />
        <ProcessSection />
        <USP />
        <Testimonials />
        <CTASection />
        <Blog />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
