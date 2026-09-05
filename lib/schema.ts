import siteData from "@/data/site.json";
import { SITE_URL, DEFAULT_OG_IMAGE } from "./seo";

export function getOrganizationSchema() {
  const socialUrls = siteData.contactInfo.social
    .map((s) => (s.label === "WhatsApp" ? "" : s.href))
    .filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "RCS Infra Tech",
    url: SITE_URL,
    logo: `${SITE_URL}${siteData.logo}`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description:
      "RCS Infra Tech provides enterprise IT solutions including cybersecurity, cloud infrastructure, networking, server solutions, SaaS products, web development, and managed IT services.",
    email: siteData.contactInfo.email,
    telephone: siteData.contactInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "E-695, Behind Gupta Stores, Vaishali Nagar",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302021",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.9124",
      longitude: "75.7873",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: socialUrls,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cybersecurity Services",
          url: `${SITE_URL}/cybersecurity`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Network Solutions",
          url: `${SITE_URL}/network-solutions`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Server & Cloud Solutions",
          url: `${SITE_URL}/server-cloud-solutions`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & App Development",
          url: `${SITE_URL}/web-app-development`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Products",
          url: `${SITE_URL}/saas-products`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hardware Solutions",
          url: `${SITE_URL}/hardware-solutions`,
        },
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "RCS Infra Tech",
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getServiceSchema({
  name,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  const serviceUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: serviceUrl,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    provider: {
      "@type": "ProfessionalService",
      name: "RCS Infra Tech",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function getFAQSchema(
  faqData?:
    | {
        items?: Array<{ question: string; answer: string }>;
        faqs?: Array<{ question: string; answer: string }>;
      }
    | Array<{ question: string; answer: string }>
) {
  const items = Array.isArray(faqData)
    ? faqData
    : faqData?.items || faqData?.faqs || [];
  if (!items || items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  crumbs: Array<{ name: string; item: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http")
        ? crumb.item
        : `${SITE_URL}${crumb.item.startsWith("/") ? crumb.item : `/${crumb.item}`}`,
    })),
  };
}
