"use client";
import Image from "next/image";
import {
  CalendarDays,
   
  ArrowRight,
} from "lucide-react";
import FeaturePill from "./FeaturePill";
import { motion } from "framer-motion";
import siteData from "@/data/site.json";
import Link from "next/link";
const ctaColor = ["blue" , "purple" , "green" , "orange"]
export default function CTASection() {
   const { cta } = siteData;
  return (
    <section className="relative pt-16 pb-8 lg:py-24 xl:py-32 bg-[#030712] before:absolute before:inset-0 before:bg-linear-to-r before:from-[#020817] before:via-[#071A44] before:to-[#0B1120]">
  

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 size-125 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 size-125 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0 size-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      {/* Border Glow */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-6">
        <div className="relative rounded border border-blue-500/20 bg-white/2 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.08)]">
          {/* Bottom Gradient Wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-r from-blue-500 via-blue-600 to-purple-500 blur-2xl opacity-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 gap-10 items-center p-3 md:p-5 xl:p-10 relative"
          >
            {/* LEFT */}
            <div className="col-span-7">
              <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
                {cta.badge}
              </span>

              <h2 className="mt-2 sm:mt-0 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {cta.title}{" "}
                <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent sm:inline-block">
                 {cta.highlight}
                </span>
              </h2>

              <p className="mt-2 lg:mt-4 text-sm md:text-base lg:text-lg text-slate-400 leading-relaxed">
                {cta.subtitle}
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-5 mt-5">


 {cta.ctaHighlights.map((item, index) =>{
                  const color = ctaColor[index]
                  return(
                     <FeaturePill
                  key={item.id}
                  title={item.title}
                  desc={item.description}
                  color={color}
                />
                  )
                })}


 
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mt-5 sm:mt-10">
                <Link href="#contact" className="rounded bg-linear-to-r from-secondary to-accent px-5 py-3 text-white font-semibold text-base shadow-[0_0_40px_rgba(59,130,246,0.35)] flex items-center gap-2 transition hover:to-accent/80">
                  <CalendarDays className="size-5" />
                  Book Free Consultation <ArrowRight className="size-4" />
                </Link>

                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 overflow-hidden p-2">
                    <img width={28} height={28}
                      alt=""
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                    />
                    <img width={28} height={28}
                      alt=""
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                    />
                    <img width={28} height={28}
                      alt=""
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      className="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                    />
                    <img width={28} height={28}
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                    />
                  </div>
                  <div>
                    <div className="text-yellow-400">★★★★★</div>
                    <p className="text-slate-400 text-xs">
                      Trusted by 500+ Businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:flex items-center justify-center col-span-5">
              <Image
                src={"/images/database-center.png"}
                width={1080}
                height={500}
                alt=""
                className="object-cover max-w-full animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
