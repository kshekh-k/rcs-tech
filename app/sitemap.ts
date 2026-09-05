import { MetadataRoute } from "next";
import { SITE_URL, routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const url = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    return {
      url,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    };
  });
}