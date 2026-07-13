import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { routes } from "@/lib/routes";
import Layout from "@/components/Layout";

export default function SitemapPage() {
  return (
     
<Layout showCTA={false}>
     <section className="relative overflow-hidden bg-[#071A44] py-24">
        <div className="absolute inset-0 bg-linear-to-r from-[#081B44] via-[#0E2B72] to-[#081B44]" />

        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-6">

          <span className="inline-flex gap-1 rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            <Globe className="size-4" />
            Website Sitemap
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            HTML Sitemap
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Browse every page available on the RCS Infra Tech website.
          </p>

        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {routes.map((page) => (
              <Link
                key={page.path}
                href={page.path || "/"}
                className="group rounded bg-white p-6 shadow-1 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between">

                  <h2 className="text-lg font-semibold text-slate-900">
                    {page.title}
                  </h2>

                  <ArrowRight className="size-5 text-blue-600 group-hover:translate-x-1 transition" />

                </div>

                <p className="mt-3 text-sm text-slate-600">
                  {page.description}
                </p>

                <span className="mt-5 inline-block text-sm font-medium text-blue-600">
                  {page.path || "/"}
                </span>

              </Link>
            ))}

          </div>

        </div>
      </section>
</Layout>
    
  );
}