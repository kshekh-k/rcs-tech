import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
 

interface SiteLayoutProps {
  children: ReactNode;

  showCTA?: boolean;
  showFooter?: boolean;
  showHeader?: boolean;
}

export default function Layout({
  children,
  showCTA = true,
  showFooter = true,
  showHeader = true,
}: SiteLayoutProps) {
  return (
    <>
      {showHeader && <Header />}

      <main className="min-h-screen">
        {children}
        {showCTA && <CTASection />}
      </main>

     

      {showFooter && <Footer />}

     
    </>
  );
}