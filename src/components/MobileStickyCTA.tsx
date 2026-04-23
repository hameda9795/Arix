"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-lg border-t border-gold/10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center gap-3">
        <a
          href="tel:+31645459815"
          className="flex-1 flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white py-3 rounded-xl font-bold text-sm transition-colors"
        >
          <Phone className="w-4 h-4" />
          Bel direct
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-text hover:bg-black text-white py-3 rounded-xl font-bold text-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Offerte
        </Link>
      </div>
    </div>
  );
}
