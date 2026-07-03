"use client";
import { motion } from "framer-motion";
import servicesData from "@/data/services.json";
import ServiceCard from "./ServiceCard";
import BottomFeatures from "./BottomFeatures";

import {
  ShieldCheck,
  Code2,
  Boxes,
  MonitorSmartphone,
  CloudCog,
  Server,
} from "lucide-react";

const icons = [
  ShieldCheck,
  Code2,
  Boxes,
  MonitorSmartphone,
  CloudCog,
  Server,
];

export default function Services() {
  const { services, bottomFeatures } = servicesData;

  return (
    <section id="services" className="relative bg-primary py-24 lg:py-32">
      {/* Background Effects */}
     {/* Main Background */}
<div className="absolute inset-0 bg-[#030712]" />

{/* Gradient Glow Top Right */}
<div className="absolute top-0 right-0 size-125 rounded-full bg-blue-500/20 blur-[140px] animate-float" />

{/* Gradient Glow Bottom Left */}
<div className="absolute bottom-0 left-0 size-125 rounded-full bg-cyan-500/20 blur-[140px] animate-float" />

{/* Purple Accent */}
<div className="absolute top-1/2 left-1/2 size-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]  animate-float" />

<div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

<div className="absolute top-20 left-20 h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
<div className="absolute top-32 right-32 h-3 w-3 rounded-full bg-cyan-400 animate-pulse"></div>
<div className="absolute bottom-40 left-1/4 h-2 w-2 rounded-full bg-purple-400 animate-pulse"></div>
<div className="absolute bottom-20 right-20 h-3 w-3 rounded-full bg-blue-500 animate-pulse"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            Our Core{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          

          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Complete IT solutions designed to optimize performance, strengthen
            security, and accelerate business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
         <motion.div initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }} className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          {services.map((service) => {
            const Icon = icons[Number(service.id) - 1];
            return(
            <ServiceCard key={service.id} service={service} icon={Icon} />
          )})}
        </motion.div>

        {/* Bottom Features Strip */}
        <motion.div initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }} className="mt-10">
          {/* Part 4 */}
           
               <BottomFeatures features={bottomFeatures} />

        
        </motion.div>
      </div>
    </section>
  );
}
