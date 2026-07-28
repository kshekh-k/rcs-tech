"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

import { Hero } from "@/types/service";
import Upliner from "./ui/upliner";

interface Props {
  hero: Hero;
}
const ctaColor = [
  "--color-blue-500",
  "--color-purple-500",
  "--color-green-500",
  "--color-orange-500",
];
export default function ServiceHero({ hero }: Props) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pb-8 pt-16 lg:pt-24 lg:pb-24 lg:min-h-screen flex items-center before:absolute before:inset-0 before:bg-(image:--bg-grid-2) before:bg-[size:20px_20px] before:opacity-20"
    >
      <div className="absolute -left-20 top-20 size-96 rounded-full bg-blue-500/20 blur-[120px] hidden lg:block" />
      <div className="absolute -right-20 -bottom-20 size-112 rounded-full bg-dark blur-[140px] hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-3 lg:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <Upliner upline={hero.badge} />
            {/* Heading */}
            <h1 className="mt-2 lg:mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
              {hero.title}{" "}
              <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </h1>
            {/* Description */}

            <p className="mt-2 lg:mt-4 xl:mt-6 max-w-xl text-sm sm:text-base xl:text-lg leading-relaxed text-white/70">
              {hero.description}
            </p>

            {/* CTA */}

            <div className="mt-2 lg:mt-4 xl:mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded bg-secondary bg-linear-to-r from-secondary to-accent text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white shadow-lg shadow-secondary/30 transition hover:to-transparent flex gap-2"
              >
                {hero.primaryButton}

                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="rounded bg-white/5 hover:bg-secondary text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-3 font-semibold text-white backdrop-blur transition-colors"
              >
                {hero.secondaryButton}
              </Link>
            </div>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
             
              {hero.highlights.map((item, index) => {
                const color = ctaColor[index];
                return (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                    style={
                      { "--this-color": `var(${color})` } as React.CSSProperties
                    }
                  >
                    <div
                      className={`size-12 rounded flex items-center justify-center relative bg-(--this-color)/5 text-(--this-color) before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-10 before:rounded-full before:bg-white/5 before:blur overflow-hidden`}
                    >
                      <CheckCircle2 className={`size-6 relative  `} />
                    </div>

                    <span className="text-slate-400 font-semibold text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Background Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Outer Circle */}

            <div className="relative flex h-[500px] w-[500px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur">
              {/* Ring */}

              <div className="absolute inset-10 rounded-full border border-white/10" />

              <div className="absolute inset-20 rounded-full border border-cyan-400/10" />

              {/* Center Shield */}

              <div className="relative flex h-36 w-36 items-center justify-center rounded-[32px] bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_20px_80px_rgba(14,165,233,.35)]">
                <ShieldCheck className="h-16 w-16 text-white" />
              </div>

              {/* Top */}

              <FloatingCard
                title="24×7 SOC"
                position="top-10 left-1/2 -translate-x-1/2"
              />

              {/* Left */}

              <FloatingCard
                title="Firewall"
                position="left-4 top-1/2 -translate-y-1/2"
              />

              {/* Right */}

              <FloatingCard
                title="Endpoint"
                position="right-4 top-1/2 -translate-y-1/2"
              />

              {/* Bottom Left */}

              <FloatingCard
                title="Email Security"
                position="bottom-12 left-16"
              />

              {/* Bottom Right */}

              <FloatingCard title="IAM" position="bottom-12 right-16" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FloatingCardProps {
  title: string;
  position: string;
}

function FloatingCard({ title, position }: FloatingCardProps) {
  return (
    <div
      className={`absolute ${position} rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
          <ShieldCheck className="h-5 w-5 text-white" />
        </div>

        <span className="text-sm font-semibold text-white whitespace-nowrap">
          {title}
        </span>
      </div>
    </div>
  );
}
