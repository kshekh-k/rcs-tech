export const SITE_URL = "https://www.rcsinfratech.com";

export const routes = [
  {
    title: "Home",
    path: "",
    description: "Enterprise IT Solutions",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    title: "About",
    path: "/about",
    description: "Learn about RCS Infra Tech",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    title: "Services",
    path: "/services",
    description: "Explore our technology solutions",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    title: "Contact",
    path: "/contact",
    description: "Get in touch with us",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    title: "Blog",
    path: "/blog",
    description: "Latest news and insights",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
    description: "Privacy & Data Protection",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    title: "Terms & Conditions",
    path: "/terms-and-conditions",
    description: "Terms of Use",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    title: "Sitemap",
    path: "/sitemap.html",
    description: "Terms of Use",
    priority: 0.5,
    changeFrequency: "yearly",
  },
] as const;