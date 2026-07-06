"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import testimonialsData from "@/data/testimonials.json";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 lg:py-24 xl:py-32 border-t border-slate-200 bg-white/20 z-10 before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:top-0 before:left-0 before:size-40 lg:before:size-96 before:rounded-full before:border before:border-blue-100 "> 

      <div className="absolute right-20 top-20 grid grid-cols-4 gap-4 opacity-30">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-300 rounded-full"></div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-3 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded bg-accent/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
            {testimonialsData.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
            {testimonialsData.title}{" "}
            <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
              {testimonialsData.highlight}
            </span>
          </h2>

          <p className="mt-2 lg:mt-4 text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed mx-auto max-w-2xl ">
            {testimonialsData.subtitle}
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >

{/* {
              delay: 3500,
              disableOnInteraction: false,
            } */}

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={false}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                spaceBetween:10,
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper md:pb-10!"
          >
            {testimonialsData.items.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <TestimonialCard item={item} featured={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
