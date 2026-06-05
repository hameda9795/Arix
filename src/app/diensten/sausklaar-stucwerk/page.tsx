import type { Metadata } from "next";
import Image from "next/image";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sausklaar Stucwerk | ARIX-SCHILDERSBEDRIJF Barneveld",
  description:
    "De specialist in sauzen in de regio Barneveld. Muren en plafonds perfect egaal sauzen door ARIX-SCHILDERSBEDRIJF.",
  keywords: [
    "sauzen Barneveld",
    "sausklaar stucwerk",
    "muren sauzen",
    "plafond sauzen",
    "latex sauzen",
    "stucwerk Barneveld",
    "sauzen Amersfoort",
  ],
  openGraph: {
    type: "website",
    url: "/diensten/sausklaar-stucwerk",
    title: "Sausklaar Stucwerk | ARIX-SCHILDERSBEDRIJF Barneveld",
    description:
      "De specialist in sauzen in de regio Barneveld. Muren en plafonds perfect egaal sauzen.",
    images: [
      {
        url: "/images/services/screenshot-2021-09-20-at-16.06.38.jpg",
        width: 1200,
        height: 630,
        alt: "Sausklaar stucwerk met strak resultaat door ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sausklaar Stucwerk | ARIX-SCHILDERSBEDRIJF Barneveld",
    description:
      "De specialist in sauzen in de regio Barneveld. Muren en plafonds perfect egaal sauzen.",
    images: ["/images/services/screenshot-2021-09-20-at-16.06.38.jpg"],
  },
  alternates: {
    canonical: "/diensten/sausklaar-stucwerk",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sausklaar Stucwerk",
  description:
    "De specialist in sauzen in de regio Barneveld. Muren en plafonds perfect egaal sauzen.",
  provider: {
    "@type": "LocalBusiness",
    name: "ARIX-SCHILDERSBEDRIJF",
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
  },
  areaServed: [
    { "@type": "City", name: "Barneveld" },
    { "@type": "City", name: "Amersfoort" },
    { "@type": "City", name: "Utrecht" },
    { "@type": "City", name: "Veenendaal" },
    { "@type": "City", name: "Ede" },
  ],
  serviceType: "Sausklaar Stucwerk",
  url: "https://arix-schildersbedrijf.nl/diensten/sausklaar-stucwerk",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Sausklaar Stucwerk",
      item: "https://arix-schildersbedrijf.nl/diensten/sausklaar-stucwerk",
    },
  ],
};

export default function SausklaarStucwerkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePageLayout
        title="Sausklaar-stucwerk"
        subtitle="Arix-schildersbedrijf, de specialist in sauzen in de regio Barneveld"
        image="/images/services/screenshot-2021-09-20-at-16.06.38.jpg"
        description={
          <div className="space-y-16">
            {/* Intro with image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-text font-[family-name:var(--font-serif)]">
                  Arix-schildersbedrijf, de specialist in sauzen in de regio Barneveld
                </h2>
                <p className="text-text-light leading-relaxed">
                  Arix-schildersbedrijf is gespecialiseerd in het aanbrengen van verf
                  en coatings, en het sauzen van wanden en plafonds is daar een
                  belangrijk onderdeel van. Dankzij onze jarenlange ervaring slagen
                  wij erin om uw muren en plafonds perfect egaal te sauzen en een
                  kwalitatief en duurzaam resultaat af te leveren.
                </p>
              </div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/b5bcd435a616a03f90e860f25a63cadd.jpg"
                  alt="Sausklaar stucwerk resultaat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Full-width text */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                Wat is het verschil tussen sauzen en schilderen?
              </h3>
              <p className="text-text-light leading-relaxed">
                Vaak denken klanten dat muren sauzen hetzelfde zijn als muren
                schilderen. Voor schilders en latexspuiters is er echter een
                wezenlijk verschil. Tijdens het sauzen wordt er een nieuwe latex
                verflaag aangebracht op het plafond en de muren. Schilderen
                daarentegen gebeurt met lakverf. Sauzen is ook enkel maar mogelijk
                op muren en plafonds. Houtwerk bijvoorbeeld, kunnen wij nooit
                sauzen.
              </p>
            </div>

            {/* Illustration + Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 sm:h-80 flex items-center justify-center">
                <Image
                  src="/images/services/ai_builder_media_hne9wxyd_10.svg"
                  alt="Illustratie van sauzen en stucwerk"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                  Onze werkwijze om uw muren of plafond te sauzen
                </h3>
                <p className="text-text-light leading-relaxed">
                  Voor we uw muren of plafond kunnen sauzen, moeten we de wanden
                  voorbereiden. We starten met het afdekken van de oppervlakken die
                  niet gesausd moeten worden. Dit kunnen vloeren, stopcontacten,
                  houtwerk en aangrenzende muren zijn.
                </p>
                <p className="text-text-light leading-relaxed">
                  Eventuele oneffenheden en beschadigingen werken we weg, zodat we
                  een zo egaal mogelijk canvas hebben om mee te starten. Voor we
                  starten met het sauzen van de muren of het plafond, voorzien we
                  deze van de juiste voorstrijk.
                </p>
                <p className="text-text-light leading-relaxed">
                  De makkelijkste manier om uw muren zonder strepen te sauzen, is
                  door deze met latex te spuiten. Als wij echter niet kunnen spuiten
                  in uw woning of pand, kunnen wij uw muren op de traditionele manier
                  sauzen. Zo zorgen wij altijd voor een strak en egaal resultaat.
                </p>
              </div>
            </div>

            {/* Full-width text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text mb-4 font-[family-name:var(--font-serif)]">
                Scherpe tarieven voor muren en plafonds sauzen in Barneveld
              </h3>
              <p className="text-text-light leading-relaxed">
                Voor het sauzen van uw muren of plafond hanteren we bij
                Arix-schildersbedrijf zeer scherpe tarieven. De belangrijkste reden
                daarvoor is dat wij de muren en plafonds kunnen spuiten met latex.
                Deze snelle manier van werken vertaalt zich uiteraard ook in de
                prijs van de werken. Maar ook als we niet kunnen spuiten in uw pand, geniet u van onze scherpe tarieven voor schilderwerk.
              </p>
            </div>
          </div>
        }
        features={[
          "Wij hebben de nodige ervaring met sauzen en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
          "Wij werken snel en nauwkeurig, zodat u zich geen zorgen hoeft te maken.",
          "Wij zijn pas tevreden als we een strak en egaal resultaat hebben.",
          "Als laatste ruimen we de werkplek op en laten we deze netjes achter.",
        ]}
      />
    </>
  );
}
