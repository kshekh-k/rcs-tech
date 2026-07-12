"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import blogsData from "@/data/blogs.json";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <section id="blog" className="relative pt-16 pb-8 lg:py-24 xl:py-32 bg-[#F8FAFC] overflow-hidden before:absolute before:translate-x-1/2 before:-translate-y-1/2 before:top-0 before:right-0 before:w-96 before:h-96 before:rounded-full before:border before:border-blue-100">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

      <div className="mx-auto max-w-7xl px-3 lg:px-6 relative ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            ⚡ {blogsData.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl/18 font-extrabold text-slate-900">
            {blogsData.title}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              {blogsData.highlight1}
            </span>{" "}
            &{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              {blogsData.highlight2}
            </span>{" "}
            {blogsData.titleEnd}
          </h2>

          <p className="mt-2 lg:mt-4 text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed mx-auto max-w-2xl ">
            {blogsData.subtitle}
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-5 md:mt-10"
        >
          <div className="overflow-x-auto max-w-full pb-2">
          <div className="grid grid-cols-3 gap-4 xl:gap-8 min-w-5xl">
          {blogsData.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
          </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="lg:mt-16 mt-8 flex justify-center">
          <button className="px-5 py-3 rounded bg-secondary font-semibold text-base transition flex items-center gap-1 text-white shadow-md shadow-primary/20 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/30 cursor-pointer">
            View All Articles <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
