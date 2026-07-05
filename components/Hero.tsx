"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/site.json";

export default function Hero() {
  const { hero } = siteData;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pt-32 pb-24 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute -top-40 -right-40 h-130 w-130 rounded-full bg-secondary/30 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-105 w-105 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-5"
        >
          <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            Enterprise IT Solutions
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {hero.headline}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              {hero.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded bg-linear-to-r from-secondary to-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-transform hover:scale-105"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#services"
              className="rounded bg-white/5 hover:bg-secondary px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors"
            >
              {hero.secondaryCta}
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none col-span-7"
        >
          <Image
            src="/images/hero2.svg"
            alt="Modern IT infrastructure dashboard"
            width={640}
            height={560}
            priority
            className="w-full drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
