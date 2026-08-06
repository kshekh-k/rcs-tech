"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  DatabaseBackup,
  LaptopMinimalCheck,
  MailCheck,
  Cpu,
  Bug,
  Fingerprint,
  Radar,
  CloudCog,
  Check,
  Network,
  Wifi,
  Router,
  Lock,
  PhoneCall,
  Settings,
  Globe,
  Server,
  Boxes,
  MonitorSmartphone,
  Shield,
  Activity,
  Zap,
} from "lucide-react";

import { ServiceFeature, ServiceSection } from "@/types/service";
import Upliner from "./ui/upliner";
import Image from "next/image";
 

interface Props {
  services: ServiceSection;
}


const iconMap = {
  ShieldCheck,
  DatabaseBackup,
  LaptopMinimalCheck,
  MailCheck,
  Cpu,
  Bug,
  Fingerprint,
  Radar,
  CloudCog,
  Network,
  Wifi,
  Router,
  Lock,
  PhoneCall,
  Settings,
  Globe,
  Server,
  Boxes,
  MonitorSmartphone,
  Shield,
  Activity,
  Zap,
} as const;
 




const colorMap = [
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
    from: "from-indigo-600",
    to: "to-blue-500",
    bg: "bg-indigo-50",
  },
  {
    from: "from-orange-600",
    to: "to-amber-500",
    bg: "bg-orange-50",
  },
  {
    from: "from-cyan-600",
    to: "to-sky-500",
    bg: "bg-cyan-50",
  },
  {
    from: "from-rose-600",
    to: "to-orange-500",
    bg: "bg-rose-50",
  },
  {
    from: "from-yellow-600",
    to: "to-yellow-500",
    bg: "bg-pink-50",
  },
  {
    from: "from-slate-600",
    to: "to-slate-900",
    bg: "bg-slate-50",
  },
];

const useColors = [
  "--color-blue-600",
  "--color-purple-600",
  "--color-green-600",
  "--color-indigo-600",
  "--color-orange-600",
  "--color-cyan-600",
  "--color-rose-600",
  "--color-yellow-600",
  "--color-slate-600",
];

export default function ServiceFeatures({ services }: Props) {
  return (
    <section className="relative bg-slate-300/20 pt-16 pb-8 lg:py-24 xl:py-32">
      {/* Background */}

      <div className="absolute translRadarate-x-1/4 translate-y-1/4 bottom-0 right-0 size-40 lg:size-96 bg-purple-500 rounded-full blur-3xl opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Upliner upline={services.upline || "Security Solutions"} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 font-extrabold leading-tight sm:mb-3">
            {services.title}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
              {services.highlight}
            </span>{" "}
            {services.titleend}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 mb-3 md:mb-5">
            {services.subtitle}
          </p>
        </motion.div>
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 mt-5 md:mt-10">
          {services.service.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || ShieldCheck;

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
                      href="#contact"
                      className="font-semibold text-(--this-color) text-sm flex cursor-pointer items-center gap-2 transition-all group-hover:translate-x-1"
                    >
                      Contact now
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

              <div className="relative flex flex-col-reverse items-center justify-between gap-10 lg:flex-row p-4 xl:p-10 ">
                {/* Left */}

                <div className="max-w-2xl">
                  <Upliner upline={services.cta.badge} />

                  <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight sm:mb-3">
                    {services.cta.title}{" "}
                    <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
                      {services.cta.highlight}
                    </span>
                  </h3>

                  <p className="mt-2 lg:mt-4 text-sm md:text-base  text-slate-400 leading-relaxed">
                    {services.cta.subtitle}
                  </p>

                  <div className="mt-2 lg:mt-4 flex flex-wrap gap-4">
                    {services.cta.checks.map((item, index) => (
                      <div
                        key={index}
                        className="rounded bg-white/5 px-2 py-1.5 md:px-4 md:py-3 text-sm font-medium backdrop-blur flex gap-2 items-center text-slate-400 w-full sm:w-auto"
                      >
                        <Check className="size-4 shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 items-center justify-start mt-5 relative">
                    <Link
                      href="/#contact"
                      className="rounded bg-secondary bg-linear-to-r from-secondary to-accent text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white shadow-lg shadow-secondary/30 transition hover:to-transparent flex justify-center gap-2 items-center w-full sm:w-auto"
                    >
                      {services.cta.primaryButton || "Request Security Assessment"}
                      <ArrowRight className="size-4" />
                    </Link>

                    <Link
                      href="https://wa.me/919122116041"
                      className="rounded bg-white/5 hover:bg-secondary text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white backdrop-blur transition-colors text-center w-full sm:w-auto flex justify-center"
                    >
                      {services.cta.secondaryButton || "Talk to a Security Expert"}
                    </Link>
                  </div>
                </div>

                {/* Right */}

                <div className="flex items-center justify-center w-full xl:w-96">
                  <div className="relative">
                    {/* Ring */}

                    <div className="absolute inset-0 size-100 items-center justify-center rounded-full bg-purple-500/10 blur opacity-40" />
                    <div className="absolute inset-10 rounded-full bg-dark/20 opacity-40 border border-white/15" />

                    <div className="absolute inset-20 rounded-full border border-white/15 bg-purple-500/5 opacity-40" />

                    <div className="relative max-w-full">
                      <Image
                        src={services.cta.imageSrc || "/images/tailored-security-solutions-2.png"}
                        alt=""
                        width={500}
                        height={500}
                        className="w-auto sm:w-full h-auto border-8 border-white "
                      />
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
