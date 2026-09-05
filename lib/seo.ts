import type { Metadata } from "next";

export const SITE_URL = "https://www.rcsinfratech.com";
export const DEFAULT_OG_IMAGE = "/images/about-building-new.png";

interface ConstructMetadataInput {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = "RCS Infra Tech delivers enterprise IT solutions including cybersecurity, cloud infrastructure, networking, SaaS products, web development, and managed IT services to improve security and performance.",
  image = DEFAULT_OG_IMAGE,
  path = "",
  keywords = [],
  noIndex = false,
}: ConstructMetadataInput = {}): Metadata {
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const canonicalUrl = cleanPath === "" || cleanPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${cleanPath}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
  
  const formattedTitle = title
    ? (title.includes("RCS Infra Tech") ? title : `${title} | RCS Infra Tech`)
    : "RCS Infra Tech - Enterprise IT Solutions, Cybersecurity & Cloud Services";

  const defaultKeywords = [
    "Enterprise IT Solutions",
    "Cybersecurity Services",
    "Network Solutions",
    "Cloud Infrastructure",
    "Server Solutions",
    "Managed IT Services",
    "IT Consulting",
    "Web Development",
    "SaaS Products",
    "Hardware Solutions",
  ];

  const mergedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  const googleVerification =
    process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION ||
    process.env.GOOGLE_SEARCH_CONSOLE_CODE;

  return {
    title: formattedTitle,
    description,
    keywords: mergedKeywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    verification: googleVerification
      ? {
          google: googleVerification,
        }
      : undefined,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: formattedTitle,
      description,
      url: canonicalUrl,
      siteName: "RCS Infra Tech",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: formattedTitle,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [fullImageUrl],
    },
  };
}
