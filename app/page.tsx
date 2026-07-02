import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import USP from "@/components/USP";
import Customers from "@/components/Customers";
import Testimonials from "@/components/Testimonials";
import Promotion from "@/components/Promotion";
import Blog from "@/components/Blog";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <USP />
        <Customers />
        <Testimonials />
        <Promotion />
        <Blog />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
