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
    "ARIX-SCHILDERSBEDRIJF heeft meer dan 10 jaar ervaring in professioneel schilderwerk, spuitwerk, behangen, houtrot reparatie en stucwerk. Wij bedienen Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving. Vraag vandaag nog een vrijblijvende offerte aan.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Professionele Schilders in Barneveld | ARIX-SCHILDERSBEDRIJF",
    description:
      "ARIX-SCHILDERSBEDRIJF heeft meer dan 10 jaar ervaring in professioneel schilderwerk, spuitwerk, behangen, houtrot reparatie en stucwerk. Wij bedienen Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Professioneel schilderwerk door ARIX-SCHILDERSBEDRIJF in Barneveld",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professionele Schilders in Barneveld | ARIX-SCHILDERSBEDRIJF",
    description:
      "ARIX-SCHILDERSBEDRIJF heeft meer dan 10 jaar ervaring in professioneel schilderwerk, spuitwerk, behangen, houtrot reparatie en stucwerk. Wij bedienen Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARIX-SCHILDERSBEDRIJF",
  url: "https://arix-schildersbedrijf.nl",
  logo: "https://arix-schildersbedrijf.nl/images/arix-logo.png",
  image: "https://arix-schildersbedrijf.nl/images/hero-bg.webp",
  telephone: "+31645459815",
  email: "info@arix-schildersbedrijf.nl",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tusolaan 25",
    addressLocality: "Barneveld",
    addressRegion: "Gelderland",
    postalCode: "3772WP",
    addressCountry: "NL",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
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
    latitude: 52.1399,
    longitude: 5.5836,
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
  areaServed: [
    { "@type": "City", name: "Barneveld" },
    { "@type": "City", name: "Amersfoort" },
    { "@type": "City", name: "Utrecht" },
    { "@type": "City", name: "Veenendaal" },
    { "@type": "City", name: "Ede" },
  ],
  serviceType: [
    "Schilderwerk",
    "Spuitwerk",
    "Behangen",
    "Houtrot reparatie",
    "Stucwerk",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Schilderdiensten",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Schilderwerk binnen en buiten",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Latex spuitwerk",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Behangen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Houtrot reparatie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sausklaar stucwerk",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://arix-schildersbedrijf.nl/",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ARIX-SCHILDERSBEDRIJF",
  url: "https://arix-schildersbedrijf.nl",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://arix-schildersbedrijf.nl/diensten/{search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
