"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import siteData from "@/data/site.json";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white glass shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-2 px-3 lg:px-6">
        <Link href="#home" className="flex items-center">
          <Image
            src={scrolled ? siteData.logo : siteData.logoWhite}
            alt={siteData.name}
            width={150}
            height={38}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteData.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium  transition-colors uppercase ${scrolled ? 'text-ink/80 hover:text-secondary' : 'text-white hover:text-secondary' }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="rounded bg-secondary uppercase px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-secondary hover:shadow-lg hover:shadow-secondary/30"
          >
            {siteData.consultationCta}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`rounded p-2 lg:hidden ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed min-h-screen min-w-screen inset-0 z-40 bg-black/80 lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="bg-primary flex flex-col fixed min-h-screen inset-y-0 left-0 z-50 gap-2 w-72 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between px-3 py-4 border-b border-white/10">
                <Image src={siteData.logoWhite} alt={siteData.name} width={130} height={33} />
                <button
                  type="button"
                  aria-label="Close menu"
                  className="rounded p-2 text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col px-3 divide-y divide-white/10 flex-1 overflow-y-auto max-h-full">
                {siteData.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3.5 text-sm font-medium text-slate-400 transition-colors hover:bg-secondary/10 hover:text-secondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}                
              </ul>
              <div className="px-3 flex flex-col">
                <Link
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="rounded bg-secondary uppercase justify-center flex gap-1 items-center px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-secondary hover:shadow-lg hover:shadow-secondary/30"
                  >
                    {siteData.consultationCta} <ArrowRight className="size-4" />
                  </Link>
                  <p className="py-2 text-sm text-slate-500 text-center">Text a message at WhatsApp
                  <a className="block text-white text-base font-semibold" href={`https://wa.me/${siteData.contactInfo.whatsapp.replace(/\D/g, "")}`}>
                  {siteData.contactInfo.whatsapp}
                  </a>
                  </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
