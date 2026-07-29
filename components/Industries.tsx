"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  Factory,
  GraduationCap,
  ShoppingBag,
  Building2,
  Building,
  Truck,
  PiggyBank,
  ArrowRight,
} from "lucide-react";

import { Industries } from "@/types/service";
import Upliner from "./ui/upliner";
import Link from "next/link";
 

interface Props {
  industries: Industries;
}

const industryMap = {
  HeartPulse,
  PiggyBank,
  Factory,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Landmark,
} as const;
 
export default function IndustriesSection({ industries }: Props) {
  return (
    <section className="relative pt-16 pb-8 lg:py-24 xl:py-32 bg-white/20 border-t border-slate-200">
      {/* Background */}

      <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 size-140 rounded-full bg-purple-500 opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Upliner upline={industries.badge} />

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-extrabold leading-tight sm:mb-3">
            {industries.title}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
              {industries.highlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 mb-3 md:mb-5">
            {industries.subtitle}
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-5 md:mt-10">
          {industries.items.map((item, index) => {
            const Icon = industryMap[item.icon as keyof typeof industryMap];
             

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group relative bg-white rounded shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden `}
                style={
                  { "--this-from": `var(${item.from})`,
            "--this-to": `var(${item.to})`,
            "--this-color": `var(${item.color})`, } as React.CSSProperties
                }
              >
                {/* Glow */}

                <div className="absolute -bottom-3 -right-3 w-32 h-24 opacity-20 bg-linear-to-tl from-(--this-color) to-transparent rounded-tl-full rounded-br blur-md"></div>
                <div className="relative p-4 ">
                  {/* Icon */}

                  <div className="flex gap-3 items-start mb-2 pb-3 border-b border-slate-200">
                    {/* Icon */}
                    <div
                      className={`size-12 shrink-0 rounded bg-linear-to-br from-(--this-from) to-(--this-to) flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
                    >
                      <Icon className="sizw-6 text-white relative" />
                    </div>

                    {/* Title */}

                    <h3 className="text-base sm:text-lg md:text-xl relative font-medium text-slate-900 after:w-8 after:h-0.5 after:bg-(--this-color) after:rounded after:absolute after:-bottom-2 after:left-0">
                      {item.title}
                    </h3>
                  </div>
                  {/* Description */}

                  <p className="leading-7 text-slate-600 line-clamp-3 text-sm">
                    {item.desc}
                  </p>

                  {/* <div className="mt-4 h-px bg-slate-200" />
                   
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="font-semibold text-(--this-color) text-sm flex cursor-pointer items-center gap-2 transition-all group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-5 xl:mt-10"
        >
          <div className="relative overflow-hidden bg-dark rounded  before:absolute before:inset-0 before:bg-(image:--bg-grid-2) before:bg-[size:5px_5px] before:opacity-30">
            <div className="relative z-10 before:absolute before:inset-0 before:bg-linear-to-r before:from-blue-600 before:via-blue-700 before:to-blue-900 before:opacity-15">
              {/* Background Glow */}

              {/* Glow Effects */}
              <div className="absolute top-0 left-0 size-48 bg-cyan-500/10 rounded-full blur-[120px]" />
              <div className="absolute tranlate-x-1/4  tranlate-y-1/4 bottom-0 right-0 size-48 bg-purple-500/50 rounded-full blur-[120px]" />
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0 size-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

              <div className="relative flex flex-col items-center justify-between p-4 xl:p-10 ">
                <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight sm:mb-3 text-center">
                  {industries.cta.title}{" "}
                  <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
                    {industries.cta.highlight}
                  </span>
                </h3>

                <p className="mt-2 lg:mt-4 text-sm md:text-base text-center text-slate-400 leading-relaxed max-w-4xl mx-auto">
                  {industries.cta.subtitle}
                </p>
                <div className="flex flex-wrap mt-5 gap-4 items-center justify-center relative">
                  <Link
                    href="/#contact"
                    className="rounded bg-secondary bg-linear-to-r from-secondary to-accent text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white shadow-lg shadow-secondary/30 transition hover:to-transparent flex w-full sm:w-auto justify-center gap-2 items-center "
                  >
                    Request Security Assessment
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    href="https://wa.me/919122116041"
                    className="rounded bg-white/20 hover:bg-secondary text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white backdrop-blur transition-colors text-center flex w-full sm:w-auto justify-center"
                  >
                    Talk to a Security Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
