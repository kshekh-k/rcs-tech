"use client";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
export default function FooterCTA() {
  return (
    <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-6 pt-10">
      <div className="relative rounded bg-white/3 backdrop-blur-xl overflow-hidden border border-white/5">
        
         {/* Background Glow */}
      <div className="absolute inset-0 bg-(image:--bg-grid-2) bg-[size:5px_5px] opacity-20"></div>
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/4 via-cyan-500/2 to-purple-500/4"></div>


        <div className="relative z-10 p-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left */}
          <div className="flex items-start gap-4">
            <div className="size-12 rounded flex items-center justify-center bg-green-500/10  relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-10 before:rounded-full before:bg-white/5 before:blur overflow-hidden">
              <Send className="size-6 relative text-green-400" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">
                Let’s Build Something Great Together
              </h2>

              <p className="text-slate-400 text-sm">
                Have a project in mind? Let’s discuss how we can help your business grow.
              </p>
            </div>
          </div>

          {/* Right */}
          <button className="rounded bg-linear-to-r from-secondary to-accent px-5 py-3 text-white font-semibold text-base shadow-[0_0_40px_rgba(59,130,246,0.35)] flex items-center gap-3 hover:scale-105 transition justify-center">
            Get Free Consultation →
          </button>
        </div>
      </div>
    </motion.div>
  );
}