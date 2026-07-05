"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import blogsData from "@/data/blogs.json";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden before:absolute before:translate-x-1/2 before:-translate-y-1/2 before:top-0 before:right-0 before:w-96 before:h-96 before:rounded-full before:border before:border-blue-100">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative ">
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

          <h2 className="text-4xl md:text-5xl xl:text-6xl/18 font-extrabold text-slate-900">
            {blogsData.title}{" "}
             <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              {blogsData.highlight1}
            </span>
            {" "}&{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              {blogsData.highlight2}
            </span>
            {" "}{blogsData.titleEnd}
          </h2>

         <p className="mt-4 text-lg text-slate-500 leading-relaxed mx-auto max-w-2xl ">
            {blogsData.subtitle}
          </p>
          
        </motion.div>




 {/* Blog Cards */}
        <motion.div 
            initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5}}
             className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          {blogsData.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>

         {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="px-5 py-3 rounded bg-secondary font-semibold text-base transition flex items-center gap-3 text-white shadow-md shadow-primary/20 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/30 cursor-pointer">
            View All Articles →
          </button>
        </div>

 
      </div>
    </section>
  );
}
