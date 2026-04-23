"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Wat kost schilderwerk gemiddeld?",
    a: "De kosten hangen af van het project. Wij werken met scherpe tarieven en bieden altijd een gratis, vrijblijvende offerte aan. Neem contact met ons op voor een persoonlijke prijsindicatie.",
  },
  {
    q: "Hoe lang duurt een schilderklus gemiddeld?",
    a: "Dit verschilt per project. Een gemiddelde kamer schilderen duurt 1-2 dagen. Voor een compleet huis rekenen we meestal 1-2 weken. Wij geven altijd een realistische tijdsindicatie bij de offerte.",
  },
  {
    q: "Geven jullie garantie op het werk?",
    a: "Ja, wij geven 3 jaar garantie op al ons schilderwerk. Mocht er onverhoopt iets mis zijn, dan lossen wij dit uiteraard kosteloos voor u op.",
  },
  {
    q: "Werken jullie ook in het weekend?",
    a: "In overleg is veel mogelijk. Wij proberen altijd rekening te houden met uw wensen en schema. Neem gerust contact op om de mogelijkheden te bespreken.",
  },
  {
    q: "Moet ik zelf de ruimte leegmaken?",
    a: "Wij verzoeken u om waardevolle spullen en klein meubilair te verwijderen. Grote meubels kunnen wij indien nodig voor u verplaatsen of afdekken. Wij zorgen altijd voor goede afdekking van vloeren en overige meubels.",
  },
  {
    q: "In welke regio's zijn jullie actief?",
    a: "Wij zijn voornamelijk actief in Barneveld, Tiel, Arnhem en omgeving. Staat uw regio er niet bij? Neem gerust contact op, dan kijken we samen naar de mogelijkheden.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-gold/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group"
      >
        <span className="text-text font-bold text-sm sm:text-base group-hover:text-gold transition-colors">
          {item.q}
        </span>
        <div
          className={`w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 transition-all duration-300 ${
            open ? "bg-gold rotate-180" : ""
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 transition-colors ${
              open ? "text-white" : "text-gold"
            }`}
          />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-text-light text-sm sm:text-base leading-relaxed pb-5 sm:pb-6">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
            Veelgestelde vragen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
            Vragen? <span className="text-gold italic">Antwoorden.</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="bg-bg-warm rounded-2xl p-5 sm:p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-gold" />
            </div>
            <span className="text-text font-bold text-sm sm:text-base">
              Meest gestelde vragen
            </span>
          </div>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
