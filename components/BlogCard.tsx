import Image from "next/image";
import { CalendarDays } from "lucide-react";

const colorClasses = {
  blue: {
    badge: "bg-blue-50 text-blue-600",
    text: "text-blue-600",
  },
  cyan: {
    badge: "bg-cyan-50 text-cyan-600",
    text: "text-cyan-600",
  },
  purple: {
    badge: "bg-purple-50 text-purple-600",
    text: "text-purple-600",
  },
  green: {
    badge: "bg-green-50 text-green-600",
    text: "text-green-600",
  },
  orange: {
    badge: "bg-orange-50 text-orange-600",
    text: "text-orange-600",
  },
  pink: {
    badge: "bg-pink-50 text-pink-600",
    text: "text-pink-600",
  },
};

const useColors = {
  blue: "--color-blue-500",
  cyan: "--color-cyan-500",
  purple: "--color-purple-500",
  green: "--color-green-500",
  orange: "--color-orange-500",
  pink: "--color-pink-500",
  
};

export default function BlogCard({ blog }: { blog: any }) {
  const colors =
    colorClasses[blog.color as keyof typeof colorClasses];
    const useColor = useColors[blog.color as keyof typeof useColors];

  return (
    <article className="group bg-white rounded border border-slate-100 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 p-2 relative before:absolute before:-bottom-3 before:-right-3 before:w-24 before:h-18 before:opacity-20 before:bg-linear-to-tl before:from-(--this-color) before:to-transparent before:rounded-tl-full before:rounded-br before:blur-md overflow-hidden" style={{ "--this-color": `var(${useColor})` } as React.CSSProperties} >
      <div className="relative">
      {/* Image */}
      <div className="relative h-54 overflow-hidden rounded">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-700 max-w-full"
        />
      </div>

      <div className="p-4">
        {/* Category */}
        
        <span className={`inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide uppercase mb-2 ${colors.badge}`}>
          {blog.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-relaxed line-clamp-2">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 leading-relaxed line-clamp-3 mb-6">
          {blog.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <button className={`font-semibold cursor-pointer transition-all hover:text-slate-900 ${colors.text}`}>
            Read More →
          </button>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <CalendarDays className="w-4 h-4" />
            {blog.date}
          </div>
        </div>
      </div>
      </div>
    </article>
  );
}