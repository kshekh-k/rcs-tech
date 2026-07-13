"use client";

import { ShieldCheck } from "lucide-react";

interface Props {
  number: number;
  id: string;
  title: string;
  content: string[];
}

export default function PolicyCard({
  number,
  id,
  title,
  content,
}: Props) {
  return (
    <section
      id={id}
      className="group relative scroll-mt-28 overflow-hidden rounded bg-white p-6 md:p-8 shadow-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Background Number */}

      <span className="absolute right-6 top-4 select-none text-7xl font-black text-slate-100 transition group-hover:text-blue-50">
        {String(number).padStart(2, "0")}
      </span>

      {/* Header */}

      <div className="relative flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded bg-linear-to-br from-blue-600 to-cyan-500 shadow-lg">
          <ShieldCheck className="h-6 w-6 text-white" />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-slate-900">
            {title}
          </h2>

          <div className="mt-1 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-cyan-500" />
        </div>
      </div>

      {/* Content */}

      <div className="relative mt-8 space-y-5">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="leading-8 text-slate-600"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Bottom Accent */}

      <div className="mt-8 flex items-center gap-2 border-t border-slate-100 pt-5">
        <span className="h-2 w-2 rounded-full bg-blue-600" />

        <span className="text-sm text-slate-500">
          RCS Infra Tech Policy
        </span>
      </div>
    </section>
  );
}