import {
  Layers3,
  Users,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  TrendingUp,
 
} from "lucide-react";

const icons = [Layers3, Users, ShieldCheck, SlidersHorizontal, Zap, TrendingUp];

const colors = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  green: "from-green-500 to-green-600",
  orange: "from-orange-500 to-orange-600",
  pink: "from-pink-500 to-pink-600",
  cyan: "from-cyan-500 to-cyan-600",
};

const useColors = {
  blue: "--color-blue-500",
  purple: "--color-purple-500",
  green: "--color-green-500",
  orange: "--color-orange-500",
  pink: "--color-pink-500",
  cyan: "--color-cyan-500",
};

type WhyItem = {
  id: string;
  title: string;
  description: string;
  color: string;
};

export default function WhyCard({ item }: { item: WhyItem }) {
  const Icon = icons[Number(item.id) - 1];
  const color = colors[item.color as keyof typeof colors];
  const useColor = useColors[item.color as keyof typeof useColors];

  return (
    <div
      className={`group relative bg-white rounded  shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden `}
      style={{ "--this-color": `var(${useColor})` } as React.CSSProperties}
    >
      {/* Decorative Wave */}
      <div className="absolute -bottom-3 -right-3 w-32 h-24 opacity-20 bg-linear-to-tl from-(--this-color) to-transparent rounded-tl-full rounded-br blur-md"></div>
      <div className="relative p-4 ">
        <span className="text-sm font-bold text-(--this-color) absolute top-3 right-3">
          {item.id}
        </span>
        <div className="flex gap-3 items-start mb-3">
          <div
            className={`size-12 shrink-0 rounded bg-linear-to-br ${color} flex items-center justify-center shadow-lg relative before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
          >
            <Icon className="sizw-6 text-white relative" />
          </div>

          <h3 className="text-base sm:text-lg md:text-xl relative font-medium text-slate-900 after:w-8 after:h-0.5 after:bg-(--this-color) after:rounded after:absolute after:-bottom-3 after:left-0">
            {item.title}
          </h3>
        </div>

        <p className="text-slate-500 leading-snug text-sm ">
          {item.description}
        </p>

        {/* <button className="size-6 absolute right-3 bottom-3 rounded-full border border-(--this-color) bg-white flex items-center justify-center group-hover:bg-(--this-color) group-hover:text-white transition cursor-pointer">
          <ChevronRight className="size-3" />
        </button> */}
      </div>
    </div>
  );
}
