"use client";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Globe,
  ArrowUp,
  type LucideIcon,
} from "lucide-react";
import USPIconCard from "./USPIconCard";
import siteData from "@/data/site.json";
import { motion } from "framer-motion";
const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Globe,
};

export default function FooterBottom() {
  const { usp, legalLinks, copyright } = siteData.footer;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 200);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* USP Strip */}
      <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }} className="border-y border-white/10 bg-white/0">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usp.map((item) => (
              <USPIconCard
                key={item.title}
                icon={iconMap[item.icon]}
                title={item.title}
                description={item.description}
                color={item.color as "blue" | "purple" | "green"| "orange"}
                
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }} className="relative">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-slate-500 text-xs">
              Copyright &copy; {new Date().getFullYear()} {copyright}
            </p>

            <div className="flex items-center gap-8 text-xs text-slate-400">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-blue-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          aria-hidden={!showBackToTop}
          tabIndex={showBackToTop ? 0 : -1}
          className={`fixed bottom-8 right-8 cursor-pointer size-10 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 shadow-xl flex items-center justify-center hover:scale-110 transition z-50 ${
            showBackToTop
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      </motion.div>
    </>
  );
}