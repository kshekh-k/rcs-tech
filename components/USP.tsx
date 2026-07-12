"use client";

import { motion } from "framer-motion";
import siteData from "@/data/site.json";
import customersData from "@/data/customers.json";
import WhyCard from "./WhyCard";
import Image from "next/image";

 

export default function USP() {
  const { whyChooseUs } = siteData;
  const logos = [...customersData.logos, ...customersData.logos];
  return (
    <section className="relative pt-16 pb-8 lg:py-24 xl:py-32 bg-slate-100">
      {/* Background Effects */}
      <div className="absolute -translate-x-1/4 -translate-y-1/4 top-0 left-0 size-40 lg:size-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute translate-x-1/4 translate-y-1/4 bottom-0 right-0 size-40 lg:size-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-3 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
              {whyChooseUs.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
              {whyChooseUs.title}{" "}
              <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
                {whyChooseUs.highlight}
              </span>
            </h2>
            <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed mx-auto max-w-2xl ">
              {whyChooseUs.subtitle}
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10"
          >
            {whyChooseUs.items.map((item) => (
              <WhyCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

        <div className="relative mt-10 lg:mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-6 xl:gap-10">
            {logos.map((customer, i) => (
              <div
                key={`${customer.name}-${i}`}
                className="flex shrink-0 w-20 h-12 lg:w-40 lg:h-20 items-center justify-center"
              >
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  width={140}
                  height={48}
                  className="opacity-70 w-auto h-auto max-w-18 max-h-12 lg:max-w-32 lg:max-h-18 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
