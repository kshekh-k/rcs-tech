"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import customersData from "@/data/customers.json";

export default function Customers() {
  const logos = [...customersData.logos, ...customersData.logos];

  return (
    <section className="bg-bg py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            {customersData.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60">
            {customersData.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-6">
          {logos.map((customer, i) => (
            <div
              key={`${customer.name}-${i}`}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-primary/5 bg-white shadow-sm shadow-primary/5"
            >
              <Image
                src={customer.logo}
                alt={customer.name}
                width={140}
                height={48}
                className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
