"use client";

import { motion } from "framer-motion";

export default function WorldMap() {
  return (
    <div className="relative">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 size-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-[120px]"
      />

      <svg
        viewBox="0 0 900 520"
        className="relative w-full"
      >

        {/* ================================= */}

        {/* Connection Lines */}

        {/* ================================= */}

        <g
          stroke="#93c5fd"
          strokeWidth="2"
          fill="none"
          opacity=".55"
        >

          <path d="M450 260 C330 130 180 90 90 60" />
          <path d="M450 260 C610 130 760 80 840 90" />

          <path d="M450 260 C250 250 80 260 40 250" />
          <path d="M450 260 C670 260 830 260 870 250" />

          <path d="M450 260 C280 380 120 430 80 470" />
          <path d="M450 260 C620 380 760 440 820 470" />

        </g>

        {/* ================================= */}

        {/* World Map */}

        {/* ================================= */}

        <g
          fill="#dbeafe"
          opacity=".9"
        >

          {/* North America */}

          <path d="M120 135
                   C140 110 180 100 210 120
                   C235 145 220 170 190 185
                   C150 195 115 180 100 155
                   C95 145 105 140 120 135Z"/>

          {/* South America */}

          <path d="M230 235
                   C250 250 260 275 255 315
                   C250 355 235 390 215 420
                   C200 400 195 365 205 330
                   C212 290 220 255 230 235Z"/>

          {/* Europe */}

          <path d="M400 130
                   C425 115 455 118 470 140
                   C455 155 425 160 405 148Z"/>

          {/* Africa */}

          <path d="M430 180
                   C455 210 462 250 450 310
                   C440 340 420 355 395 330
                   C395 280 405 225 430 180Z"/>

          {/* Asia */}

          <path d="M505 125
                   C575 90 700 105 760 165
                   C705 205 630 220 555 195
                   C510 175 495 150 505 125Z"/>

          {/* Australia */}

          <path d="M690 360
                   C735 345 780 355 795 385
                   C770 405 720 408 690 390Z"/>

        </g>

        {/* ================================= */}

        {/* Center Logo */}

        {/* ================================= */}

        <motion.g
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          <circle
            cx="450"
            cy="260"
            r="58"
            fill="#2563eb"
          />

          <circle
            cx="450"
            cy="260"
            r="76"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeDasharray="10 10"
            fill="none"
          />

        </motion.g>

        <circle
          cx="450"
          cy="260"
          r="48"
          fill="white"
        />

        <text
          x="450"
          y="252"
          textAnchor="middle"
          className="fill-slate-900 text-[20px] font-bold"
        >
          RCS
        </text>

        <text
          x="450"
          y="278"
          textAnchor="middle"
          className="fill-blue-600 text-[10px] font-semibold tracking-[3px]"
        >
          INFRA TECH
        </text>

        {/* ================================= */}

        {/* Animated Nodes */}

        {/* ================================= */}

        {[
          [90,60],
          [840,90],
          [40,250],
          [870,250],
          [80,470],
          [820,470],
        ].map(([x,y],i)=>(
          <motion.g
            key={i}
            animate={{
              scale:[1,1.6,1],
              opacity:[1,.4,1],
            }}
            transition={{
              duration:2,
              delay:i*.4,
              repeat:Infinity,
            }}
          >

            <circle
              cx={x}
              cy={y}
              r="8"
              fill="#2563eb"
            />

            <circle
              cx={x}
              cy={y}
              r="16"
              fill="#3b82f6"
              opacity=".15"
            />

          </motion.g>
        ))}

      </svg>
    </div>
  );
}