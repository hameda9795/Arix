import type { Metadata } from "next";
import Link from "next/link";
import { PaintBucket, SprayCan, Wallpaper, Hammer, Shapes } from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten | Arix Schilderbedrijf",
  description:
    "Bekijk alle diensten van Arix Schilderbedrijf: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk. Professioneel vakmanschap in Barneveld en omgeving.",
  openGraph: {
    type: "website",
    url: "/diensten",
    title: "Diensten | Arix Schilderbedrijf",
    description:
      "Bekijk alle diensten van Arix Schilderbedrijf: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk.",
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
    title: "Diensten | Arix Schilderbedrijf",
    description:
      "Bekijk alle diensten van Arix Schilderbedrijf: schilderwerk, spuitwerk, behangen, houtrot reparatie en sauzklaar stucwerk.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/diensten",
  },
};

const services = [
  {
    slug: "schilderwerk",
    title: "Schilderwerk",
    description: "Professioneel binnen- en buitenschilderwerk voor woningen en bedrijfspanden.",
    icon: PaintBucket,
  },
  {
    slug: "spuitwerk",
    title: "Spuitwerk",
    description: "Latex spuitwerk voor een egaal resultaat zonder strepen.",
    icon: SprayCan,
  },
  {
    slug: "behangen",
    title: "Behangen",
    description: "Expert in behangen met diverse materialen en patronen.",
    icon: Wallpaper,
  },
  {
    slug: "houtrot",
    title: "Houtrot Reparatie",
    description: "Specialist in het behandelen en repareren van houtrot.",
    icon: Hammer,
  },
  {
    slug: "sausklaar-stucwerk",
    title: "Sausklaar Stucwerk",
    description: "Muren en plafonds perfect egaal sauzen.",
    icon: Shapes,
  },
];

export default function DienstenPage() {
  return (
    <section className="bg-bg-warm py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-text font-serif">
            Onze Diensten
          </h1>
          <p className="mt-4 text-lg text-text/80 max-w-2xl mx-auto">
            Arix Schilderbedrijf biedt een breed scala aan schilderdiensten.
            Klik op een dienst hieronder voor meer informatie.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/diensten/${service.slug}`}
                className="group block rounded-2xl border border-gold/20 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold/40"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-text mb-2">
                  {service.title}
                </h2>
                <p className="text-text/70">{service.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold">
                  Meer info →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
