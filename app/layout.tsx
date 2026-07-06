import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.rcstech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RCS Tech | Enterprise IT Solutions & Cybersecurity",
    template: "%s | RCS Tech",
  },
  description:
    "RCS Tech empowers businesses with cutting-edge technology solutions in cybersecurity, software development, cloud infrastructure, ERP systems, and enterprise IT services.",
  keywords: [
    "IT solutions",
    "cybersecurity",
    "cloud infrastructure",
    "ERP solutions",
    "enterprise IT services",
    "software development",
    "networking solutions",
  ],
  authors: [{ name: "RCS Tech" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "RCS Tech",
    title: "RCS Tech | Enterprise IT Solutions & Cybersecurity",
    description:
      "Empowering businesses with cutting-edge technology solutions in cybersecurity, software development, cloud infrastructure, ERP systems, and enterprise IT services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCS Tech | Enterprise IT Solutions & Cybersecurity",
    description:
      "Empowering businesses with cutting-edge technology solutions in cybersecurity, software development, cloud infrastructure, ERP systems, and enterprise IT services.",
  },
  icons: {
    icon: "/favicon.ico",
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
        <div className="overflow-hidden min-h-screen">{children}</div>
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_ID}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
