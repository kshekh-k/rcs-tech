import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleTagManagerNoScript from "@/components/GoogleTagManagerNoScript";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { constructMetadata } from "@/lib/seo";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata({
  title: "RCS Infra Tech - Enterprise IT Solutions, Cybersecurity & Cloud Services",
  description:
    "RCS Infra Tech delivers enterprise IT solutions including cybersecurity, cloud infrastructure, networking, ERP systems, SaaS products, web development, and managed IT services to help organizations improve security, performance, and operational efficiency.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        <GoogleTagManagerNoScript />
        <div className="overflow-hidden min-h-screen">{children}</div>
        <GoogleTagManager />
        <GoogleAnalytics />
        <JsonLd id="organization-schema" data={organizationSchema} />
        <JsonLd id="website-schema" data={websiteSchema} />

        {process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_ID && (
          <Script
            src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_ID}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
