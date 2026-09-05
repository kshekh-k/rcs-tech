export const SITE_URL = "https://www.rcsinfratech.com";

export interface RouteItem {
  title: string;
  path: string;
  description: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  isSectionAnchor?: boolean;
}

export const routes: RouteItem[] = [
  {
    title: "Home",
    path: "/",
    description: "Enterprise IT Solutions, Cybersecurity & Cloud Infrastructure Services",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    title: "Cybersecurity Services",
    path: "/cybersecurity",
    description: "Enterprise Cybersecurity, Firewall Management, VAPT, SOC & Endpoint Security",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    title: "Network Solutions",
    path: "/network-solutions",
    description: "Enterprise Networking, WiFi, LAN, Switches, Routers, VPN & NOC Monitoring",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    title: "Server & Cloud Solutions",
    path: "/server-cloud-solutions",
    description: "Cloud Infrastructure Migration, Server Management, AWS, Azure & DevOps",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    title: "Web & App Development",
    path: "/web-app-development",
    description: "Custom Web Applications, Mobile App Development, Next.js & SaaS Architecture",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    title: "SaaS Products",
    path: "/saas-products",
    description: "Certified Enterprise SaaS, Azure, M365, Google Workspace & Zoho Cloud Setup",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    title: "Hardware Solutions",
    path: "/hardware-solutions",
    description: "Corporate Laptops, Enterprise Servers, Smart Touch Panels & Cabling Procurement",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
    description: "Data Protection & Privacy Policy Information",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    title: "Terms & Conditions",
    path: "/terms-and-conditions",
    description: "Terms of Service & Terms and Conditions",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    title: "Sitemap",
    path: "/sitemap.html",
    description: "Complete HTML Website Map and Index",
    priority: 0.4,
    changeFrequency: "yearly",
  },
];