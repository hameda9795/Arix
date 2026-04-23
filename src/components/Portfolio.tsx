"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { title: "Trap renovatie - Zoelen", tag: "Trap", image: "/images/project1.jpg", size: "large" },
  { title: "Houtrot reparatie", tag: "Houtrot", image: "/images/project2.jpg", size: "small" },
  { title: "Zolder transformatie", tag: "Zolder", image: "/images/project3.jpg", size: "small" },
];

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
            className="inline-flex items-center gap-2 text-gold font-bold text-sm border-b-2 border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors w-fit"
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
            <Link href="/projecten" className="group relative block h-72 sm:h-80 lg:h-full min-h-[320px] lg:min-h-[520px] rounded-2xl overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                <span className="bg-gold text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {projects[0].tag}
                </span>
              </div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6">
                <h4 className="text-white text-xl sm:text-2xl font-bold">
                  {projects[0].title}
                </h4>
              </div>
            </Link>
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
              <Link
                href="/projecten"
                className="group relative block h-56 sm:h-64 lg:h-60 rounded-2xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-lg font-bold">
                    {project.title}
                  </h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
