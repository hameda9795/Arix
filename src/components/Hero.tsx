"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Paintbrush, Phone } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.8], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-start sm:items-center justify-center overflow-hidden pt-24 sm:pt-0"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-[-10%] w-[120%] h-[120%]" style={{ y: bgY }}>
          <Image
            src="/images/hero-bg.webp"
            alt="Schilderwerk achtergrond"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-gold-dark/40" />
      </div>

      {/* Floating paint splatters */}
      <div className="absolute top-[20%] left-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gold/10 blur-xl" />
      <div className="absolute bottom-[30%] right-[15%] w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gold/10 blur-lg" />
      <div className="absolute top-[40%] right-[20%] w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gold/15 blur-md" />

      {/* Content with parallax fade */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-4 sm:pt-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-gold-light text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-6">
            <Paintbrush className="w-4 h-4" />
            Professionele schilders sinds 2013
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-4 sm:mb-6 font-[family-name:var(--font-serif)]"
        >
          Waar kwaliteit
          <br />
          <span className="text-gold-light italic">kleur krijgt</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Arix-schildersbedrijf volbrengt al uw schilderwerken met succes. Meer
          dan tien jaar ervaring in schilderwerk, spuitwerk en behangen in
          Barneveld.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all shadow-xl shadow-gold/30 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Vrijblijvende offerte
          </Link>
          <Link
            href="/projecten"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
          >
            Bekijk projecten
            <ArrowDown className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Paint drip bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-white paint-drip-bottom" />

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden sm:flex absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-white/30 animate-scroll-pulse" />
      </motion.div>
    </section>
  );
}
