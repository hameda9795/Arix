"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = (data = formData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "Naam is verplicht";
    if (!data.email.trim()) {
      errs.email = "E-mail is verplicht";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Voer een geldig e-mailadres in";
    }
    if (data.phone && !/^[0-9\s\-+().]{6,20}$/.test(data.phone)) {
      errs.phone = "Voer een geldig telefoonnummer in";
    }
    if (!data.message.trim()) errs.message = "Bericht is verplicht";
    return errs;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (field: string, value: string) => {
    const next = { ...formData, [field]: value };
    setFormData(next);
    if (touched[field]) {
      setErrors(validate(next));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = {
      name: true,
      email: true,
      phone: true,
      message: true,
    };
    setTouched(allTouched);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border bg-white text-text text-sm focus:outline-none focus:ring-2 transition-all ${
      errors[field as keyof FormErrors] && touched[field]
        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
        : "border-gray-200 focus:ring-gold/50 focus:border-gold"
    }`;

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-20 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              Contact
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
              Neem contact op met{" "}
              <span className="text-gold italic">Arix-schilderbedrijf</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-text mb-6 sm:mb-8">
                Heeft u een vraag?
              </h2>
              <p className="text-text-light text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
                Wilt u een kamer in een bepaalde kleur laten schilderen, maar
                bent u bang dat dit de ruimte zal verkleinen? Onze
                professionele schilders geven u graag advies en kijken samen met
                u wat de beste opties zijn voor uw huis of kantoor.
              </p>

              <div className="space-y-5 sm:space-y-6">
                <a
                  href="tel:+31645459815"
                  className="flex items-center gap-4 p-4 sm:p-5 bg-bg-warm rounded-xl hover:bg-gold/5 transition-colors group"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-text-light uppercase tracking-wider mb-0.5">
                      Telefoon
                    </p>
                    <p className="font-bold text-text text-sm sm:text-base">
                      06 45459815
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=De+soel+21,+4011+GR+Zoelen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 sm:p-5 bg-bg-warm rounded-xl hover:bg-gold/5 transition-colors group"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-text-light uppercase tracking-wider mb-0.5">
                      Adres
                    </p>
                    <p className="font-bold text-text text-sm sm:text-base">
                      De soel 21, 4011 GR Zoelen
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@arix-schilderbedrijf.nl"
                  className="flex items-center gap-4 p-4 sm:p-5 bg-bg-warm rounded-xl hover:bg-gold/5 transition-colors group"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-text-light uppercase tracking-wider mb-0.5">
                      E-mail
                    </p>
                    <p className="font-bold text-text text-sm sm:text-base">
                      info@arix-schilderbedrijf.nl
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-bg-warm rounded-2xl p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-10 sm:py-16"
                    >
                      <CheckCircle className="w-14 h-14 sm:w-16 sm:h-16 text-gold mx-auto mb-4 sm:mb-6" />
                      <h3 className="text-xl sm:text-2xl font-bold text-text mb-2 font-[family-name:var(--font-serif)]">
                        Bedankt!
                      </h3>
                      <p className="text-text-light text-sm sm:text-base">
                        Wij nemen binnen 24 uur contact met u op.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-text mb-2 font-[family-name:var(--font-serif)]">
                        Vrijblijvende offerte
                      </h3>
                      <p className="text-text-light text-sm mb-6 sm:mb-8">
                        Vul het formulier in en wij nemen binnen 24 uur contact
                        met u op!
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div>
                          <label className="block text-xs font-semibold text-text mb-1.5">
                            Naam <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            onBlur={() => handleBlur("name")}
                            className={inputClass("name")}
                            placeholder="Uw naam"
                          />
                          <AnimatePresence>
                            {errors.name && touched.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-1 mt-1 text-red-500 text-xs"
                              >
                                <AlertCircle className="w-3 h-3" />
                                {errors.name}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-text mb-1.5">
                            E-mail <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            onBlur={() => handleBlur("email")}
                            className={inputClass("email")}
                            placeholder="uw@email.nl"
                          />
                          <AnimatePresence>
                            {errors.email && touched.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-1 mt-1 text-red-500 text-xs"
                              >
                                <AlertCircle className="w-3 h-3" />
                                {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-text mb-1.5">
                            Telefoon
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            onBlur={() => handleBlur("phone")}
                            className={inputClass("phone")}
                            placeholder="06 12345678"
                          />
                          <AnimatePresence>
                            {errors.phone && touched.phone && (
                              <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-1 mt-1 text-red-500 text-xs"
                              >
                                <AlertCircle className="w-3 h-3" />
                                {errors.phone}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-text mb-1.5">
                            Bericht <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            onBlur={() => handleBlur("message")}
                            className={`${inputClass("message")} resize-none`}
                            placeholder="Vertel ons over uw project..."
                          />
                          <AnimatePresence>
                            {errors.message && touched.message && (
                              <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-1 mt-1 text-red-500 text-xs"
                              >
                                <AlertCircle className="w-3 h-3" />
                                {errors.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gold hover:bg-gold-dark text-white py-3.5 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                        >
                          <Send className="w-4 h-4" />
                          Versturen
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10"
          >
            <span className="inline-block text-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Locatie
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text font-[family-name:var(--font-serif)]">
              Bezoek ons op onze werkplaats
            </h2>
          </motion.div>
          <MapEmbed height="h-80 sm:h-[28rem] lg:h-[32rem]" rounded="rounded-2xl" shadow={true} />
          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/?q=De+soel+21,+4011+GR+Zoelen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold text-sm transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
