"use client";

import { motion } from "framer-motion";
import LightboxGallery from "@/components/LightboxGallery";

const projects = [
  { title: "Muur", image: "/images/project1.jpg", tag: "Muur" },
  { title: "Houtrot", image: "/images/project2.jpg", tag: "Houtrot" },
  { title: "Zolder", image: "/images/project3.jpg", tag: "Zolder" },
  { title: "Trap", image: "/images/project4.jpg", tag: "Trap" },
  { title: "Muur", image: "/images/project5.jpg", tag: "Muur" },
  { title: "Trap", image: "/images/project6.jpg", tag: "Trap" },
];

export default function ProjectenContent() {
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
              Projecten
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text tracking-tight font-[family-name:var(--font-serif)]">
              Bekijk de meest recente{" "}
              <span className="text-gold italic">projecten</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid with Lightbox */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LightboxGallery projects={projects} />
        </div>
      </section>
    </>
  );
}
