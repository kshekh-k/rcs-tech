"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import siteData from "@/data/site.json";
import { submitToSheet } from "@/lib/submitToSheet";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactCTA() {
  const { contact } = siteData;
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitToSheet({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    });

    setStatus(result.success ? "success" : "error");
    setMessage(result.message);

    if (result.success) {
      form.reset();
    }
  }

  return (
    <section id="contact" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
            {contact.text}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="glass-dark rounded-2xl p-8"
        >
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
                placeholder="Your full name"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
                placeholder="you@company.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/80">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-white/80">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
                placeholder="Company name"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
                placeholder="Tell us about your project..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary to-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "loading" ? "Sending..." : contact.cta}
          </button>

          {status === "success" && (
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              {message}
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {message}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
