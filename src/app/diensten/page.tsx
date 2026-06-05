import type { Metadata } from "next";
import DienstenContent from "@/components/DienstenContent";

export const metadata: Metadata = {
  title: "Diensten | Schilderwerk, Spuitwerk, Behangen & Meer",
  description:
    "Bekijk alle diensten van ARIX-SCHILDERSBEDRIJF: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk. Professioneel vakmanschap in Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving.",
  openGraph: {
    type: "website",
    url: "/diensten",
    title: "Diensten | Schilderwerk, Spuitwerk, Behangen & Meer",
    description:
      "Bekijk alle diensten van ARIX-SCHILDERSBEDRIJF: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk.",
    images: [
      {
        url: "/images/service-generic.webp",
        width: 1200,
        height: 630,
        alt: "Alle schilderdiensten van ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diensten | Schilderwerk, Spuitwerk, Behangen & Meer",
    description:
      "Bekijk alle diensten van ARIX-SCHILDERSBEDRIJF: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk.",
    images: ["/images/service-generic.webp"],
  },
  alternates: {
    canonical: "/diensten",
  },
};

const serviceCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Diensten van ARIX-SCHILDERSBEDRIJF",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Schilderwerk",
        description: "Binnen- en buitenschilderwerk voor woningen en bedrijfspanden.",
        url: "https://arix-schildersbedrijf.nl/diensten/schilderwerk",
        provider: {
          "@type": "LocalBusiness",
          name: "ARIX-SCHILDERSBEDRIJF",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Spuitwerk",
        description: "Latex spuitwerk voor een egaal resultaat zonder strepen.",
        url: "https://arix-schildersbedrijf.nl/diensten/spuitwerk",
        provider: {
          "@type": "LocalBusiness",
          name: "ARIX-SCHILDERSBEDRIJF",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Behangen",
        description: "Professioneel behangen met diverse materialen en patronen.",
        url: "https://arix-schildersbedrijf.nl/diensten/behangen",
        provider: {
          "@type": "LocalBusiness",
          name: "ARIX-SCHILDERSBEDRIJF",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Houtrot Reparatie",
        description: "Specialist in het behandelen en repareren van houtrot.",
        url: "https://arix-schildersbedrijf.nl/diensten/houtrot",
        provider: {
          "@type": "LocalBusiness",
          name: "ARIX-SCHILDERSBEDRIJF",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Sausklaar Stucwerk",
        description: "Muren en plafonds perfect egaal sauzen voor strak resultaat.",
        url: "https://arix-schildersbedrijf.nl/diensten/sausklaar-stucwerk",
        provider: {
          "@type": "LocalBusiness",
          name: "ARIX-SCHILDERSBEDRIJF",
        },
      },
    },
  ],
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
      name: "Diensten",
      item: "https://arix-schildersbedrijf.nl/diensten",
    },
  ],
};

export default function DienstenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DienstenContent />
    </>
  );
}
