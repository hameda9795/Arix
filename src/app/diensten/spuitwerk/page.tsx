import type { Metadata } from "next";
import Image from "next/image";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Spuitwerk & Latex Spuiten | ARIX-SCHILDERSBEDRIJF Barneveld",
  description:
    "Latex spuitwerk in de regio Barneveld voor een egaal resultaat zonder strepen. ARIX-SCHILDERSBEDRIJF levert vakmanschap en kwaliteit met meer dan 10 jaar ervaring.",
  keywords: [
    "latex spuiten Barneveld",
    "spuitwerk",
    "latex spuitwerk",
    "muren spuiten",
    "plafond spuiten",
    "spuitwerk Amersfoort",
    "spuitwerk Ede",
  ],
  openGraph: {
    type: "website",
    url: "/diensten/spuitwerk",
    title: "Spuitwerk & Latex Spuiten | ARIX-SCHILDERSBEDRIJF Barneveld",
    description:
      "Latex spuitwerk in de regio Barneveld voor een egaal resultaat zonder strepen.",
    images: [
      {
        url: "/images/services/trinity-place-user-img7e816f8c08345a61_14-3507-1-151043c.jpg",
        width: 1200,
        height: 630,
        alt: "Latex spuitwerk met egaal resultaat door ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spuitwerk & Latex Spuiten | ARIX-SCHILDERSBEDRIJF Barneveld",
    description:
      "Latex spuitwerk in de regio Barneveld voor een egaal resultaat zonder strepen.",
    images: ["/images/services/trinity-place-user-img7e816f8c08345a61_14-3507-1-151043c.jpg"],
  },
  alternates: {
    canonical: "/diensten/spuitwerk",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spuitwerk & Latex Spuiten",
  description:
    "Latex spuitwerk in de regio Barneveld voor een egaal resultaat zonder strepen.",
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
  serviceType: "Spuitwerk",
  url: "https://arix-schildersbedrijf.nl/diensten/spuitwerk",
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
      name: "Spuitwerk",
      item: "https://arix-schildersbedrijf.nl/diensten/spuitwerk",
    },
  ],
};

export default function SpuitwerkPage() {
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
        title="Spuitwerk"
        subtitle="Latex spuitwerk in de regio Barneveld door Arix-schildersbedrijf"
        image="/images/services/trinity-place-user-img7e816f8c08345a61_14-3507-1-151043c.jpg"
        description={
          <div className="space-y-16">
            {/* Intro with image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-text font-[family-name:var(--font-serif)]">
                  Latex spuitwerk in de regio Barneveld door Arix-schildersbedrijf
                </h2>
                <p className="text-text-light leading-relaxed">
                  Arix-schildersbedrijf is al jarenlang actief in de regio Barneveld.
                  Ook op het vlak van latex spuiten hebben wij een uitstekende
                  reputatie als het gaat om vakmanschap en kwaliteit. Zoekt u nog
                  iemand om uw muren of plafond met latex te spuiten? Dan zit u bij
                  ons aan het juiste adres!
                </p>
              </div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/b5bcd435a616a03f90e860f25a63cadd.jpg"
                  alt="Latex spuitwerk resultaat in Barneveld"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Full-width text */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                Latex spuitwerk
              </h3>
              <p className="text-text-light leading-relaxed">
                Latex spuiten is een snelle techniek waarbij latex verf met behulp
                van een spuit op plafond en muren wordt aangebracht. Omdat er geen
                roller wordt gebruikt, is het resultaat egaal en zonder strepen. De
                aanzetten zijn niet zichtbaar en er wordt geen enkel plekje
                vergeten.
              </p>
              <p className="text-text-light leading-relaxed">
                Wij kunnen vrijwel overal latex spuiten. Het is een snelle manier
                om een bestaand huis op te knappen, maar ook in een nieuwbouw
                spuiten wij latex. Latex is het mooiste als we dit kunnen spuiten
                over glad stucwerk, maar ook andere ondergronden zijn mogelijk.
                Denk maar aan behang, steen en gipsplaten. Omdat latex een minder sterke geur heeft dan andere verf, kunnen we ook in afgesloten
                ruimtes latex spuiten.
              </p>
              <p className="text-text-light leading-relaxed">
                Uw muren of plafond met latex laten spuiten, is een goede investering. Latexverf bevat namelijk conserveermiddelen die de groei van
                bacteriën en schimmelvorming tegengaan. Zo blijft het mooie, vlakke resultaat lang behouden, waardoor u nog vele jaren plezier zal
                beleven aan het latex spuiten.
              </p>
            </div>

            {/* Illustration + Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 sm:h-80 flex items-center justify-center">
                <Image
                  src="/images/services/ai_builder_media_hne9wxyd_10.svg"
                  alt="Illustratie van latex spuitwerk proces"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                  Onze werkwijze
                </h3>
                <p className="text-text-light leading-relaxed">
                  Wij werken volgens een duidelijke werkwijze. Voordat we latex
                  spuiten, inspecteren we de oppervlakken die we willen verven.
                  Eventuele beschadigingen en oneffenheden worden gerepareerd. De
                  omliggende oppervlakken die niet geverfd moeten worden, dekken we
                  af.
                </p>
                <p className="text-text-light leading-relaxed">
                  Vervolgens brengen we indien nodig een voorstrijkmiddel en
                  hechtlaag aan, zo garanderen we een goede hechting van de
                  latexverf. We brengen de latexverf in twee lagen aan. Dit zorgt voor
                  een goede dekking, wat de levensduur ten goede komt. Wij zijn pas tevreden als we
                  een strak en egaal resultaat hebben. Als laatste ruimen we de werkplek
                  op en laten we deze netjes achter.
                </p>
              </div>
            </div>
          </div>
        }
        features={[
          "Wij hebben de nodige ervaring met latex spuiten en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
          "Om uw latex spuitwerk te voltooien, werken we enkel met de beste apparatuur en materialen.",
          "Wij werken snel en nauwkeurig, zodat u zich geen zorgen hoeft te maken.",
          "We zijn pas tevreden als we een strak en egaal resultaat hebben.",
        ]}
      />
    </>
  );
}
