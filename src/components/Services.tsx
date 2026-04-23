"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import {
  Paintbrush,
  SprayCan,
  Wallpaper,
  TreePine,
  Sparkles,
  PenTool,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    num: "01",
    title: "Schilderwerk",
    desc: "Binnen- en buitenschilderwerk voor woningen en bedrijfspanden.",
    href: "/diensten/schilderwerk",
    icon: Paintbrush,
    image: "/images/project1.jpg",
  },
  {
    num: "02",
    title: "Spuitwerk",
    desc: "Latex spuitwerk voor een egaal resultaat zonder strepen.",
    href: "/diensten/spuitwerk",
    icon: SprayCan,
    image: "/images/project5.jpg",
  },
  {
    num: "03",
    title: "Behangen",
    desc: "Professioneel behangen met diverse materialen en patronen.",
    href: "/diensten/behangen",
    icon: Wallpaper,
    image: "/images/project3.jpg",
  },
  {
    num: "04",
    title: "Houtrot",
    desc: "Specialist in het behandelen en repareren van houtrot.",
    href: "/diensten/houtrot",
    icon: TreePine,
    image: "/images/project2.jpg",
  },
  {
    num: "05",
    title: "Sausklaar stucwerk",
    desc: "Muren en plafonds perfect egaal sauzen voor strak resultaat.",
    href: "/diensten/sausklaar-stucwerk",
    icon: Sparkles,
    image: "/images/project6.jpg",
  },
  {
    num: "06",
    title: "Kitwerk",
    desc: "Voegen, naden en kieren duurzaam afgedicht.",
    href: "/diensten/schilderwerk",
    icon: PenTool,
    image: "/images/project4.jpg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section className="bg-bg-warm py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 border-[3px] border-gold/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text tracking-tight mb-3 sm:mb-4 font-[family-name:var(--font-serif)]">
              Onze <span className="text-gold italic">diensten</span>
            </h2>
            <p className="text-text-light text-sm sm:text-base max-w-md mx-auto">
              Van schilderwerk tot spuitwerk, wij doen het allemaal
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.num} variants={item}>
              <Link
                href={service.href}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Number badge */}
                  <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {service.num}
                  </span>
                  {/* Icon */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-gold" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-text text-lg sm:text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-gold font-bold text-xs uppercase tracking-wider">
                    Lees meer
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
