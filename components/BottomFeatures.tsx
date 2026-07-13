"use client";

import { BriefcaseBusiness, Lightbulb, Target, Handshake } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

const icons = [BriefcaseBusiness, Lightbulb, Target, Handshake];

export default function BottomFeatures({ features }: { features: Feature[] }) {
  return (
    <div
      className="relative rounded bg-white/3 backdrop-blur-xl overflow-hidden
    before:absolute before:inset-0 before:bg-(image:--bg-grid-2) before:bg-[size:5px_5px] before:opacity-20
    "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-linear-to-r from-blue-500/4 via-cyan-500/2 to-purple-500/4"></div>
      <div className="relative z-10 overflow-x-auto max-w-full p-4 xl:px-8">
        <div className="grid grid-cols-4 gap-4 xl:gap-8 min-w-4xl">
          {features.map((feature, index) => {
            const Icon = icons[index];

            return (
              <div key={index} className="group flex gap-4 items-start">
                {/* Glossy Icon */}
                <div className="relative flex items-center justify-center size-12 rounded bg-radial from-blue-500 to-blue-900 shadow-xl before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/10 before:blur shrink-0">
                  <Icon className="size-6 text-white relative z-10" />
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-sm font-semibold text-white transition mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
