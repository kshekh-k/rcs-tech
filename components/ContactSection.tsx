"use client";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { BadgeCheck, Clock3, Users } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/site.json";

export default function ContactSection() {
  const { contactInfo } = siteData;
  return (
    <section id="contact" className="relative pt-16 pb-8 lg:py-24 xl:py-32 bg-slate-100/50 border-t border-slate-200 before:absolute before:-translate-x-1/2 before:translate-y-1/2 before:bottom-0 before:left-0 before:w-96 before:h-96 before:rounded-full before:border before:border-blue-100">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-6">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 lg:gap-8 xl:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="col-span-6 lg:col-span-7"
          >
            <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
              CONTACT US
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
              Let’s Build Your IT
              <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block">
                Infrastructure
              </span>
            </h2>

            <p className="mt-2 lg:mt-4 text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed ">
              Connect with our experts and discover tailored IT solutions that
              accelerate growth, improve security, and optimize operations.
            </p>

            {/* Trust Pills */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
              <div className="bg-white rounded p-3 shadow-md flex flex-col sm:flex-row text-center sm:text-left gap-2 items-center">
                <span className="size-8 shrink-0 rounded bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden">
                  <BadgeCheck className="size-4 text-white relative" />
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Free Consultation
                  </h4>
                  <p className="text-xs text-slate-500">No obligation</p>
                </div>
              </div>

              <div className="bg-white rounded p-3 shadow-md flex flex-col sm:flex-row text-center sm:text-left gap-2 items-center">
                <span className="size-8 shrink-0 rounded bg-linear-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden">
                  <Clock3 className="size-4 text-white relative" />
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Response in 24h
                  </h4>
                  <p className="text-xs text-slate-500">We value your time</p>
                </div>
              </div>

              <div className="bg-white rounded p-3 shadow-md flex flex-col sm:flex-row text-center sm:text-left gap-2 items-center">
                <span className="size-8 shrink-0 rounded bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden">
                  <Users className="size-4 text-white relative" />
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Expert Guidance
                  </h4>
                  <p className="text-xs text-slate-500">Professionals</p>
                </div>
              </div>
             

            {/* Contact Cards */}
            
              <ContactCard
                type="call"
                title="Call Us"
                subtitle="Speak with Us"
                value={contactInfo.phone}
              />

              <ContactCard
                type="email"
                title="Email Us"
                subtitle="We reply quickly"
                value={contactInfo.email}
              />

              <ContactCard
                type="whatsapp"
                title="WhatsApp Us"
                subtitle="Chat instantly"
                value={contactInfo.whatsapp}
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
