"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Paintbrush, Phone } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgY = scrollY * 30;
  const contentOpacity = Math.max(0, 1 - scrollY / 0.8);
  const contentY = scrollY * 20;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-start sm:items-center justify-center overflow-hidden pt-40 sm:pt-0"
    >
      {/* Background Image - Rendered immediately without JS dependency */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform"
          style={{ transform: `translateY(${bgY}%)` }}
        >
          <Image
            src="/images/hero-bg.webp"
            alt="Schilderwerk achtergrond"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-gold-dark/40" />
      </div>

      {/* Floating paint splatters */}
      <div className="absolute top-[20%] left-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gold/10 blur-xl" />
      <div className="absolute bottom-[30%] right-[15%] w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gold/10 blur-lg" />
      <div className="absolute top-[40%] right-[20%] w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gold/15 blur-md" />

      {/* Content with parallax fade */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-4 sm:pt-20 will-change-transform"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentY}%)`,
        }}
      >
        <div
          className="transition-opacity duration-800"
          style={{ opacity: 1 }}
        >
          <span className="inline-flex items-center gap-2 text-gold-light text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-6">
            <Paintbrush className="w-4 h-4" />
            Professionele schilders sinds 2013
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-4 sm:mb-6 font-[family-name:var(--font-serif)]">
          Waar kwaliteit
          <br />
          <span className="text-gold-light italic">kleur krijgt</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Arix-schildersbedrijf volbrengt al uw schilderwerken met succes. Meer
          dan tien jaar ervaring in schilderwerk, spuitwerk en behangen in
          Barneveld.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all shadow-xl shadow-gold/30 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Vrijblijvende offerte
          </Link>
          <Link
            href="/projecten"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
          >
            Bekijk projecten
            <ArrowDown className="w-4 h-4" />
          </Link>
        </div>

        {/* Desktop OnderhoudNL Logo */}
        <div className="hidden xl:block absolute -right-24 2xl:-right-28 top-1/2 -translate-y-1/2">
          <Image
            src="/images/OnderhoudNL_Standaard_RGB_zonder witruimte.png"
            alt="OnderhoudNL erkend schilder"
            width={120}
            height={120}
            className="w-20 2xl:w-24 h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Mobile OnderhoudNL Logo */}
      <div className="absolute z-10 right-4 bottom-20 xl:hidden">
        <Image
          src="/images/OnderhoudNL_Standaard_RGB_zonder witruimte.png"
          alt="OnderhoudNL erkend schilder"
          width={120}
          height={120}
          className="w-16 h-auto"
          loading="lazy"
        />
      </div>

      {/* Paint drip bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-white paint-drip-bottom" />

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 animate-pulse">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  );
}
