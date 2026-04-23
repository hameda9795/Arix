"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Zeer tevreden! Onze trap is geschuurd en geschilderd door Arix en dit is erg mooi geworden. Hartstikke tevreden. Ali is erg aardig en werkt heel netjes. Aanrader!",
    author: "Leon",
    initials: "L",
  },
  {
    text: "Ik ben zeer tevreden op de manier waarop arix-schildersbedrijf te werk gaat. De eigenaar is een vriendelijke man die goed meedenkt en luistert naar wat je wilt. Ik raad hem zeker aan! Een dikke 10!",
    author: "Foroe",
    initials: "F",
  },
  {
    text: "AliReza is aardig, een goede communicator en ik ben heel blij met het eindresultaat. Ik raad je aan om met Arix te gaan!",
    author: "Kay B",
    initials: "K",
  },
];

export default function Reviews() {
  return (
    <section className="bg-bg-warm py-16 sm:py-24 lg:py-32 relative">
      {/* Top dashed line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-repeating-linear-gradient(90deg, var(--color-gold) 0px, var(--color-gold) 30px, transparent 30px, transparent 60px)" style={{ background: "repeating-linear-gradient(90deg, #A59B2C, #A59B2C 30px, transparent 30px, transparent 60px)", height: "4px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
            Wat onze <span className="text-gold italic">klanten</span> zeggen
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 relative group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Quote mark */}
              <span className="absolute top-3 right-5 text-6xl sm:text-7xl text-gold/10 font-serif leading-none">
                &rdquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0">
                  {review.initials}
                </div>
                <span className="font-bold text-text text-sm sm:text-base">
                  {review.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
