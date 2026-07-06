import {
  ShieldCheck,
  Rocket,
  Headphones,
  Award,
} from "lucide-react";

const iconMap = {
  blue: ShieldCheck,
  purple: Rocket,
  green: Headphones,
  orange: Award,
};

const colorMap = {
  blue: {
    bg: "bg-blue-500/10",
    icon: "text-blue-400",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  purple: {
    bg: "bg-purple-500/10",
    icon: "text-purple-400",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
  },
  green: {
    bg: "bg-green-500/10",
    icon: "text-green-400",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.15)]",
  },
  orange: {
    bg: "bg-orange-500/10",
    icon: "text-orange-400",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]",
  },
};

type Props = {
  title: string;
  desc: string;
  color: "blue" | "purple" | "green" | "orange";
};

export default function FeaturePill({
  title,
  desc,
  color,
}: Props) {
  const Icon = iconMap[color];
  const styles = colorMap[color];

  return (
    <div className="flex items-center gap-4">
      {/* Icon */}
      <div
        className={`size-12 rounded flex items-center justify-center ${styles.bg}  relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-10 before:rounded-full before:bg-white/5 before:blur overflow-hidden`}
      >
        <Icon className={`size-6 relative ${styles.icon}`} />
      </div>

      {/* Text */}
      <div>
        <h4 className="text-slate-400 font-semibold text-sm sm:text-base">
          {title}
        </h4>
        <p className="text-slate-400 text-xs sm:text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}