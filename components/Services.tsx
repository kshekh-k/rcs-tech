"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Boxes,
  MonitorSmartphone,
  AppWindow,
  Server,
  Network,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import servicesData from "@/data/services.json";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Code2,
  Boxes,
  MonitorSmartphone,
  AppWindow,
  Server,
  Network,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-primary py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {servicesData.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            {servicesData.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.items.map((service, i) => {
            const Icon = iconMap[service.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="glass-dark group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent shadow-lg shadow-secondary/20">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.subServices.map((sub) => (
                    <li
                      key={sub}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      {sub}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
