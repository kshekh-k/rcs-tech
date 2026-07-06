"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
        scrolled ? "glass shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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
          className="rounded p-2 text-primary lg:hidden"
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
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="glass fixed inset-y-0 left-0 z-50 flex w-72 flex-col overflow-y-auto shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between px-6 py-4">
                <Image src={siteData.logo} alt={siteData.name} width={130} height={33} />
                <button
                  type="button"
                  aria-label="Close menu"
                  className="rounded p-2 text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-1 px-6 pb-6">
                {siteData.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-secondary/10 hover:text-secondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white"
                  >
                    {siteData.consultationCta}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
