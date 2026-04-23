import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PhotoSlider from "@/components/PhotoSlider";
import BadgeSection from "@/components/BadgeSection";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Professionele Schilders in Barneveld | ARIX-SCHILDERSBEDRIJF",
  description:
    "ARIX-SCHILDERSBEDRIJF heeft meer dan 10 jaar ervaring in professioneel schilderwerk, spuitwerk, behangen, houtrot reparatie en stucwerk. Wij bedienen Barneveld, Tiel, Arnhem en omgeving. Vraag vandaag nog een vrijblijvende offerte aan.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Professionele Schilders in Barneveld | ARIX-SCHILDERSBEDRIJF",
    description:
      "ARIX-SCHILDERSBEDRIJF heeft meer dan 10 jaar ervaring in professioneel schilderwerk, spuitwerk, behangen, houtrot reparatie en stucwerk. Wij bedienen Barneveld, Tiel, Arnhem en omgeving.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professionele Schilders in Barneveld | ARIX-SCHILDERSBEDRIJF",
    description:
      "ARIX-SCHILDERSBEDRIJF heeft meer dan 10 jaar ervaring in professioneel schilderwerk, spuitwerk, behangen, houtrot reparatie en stucwerk. Wij bedienen Barneveld, Tiel, Arnhem en omgeving.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ARIX-SCHILDERSBEDRIJF",
  image: "https://arix-schildersbedrijf.nl/images/hero-bg.webp",
  url: "https://arix-schildersbedrijf.nl",
  telephone: "+31645459815",
  email: "info@arix-schildersbedrijf.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tusolaan 25",
    addressLocality: "Barneveld",
    addressRegion: "Gelderland",
    postalCode: "3772WP",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.9167,
    longitude: 5.3167,
  },
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: "Barneveld, Tiel, Arnhem",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <PhotoSlider />
      <BadgeSection />
      <Services />
      <Stats />
      <BeforeAfter />
      <Process />
      <Portfolio />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  );
}
