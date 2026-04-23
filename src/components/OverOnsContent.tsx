"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Truck,
  Clock,
  BadgeCheck,
  FileText,
  ArrowRight,
} from "lucide-react";

const benefits = [
  { icon: Shield, title: "3 jaar garantie", desc: "Op al ons werk" },
  { icon: Truck, title: "Geen voorrijkosten", desc: "In de regio" },
  { icon: Clock, title: "24 uur antwoord", desc: "Snelle service" },
  { icon: BadgeCheck, title: "Lage prijzen", desc: "Scherpe tarieven" },
  { icon: FileText, title: "Gratis offerte", desc: "Vrijblijvend" },
];

const activities = [
  "Kitwerk: wij dichten al uw voegen, naden en kieren duurzaam af met elastisch materiaal.",
  "Houtrot reparatie: wij repareren alle schade aan uw houtwerk, zodat ernstige schade wordt voorkomen.",
  "Binnenschilderwerk: van plafonds witten tot keukenkastjes schilderen, wij doen het allemaal.",
  "Buitenschilderwerk: wij geven uw kozijnen of uw gevel een nieuw laagje verf.",
  "Latex spuiten: wij spuiten uw muren snel en zonder strepen met latex.",
  "Behangen: wij geven uw interieur extra warmte of extra pit met een nieuw behang.",
];

export default function OverOnsContent() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              Over ons
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text tracking-tight mb-4 sm:mb-6 font-[family-name:var(--font-serif)]">
              Arix-schildersbedrijf, uw professionele schilder in{" "}
              <span className="text-gold italic">Barneveld</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/about.webp"
                alt="Over ARIX-SCHILDERSBEDRIJF"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-text mb-3">
                  Wij zijn wij?
                </h2>
                <ul className="space-y-2 text-text-light text-sm sm:text-base">
                  <li>Gevestigd in Midden-Nederland</li>
                  <li>Werkzaam in de regio Barneveld</li>
                  <li>Meer dan tien jaar ervaring in schilderwerk</li>
                  <li>Vakmanschap en kwaliteit</li>
                  <li>Volledige ontzorging in schilderwerken</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-text mb-3">
                  Waarom Arix-schildersbedrijf?
                </h2>
                <p className="text-text-light text-sm sm:text-base leading-relaxed">
                  Bij Arix-schildersbedrijf hebben we oog voor detail en gaan we
                  altijd voor het perfecte plaatje. Door onze ervaring kunnen we
                  uw wensen en ideeën mee tot leven brengen. Wilt u een kamer in
                  een bepaalde kleur laten schilderen, maar bent u bang dat dit
                  de ruimte zal verkleinen? Onze professionele schilders geven u
                  graag advies en kijken samen met u wat de beste opties zijn
                  voor uw huis of kantoor. Zo bent u altijd zeker van een
                  geslaagd resultaat.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-text mb-3">
                  Kwaliteit en vakmanschap
                </h2>
                <p className="text-text-light text-sm sm:text-base leading-relaxed">
                  Arix-schildersbedrijf uit Barneveld staat garant voor kwaliteit
                  en vakmanschap. Wij werken uitsluitend met de beste materialen
                  en hoogwaardige verfmerken om zo een duurzaam resultaat te
                  bekomen. Wij werken uw schilderproject thuis of op kantoor tot
                  in de puntjes af.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text tracking-tight">
              Service & <span className="text-gold">Voordelen</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                  <b.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <h3 className="font-bold text-text text-xs sm:text-sm mb-1">
                  {b.title}
                </h3>
                <p className="text-text-light text-[11px] sm:text-xs">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-text tracking-tight mb-3 font-[family-name:var(--font-serif)]">
              Onze <span className="text-gold italic">werkzaamheden</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {activities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-bg-warm rounded-xl"
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold mt-2 shrink-0" />
                <p className="text-text-light text-sm sm:text-base leading-relaxed">
                  {activity}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-colors shadow-lg shadow-gold/20"
            >
              Vrijblijvende offerte aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
