"use client";
import {
  SearchCheck,
  DraftingCompass,
  Rocket,
  Gauge,
   CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { ProcessStep } from "@/lib/process";
const icons = [SearchCheck, DraftingCompass, Rocket, Gauge];
interface ProcessCardProps {
  step: ProcessStep;
}

const colorClasses = {
  blue: {
    color: "--color-orange-500",
    from: "--color-orange-500",
    to: "--color-orange-600",    
    text: "--color-orange-600",
    badge: "bg-blue-50",
  },
  cyan: {
     color: "--color-purple-500",
    from: "--color-purple-500",
    to: "--color-purple-600",    
    text: "--color-purple-600",
    badge: "bg-cyan-50",
  },
  indigo: {
    color: "--color-blue-500",
    from: "--color-blue-500",
    to: "--color-blue-600",     
    text: "--color-blue-600",
    badge: "bg-indigo-50",
  },
  teal: {    
    color: "--color-green-500",
    from: "--color-green-500",
    to: "--color-green-600",     
    text: "--color-green-600",
    badge: "bg-teal-50",
  },
};

export default function ProcessCard({ step}: ProcessCardProps) {
 const Icon = icons[Number(step.id) - 1];

  const color = colorClasses[step.color];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
       
      transition={{
        duration: 0.35,
      }}
      className="group relative before:absolute before:inset-0 before:rounded before:opacity-0 before:blur before:transition hover:before:opacity-50 before:bg-linear-to-br before:from-(--this-from) before:to-(--this-to)"
      style={
        {
          "--this-from": `var(${color.from})`,
          "--this-to": `var(${color.to})`,
          "--this-color": `var(${color.text})`,
        } as React.CSSProperties
      }
    >
      <div
        className={`
        relative
        h-full
        rounded
        bg-white
        p-3 md:p-4         
        shadow-1
        transition-all
        duration-300 
        
        
      `}
      >
        {/* Step Number */}

        <div
          className={`
          absolute
          right-2
          top-2
          
          text-xs
          font-bold
          tracking-widest
          text-(--this-color)
        `}
        >
          {step.number}
        </div>

        <div className="flex gap-3 items-start mb-3">
          {/* Icon */}

          <div
            className={`
         size-12 shrink-0 rounded bg-linear-to-br flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden from-(--this-from) to-(--this-to)        
          
        `}
          >
            <Icon strokeWidth={2} className="sizw-6 text-white relative" />
          </div>
          <div className="">
            {/* Title */}

            <h3 className="text-base sm:text-lg md:text-xl relative font-medium text-slate-900  ">
              {step.title}
            </h3>

            {/* Subtitle */}

            <p className={`leading-snug text-sm text-(--this-color)`}>
              {step.subtitle}
            </p>
          </div>
        </div>
        {/* Description */}

        <p className="text-slate-500 leading-snug text-sm line-clamp-3 ">
          {step.description}
        </p>

        {/* Divider */}

        <div className="my-3 h-px bg-slate-100" />

        {/* Features */}

        <ul className="space-y-2">
          {step.features.map((feature) => (
            <li key={feature} className="flex items-center gap-1 text-white/80">
              <CheckCircle2 className="size-3 sm:size-4 shrink-0 text-(--this-color)" />

              <span className="text-slate-500 leading-snug text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Hover Glow */}

        <div
          className={`
          absolute
          inset-0
          rounded-3xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          
           
        `}
          style={{
            filter: "blur(80px)",
            zIndex: -1,
            opacity: 0.08,
          }}
        />
      </div>
    </motion.div>
  );
}
