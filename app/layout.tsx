import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleTagManagerNoScript from "@/components/GoogleTagManagerNoScript";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.rcsinfratech.com";
const ogImage = "/images/about-building-new.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "RCS Infra Tech - Enterprise IT Solutions, Cybersecurity & Cloud Services",
    template: "%s - RCS Infra Tech",
  },
  description:
    "RCS Infra Tech delivers enterprise IT solutions including cybersecurity, cloud infrastructure, networking, ERP systems, SaaS products, web development, and managed IT services to help organizations improve security, performance, and operational efficiency.",
  keywords: [
    "Enterprise IT Solutions",
    "Cybersecurity Services",
    "Network Solutions",
    "Cloud Infrastructure",
    "Server Solutions",
    "ERP Solutions",
    "Managed IT Services",
    "IT Consulting",
    "IT Infrastructure",
    "Web Development Company",
    "App Development",
    "SaaS Products",
    "IT Support",
    "Cloud Migration",
    "Business IT Solutions",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE",
  },
  category: "Technology",
  appleWebApp: {
    capable: true,
    title: "RCS Infra Tech",
    statusBarStyle: "default",
  },
  themeColor: "#2563EB",
  manifest: "/site.webmanifest",
  authors: [{ name: "RCS Infra Tech" }],
  openGraph: {
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "RCS Infra Tech",
      },
    ],
    type: "website",
    url: siteUrl,
    siteName: "RCS Infra Tech",
    title: "RCS Infra Tech | Enterprise IT Solutions & Cybersecurity",
    description:
      "Empowering businesses with cutting-edge technology solutions in cybersecurity, software development, cloud infrastructure, ERP systems, and enterprise IT services.",
    phoneNumbers: ["+91-9122116041"],
    emails: ["info@rcsinfratech.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RCS Infra Tech | Enterprise IT Solutions & Cybersecurity",
    description:
      "Empowering businesses with cutting-edge technology solutions in cybersecurity, software development, cloud infrastructure, ERP systems, and enterprise IT services.",
    images: ogImage,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",

    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        <GoogleTagManagerNoScript />
        <div className="overflow-hidden min-h-screen">{children}</div>
        <GoogleTagManager />
        <GoogleAnalytics />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": `${siteUrl}/#organization`,
              name: "RCS Infra Tech",
              url: siteUrl,
              logo: `${siteUrl}/images/rcs-logo.svg`,
              image: `${siteUrl}${ogImage}`,
              description:
                "RCS Infra Tech provides enterprise IT solutions including cybersecurity, cloud infrastructure, networking, server solutions, SaaS products, web development, and managed IT services.",
              email: "info@rcsinfratech.com",
              telephone: "+91-9122116041",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              sameAs: [
                "https://www.linkedin.com/company/rcsinfratech",
                "https://www.facebook.com/rcsinfratech",
                "https://x.com/rcsinfratech",
                "https://www.instagram.com/rcsinfratech",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cybersecurity Services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Network Solutions",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Server & Cloud Solutions",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web & App Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SaaS Products",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hardware Solutions",
                  },
                },
              ],
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RCS Infra Tech",
              url: siteUrl,
              // potentialAction: {
              //   "@type": "SearchAction",
              //   target: `${siteUrl}/search?q={search_term_string}`,
              //   "query-input": "required name=search_term_string",
              // },
            }),
          }}
        />
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RCS Infra Tech",
              url: siteUrl,
              telephone: "+91-9122116041",
              email: "info@rcsinfratech.com",
              image: `${siteUrl}${ogImage}`,
              logo: `${siteUrl}/images/rcs-logo.svg`,
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />

         <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_ID}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
