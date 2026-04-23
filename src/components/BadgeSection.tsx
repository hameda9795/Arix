"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, ThumbsUp, Star } from "lucide-react";
import Image from "next/image";

const trustPoints = [
  { icon: ShieldCheck, label: "Gecertificeerd" },
  { icon: ThumbsUp, label: "10+ jaar ervaring" },
  { icon: Star, label: "5-sterren beoordeling" },
];

export default function BadgeSection() {
  return (
    <section className="relative bg-bg-warm py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Vertrouwd & Erkend
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-text font-[family-name:var(--font-serif)]">
            Aangesloten bij Kwaliteit Schilder
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/15 group">
              <Image
                src="/images/project2.jpg"
                alt="Schilderwerk detail"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-xl shadow-xl shadow-black/10 p-4 sm:p-5 flex items-center gap-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs text-text-light uppercase tracking-wider">Certificaat</p>
                <p className="text-sm sm:text-base font-bold text-text">Erkend vakman</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 text-center"
          >
            <div className="relative bg-white rounded-3xl shadow-xl shadow-black/8 p-8 sm:p-10 border border-gold/10">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-3xl" />
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border-2 border-gold/20">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-gold" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-text mb-2 tracking-wide">
                  KWALITEIT SCHILDER
                </h3>
                <p className="text-sm text-text-light mb-6 leading-relaxed">
                  Officieel erkend lid met garantie op vakmanschap en kwaliteit.
                </p>
                <div className="space-y-3">
                  {trustPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 justify-center text-sm text-text font-medium"
                    >
                      <point.icon className="w-4 h-4 text-gold flex-shrink-0" />
                      {point.label}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/15 group">
              <Image
                src="/images/project4.jpg"
                alt="Afgerond schilderwerk"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl shadow-black/10 p-4 sm:p-5 flex items-center gap-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs text-text-light uppercase tracking-wider">Kwaliteit</p>
                <p className="text-sm sm:text-base font-bold text-text">5-sterren service</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
