import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Vrijblijvende Offerte Aanvragen",
  description:
    "Neem contact op met Arix Schilderbedrijf voor een vrijblijvende offerte. Bel +31 6 45459815 of mail naar info@arix-schilderbedrijf.nl. Wij zijn gevestigd in Zoelen en actief in Barneveld, Tiel en Arnhem.",
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact | Vrijblijvende Offerte Aanvragen",
    description:
      "Neem contact op met Arix Schilderbedrijf voor een vrijblijvende offerte. Bel +31 6 45459815 of mail naar info@arix-schilderbedrijf.nl.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Arix Schilderbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Vrijblijvende Offerte Aanvragen",
    description:
      "Neem contact op met Arix Schilderbedrijf voor een vrijblijvende offerte. Bel +31 6 45459815 of mail naar info@arix-schilderbedrijf.nl.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Arix Schilderbedrijf",
  url: "https://arix-schilderbedrijf.nl/contact",
  description:
    "Neem contact op met Arix Schilderbedrijf voor een vrijblijvende offerte.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Arix Schilderbedrijf",
    image: "https://arix-schilderbedrijf.nl/images/hero-bg.webp",
    url: "https://arix-schilderbedrijf.nl",
    telephone: "+31645459815",
    email: "info@arix-schilderbedrijf.nl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "De soel 21",
      addressLocality: "Zoelen",
      addressRegion: "Gelderland",
      postalCode: "4011 GR",
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
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactForm />
    </>
  );
}
