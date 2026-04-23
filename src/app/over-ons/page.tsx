import type { Metadata } from "next";
import OverOnsContent from "@/components/OverOnsContent";

export const metadata: Metadata = {
  title: "Over Ons | Arix Schilderbedrijf in Barneveld",
  description:
    "Leer meer over Arix Schilderbedrijf. Al meer dan 10 jaar dé professionele schilder in Barneveld en omgeving voor schilderwerk, spuitwerk, behangen en houtrot reparatie.",
  openGraph: {
    type: "website",
    url: "/over-ons",
    title: "Over Ons | Arix Schilderbedrijf in Barneveld",
    description:
      "Leer meer over Arix Schilderbedrijf. Al meer dan 10 jaar dé professionele schilder in Barneveld en omgeving.",
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
    title: "Over Ons | Arix Schilderbedrijf in Barneveld",
    description:
      "Leer meer over Arix Schilderbedrijf. Al meer dan 10 jaar dé professionele schilder in Barneveld en omgeving.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/over-ons",
  },
};

export default function OverOnsPage() {
  return <OverOnsContent />;
}
