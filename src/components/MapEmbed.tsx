"use client";

import { motion } from "framer-motion";

interface MapEmbedProps {
  height?: string;
  rounded?: string;
  shadow?: boolean;
}

export default function MapEmbed({
  height = "h-64 sm:h-80",
  rounded = "rounded-2xl",
  shadow = true,
}: MapEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`w-full overflow-hidden ${rounded} ${
        shadow ? "shadow-xl shadow-black/10" : ""
      } ${height}`}
    >
      <iframe
        src="https://maps.google.com/maps?q=De+soel+21,+4011+GR+Zoelen&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Arix Schilderbedrijf locatie"
      />
    </motion.div>
  );
}
