"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import blogsData from "@/data/blogs.json";

export default function Blog() {
  return (
    <section id="blog" className="bg-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Insights
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {blogsData.title}
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogsData.items.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-primary/5 bg-white shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                  {post.category}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-all group-hover:gap-2.5"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
