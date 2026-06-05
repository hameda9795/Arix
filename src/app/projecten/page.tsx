import type { Metadata } from "next";
import ProjectenContent from "@/components/ProjectenContent";

export const metadata: Metadata = {
  title: "Projecten | Schilderwerk Portfolio",
  description:
    "Bekijk de meest recente projecten van ARIX-SCHILDERSBEDRIJF. Laat u inspireren door ons portfolio van schilderwerk, spuitwerk, behangen en renovaties in Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving.",
  openGraph: {
    type: "website",
    url: "/projecten",
    title: "Projecten | Schilderwerk Portfolio",
    description:
      "Bekijk de meest recente projecten van ARIX-SCHILDERSBEDRIJF. Laat u inspireren door ons portfolio van schilderwerk, spuitwerk, behangen en renovaties.",
    images: [
      {
        url: "/images/project1.jpg",
        width: 1200,
        height: 630,
        alt: "Schilderwerk portfolio van ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projecten | Schilderwerk Portfolio",
    description:
      "Bekijk de meest recente projecten van ARIX-SCHILDERSBEDRIJF. Laat u inspireren door ons portfolio van schilderwerk, spuitwerk, behangen en renovaties.",
    images: ["/images/project1.jpg"],
  },
  alternates: {
    canonical: "/projecten",
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projecten - Schilderwerk Portfolio",
  url: "https://arix-schildersbedrijf.nl/projecten",
  description:
    "Bekijk de meest recente projecten van ARIX-SCHILDERSBEDRIJF. Laat u inspireren door ons portfolio van schilderwerk, spuitwerk, behangen en renovaties.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "CreativeWork",
          name: "Schilderwerk project",
          image: "https://arix-schildersbedrijf.nl/images/project1.jpg",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "CreativeWork",
          name: "Spuitwerk project",
          image: "https://arix-schildersbedrijf.nl/images/project2.jpg",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "CreativeWork",
          name: "Behangen project",
          image: "https://arix-schildersbedrijf.nl/images/project3.jpg",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "CreativeWork",
          name: "Renovatie project",
          image: "https://arix-schildersbedrijf.nl/images/project4.jpg",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Projecten",
      item: "https://arix-schildersbedrijf.nl/projecten",
    },
  ],
};

export default function ProjectenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectenContent />
    </>
  );
}
