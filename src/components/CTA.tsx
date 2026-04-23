"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-footer-dark py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 sm:w-80 sm:h-80 border-[20px] sm:border-[30px] border-gold/5 rounded-full" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-gold/5 rounded-full" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6 font-[family-name:var(--font-serif)]">
            Klaar voor een{" "}
            <span className="text-gold italic">gratis offerte?</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            Vul het formulier in en wij nemen binnen 24 uur contact met u op.
            Geen voorrijkosten, 3 jaar garantie.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all shadow-xl shadow-gold/20 hover:shadow-gold/30"
          >
            Neem contact op
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
