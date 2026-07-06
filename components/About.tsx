"use client";
import siteData from "@/data/site.json";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Lightbulb,
  Headphones,
  BriefcaseBusiness,
  Star,
} from "lucide-react";
import Image from "next/image";

const icons = [ShieldCheck, Users, Lightbulb, Headphones];
const statsIcons = [Users, BriefcaseBusiness, Headphones, Star];

export default function About() {
  const { about } = siteData;

  return (
    <section id="about" className="bg-white pt-16 pb-8 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <div className="flex flex-col-reverse md:grid items-start gap-5 lg:gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0.5, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="col-span-7 xl:col-span-6"
          >
            <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
              {about.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight sm:mb-3 after:w-10 after:h-0.5 after:bg-linear-to-r after:from-secondary after:to-accent after:rounded after:mb-3 sm:after:mb-6 after:block">
              <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent ">
                {about.highlight}
              </span>
            </h2>
             
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 md:mb-10">
              {about.description}
            </p>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
              {about.features.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="text-center shadow-1 rounded px-1 py-2 lg:py-3"
                  >
                    <div className="size-10 flex items-center justify-center mx-auto">
                      <Icon className="size-8 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-base">{feature.title}</h3>
                    <p className="text-slate-500 text-xs leading-snug">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center items-center col-span-5 xl:col-span-6"
          >
            <div className="relative w-full max-h-125 flex justify-center">
              <div className="relative lg:max-w-md">
                <Image
                  src="/images/about-building-new-2.png"
                  alt="About"
                  width={1000}
                  height={500}
                  className="object-cover h-auto max-w-full max-h-full "
                />

                <div className="absolute bottom-10 left-0 bg-linear-to-r from-secondary to-accent shadow-xl rounded p-3 lg:px-5 animate-float flex gap-2">
                  <div className="relative flex items-center justify-center size-10 rounded-full bg-radial from-blue-500 to-blue-900 overflow-hidden shrink-0 before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded-full before:bg-[#081B44] before:blur-lg">
                    <Users className="size-5 text-white relative z-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white text-xl lg:text-2xl font-bold leading-none">
                      500+
                    </h4>
                    <p className="leading-none text-sm text-white">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
            {about.stats.map((stat, index) => {
              const Icon = statsIcons[index];
              return (
                <div key={index} className="flex gap-2 items-center">
                  <div className="relative flex items-center justify-center size-14 rounded-full bg-radial from-blue-500 to-blue-900 shadow-xl before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded-full before:bg-[#081B44] before:blur shrink-0">
                    <Icon className="size-7 text-white relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-xl xl:text-2xl font-medium text-white">
                      {stat.number}
                    </h3>
                    <p className="text-sm xl:text-base text-blue-100">{stat.label}</p>
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
