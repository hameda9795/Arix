import type { Metadata } from "next";
import OverOnsContent from "@/components/OverOnsContent";

export const metadata: Metadata = {
  title: "Over Ons | ARIX-SCHILDERSBEDRIJF in Barneveld",
  description:
    "Leer meer over ARIX-SCHILDERSBEDRIJF. Al meer dan 10 jaar dé professionele schilder in Barneveld en omgeving voor schilderwerk, spuitwerk, behangen en houtrot reparatie.",
  openGraph: {
    type: "website",
    url: "/over-ons",
    title: "Over Ons | ARIX-SCHILDERSBEDRIJF in Barneveld",
    description:
      "Leer meer over ARIX-SCHILDERSBEDRIJF. Al meer dan 10 jaar dé professionele schilder in Barneveld en omgeving.",
    images: [
      {
        url: "/images/hero-new.png",
        width: 1200,
        height: 630,
        alt: "ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Ons | ARIX-SCHILDERSBEDRIJF in Barneveld",
    description:
      "Leer meer over ARIX-SCHILDERSBEDRIJF. Al meer dan 10 jaar dé professionele schilder in Barneveld en omgeving.",
    images: ["/images/hero-new.png"],
  },
  alternates: {
    canonical: "/over-ons",
  },
};

export default function OverOnsPage() {
  return <OverOnsContent />;
}
