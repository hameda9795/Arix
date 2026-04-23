"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageBreak() {
  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/contact-bg.jpg"
        alt="Schilderwerk detail"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      {/* Paint splatter decorations */}
      <div className="absolute top-[20%] left-[10%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gold/15 blur-xl" />
      <div className="absolute bottom-[25%] right-[12%] w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gold/10 blur-lg" />
      <div className="absolute top-[50%] left-[30%] w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gold/10 blur-md" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6">
            10+ jaar <span className="text-gold-light italic">ervaring</span>
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-lg mx-auto">
            Wij werken uitsluitend met de beste materialen en hoogwaardige
            verfmerken om een duurzaam resultaat te bekomen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
