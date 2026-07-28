import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactSection from "./ContactSection";
 

interface SiteLayoutProps {
  children: ReactNode;

  showCTA?: boolean;
  showContact?: boolean;
  showFooter?: boolean;
  showHeader?: boolean;
}

export default function Layout({
  children,
  showCTA = true,
  showContact = false,
  showFooter = true,
  showHeader = true,
}: SiteLayoutProps) {
  return (
    <>
      {showHeader && <Header />}

      <main className="min-h-screen">
        {children}
        {showCTA && <CTASection />}
        {showCTA && <ContactSection />}
      </main>

     

      {showFooter && <Footer />}

     
    </>
  );
}