"use client";

import { motion } from "framer-motion";
import { MessageSquare, CalendarDays, Paintbrush, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Gratis offerte",
    desc: "Neem contact met ons op en ontvang binnen 24 uur een vrijblijvende offerte op maat.",
  },
  {
    num: "02",
    icon: CalendarDays,
    title: "Planning",
    desc: "Wij plannen het werk op een moment dat ú het beste uitkomt, inclusief voorbereiding.",
  },
  {
    num: "03",
    icon: Paintbrush,
    title: "Uitvoering",
    desc: "Onze vakmensen voeren het werk uit met de beste materialen en oog voor detail.",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Oplevering",
    desc: "Samen lopen we het resultaat door. Tevreden? Pas dan is het project voor ons afgerond.",
  },
];

export default function Process() {
  return (
    <section className="bg-bg-warm py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
            Hoe wij werken
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
            Ons <span className="text-gold italic">proces</span>
          </h2>
          <p className="text-text-light text-sm sm:text-base max-w-md mx-auto mt-3">
            Van eerste contact tot oplevering, wij zorgen voor een soepel traject
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gold/20" />
              )}

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full relative">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white text-xs font-black">
                  {step.num}
                </div>

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 sm:mb-6">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                </div>

                <h3 className="text-text text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
