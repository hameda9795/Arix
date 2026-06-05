import type { Metadata } from "next";
import OverOnsContent from "@/components/OverOnsContent";

export const metadata: Metadata = {
  title: "Over Ons | ARIX-SCHILDERSBEDRIJF in Barneveld",
  description:
    "Leer meer over ARIX-SCHILDERSBEDRIJF. Al meer dan 10 jaar dé professionele schilder in Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving voor schilderwerk, spuitwerk, behangen en houtrot reparatie.",
  openGraph: {
    type: "website",
    url: "/over-ons",
    title: "Over Ons | ARIX-SCHILDERSBEDRIJF in Barneveld",
    description:
      "Leer meer over ARIX-SCHILDERSBEDRIJF. Al meer dan 10 jaar dé professionele schilder in Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving.",
    images: [
      {
        url: "/images/about.webp",
        width: 1200,
        height: 630,
        alt: "Over ARIX-SCHILDERSBEDRIJF - Professionele schilders sinds 2013",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Ons | ARIX-SCHILDERSBEDRIJF in Barneveld",
    description:
      "Leer meer over ARIX-SCHILDERSBEDRIJF. Al meer dan 10 jaar dé professionele schilder in Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving.",
    images: ["/images/about.webp"],
  },
  alternates: {
    canonical: "/over-ons",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Over Ons - ARIX-SCHILDERSBEDRIJF",
  url: "https://arix-schildersbedrijf.nl/over-ons",
  description:
    "Leer meer over ARIX-SCHILDERSBEDRIJF. Al meer dan 10 jaar dé professionele schilder in Barneveld en omgeving.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "ARIX-SCHILDERSBEDRIJF",
    image: "https://arix-schildersbedrijf.nl/images/about.webp",
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
    foundingDate: "2013",
    priceRange: "€€",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Over ons",
      item: "https://arix-schildersbedrijf.nl/over-ons",
    },
  ],
};

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <OverOnsContent />
    </>
  );
}
