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
