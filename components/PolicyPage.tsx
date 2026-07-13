"use client";

import { ShieldCheck, CalendarDays } from "lucide-react";
import Link from "next/link";
import { PolicyData } from "@/types/policy";
import PolicySidebar from "./PolicySidebar";
import PolicyCard from "./PolicyCard";
 

interface Props {
  data: PolicyData;
}

export default function PolicyPage({ data }: Props) {
  return (
    <>
      {/* Hero */}
 
      <section className="relative overflow-hidden bg-[#071A44] py-24">
        <div className="absolute inset-0 bg-linear-to-r from-[#081B44] via-[#0E2B72] to-[#081B44]" />

        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]" />

         <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-6">
         <span className="inline-flex gap-1 rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            <ShieldCheck className="size-4" />

            {data.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-3 font-extrabold text-white leading-tight">
            {data.title}
          </h1>

          <p className="mt-2 text-lg text-slate-300">
            {data.subtitle}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-blue-200">
            <CalendarDays className="size-4" />
            Last Updated: {data.lastUpdated}
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}

           <aside className="lg:col-span-3">

              <div className="sticky top-28">

                <PolicySidebar sections={data.sections} />

              </div>

            </aside>

          {/* Main */}

          <div className="space-y-6 lg:col-span-9">

              {data.sections.map((section, index) => (

                <PolicyCard
                  key={section.id}
                  number={index + 1}
                  title={section.title}
                  content={section.content}
                  id={section.id}
                />

              ))}

            </div>
        </div>
        </div>
      </section>
    </>
  );
}
