"use client";

// import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import {
  Hospital,
  Landmark,
  Factory,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  PiggyBank,
} from "lucide-react";
interface Industry {
  id: number;
  title: string;
  subtitle: string;
   
  from: string;
  to: string;
  gradient: string;
  color: string;
  line: string;
  position: string;
}

interface Props {
  industry: Industry;
}
const icons = [Hospital, PiggyBank, Factory, GraduationCap, ShoppingBag, Building2, Truck, Landmark];

export default function IndustryCard({ industry }: Props) {
 const Icon = icons[Number(industry.id) - 1];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}       
      transition={{
        duration: 0.35,
      }}
      viewport={{ once: true }}
      className={`absolute ${industry.position}`}
       
    >
      {/*  */}

      <div
        className={`group relative `}
        style={
          {
            "--this-from": `var(${industry.from})`,
            "--this-to": `var(${industry.to})`,
            "--this-color": `var(${industry.color})`,
          } as React.CSSProperties
        }
      >
        <div
          className={`absolute h-px bg-(--this-color) before:size-2 before:rounded-full before:bg-(--this-color) before:absolute before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 after:size-2 after:rounded-full after:bg-(--this-color) after:absolute after:right-0 after:top-1/2 after:translate-x-1/2 after:-translate-y-1/2 hidden sm:block ${industry.line}`}
        ><span className="size-2 rounded-full bg-(--this-color) absolute top-1/2 translate-x-1/2 -translate-y-1/2 animate-slide"></span></div>
        {/* Glow */}

        <motion.div
          whileHover={{
            y: -10,
            
          }}
          transition={{
            duration: 0.35,
          }}
          className="relative before:absolute before:inset-0 before:rounded before:opacity-0 before:blur before:transition hover:before:opacity-50 before:bg-linear-to-br before:from-(--this-from) before:to-(--this-to)"
        >
          <div className="relative flex flex-col sm:flex-row items-center gap-1 sm:gap-2 rounded bg-white  p-2 sm:pr-3 shadow-2 w-32 sm:w-auto">
            {/* Icon */}

            <div
              className={`size-8 sm:size-12 shrink-0 rounded bg-linear-to-br flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden from-(--this-from) to-(--this-to)`}
              style={{
                background: industry.color,
              }}
            >
              <Icon                
                strokeWidth={2}
                className="size-5 sm:size-6 text-white relative"
              />
            </div>

            {/* Text */}

            <div className="text-center sm:text-left">
              <h3 className="text-sm font-medium text-slate-900">
                {industry.title}
              </h3>

              <p className="text-xs text-slate-500">{industry.subtitle}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
