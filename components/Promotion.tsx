"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/site.json";

export default function Promotion() {
  const { promotion } = siteData;

  return (
    <section className="px-6 py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary px-8 py-16 text-center shadow-2xl shadow-primary/20 sm:px-16"
      >
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/40 blur-[100px]" />

        <div className="relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {promotion.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            {promotion.text}
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105"
          >
            {promotion.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
