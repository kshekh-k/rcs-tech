"use client";

import processData from "@/data/process.json";
import { ProcessSectionData } from "@/lib/process";
import ProcessCard from "./ProcessCard";
import ProcessConnector from "./ProcessConnector";

const data = processData as ProcessSectionData;

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative   bg-white/20 py-16 lg:py-24 xl:py-32"
    >
      {/* Background */}

      <div className="absolute translate-x-1/4 -translate-y-1/4 top-0 right-0 size-40 lg:size-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto mb-5 sm:mb-10 md:mb-20 max-w-3xl text-center">
          <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            {data.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {data.title}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              {data.highlight}
            </span>
          </h2>

          <p className="mt-2 lg:mt-4 text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed mx-auto max-w-3xl ">
            {data.description}
          </p>
        </div>

        {/* Desktop */}
        <div className="max-w-full overflow-x-auto xl:overflow-visible px-3 xl:px-0 pb-3">
          <div className="grid grid-cols-4 gap-14 min-w-6xl">
            {data.steps.map((step, index) => (
              <div key={step.id} className="relative">
                <ProcessCard step={step} />
                {index < data.steps.length - 1 && <ProcessConnector />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
