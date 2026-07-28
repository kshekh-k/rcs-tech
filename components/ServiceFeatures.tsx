"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  DatabaseZap,
  Laptop,
  MailCheck,
  Cpu,
  Bug,
  Fingerprint,
  Radar,
  CheckCircle2,
  Check,
} from "lucide-react";

import { ServiceFeature } from "@/types/service";
import Upliner from "./ui/upliner";

interface Props {
  services: ServiceFeature[];
}
const iconMap = {
  Shield,
  DatabaseZap,
  Laptop,
  MailCheck,
  Cpu,
  Bug,
  Fingerprint,
  Radar,
} as const;

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

export default function ServiceFeatures({ services }: Props) {
  return (
    <section className="relative bg-slate-300/20 py-20 lg:py-28">
      {/* Background */}

      <div className="absolute translate-x-1/4 translate-y-1/4 bottom-0 right-0 size-40 lg:size-96 bg-purple-500 rounded-full blur-3xl opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Upliner upline={"Security Solutions"} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-extrabold leading-tight sm:mb-3">
            Comprehensive{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
              Cybersecurity
            </span>{" "}
            Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 mb-3 md:mb-5">
            From proactive threat prevention to continuous monitoring and rapid
            incident response, our cybersecurity solutions help organisations
            strengthen resilience and protect critical business assets.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            const color = useColors[index % useColors.length];
            const colors = colorMap[index % colorMap.length];

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group relative bg-white rounded  shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden `}
                style={
                  { "--this-color": `var(${color})` } as React.CSSProperties
                }
              >
                <div className="absolute -bottom-3 -right-3 w-32 h-24 opacity-20 bg-linear-to-tl from-(--this-color) to-transparent rounded-tl-full rounded-br blur-md"></div>
                <div className="relative p-4 ">
                  {/* Service Number */}

                  <span className="text-sm font-bold text-(--this-color) absolute top-3 right-3">
                    {String(service.id).padStart(2, "0")}
                  </span>

                  <div className="flex gap-3 items-start mb-3">
                    {/* Icon */}

                    <div
                      className={`size-12 shrink-0 rounded bg-linear-to-br ${colors.from} ${colors.to} flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
                    >
                      <Icon className="sizw-6 text-white relative" />
                    </div>

                    {/* Title */}

                    <h3 className="text-base sm:text-lg md:text-xl relative font-medium text-slate-900 after:w-8 after:h-0.5 after:bg-(--this-color) after:rounded after:absolute after:-bottom-2 after:left-0">
                      {service.title}
                    </h3>
                  </div>
                  {/* Description */}

                  <p className="text-slate-500 leading-relaxed text-sm line-clamp-3">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-slate-200" />

                  {/* Feature List */}
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm  text-slate-400"
                      >
                        <div
                          className={`size-2 rounded-full text-(--this-color) bg-current shrink-0 relative top-1.75`}
                        />
                        <span className="text-sm font-medium text-slate-500">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Divider */}
                  <div className="mt-6 h-px bg-slate-200" />

                  {/* Learn More */}

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="font-semibold text-(--this-color) text-sm flex cursor-pointer items-center gap-2 transition-all group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
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

              <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row p-4 xl:p-10 ">
                {/* Left */}

                <div className="max-w-2xl">
                  <Upliner upline="Tailored Security Solutions" />

                  <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight sm:mb-3">
                    Need a Custom{" "}
                    <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
                      Cybersecurity Strategy?
                    </span>
                  </h3>

                  <p className="mt-2 lg:mt-4 text-sm md:text-base  text-slate-400 leading-relaxed">
                    Every organisation has unique security challenges. Our
                    specialists assess your existing environment, identify
                    potential risks, and design a cybersecurity roadmap aligned
                    with your operational goals, compliance requirements, and
                    future growth.
                  </p>

                  <div className="mt-2 lg:mt-4 flex flex-wrap gap-4">
                    <div className="rounded bg-white/5 px-4 py-3 text-sm font-medium backdrop-blur flex gap-2 items-center text-slate-400 ">
                      <Check className="size-4 shrink-0" /> Security Assessment
                    </div>

                    <div className="rounded bg-white/5 px-4 py-3 text-sm font-medium backdrop-blur flex gap-2 items-center text-slate-400 ">
                      <Check className="size-4 shrink-0" /> Risk Analysis
                    </div>

                    <div className="rounded bg-white/5 px-4 py-3 text-sm font-medium backdrop-blur flex gap-2 items-center text-slate-400 ">
                      <Check className="size-4 shrink-0" /> Compliance Planning
                    </div>
                  </div>
                </div>

                {/* Right */}

                <div className="flex items-center justify-center xl:w-96">
                  <div className="relative flex justify-center items-center shrink-0 size-100 ">
                    {/* Ring */}

                    <div className="absolute inset-0 size-100 items-center justify-center rounded-full bg-purple-500/10 blur opacity-40" />
                    <div className="absolute inset-10 rounded-full bg-dark/20 opacity-40 border border-white/15" />

                    <div className="absolute inset-20 rounded-full border border-white/15 bg-purple-500/5 opacity-40" />
                    <div className="flex flex-col gap-4 items-center justify-center relative">
                      <Link
                        href="/contact"
                        className="rounded bg-secondary bg-linear-to-r from-secondary to-accent text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white shadow-lg shadow-secondary/30 transition hover:to-transparent flex gap-2 items-center w-full"
                      >
                        Request Security Assessment
                        <ArrowRight className="size-4" />
                      </Link>

                      <Link
                        href="tel:+919122116041"
                        className="rounded bg-white/5 hover:bg-secondary text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white backdrop-blur transition-colors text-center w-full"
                      >
                        Talk to a Security Expert
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
