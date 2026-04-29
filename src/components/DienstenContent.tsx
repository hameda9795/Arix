"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Paintbrush,
  SprayCan,
  Wallpaper,
  TreePine,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    slug: "schilderwerk",
    title: "Schilderwerk",
    subtitle: "Binnen & Buiten",
    description:
      "Professioneel binnen- en buitenschilderwerk voor woningen en bedrijfspanden. Van muren en plafonds tot trappen en kozijnen.",
    icon: Paintbrush,
    image: "/images/services/ontwerp-zonder-titel-2023-05-09t022125.963.png",
    features: [
      "Binnenschilderwerk",
      "Buitenschilderwerk",
      "Lakwerk & onderhoud",
      "Hoogwaardige verfproducten",
    ],
  },
  {
    slug: "spuitwerk",
    title: "Spuitwerk",
    subtitle: "Latex spuiten",
    description:
      "Latex spuitwerk voor een egaal resultaat zonder strepen. Snelle en efficiënte techniek voor muren en plafonds.",
    icon: SprayCan,
    image: "/images/services/ontwerp-zonder-titel-2023-05-09t022033.598.png",
    features: [
      "Egale afwerking",
      "Geen strepen",
      "Snelle uitvoering",
      "Alle ondergronden",
    ],
  },
  {
    slug: "behangen",
    title: "Behangen",
    subtitle: "Papier & Vinyl",
    description:
      "Expert in behangen met diverse materialen en patronen. Van standaard behang tot glasvezel en renovatief behang.",
    icon: Wallpaper,
    image: "/images/services/wow069-world-of-wallpaper-calypso-leaf-wallpaper-blue-gold-ae3-1.jpg",
    features: [
      "Diverse materialen",
      "Renovatief behang",
      "Glasvezelbehang",
      "Perfecte hechting",
    ],
  },
  {
    slug: "houtrot",
    title: "Houtrot Reparatie",
    subtitle: "Herstel & Bescherming",
    description:
      "Specialist in het behandelen en repareren van houtrot. Snelle inspectie, grondige reparatie en duurzame bescherming.",
    icon: TreePine,
    image: "/images/services/ontwerp-zonder-titel-2023-05-09t022312.674.png",
    features: [
      "Grondige inspectie",
      "Vakkundige reparatie",
      "Bescherming tegen vocht",
      "Duurzaam resultaat",
    ],
  },
  {
    slug: "sausklaar-stucwerk",
    title: "Sausklaar Stucwerk",
    subtitle: "Muren & Plafonds",
    description:
      "Muren en plafonds perfect egaal sauzen voor een strak en fris resultaat. Ook over bestaand stucwerk.",
    icon: Sparkles,
    image: "/images/services/b5bcd435a616a03f90e860f25a63cadd.jpg",
    features: [
      "Strak eindresultaat",
      "Voorbereiding oppervlak",
      "Spuiten of rollen",
      "Scherpe tarieven",
    ],
  },
];

export default function DienstenContent() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              Diensten
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
              Wat wij voor u kunnen{" "}
              <span className="text-gold italic">betekenen</span>
            </h1>
            <p className="text-text-light text-sm sm:text-base max-w-xl mt-3 sm:mt-4">
              Van schilderwerk tot spuitwerk, van behangen tot houtrotreparatie.
              ARIX-SCHILDERSBEDRIJF staat voor u klaar met vakmanschap en
              kwaliteit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/diensten/${service.slug}`}
                    className="group block bg-bg-warm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative h-52 sm:h-60 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-white/95 flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                      </div>
                      {/* Title overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-gold-light text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                          {service.subtitle}
                        </span>
                        <h3 className="text-white text-xl sm:text-2xl font-bold mt-0.5 font-[family-name:var(--font-serif)]">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <p className="text-text-light text-sm sm:text-base leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-5">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-text text-xs sm:text-sm"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <span className="inline-flex items-center gap-1.5 text-gold font-bold text-xs sm:text-sm uppercase tracking-wider">
                        Meer info
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
              Waarom kiezen voor{" "}
              <span className="text-gold italic">Arix-schildersbedrijf</span>?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                num: "10+",
                label: "Jaar ervaring",
                desc: "Meer dan tien jaar ervaring in schilderwerk en afwerking.",
              },
              {
                num: "100%",
                label: "Tevredenheid",
                desc: "Wij zijn pas tevreden als u dat ook bent.",
              },
              {
                num: "24h",
                label: "Reactietijd",
                desc: "Binnen 24 uur reactie op uw aanvraag.",
              },
              {
                num: "5★",
                label: "Beoordeling",
                desc: "Uitstekende beoordelingen van onze klanten.",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-4xl font-black text-gold mb-2">
                  {stat.num}
                </div>
                <div className="text-text font-bold text-sm sm:text-base mb-2">
                  {stat.label}
                </div>
                <p className="text-text-light text-xs sm:text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gold/5 rounded-3xl p-8 sm:p-12 border border-gold/10"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-text tracking-tight font-[family-name:var(--font-serif)] mb-3 sm:mb-4">
              Klaar voor een{" "}
              <span className="text-gold italic">vrijblijvende offerte</span>?
            </h2>
            <p className="text-text-light text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
              Neem vandaag nog contact met ons op en ontdek wat wij voor uw
              project kunnen betekenen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-colors shadow-lg shadow-gold/20"
              >
                Offerte aanvragen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+31645459815"
                className="inline-flex items-center gap-2 text-text font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base hover:bg-gold/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                06 45459815
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
