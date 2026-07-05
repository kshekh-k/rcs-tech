"use client";
import { motion } from "framer-motion";

import { FormEvent, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { submitToSheet } from "@/lib/submitToSheet";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitToSheet({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      website: String(formData.get("website") ?? ""),
      message: String(formData.get("message") ?? ""),
    });

    setStatus(result.success ? "success" : "error");
    setMessage(result.message);

    if (result.success) {
      form.reset();
    }
  }

  return (
     <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }} className="relative col-span-5">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 blur-3xl opacity-10 rounded-2xl" />

      <div className="relative bg-white rounded shadow-md p-4 xl:p-8 overflow-hidden before:absolute before:-bottom-3 before:-right-3 before:w-40 before:h-28 before:opacity-20 before:bg-linear-to-tl before:from-purple-500 before:to-transparent before:rounded-tl-full before:rounded-br before:blur-md">
        <div className="relative">
        {/* Header */}
          <div className="flex gap-3 items-start mb-3">
          <div className="size-12 rounded bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden shrink-0">
            <Mail className="sizw-6 text-white relative" />
          </div>
          <div>
          <h3 className="text-xl font-bold text-slate-900">
            Send Us a Message
          </h3>

          <p className="text-slate-500 text-sm">
            Let’s discuss your project requirements
          </p>
          </div>
        </div>


        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Name */}
          <div className="relative pt-2 mt-2">
            <User className="absolute left-4 top-5.5 size-4 text-slate-400 z-10" />
            <input
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className="peer w-full h-11 text-sm rounded border border-slate-300 bg-slate-50 pl-10 pr-4 outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
            />
            <label className="block font-medium text-slate-700 text-sm absolute bg-white top-0 left-3 z-10 px-2 opacity-0 invisible pointer-events-none transition-opacity duration-150 peer-focus:opacity-100 peer-focus:visible peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:visible">
              Full Name <em className="text-red-500 not-italic">*</em>
            </label>
          </div>

          {/* Email */}
          <div className="relative pt-2">
            <Mail className="absolute left-4 top-5.5 size-4 text-slate-400 z-10" />
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="peer w-full h-11 text-sm rounded border border-slate-300 bg-slate-50 pl-10 pr-4 outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
            />
            <label className="block font-medium text-slate-700 text-sm absolute bg-white top-0 left-3 z-10 px-2 opacity-0 invisible pointer-events-none transition-opacity duration-150 peer-focus:opacity-100 peer-focus:visible peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:visible">
              Email <em className="text-red-500 not-italic">*</em>
            </label>
          </div>

          {/* Phone + Company */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="relative pt-2">
              <Phone className="absolute left-4 top-5.5 size-4 text-slate-400 z-10" />
              <input
                name="phone"
                type="text"
                required
                placeholder="Enter your phone"
                className="peer w-full h-11 text-sm rounded border border-slate-300 bg-slate-50 pl-10 pr-4 outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
              />
              <label className="block font-medium text-slate-700 text-sm absolute bg-white top-0 left-3 z-10 px-2 opacity-0 invisible pointer-events-none transition-opacity duration-150 peer-focus:opacity-100 peer-focus:visible peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:visible">
                Phone Number
              </label>
            </div>

            <div className="relative pt-2">
              <Building2 className="absolute left-4 top-5.5 size-4 text-slate-400 z-10" />
              <input
                name="company"
                type="text"
                required
                placeholder="Enter your company"
                className="peer w-full h-11 text-sm rounded border border-slate-300 bg-slate-50 pl-10 pr-4 outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
              />
              <label className="block font-medium text-slate-700 text-sm absolute bg-white top-0 left-3 z-10 px-2 opacity-0 invisible pointer-events-none transition-opacity duration-150 peer-focus:opacity-100 peer-focus:visible peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:visible">
                Company Name
              </label>
            </div>
          </div>

          {/* Service */}
          <div className="relative pt-2">
            <Briefcase className="absolute left-4 top-5.5 size-4 text-slate-400 z-10" />
            <select
              name="website"
              required
              defaultValue=""
              className="peer w-full h-11 text-sm rounded border border-slate-300 bg-slate-50 pl-10 pr-4 outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition appearance-none"
            >
              <option value="">Select a service</option>
              <option>Cybersecurity</option>
              <option>Web & App Development</option>
              <option>ERP Solutions</option>
              <option>Cloud Solutions</option>
              <option>Networking & IT Infra</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-5.5 size-4 text-slate-400 peer-focus:rotate-180 transition" />
            <label className="block font-medium text-slate-700 text-sm absolute bg-white top-0 left-3 z-10 px-2 opacity-0 invisible pointer-events-none transition-opacity duration-150 peer-focus:opacity-100 peer-focus:visible peer-valid:opacity-100 peer-valid:visible">
              Service Interested In <em className="text-red-500 not-italic">*</em>
            </label>
          </div>

          {/* Message */}
          <div className="relative pt-2">
            <textarea
              name="message"
              rows={3}
              required
              placeholder="Tell us about your project or requirements..."
              className="peer w-full text-sm rounded border border-slate-300 bg-slate-50 py-3 px-4 outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition resize-none"
            />
            <label className="block font-medium text-slate-700 text-sm absolute bg-white top-0 left-3 z-10 px-2 opacity-0 invisible pointer-events-none transition-opacity duration-150 peer-focus:opacity-100 peer-focus:visible peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:visible">
              Your Message <em className="text-red-500 not-italic">*</em>
            </label>
          </div>

          {/* Honeypot Anti-spam */}
          <input
            type="text"
            name="bot-field"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* CTA */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded bg-linear-to-r from-secondary to-accent px-5 py-3 text-white font-semibold text-base shadow-[0_0_40px_rgba(59,130,246,0.35)] flex items-center gap-3 hover:scale-105 transition w-full justify-center"
          >
            {status === "loading"
              ? "Submitting..."
              : "Book Free Consultation →"}
          </button>

          {/* Message */}
          {message && (
            <p
              className={`text-center font-medium ${
                status === "success"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* Footer */}
          <div className="flex justify-center items-center gap-2 text-slate-400 text-sm pt-2">
            <ShieldCheck className="w-4 h-4" />
            Your information is secure and confidential.
          </div>
        </form>
      </div>
      </div>
    </motion.div>
  );
}
