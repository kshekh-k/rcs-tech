"use client";

import Image from "next/image";
import Link from "next/link"; 
import { motion } from "framer-motion";
import siteData from "@/data/site.json";
 

export default function Hero() {
  const { hero } = siteData;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pb-8 pt-16 lg:pt-24 lg:pb-24 lg:min-h-screen flex items-center before:absolute before:inset-0 before:bg-grid before:opacity-15"
    >
      
 

      <div className="relative mx-auto max-w-7xl items-center lg:gap-5 px-3 lg:px-6 flex flex-col-reverse md:grid md:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-6 lg:col-span-5 max-w-sm mx-auto md:max-w-none pt-5 md:pt-0 relative z-10"
        >
          <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            {hero.badge}
          </span>

          <h1 className="mt-2 lg:mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
            {hero.headline}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              {hero.highlight}
            </span>
          </h1>

          <p className="mt-2 lg:mt-4 xl:mt-6 max-w-xl text-sm sm:text-base xl:text-lg leading-relaxed text-white/70">
            {hero.subheadline}
          </p>

          <div className="mt-2 lg:mt-4 xl:mt-9 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded bg-linear-to-r from-secondary to-accent text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white shadow-lg shadow-secondary/30 transition-transform hover:scale-105"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#services"
              className="rounded bg-white/5 hover:bg-secondary text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white backdrop-blur transition-colors"
            >
              {hero.secondaryCta}
            </Link>
          </div>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none col-span-6 lg:col-span-7"
        >
          <Image
            src="/images/hero-section-map.svg"
            alt="Modern IT infrastructure dashboard"
            width={1000}
            height={1000}
            priority
            className="sm:min-w-xl xl:min-w-4xl h-auto sm:-translate-x-1/5 xl:-translate-x-1/7"
          />

          {/* <NetworkDiagram /> */}


        </motion.div>
      </div>
    </section>
  );
}
