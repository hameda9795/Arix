import type { Metadata } from "next";
import ProjectenContent from "@/components/ProjectenContent";

export const metadata: Metadata = {
  title: "Projecten | Schilderwerk Portfolio",
  description:
    "Bekijk de meest recente projecten van ARIX-SCHILDERSBEDRIJF. Laat u inspireren door ons portfolio van schilderwerk, spuitwerk, behangen en renovaties in Barneveld en omgeving.",
  openGraph: {
    type: "website",
    url: "/projecten",
    title: "Projecten | Schilderwerk Portfolio",
    description:
      "Bekijk de meest recente projecten van ARIX-SCHILDERSBEDRIJF. Laat u inspireren door ons portfolio van schilderwerk, spuitwerk, behangen en renovaties.",
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
    title: "Projecten | Schilderwerk Portfolio",
    description:
      "Bekijk de meest recente projecten van ARIX-SCHILDERSBEDRIJF. Laat u inspireren door ons portfolio van schilderwerk, spuitwerk, behangen en renovaties.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/projecten",
  },
};

export default function ProjectenPage() {
  return <ProjectenContent />;
}
