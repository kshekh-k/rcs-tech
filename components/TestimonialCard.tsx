import { Quote, Star } from "lucide-react";

const colors = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  blueDark: "from-slate-800 to-blue-900",
};


const useColors = {
    blue:'--color-blue-500',
    purple:'--color-purple-500',
    blueDark:'--color-green-500',

}

type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  initials: string;
  color: string;
};

export default function TestimonialCard({
  item,
  featured,
}: {
  item: TestimonialItem;
  featured?: boolean;
}) {
  const color = colors[item.color as keyof typeof colors];
  const useColor = useColors[item.color as keyof typeof useColors];
  return (
    <div className="px-3 py-10" style={{'--this-color': `var(${useColor})`} as React.CSSProperties}>
    <div
      className={`relative bg-white rounded p-5 shadow-lg border transition-all duration-500 overflow-hidden ${
        featured
          ? "scale-105 border-(--this-color) shadow-2xl"
          : "border-slate-100 opacity-90"
      }`}
    >
      {/* Quote Icon */}
      <div
        className={`size-12 relative rounded bg-linear-to-br ${color} flex items-center justify-center shadow-lg absolute top-0 left-0 before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
      >
        <Quote className="size-6 text-white scale-x-[-1] scale-y-[-1]" fill="white" stroke="transparent" />
         
      </div>

      <div className="pt-5">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="size-4 text-(--this-color)" fill="currentColor" />
          ))}
        </div>

        {/* Review */}
        <p className="text-slate-500 text-xl leading-relaxed min-h-32">
          {item.review}
        </p>

        <div className="border-t border-slate-300 mt-5 pt-6 flex items-center gap-2">
          <div
            className={`size-11 text-sm rounded-full bg-linear-to-br ${color} flex items-center justify-center text-white relative font-bold before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:size-14 before:rounded before:bg-[#081B44]/30 before:blur overflow-hidden`}
          >
            <span className="relative">{item.initials}</span>
          </div>

          <div>
            <h4 className="font-semibold text-base text-slate-900">{item.name}</h4>
            <p className="text-slate-500 text-sm">
              {item.role}, {item.company}
            </p>
          </div>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute -bottom-3 -right-3 w-32 h-24 opacity-20 bg-linear-to-tl from-(--this-color) to-transparent rounded-tl-full rounded-br blur-md"></div>
    </div>
    </div>
  );
}
