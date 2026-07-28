"use client";

import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Activity,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

import { Process } from "@/types/service";

interface Props {
  process: Process;
}

const iconMap = {
  Assess: Search,
  Protect: ShieldCheck,
  Monitor: Activity,
  Respond: ShieldAlert,
} as const;

const colorMap = [
  {
    from: "from-blue-600",
    to: "to-cyan-500",
    line: "bg-blue-500",
  },
  {
    from: "from-purple-600",
    to: "to-pink-500",
    line: "bg-purple-500",
  },
  {
    from: "from-green-600",
    to: "to-emerald-500",
    line: "bg-green-500",
  },
  {
    from: "from-orange-500",
    to: "to-amber-500",
    line: "bg-orange-500",
  },
];

export default function ServiceProcess({
  process,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            {process.badge}
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            {process.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our structured cybersecurity framework helps identify
            risks, strengthen protection, monitor continuously,
            and respond rapidly to emerging threats.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Line */}

          <div className="absolute left-1/2 top-20 hidden h-[calc(100%-120px)] w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500 lg:block" />

          <div className="space-y-12">

            {process.steps.map((step, index) => {

              const Icon =
                iconMap[
                  step.title as keyof typeof iconMap
                ];

              const color =
                colorMap[index % colorMap.length];

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .08,
                  }}
                  className={`relative grid items-center gap-10 lg:grid-cols-2 ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Card */}

                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Number */}

                    <span className="absolute right-6 top-5 text-7xl font-black text-slate-100">
                      {step.number}
                    </span>

                    {/* Icon */}

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color.from} ${color.to} shadow-xl`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="mt-7 text-3xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {step.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600">

                      Next Step

                      <ArrowRight className="h-4 w-4" />

                    </div>

                  </div>

                  {/* Circle */}

                  <div className="hidden lg:flex items-center justify-center">

                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${color.from} ${color.to} shadow-[0_10px_40px_rgba(14,165,233,.35)]`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                  </div>

                </motion.div>
              );

            })}

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#081B44] via-[#0A2B73] to-[#0EA5E9] p-10 text-center shadow-[0_20px_60px_rgba(8,27,68,.18)]">

          <h3 className="text-3xl font-black text-white">
            Proactive Security. Continuous Protection.
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            We combine proactive assessments, layered protection,
            continuous monitoring, and rapid incident response to
            minimise cyber risk and strengthen operational resilience.
          </p>

        </div>

      </div>
    </section>
  );
}