import type { Metadata } from "next";
import DienstenContent from "@/components/DienstenContent";

export const metadata: Metadata = {
  title: "Diensten | ARIX-SCHILDERSBEDRIJF",
  description:
    "Bekijk alle diensten van ARIX-SCHILDERSBEDRIJF: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk. Professioneel vakmanschap in Barneveld, Amersfoort, Utrecht, Veenendaal, Ede en omgeving.",
  openGraph: {
    type: "website",
    url: "/diensten",
    title: "Diensten | ARIX-SCHILDERSBEDRIJF",
    description:
      "Bekijk alle diensten van ARIX-SCHILDERSBEDRIJF: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk.",
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
    title: "Diensten | ARIX-SCHILDERSBEDRIJF",
    description:
      "Bekijk alle diensten van ARIX-SCHILDERSBEDRIJF: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/diensten",
  },
};

export default function DienstenPage() {
  return <DienstenContent />;
}
