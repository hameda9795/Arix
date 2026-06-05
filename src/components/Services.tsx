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
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Schilderwerk",
    desc: "Binnen- en buitenschilderwerk voor woningen en bedrijfspanden.",
    href: "/diensten/schilderwerk",
    icon: Paintbrush,
    image: "/images/services/pexels-photo-10450330.jpeg",
  },
  {
    title: "Spuitwerk",
    desc: "Latex spuitwerk voor een egaal resultaat zonder strepen.",
    href: "/diensten/spuitwerk",
    icon: SprayCan,
    image: "/images/services/trinity-place-user-img7e816f8c08345a61_14-3507-1-151043c.jpg",
  },
  {
    title: "Behangen",
    desc: "Professioneel behangen met diverse materialen en patronen.",
    href: "/diensten/behangen",
    icon: Wallpaper,
    image: "/images/services/idee-carta-da-parati-soggiorno-broken-ocean-ambientha-1024x682-1.jpg",
  },
  {
    title: "Houtrot",
    desc: "Specialist in het behandelen en repareren van houtrot.",
    href: "/diensten/houtrot",
    icon: TreePine,
    image: "/images/services/roof-truss-gd323f3df1_1920.jpg.webp",
  },
  {
    title: "Sausklaar stucwerk",
    desc: "Muren en plafonds perfect egaal sauzen voor strak resultaat.",
    href: "/diensten/sausklaar-stucwerk",
    icon: Sparkles,
    image: "/images/services/screenshot-2021-09-20-at-16.06.38.jpg",
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  return (
    <motion.div
      variants={cardAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
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
  );
}

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

        {/* Row 1: 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 0.1} />
          ))}
        </div>

        {/* Row 2: 2 items centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl xl:max-w-3xl mx-auto mt-5 sm:mt-6">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={(index + 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
