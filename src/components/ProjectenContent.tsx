"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paintbrush, Home } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const binnenProjects = [
  {
    id: "trap",
    title: "Trap schilderwerk",
    before: "/projecten/binnen/trap-voor.jpeg",
    after: "/projecten/binnen/trap-na.jpeg",
  },
  {
    id: "wanden-plafonds",
    title: "Wanden en plafonds sauswerk",
    before: "/projecten/binnen/Wanden en plafonds sauswerk-voor.jpeg",
    after: "/projecten/binnen/Wanden en plafonds sauswerk-na.jpeg",
  },
];

const buitenProjects = [
  {
    id: "buitendeur",
    title: "Buitendeur verven",
    before: "/projecten/buiten/Buitendeur verven-voor.jpeg",
    after: "/projecten/buiten/Buitendeur verven-na.jpeg",
  },
  {
    id: "buitendeur-1",
    title: "Buitendeur verven",
    before: "/projecten/buiten/Buitendeur verven-1-voor.jpeg",
    after: "/projecten/buiten/Buitendeur verven-1-na.jpeg",
  },
  {
    id: "buitendeur-2",
    title: "Buitendeur verven",
    before: "/projecten/buiten/Buitendeur verven-2-voor.jpeg",
    after: "/projecten/buiten/Buitendeur verven-2-na.jpeg",
  },
  {
    id: "buitendeur-3",
    title: "Buitendeur verven",
    before: "/projecten/buiten/Buitendeur verven-3-voor.jpeg",
    after: "/projecten/buiten/Buitendeur verven-3-na.jpeg",
  },
  {
    id: "dakgoten",
    title: "Dakgoten schilderwerk",
    before: "/projecten/buiten/dakgoten-voor.jpeg",
    after: "/projecten/buiten/dakgoten-na.jpeg",
  },
  {
    id: "dakpanel",
    title: "Dakpanelen schilderwerk",
    before: "/projecten/buiten/dakpanel-voor.jpeg",
    after: "/projecten/buiten/dakpanel-na.jpeg",
  },
  {
    id: "dakpanel-1",
    title: "Dakpanelen schilderwerk",
    before: "/projecten/buiten/dakpanel-1-voor.jpeg",
    after: "/projecten/buiten/dakpanel-1-na.jpeg",
  },
  {
    id: "dakpanel-2",
    title: "Dakpanelen schilderwerk",
    before: "/projecten/buiten/dakpanel-2-voor.jpeg",
    after: "/projecten/buiten/dakpanel-2-na.jpeg",
  },
  {
    id: "dakpanel-3",
    title: "Dakpanelen schilderwerk",
    before: "/projecten/buiten/dakpanel-3-voor.jpeg",
    after: "/projecten/buiten/dakpanel-3-na.jpeg",
  },
  {
    id: "houtrot",
    title: "Houtrot reparatie",
    before: "/projecten/buiten/houtrot-voor.jpeg",
    after: "/projecten/buiten/houtrot-na.jpeg",
  },
  {
    id: "houtrot-1",
    title: "Houtrot reparatie",
    before: "/projecten/buiten/houtrot-1-voor.jpeg",
    after: "/projecten/buiten/houtrot-1-na.jpeg",
  },
];

type Category = "binnen" | "buiten";

const categories: { key: Category; label: string; shortLabel: string; icon: React.ReactNode; count: number }[] = [
  { key: "binnen", label: "Binnenschilderwerk", shortLabel: "Binnen", icon: <Paintbrush className="w-4 h-4" />, count: binnenProjects.length },
  { key: "buiten", label: "Buitenschilderwerk", shortLabel: "Buiten", icon: <Home className="w-4 h-4" />, count: buitenProjects.length },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProjectenContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("binnen");

  const activeProjects = activeCategory === "binnen" ? binnenProjects : buitenProjects;

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              Projecten
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
              Bekijk onze meest recente{" "}
              <span className="text-gold italic">projecten</span>
            </h1>
            <p className="text-text-light text-sm sm:text-base max-w-xl mt-3 sm:mt-4">
              Sleep de slider om het verschil te zien tussen voor en na ons
              schilderwerk. Kwaliteit die spreekt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs — Mobile: segmented control, Desktop: pill buttons */}
      <section className="pb-8 sm:pb-12 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Mobile: segmented control with short labels */}
            <div className="flex sm:hidden p-1 bg-white rounded-2xl border border-gold/10 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex-1 flex items-center justify-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-3 rounded-xl text-xs xs:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.key
                      ? "bg-gold text-white shadow-md shadow-gold/25"
                      : "text-text-light hover:text-gold"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.shortLabel}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      activeCategory === cat.key
                        ? "bg-white/20 text-white"
                        : "bg-gold/10 text-gold"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Desktop: pill buttons with full labels */}
            <div className="hidden sm:flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    activeCategory === cat.key
                      ? "bg-gold text-white shadow-lg shadow-gold/25 scale-[1.02]"
                      : "bg-white text-text hover:bg-gold/10 hover:text-gold border border-gold/10"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                      activeCategory === cat.key
                        ? "bg-white/20 text-white"
                        : "bg-gold/10 text-gold"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {activeProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-bg-warm rounded-2xl p-3 sm:p-4 hover:shadow-xl hover:shadow-black/5 transition-shadow duration-300"
                >
                  <BeforeAfterSlider
                    beforeSrc={project.before}
                    afterSrc={project.after}
                    title={project.title}
                    aspectRatio="4/3"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text tracking-tight font-[family-name:var(--font-serif)] mb-3 sm:mb-4">
              Ook uw project in goede{" "}
              <span className="text-gold italic">handen</span>?
            </h2>
            <p className="text-text-light text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
              Neem contact met ons op voor een vrijblijvende offerte. Wij staan
              klaar om uw schilderwerk tot een succes te maken.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-colors shadow-lg shadow-gold/20"
            >
              Gratis offerte aanvragen
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
