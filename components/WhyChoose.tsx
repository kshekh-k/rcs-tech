"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Activity,
  FileCheck2,
  BadgeCheck,
  Award,
  Zap,
  Handshake,
  ArrowRight,
  BriefcaseBusiness,
  ShieldCheck 
} from "lucide-react";

import { Whychoose } from "@/types/service";
import Upliner from "./ui/upliner";
import Link from "next/link";

interface Props {
  whychoose: Whychoose;
}

const iconMap = {
  Compass,
  BadgeCheck,
  Activity,
  FileCheck2,
  Zap,
  Handshake,
} as const;

const colors = [
  {
    from: "from-blue-600",
    to: "to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    from: "from-purple-600",
    to: "to-pink-500",
    bg: "bg-purple-50",
  },
  {
    from: "from-emerald-600",
    to: "to-green-500",
    bg: "bg-green-50",
  },
  {
    from: "from-orange-500",
    to: "to-amber-500",
    bg: "bg-orange-50",
  },
];
const statsIcons = [BriefcaseBusiness, Handshake, Award, ShieldCheck];
const useColors = [
  "--color-blue-500",
  "--color-purple-500",
  "--color-green-500",
  "--color-orange-500",
];

export default function WhyChoose({ whychoose }: Props) {
  return (
    <section className="relative pt-16 pb-8 lg:py-24 xl:py-32 bg-white/20 border-t border-slate-200">
      {/* Background */}

      <div className="absolute -translate-x-1/2 translate-y-1/2 left-0 bottom-0 size-140 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Upliner upline={whychoose.badge} />

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-extrabold leading-tight sm:mb-3">
            {whychoose.title}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
              {whychoose.highlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
            {whychoose.subtitle}
          </p>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 mt-5 md:mt-10">
          {whychoose.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const useColor = useColors[index % useColors.length];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group relative bg-white rounded shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden `}
                style={
                  { "--this-color": `var(${useColor})` } as React.CSSProperties
                }
              >
                <div className="absolute -bottom-3 -right-3 w-32 h-24 opacity-20 bg-linear-to-tl from-(--this-color) to-transparent rounded-tl-full rounded-br blur-md"></div>
                {/* Background Number */}
                <div className="relative p-4 ">
                  <span className="absolute right-2 top- text-xl font-black text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-3 items-start mb-2 pb-3 border-b border-slate-200">
                    {/* Icon */}
                    <div
                      className={`size-12 shrink-0 rounded bg-linear-to-br ${color.from} ${color.to} flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
                    >
                      <Icon className="sizw-6 text-white relative" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl relative font-medium text-slate-900 after:w-8 after:h-0.5 after:bg-(--this-color) after:rounded after:absolute after:-bottom-2 after:left-0">
                      {item.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="text-slate-500 leading-relaxed text-sm line-clamp-3">
                    {item.description}
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

        {/* Bottom Stats */}
 {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 md:mt-10 bg-linear-to-r from-[#081B44] to-[#0A2D6B] rounded  relative before:absolute before:inset-0 before:opacity-80 before:bg-(image:--bg-grid-2) before:bg-[size:5px_5px]"
        >
          <div className="overflow-x-auto max-w-full p-4 md:p-6 relative">
            <div className="grid grid-cols-4 gap-4 lg:gap-8 text-left min-w-5xl">
              {whychoose.stats.map((stat, index) => {
                const Icon = statsIcons[index];
                return (
                  <div key={index} className="flex gap-2 items-center">
                    <div className="relative flex items-center justify-center size-14 rounded-full bg-radial from-blue-500 to-blue-900 shadow-xl before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded-full before:bg-[#081B44] before:blur shrink-0">
                      <Icon className="size-7 text-white relative z-10" />
                    </div>
                    <div>
                      <h3 className="text-base lg:text-xl font-medium text-white">
                        {stat.number}
                      </h3>
                      <p className="text-sm xl:text-base text-blue-100">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
         
      </div>
    </section>
  );
}
