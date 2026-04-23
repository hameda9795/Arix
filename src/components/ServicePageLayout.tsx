"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  features?: string[];
  image?: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  features,
  image = "/images/hero-bg.webp",
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Page Header with Image */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-end pb-12 sm:pb-20 pt-32 sm:pt-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-light text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              Diensten
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 sm:mb-4 font-[family-name:var(--font-serif)]">
              {title}
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Paint drip bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-white paint-drip-bottom" />
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-sm sm:prose-base max-w-none text-text-light leading-relaxed"
          >
            {description}
          </motion.div>

          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 sm:mt-14"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-text mb-5 sm:mb-6 font-[family-name:var(--font-serif)]">
                Waarom kiezen voor <span className="text-gold italic">Arix-schildersbedrijf?</span>
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-bg-warm rounded-xl"
                  >
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-text-light text-sm sm:text-base leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 sm:mt-14 bg-bg-warm rounded-2xl p-6 sm:p-8 lg:p-10 text-center"
          >
            <h3 className="text-lg sm:text-xl font-bold text-text mb-2 font-[family-name:var(--font-serif)]">
              Vrijblijvende offerte
            </h3>
            <p className="text-text-light text-sm sm:text-base mb-5 sm:mb-6 max-w-md mx-auto">
              Vul het formulier in en wij nemen binnen 24 uur contact met u op!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-colors shadow-lg shadow-gold/20"
            >
              Neem contact op
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
