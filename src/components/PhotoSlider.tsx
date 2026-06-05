"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const sliderImages = [
  "/slider/1.jpg",
  "/slider/2.jpg",
  "/slider/3.jpg",
  "/slider/4.jpg",
  "/slider/5.jpg",
  "/slider/6.jpg",
];

export default function PhotoSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate images for seamless infinite loop (2x is enough)
  const allImages = [...sliderImages, ...sliderImages];

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 bg-white overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center px-4 mb-10 sm:mb-14"
      >
        <span className="inline-block text-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          Impressies
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-text font-[family-name:var(--font-serif)]">
          Onze werkzaamheden
        </h2>
      </motion.div>

      {/* Slider container */}
      <div className="relative group">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="flex gap-4 sm:gap-6 w-max animate-slider-scroll hover:[animation-play-state:paused]"
          style={
            {
              "--slider-duration": `35s`,
            } as React.CSSProperties
          }
        >
          {allImages.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-64 sm:w-80 md:w-96 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-black/10 cursor-pointer hover:scale-[1.03] hover:-translate-y-1 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Project ${(i % sliderImages.length) + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                loading="lazy"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gold/0 hover:bg-gold/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>
    </section>
  );
}
