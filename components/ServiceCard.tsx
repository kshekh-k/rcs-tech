"use client";

import type { LucideIcon } from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  color: string;
  items: string[];
};

const colorClasses = {
  blue: {
    border: "border-blue-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]",
    icon: "from-blue-500 to-blue-700",
    text: "text-blue-400",
    badge: "text-blue-400",
  },
  cyan: {
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]",
    icon: "from-cyan-500 to-cyan-700",
    text: "text-cyan-400",
    badge: "text-cyan-400",
  },
  purple: {
    border: "border-purple-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]",
    icon: "from-purple-500 to-purple-700",
    text: "text-purple-400",
    badge: "text-purple-400",
  },
  pink: {
    border: "border-pink-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]",
    icon: "from-pink-500 to-pink-700",
    text: "text-pink-400",
    badge: "text-pink-400",
  },
  teal: {
    border: "border-teal-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(20,184,166,0.25)]",
    icon: "from-teal-500 to-teal-700",
    text: "text-teal-400",
    badge: "text-teal-400",
  },
  orange: {
    border: "border-orange-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]",
    icon: "from-orange-500 to-orange-700",
    text: "text-orange-400",
    badge: "text-orange-400",
  },
};

export default function ServiceCard({
  service,
  icon: Icon,
}: {
  service: Service;
  icon: LucideIcon;
}) {
  const colors =
    colorClasses[service.color as keyof typeof colorClasses] ||
    colorClasses.blue;

  return (
    <div
      className={`group relative rounded shadow-xl bg-primary/20
  bg-linear-to-b from-white/4 via-white/6 to-white/2
  backdrop-blur-xl transition-all duration-500 
  hover:-translate-y-3  ${colors.glow}`}
    >
      <div className="absolute inset-0 rounded overflow-hidden">
        <div className="absolute left-[-120%] top-0 h-full w-8/10 bg-linear-to-r from-transparent via-white/3 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[140%]" />
      </div>
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded bg-radial from-white/50 to-transparent pointer-events-none blur opacity-5"></div>
    <div className="p-5 relative" >
      {/* Service Number */}
      <div
        className={`absolute right-3 top-3 py-1 text-sm font-semibold mb-6 ${colors.badge}`}
      >
        {service.id}
      </div>

      <div className="flex gap-3 items-center mb-3">
        {/* Icon */}
        <div
          className={`size-12 relative rounded bg-linear-to-br ${colors.icon} flex items-center justify-center shadow-xl before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44] before:blur before:opacity-50`}
        >
          <Icon className="size-6 text-white relative " />
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium text-white leading-tight">
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-slate-400 mb-3 text-sm leading-snug">
        {service.description}
      </p>

      {/* Items */}
      <ul className="gap-2 mb-3 flex flex-col xl:grid xl:grid-cols-2">
        {service.items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-slate-4 text-slate-400"
          >
            <div className={`size-2 rounded-full ${colors.text} bg-current`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`font-semibold ${colors.text} text-sm flex cursor-pointer items-center gap-2 transition-all group-hover:translate-x-1`}
      >
        Learn More →
      </button>
      </div>
    </div>
  );
}
