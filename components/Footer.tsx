"use client";
import FooterCTA from "./FooterCTA";
import FooterBottom from "./FooterBottom";
import siteData from "@/data/site.json";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Code2,
  Grid2X2,
  Monitor,
  Cloud,
  Server,
  Network,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import {
  LinkedInIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "./SocialIcons";
import Link from "next/link";

const socialIconMap: Record<string, typeof LinkedInIcon> = {
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  WhatsApp: WhatsAppIcon,
};

const serviceIcons: (typeof Shield)[] = [
  Shield,
  Code2,
  Grid2X2,
  Monitor,
  Cloud,
  Server,
  Network,
];

export default function Footer() {
  const { footer, contactInfo } = siteData;
  return (
    <footer className="relative bg-[#020817] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.12),transparent_35%)]" />

      <div className="relative z-10">
        <FooterCTA />

        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-6 pb-10 pt-12">
          <div className="grid lg:grid-cols-4 gap-5 divide-x divide-white/10">
            {/* Column 1 */}
            <div className="pr-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded bg-linear-to-r from-secondary to-accent flex items-center justify-center text-2xl font-bold">
                  R
                </div>
                <span className="text-3xl font-bold">
                  RCS <span className="text-blue-400">Tech</span>
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-4 text-sm line-clamp-3">
                {footer.about}
              </p>

              <div className="flex justify-between gap-4 mb-5">
                {contactInfo.social.map((item) => {
                  const Icon = socialIconMap[item.label] ?? LinkedInIcon;
                  const href =
                    item.label === "WhatsApp"
                      ? `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`
                      : item.href;
                  return (
                    <a
                      key={item.label}
                      href={href}
                      target="_blank"
                      rel="nofollow noopener noreferrer external"
                      className="size-10 rounded bg-white/5 flex items-center justify-center hover:bg-(--this-color) transition hover:-translate-y-0.5"
                      style={
                        {
                          "--this-color": `var(${item.color})`,
                        } as React.CSSProperties
                      }
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 bg-white/5 rounded">
                {footer.stats.map((item, index) => {
                  return (
                    <div
                      key={item.label}
                      className={`px-3 py-2 ${index == 0 && "border-r border-white/5"} ${index == 2 && "border-r border-t border-white/5"} ${index == 3 && "border-t border-white/5"}`}
                      style={
                        {
                          "--this-color": `var(${item.color})`,
                        } as React.CSSProperties
                      }
                    >
                      <h4 className="text-xl font-semibold text-(--this-color)">
                        {item.value}
                      </h4>
                      <p className="text-slate-400 text-xs">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="pr-5">
              <h3 className="text-lg font-semibold mb-5 relative after:w-8 after:h-0.5 after:bg-blue-500 after:rounded after:absolute after:-bottom-2 after:left-0">
                Quick Links
              </h3>
              <ul className="text-slate-400 divide-y divide-white/10">
                {footer.quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-400 cursor-pointer transition text-sm flex gap-1 items-center py-3 hover:translate-x-1 hover:bg-blue-500/2"
                    >
                      <ChevronRight className="size-4 text-blue-400" />{" "}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="pr-5">
              <h3 className="text-lg font-semibold mb-5 relative after:w-8 after:h-0.5 after:bg-purple-500 after:rounded after:absolute after:-bottom-2 after:left-0">
                Services
              </h3>
              <ul className="text-slate-400 divide-y divide-white/10">
                {footer.servicesLinks.map((item, index) => {
                  const Icon = serviceIcons[index] ?? Shield;
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="hover:text-purple-400 cursor-pointer transition text-sm flex gap-2 items-center py-3 hover:translate-x-1 hover:bg-purple-500/2"
                      >
                        <Icon className="size-3.5 text-purple-500" />{" "}
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-5 relative after:w-8 after:h-0.5 after:bg-green-500 after:rounded after:absolute after:-bottom-2 after:left-0">
                Contact Info
              </h3>

              <div className="text-slate-400 divide-y divide-white/10 text-sm">
                <div className="flex gap-2 py-3">
                  <MapPin className="size-4.5 text-green-500 shrink-0 relative top-1" />
                  <span>{contactInfo.address}</span>
                </div>

                <div className="flex gap-2 py-3">
                  <Phone className="size-4.5 text-green-500 shrink-0 relative items-center" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-green-500"
                  >
                    {" "}
                    {contactInfo.phone}
                  </a>
                </div>

                <div className="flex gap-2 py-3">
                  <Mail className="size-4.5 text-green-500 shrink-0 relative items-center" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-green-500"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="flex gap-2 py-3">
                  <Clock className="size-4.5 text-green-500 shrink-0 relative items-center" />
                  <span>{contactInfo.hours}</span>
                </div>
              </div>

              <div className="mt-3 px-3 py-2 relative rounded bg-white/3 backdrop-blur-xl hover:-translate-y-1 transition shadow-lg group hover:bg-green-500/5 before:absolute before:inset-0 before:bg-(image:--bg-grid-2) before:bg-[size:5px_5px] before:opacity-20 after:absolute after:inset-0 after:bg-linear-to-r after:from-blue-500/4 after:via-cyan-500/2 after:to-purple-500/4">
                <a className="relative block cursor-pointer z-10" href={`tel:${contactInfo.phone}`}>
                  <h4 className="text-sm font-semibold mb-1 transition group-hover:text-green-500">
                    {footer.call.title}
                  </h4>
                  <p className="text-slate-400 mb-1 text-xs transition group-hover:text-green-400">
                    {footer.call.label}
                  </p>
                  <p>
                    <span                      
                      className="group-hover:text-green-500 transition flex gap-1 items-center text-sm"
                    >
                      Call Now <ArrowRight className="size-4" />
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <FooterBottom />
      </div>
    </footer>
  );
}
