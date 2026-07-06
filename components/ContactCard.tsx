import { Phone, Mail, ChevronRight } from "lucide-react";
import {WhatsAppIcon} from './SocialIcons'

const iconMap = {
  call: Phone,
  email: Mail,
  whatsapp: WhatsAppIcon,
};

const colorMap = {
  call: {
    bg: "from-purple-500 to-purple-600",
    icon: "text-white",
    arrow: "bg-blue-50 text-blue-500",
  },
  email: {
    bg: "from-orange-500 to-orange-600",
    icon: "text-white",
    arrow: "bg-cyan-50 text-cyan-500",
  },
  whatsapp: {
    bg: "from-green-500 to-green-600",
    icon: "text-white",
    arrow: "bg-green-50 text-green-500",
  },
};

type ContactType = "call" | "email" | "whatsapp";

interface ContactCardProps {
  type: ContactType;
  title: string;
  subtitle: string;
  value: string;
}

const useColors = {
  purple: "--color-purple-500",   
  orange: "--color-orange-500",
  green: "--color-green-500",
};

const accentMap: Record<ContactType, keyof typeof useColors> = {
  call: "purple",
  email: "orange",
  whatsapp: "green",
};

function getHref(type: ContactType, value: string) {
  const digits = value.replace(/[^\d+]/g, "");

  switch (type) {
    case "call":
      return `tel:${digits}`;
    case "email":
      return `mailto:${value}`;
    case "whatsapp":
      return `https://wa.me/${digits.replace(/^\+/, "")}`;
  }
}

export default function ContactCard({
  type,
  title,
  subtitle,
  value,
}: ContactCardProps) {
  const Icon = iconMap[type];
  const styles = colorMap[type];
  const useColor = useColors[accentMap[type]];
  const href = getHref(type, value);

  return (
    <a
      href={href}
      target={type === "whatsapp" ? "_blank" : undefined}
      rel={type === "whatsapp" ? "noopener noreferrer" : undefined}
      aria-label={`${title}: ${value}`}
      className="group block bg-white rounded p-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-500 relative before:absolute before:-bottom-3 before:-right-3 before:w-24 before:h-18 before:opacity-20 before:bg-linear-to-tl before:from-(--this-color) before:to-transparent before:rounded-tl-full before:rounded-br before:blur-md overflow-hidden" style={{ "--this-color": `var(${useColor})` } as React.CSSProperties}>
      <div className="flex flex-col sm:flex-row text-center sm:text-left items-center sm:items-start gap-2">
        {/* Icon */}
        <div
          className={`size-8 shrink-0 rounded bg-linear-to-br ${styles.bg} flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
        >
          <Icon className="size-4 text-white relative" />
        </div>

        {/* Content */}
        <div className="">
          <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
          <p className="text-slate-500 text-xs">{subtitle}</p>
        </div>
      </div>

      <p className="text-xs font-semibold text-slate-900 mt-2 break-all">
        {value}
      </p>

      {/* Arrow */}
      <span
        className={`size-5 absolute right-2 bottom-2 rounded-full border border-(--this-color) bg-white flex items-center justify-center group-hover:bg-(--this-color) group-hover:text-white transition`}
      >
        <ChevronRight className="size-3" />
      </span>
    </a>
  );
}
