"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Users,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import siteData from "@/data/site.json";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Users,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  TrendingUp,
};

export default function USP() {
  const { whyChooseUs } = siteData;

  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Our Advantage
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {whyChooseUs.title}
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Layers;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-2xl border border-primary/5 bg-white p-7 shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-secondary/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
