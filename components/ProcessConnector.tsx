"use client";

import { motion } from "framer-motion";

interface Props {
  vertical?: boolean;
}

export default function ProcessConnector({
 
}: Props) {
   

  return (
    <div className="absolute -translate-y-1/2 left-full w-14 top-1/2 items-center justify-center flex">

      {/* Base Line */}

      <div className="absolute w-full h-0.5 bg-slate-200" />

      {/* Animated Line */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "100%",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="absolute left-0 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
      />

      {/* Animated Dot */}

      <div
        
        className="absolute size-2 rounded-full bg-blue-600 animate-slide-left "
      />

      {/* Arrow */}

      <div className="flex relative size-5 items-center justify-center rounded-full bg-white shadow-md">

        <svg
          
          viewBox="0 0 24 24"
          fill="none" className="size-3"
        >
          <path
            d="M5 12H19"
            stroke="#2563EB"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M13 6L19 12L13 18"
            stroke="#2563EB"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

    </div>
  );
}