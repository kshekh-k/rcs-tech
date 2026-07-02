import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import siteData from "@/data/site.json";
import {
  LinkedInIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/SocialIcons";

const socialIconMap: Record<string, typeof LinkedInIcon> = {
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  const { footer } = siteData;

  return (
    <footer className="bg-[#081527] pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo-white.svg"
              alt={siteData.name}
              width={150}
              height={38}
            />
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              {footer.about}
            </p>
            <div className="mt-5 flex gap-3">
              {footer.social.map((s) => {
                const Icon = socialIconMap[s.label] ?? LinkedInIcon;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-secondary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footer.servicesLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {footer.contact.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${footer.contact.phone}`} className="hover:text-accent">
                  {footer.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${footer.contact.email}`} className="hover:text-accent">
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
