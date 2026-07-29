"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Upliner from "./ui/upliner";

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
}
const colorMap = [
  {
    from: "from-blue-600",
    to: "to-cyan-500",
    border: "hover:border-blue-300",
    glow: "group-hover:shadow-blue-200/50",
  },
  {
    from: "from-purple-600",
    to: "to-pink-500",
    border: "hover:border-purple-300",
    glow: "group-hover:shadow-purple-200/50",
  },
  {
    from: "from-green-600",
    to: "to-emerald-500",
    border: "hover:border-green-300",
    glow: "group-hover:shadow-green-200/50",
  },
  {
    from: "from-orange-500",
    to: "to-amber-500",
    border: "hover:border-orange-300",
    glow: "group-hover:shadow-orange-200/50",
  },
];
const useColors = [
  "--color-blue-500",
  "--color-purple-500",
  "--color-green-500",
  "--color-orange-500",
];

export default function FAQ({ badge, title, subtitle, items }: Props) {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-slate-300/20 border-t border-slate-200 pt-16 pb-8 lg:py-24 xl:py-32">
      {/* Background */}

      <div className="relative mx-auto max-w-5xl px-4">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          {badge && <Upliner upline={badge} />}

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-extrabold leading-tight sm:mb-3">
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
              {title}
            </span>{" "}
            FAQs
          </h2>

          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 mb-3 md:mb-5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion */}

        <div className="space-y-5 mt-5 md:mt-10">
          {items.map((faq, index) => {
            const isOpen = active === index;
            const color = useColors[index % useColors.length];
            const colors = colorMap[index % colorMap.length];
            return (
              <motion.div
                key={faq.question}
                layout
                className={`group relative bg-white rounded  shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden `}
                style={
                  { "--this-color": `var(${color})` } as React.CSSProperties
                }
              >
                 <div className="absolute -bottom-3 -right-3 w-32 h-24 opacity-20 bg-linear-to-tl from-(--this-color) to-transparent rounded-tl-full rounded-br blur-md"></div>
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="flex relative w-full items-center justify-between gap-6 p-4 text-left"
                >
                  <div className="flex items-center gap-2 xl:gap-4">
                   <div
                      className={`size-8 lg:size-10 xl:size-12 shrink-0 rounded bg-linear-to-br ${colors.from} ${colors.to} flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
                    >
                      <span className="text-sm xl:text-base font-semibold text-white relative">{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <h3 className="text-sm lg:text-base xl:text-lg font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`size-5 text-(--this-color) transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-slate-200 p-4">
                         
                          <p className="leading-8 text-slate-600">
                            {faq.answer}
                          </p>
                         
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
