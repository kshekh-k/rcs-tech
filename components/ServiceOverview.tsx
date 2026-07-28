"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, Activity } from "lucide-react";

import { Overview } from "@/types/service";
import Upliner from "./ui/upliner";

interface Props {
  overview: Overview;
}
const ctaColor = [
  "--color-blue-500",
  "--color-purple-500",
  "--color-green-500",
  "--color-orange-500",
];
const icons = [ShieldCheck, Activity, Lock, CheckCircle2];

export default function ServiceOverview({ overview }: Props) {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="absolute -translate-x-1/4 -translate-y-1/4 top-0 left-0 size-40 lg:size-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute translate-x-1/4 translate-y-1/4 bottom-0 right-0 size-40 lg:size-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      {/* Background */}

      <div className="relative mx-auto max-w-7xl px-3 lg:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Upliner upline={overview.badge} />

            <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-extrabold leading-tight sm:mb-3 after:w-10 after:h-0.5 after:bg-linear-to-r after:from-secondary after:to-accent after:rounded after:mb-3 sm:after:mb-6 after:block">
              {overview.title}{" "}
              <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
                {overview.highlight}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 mb-3 md:mb-5">
              {overview.description}
            </p>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
              {overview.features.map((item, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={item}
                    className="text-center shadow-1 rounded px-1 py-2 lg:py-3 bg-white"
                  >
                    <div className="size-10 flex items-center justify-center shrink-0 mx-auto">
                      <Icon className="size-8 text-blue-600" />
                    </div>

                    <h3 className="font-medium text-sm">{item}</h3>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden bg-dark rounded  before:absolute before:inset-0 before:bg-(image:--bg-grid-2) before:bg-[size:5px_5px] before:opacity-30">

              <div className="relative z-10 before:absolute before:inset-0 before:bg-linear-to-r before:from-blue-600 before:via-blue-700 before:to-blue-900 before:opacity-15">
                
              {/* Glow Effects */}
              <div className="absolute top-0 left-0 size-48 bg-cyan-500/10 rounded-full blur-[120px]" />
              <div className="absolute tranlate-x-1/4  tranlate-y-1/4 bottom-0 right-0 size-48 bg-purple-500/50 rounded-full blur-[120px]" />
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0 size-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

              {/* Content */}

              <div className="relative p-4 xl:p-6 ">
                <div className="flex gap-3 items-center mb-3">
                  <div className="size-14 rounded flex items-center justify-center bg-linear-to-br from-blue-500 to-blue-700 text-white relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44] before:blur before:opacity-50 overflow-hidden">
                    <ShieldCheck className={`size-8 relative`} />
                  </div>

                  <h3 className="text-xl xl:text-2xl font-medium text-white leading-tight">
                    Cyber Risk Reduction
                  </h3>
                </div>

                <p className="mt-5 text-slate-400 mb-3 text-sm leading-snug">
                  Build a stronger security posture through layered defence,
                  continuous monitoring, proactive threat detection and rapid
                  incident response.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {overview.cyberRiskReduction.map((item, index) => {
                    const color = ctaColor[index % 4];
                    return (
                      <div
                        key={item}
                        className="flex items-center gap-4"
                        style={
                          {
                            "--this-color": `var(${color})`,
                          } as React.CSSProperties
                        }
                      >
                        <div
                          className={`size-10 rounded flex items-center justify-center relative bg-blue-500/5 text-blue-500 before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-10 before:rounded-full before:bg-white/5 before:blur overflow-hidden`}
                        >
                          <CheckCircle2 className="size-5" />
                        </div>
                        <span className="text-slate-400 font-semibold text-sm ">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-white/10 flex gap-4 pt-5 mt-5">
                <div className="size-10 rounded flex items-center justify-center bg-linear-to-br from-cyan-500 to-cyan-600 text-white relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44] before:blur before:opacity-50 overflow-hidden shrink-0"><Lock className="size-5 relative" /></div>
                   
                  <p className="text-slate-400 text-sm">
                    Comprehensive security capabilities designed to protect every layer of your business.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
