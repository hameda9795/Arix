"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Trap renovatie - Barneveld",
    tag: "Trap",
    before: "/projecten/binnen/trap-voor.jpeg",
    after: "/projecten/binnen/trap-na.jpeg",
    size: "large",
  },
  {
    title: "Houtrot reparatie",
    tag: "Houtrot",
    before: "/projecten/buiten/houtrot-voor.jpeg",
    after: "/projecten/buiten/houtrot-na.jpeg",
    size: "small",
  },
  {
    title: "Buitendeur verven",
    tag: "Buiten",
    before: "/projecten/buiten/Buitendeur verven-voor.jpeg",
    after: "/projecten/buiten/Buitendeur verven-na.jpeg",
    size: "small",
  },
];

function AutoBeforeAfterCard({
  before,
  after,
  title,
  tag,
  className = "",
}: {
  before: string;
  after: string;
  title: string;
  tag: string;
  className?: string;
}) {
  return (
    <Link href="/projecten" className="group relative block rounded-2xl overflow-hidden">
      <div className={`${className}`}>
        {/* After image (background) */}
        <img
          src={after}
          alt={`Na - ${title}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Before image with auto-animation */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{
            clipPath: [
              "inset(0 100% 0 0)",
              "inset(0 0% 0 0)",
              "inset(0 100% 0 0)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={before}
            alt={`Voor - ${title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm z-20">
          Voor
        </div>
        <div className="absolute top-4 right-4 bg-gold text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-20">
          Na
        </div>

        {/* Bottom gradient + title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 z-20">
          <span className="bg-gold text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-2 inline-block">
            {tag}
          </span>
          <h4 className="text-white text-lg sm:text-xl font-bold">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
              Onze <span className="text-gold italic">projecten</span>
            </h2>
            <Link
              href="/projecten"
              className="inline-flex items-center gap-2 text-gold font-bold text-sm border-b-2 border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors w-fit mt-2"
            >
              Bekijk alles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Large item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <AutoBeforeAfterCard
              {...projects[0]}
              className="relative h-72 sm:h-80 lg:h-full min-h-[320px] lg:min-h-[520px]"
            />
          </motion.div>

          {/* Small items */}
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
            >
              <AutoBeforeAfterCard
                {...project}
                className="relative h-56 sm:h-64 lg:h-60"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
