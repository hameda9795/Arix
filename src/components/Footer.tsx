"use client";

import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/projecten", label: "Projecten" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/diensten/schilderwerk", label: "Schilderwerk" },
  { href: "/diensten/spuitwerk", label: "Spuitwerk" },
  { href: "/diensten/behangen", label: "Behangen" },
  { href: "/diensten/houtrot", label: "Houtrot" },
  { href: "/diensten/sausklaar-stucwerk", label: "Sausklaar stucwerk" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/images/logo-white.png"
                alt="ARIX-SCHILDERSBEDRIJF"
                className="h-32 sm:h-36"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Professionele schilders in Barneveld en omgeving. Kwaliteit en
              vakmanschap sinds meer dan 10 jaar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-5">
              Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-5">
              Diensten
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map */}
          <div>
            <h4 className="text-gold text-xs font-bold uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4 mb-5">
              <li>
                <a
                  href="tel:+31645459815"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  06 45459815
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Tusolaan+25,+3772WP+Barneveld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  Tusolaan 25, 3772WP Barneveld
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@arix-schildersbedrijf.nl"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  info@arix-schildersbedrijf.nl
                </a>
              </li>
            </ul>
            <MapEmbed height="h-40" rounded="rounded-xl" shadow={false} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} ARIX-SCHILDERSBEDRIJF. Alle rechten
            voorbehouden.
          </p>
          <p className="text-white/30 text-xs">
            Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
