"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/projecten", label: "Projecten" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            {/* Desktop logo */}
            <img
              src={scrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="Arix Schilderbedrijf"
              className="hidden sm:block h-16 lg:h-20 transition-all duration-300"
            />
            {/* Mobile logo */}
            <img
              src={scrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="Arix Schilderbedrijf"
              className="sm:hidden h-12 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors py-1 ${
                  pathname === link.href
                    ? scrolled
                      ? "text-gold"
                      : "text-gold-light"
                    : scrolled
                    ? "text-text hover:text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+31645459815"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? "text-text" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">06 45459815</span>
            </a>
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-gold/20"
            >
              Gratis offerte
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden z-50 p-2 rounded-lg transition-colors ${
              isOpen ? "text-text" : scrolled ? "text-text" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-xl border-b border-gold/10"
          >
            <div className="px-4 pt-24 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    pathname === link.href
                      ? "bg-gold/10 text-gold"
                      : "text-text hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+31645459815"
                  className="flex items-center gap-3 px-4 py-3 text-text font-semibold"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  06 45459815
                </a>
                <Link
                  href="/contact"
                  className="block mx-4 bg-gold hover:bg-gold-dark text-white text-center px-5 py-3 rounded-lg font-bold transition-colors"
                >
                  Gratis offerte
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
