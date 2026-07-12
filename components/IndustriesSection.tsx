"use client";

import industries from "@/data/industries.json";
import IndustryCard from "./IndustryCard";
import WorldMap from "./WorldMap";
import Image from "next/image";

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative py-16 lg:py-24 xl:py-32 bg-slate-100"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -translate-x-1/4 translate-y-1/4 bottom-0 left-0 size-40 lg:size-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute translate-x-1/4 -translate-y-1/4 top-0 right-0 size-40 lg:size-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        {/* Header */}

        <div className="mx-auto mb-5 sm:mb-10 md:mb-20 max-w-3xl text-center">
          <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            Industries We Serve
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
            Technology Solutions for {" "}
           <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>

           <p className="mt-2 lg:mt-4 text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed mx-auto max-w-3xl ">
            Delivering secure infrastructure, cloud platforms, networking,
            enterprise software and cybersecurity solutions tailored to the
            unique needs of every industry.
          </p>
        </div>

        <div className="relative flex justify-center">
          <Image
            src="/images/world-map.svg"
            alt="world map"
            width={1000}
            height={500}
            className="object-cover h-auto max-w-220 max-h-full "
          />
          <div className="bg-white size-20 sm:size-40 absolute shadow-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:size-full before:bg-blue-500 before:absolute before:rounded-full before:scale-115 before:blur-[2px] before:opacity-10 after:size-full after:bg-blue-500 after:blur after:absolute after:rounded-full after:scale-130 after:top-0 after:opacity-20">
            <div className="bg-white size-20 sm:size-40 relative rounded-full z-10 flex justify-center items-center">
              <Image
                src="/images/rcs-logo-round.svg"
                alt="world map"
                width={200}
                height={200}
                className="object-cover h-auto max-w-14 sm:max-w-28 max-h-full "
              />
            </div>
          </div>
          <div className="">
            {/* Industry Cards */}

            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
