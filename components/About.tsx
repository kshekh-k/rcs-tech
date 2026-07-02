"use client";
import siteData from "@/data/site.json";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, Headphones, BriefcaseBusiness, Star } from "lucide-react";
import Image from "next/image";

const icons = [ShieldCheck, Users, Lightbulb, Headphones, ];
const statsIcons = [Users, BriefcaseBusiness, Headphones, Star, ];

export default function About() {
  const { about } = siteData;

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
              {about.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3">
              <span className="text-secondary">{about.highlight}</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-secondary to-accent rounded mb-6"></div>
            <p className="text-base text-slate-600 leading-relaxed mb-10">
              {about.description}
            </p>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
              {about.features.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="text-center">
                    <div className="size-14 rounded bg-blue-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-base">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-h-125">
              <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>

              <div className="relative">
                <Image
                  src="/images/about-building.png"
                  alt="About"
                  width={1500} height={500}
                  className="object-cover h-auto"
                />
              </div>

              <div className="absolute bottom-10 left-0 bg-white shadow-xl rounded-2xl p-4 animate-float">
                <h4 className="text-blue-600 text-2xl font-bold">500+</h4>
                <p>Clients</p>
              </div>

              <div className="absolute top-10 left-10 w-8 h-8 bg-blue-600 rounded-full"></div>
              <div className="absolute bottom-16 right-10 w-6 h-6 bg-blue-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
        {/* Stats */}
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }} className="mt-20 bg-linear-to-r from-[#081B44] to-[#0A2D6B] rounded-3xl p-4 md:p-6">
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {about.stats.map((stat, index) => {
              const Icon = statsIcons[index];
              return(
              <div key={index} className="flex gap-2">
                <div className="relative flex items-center justify-center size-14 rounded-full bg-radial from-blue-500 to-blue-900 shadow-xl">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 size-14 rounded-full bg-[#081B44] blur"></div>
                  <Icon className="size-7 text-white relative z-10" />
                </div>
                <div>
                <h3 className="text-2xl font-medium text-white">
                  {stat.number}
                </h3>
                <p className="text-blue-100">{stat.label}</p>
                </div>
              </div>
            )})}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
