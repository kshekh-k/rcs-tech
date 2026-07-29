"use client";

import { motion } from "framer-motion";
import {
  SearchCheck,
  ShieldCheck,
  Radar,
  Siren,
  ArrowRight,
} from "lucide-react";
import Upliner from "./ui/upliner";
import Link from "next/link";

interface TimelineItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface Props {
  badge?: string;
  title: string;
  highlight: string;
  titleend: string;
  subtitle?: string;
  items: TimelineItem[];
}

const iconMap = {
  SearchCheck,
  ShieldCheck,
  Radar,
  Siren,
} as const;

const colors = [
  {
    from: "from-green-600",
    to: "to-emerald-500",
  },
  {
    from: "from-blue-600",
    to: "to-cyan-500",
  },

  
  {
    from: "from-purple-600",
    to: "to-pink-500",
  },
  {
    from: "from-orange-500",
    to: "to-amber-500",
  },
];

const useColors = [
  "--color-green-500",
  "--color-blue-500",  
  "--color-purple-500",
  "--color-orange-500",
];
export default function Timeline({
  badge,
  title,
  highlight,
  titleend,
  subtitle,
  items,
}: Props) {
  return (
    <section className="relative bg-slate-300/20 border-t border-slate-200 pt-16 pb-8 lg:py-24 xl:py-32">
      {/* Background */}

      <div className="absolute translate-x-1/2 translate-y-1/2 right-0 bottom-0 size-140 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {badge && <Upliner upline={badge} />}

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-extrabold leading-tight sm:mb-3">
            {title}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
              {highlight}
            </span>{" "}
            {titleend}
          </h2>

          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 mb-3 md:mb-5">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-5 md:mt-10">
          <div className="absolute left-1/2 top-20 hidden h-[calc(100%-150px)] w-1 -translate-x-1/2 rounded-full bg-(image:--bg-timeline) lg:block" />

          <div className="gap-4 lg:gap-8 lg:gap-y-14 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
            {items.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              const useColor = useColors[index % useColors.length];
              const color = colors[index % colors.length];

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`flex w-full ${
                    index % 2 !== 0 ? "flex-row-reverse" : ""
                  }`}
                  style={
                    {
                      "--this-color": `var(${useColor})`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className={`relative lg:w-1/2 ${index % 2 !== 0 ? "lg:pl-20" : "lg:pr-20"}`}
                  >
                    <div
                      className={`group relative bg-white rounded  shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden `}
                    >
                      <div className="absolute -bottom-3 -right-3 w-32 h-24 opacity-20 bg-linear-to-tl from-(--this-color) to-transparent rounded-tl-full rounded-br blur-md"></div>
                      <div className="relative p-4 ">
                        <span className="absolute right-2 top- text-xl font-black text-slate-200">
                          {item.number}
                        </span>
                        <div className="flex gap-3 items-start mb-2 pb-3 border-b border-slate-200">
                          <div
                            className={`size-12 shrink-0 rounded bg-linear-to-br ${color.from} ${color.to} flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
                          >
                            <Icon className="sizw-6 text-white relative" />
                          </div>

                          <h3 className="text-base sm:text-lg md:text-xl relative font-medium text-slate-900 after:w-8 after:h-0.5 after:bg-(--this-color) after:rounded after:absolute after:-bottom-2 after:left-0">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm line-clamp-3">
                          {item.description}
                        </p>

                         
                      </div>
                    </div>

                    <div
                      className={`size-14 shrink-0 rounded-full bg-linear-to-br ${color.from} ${color.to} hidden lg:flex items-center justify-center shadow-lg before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden absolute top-1/2 -translate-y-1/2 ${index % 2 !== 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
                    >
                      <Icon className="sizw-6 text-white relative" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
