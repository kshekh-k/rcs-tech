import type { LucideIcon } from "lucide-react";

type Color = "blue" | "purple" | "green" | "orange";

const COLOR_STYLES: Record<Color, { badge: string;  icon: string }> = {
  blue: {
    badge: "bg-blue-500/10", 
    icon: "text-blue-400",
  },
  purple: {
    badge: "bg-purple-500/10", 
    icon: "text-purple-400",
  },
  green: {
    badge: "bg-green-500/10", 
    icon: "text-green-400",
  },
  orange: {
    badge: "bg-orange-500/10", 
    icon: "text-orange-400",
  },
};

interface USPIconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: Color;
  glow?: boolean;
}

export default function USPIconCard({
  icon: Icon,
  title,
  description,
  color = "blue",
  glow = color === "blue",
}: USPIconCardProps) {
  const styles = COLOR_STYLES[color];

  return (
    <div className="flex items-center gap-4">
      <div
        className={`size-10 rounded flex items-center justify-center  relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-10 before:rounded-full before:bg-white/5 before:blur overflow-hidden ${styles.badge} `}
      >
        <Icon className={`size-5 relative ${styles.icon}`} />
      </div>
      <div>
        <h4 className="font-semibold text-slate-300 leading-tight text-sm">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
