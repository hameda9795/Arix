import type { Metadata } from "next";
import Image from "next/image";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Behangen & Wallpaper | ARIX-SCHILDERSBEDRIJF Barneveld",
  description:
    "Expert in behangen in de regio Barneveld. Professioneel behangen met diverse materialen en patronen door ARIX-SCHILDERSBEDRIJF.",
  keywords: [
    "behangen Barneveld",
    "behang specialist",
    "behangen woning",
    "renovatief behang",
    "behangen Amersfoort",
    "behangen Ede",
    "wallpaper",
  ],
  openGraph: {
    type: "website",
    url: "/diensten/behangen",
    title: "Behangen & Wallpaper | ARIX-SCHILDERSBEDRIJF Barneveld",
    description:
      "Expert in behangen in de regio Barneveld. Professioneel behangen met diverse materialen en patronen.",
    images: [
      {
        url: "/images/services/idee-carta-da-parati-soggiorno-broken-ocean-ambientha-1024x682-1.jpg",
        width: 1200,
        height: 630,
        alt: "Professioneel behangen met diverse patronen door ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Behangen & Wallpaper | ARIX-SCHILDERSBEDRIJF Barneveld",
    description:
      "Expert in behangen in de regio Barneveld. Professioneel behangen met diverse materialen en patronen.",
    images: ["/images/services/idee-carta-da-parati-soggiorno-broken-ocean-ambientha-1024x682-1.jpg"],
  },
  alternates: {
    canonical: "/diensten/behangen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Behangen & Wallpaper",
  description:
    "Expert in behangen in de regio Barneveld. Professioneel behangen met diverse materialen en patronen.",
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
  serviceType: "Behangen",
  url: "https://arix-schildersbedrijf.nl/diensten/behangen",
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
      name: "Behangen",
      item: "https://arix-schildersbedrijf.nl/diensten/behangen",
    },
  ],
};

export default function BehangenPage() {
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
        title="Behangen"
        subtitle="Expert in behangen in de regio Barneveld"
        image="/images/services/idee-carta-da-parati-soggiorno-broken-ocean-ambientha-1024x682-1.jpg"
        description={
          <div className="space-y-16">
            {/* Intro with image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-text font-[family-name:var(--font-serif)]">
                  Expert in behangen in de regio Barneveld
                </h2>
                <p className="text-text-light leading-relaxed">
                  Bent u net verhuisd of heeft uw woning een opknapbeurt nodig? Met
                  een leuk behang maakt u van uw huis een echte thuis. Behangen kan
                  echter een moeilijke en tijdrovende klus zijn als u er geen
                  ervaring in heeft. Ons ervaren team van behangers neemt deze klus
                  met plezier van u over, zodat u zich kunt richten op andere
                  belangrijke zaken.
                </p>
                <p className="text-text-light leading-relaxed">
                  Onze kennis en ervaring stelt ons in staat om snel en precies te
                  werken, zodat uw woning er binnen de kortste keren weer als nieuw
                  uitziet.
                </p>
              </div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/wow069-world-of-wallpaper-calypso-leaf-wallpaper-blue-gold-ae3-1.jpg"
                  alt="Behangen resultaat met luxe wallpaper"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Full-width text */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                Het ene behang is het andere niet
              </h3>
              <p className="text-text-light leading-relaxed">
                Het grootste voordeel van behang is dat er veel ruimte is voor
                creativiteit. Er zijn ontzettend veel mogelijkheden in behang,
                zowel in kleuren, patronen als materialen. Behangpapier in papier is
                verreweg het meest bekend, maar er is ook behangpapier met vinyl,
                zijde, metallic en glasvezelbehang op de markt. U kunt zelfs behang
                met reliëf kiezen. Met het juiste behang geeft u uw
                interieur extra warmte of juist extra pit. Daarnaast heeft behang ook een geluiddempende en licht isolerende werking. Onze
                professionele behangers geven u graag advies over welk behang het beste in uw interieur past.
              </p>
            </div>

            {/* Illustration + Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 sm:h-80 flex items-center justify-center">
                <Image
                  src="/images/services/ai_builder_media_hne9wxyd_10.svg"
                  alt="Illustratie van professioneel behangen"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                  Oneffen ondergronden verbergen
                </h3>
                <p className="text-text-light leading-relaxed">
                  Zijn uw muren wat ruw of hebben ze zelfs oneffenheden? Voor
                  schilderwerk kan dit voor problemen zorgen, maar met behang hoeft
                  dat geen probleem te zijn. Ruw stucwerk, onnauwkeurig gevoegde
                  naden en oneffenheden worden met behang aan het zicht onttrokken.
                  Voor muren met oneffenheden maken we gebruik van renovatief behang. Het enige nadeel is dat u dat achteraf niet zo
                  gemakkelijk meer kunt verwijderen.
                </p>
                <p className="text-text-light leading-relaxed">
                  Dankzij een voorimpressie, waarbij we uw gewenste kleuren in het
                  interieur fotoshoppen, krijgt u een goed beeld van het mogelijke
                  eindresultaat. Daarna gaan we aan de slag en schilderen we uw
                  muren, deuren, trap of raamkozijnen. Zo maken wij het interieur van
                  uw dromen werkelijkheid.
                </p>
              </div>
            </div>

            {/* Full-width text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text mb-4 font-[family-name:var(--font-serif)]">
                Zo p(l)akken wij dat aan
              </h3>
              <p className="text-text-light leading-relaxed">
                Voordat we starten met het aanbrengen van het behangpapier,
                bereiden wij de ondergrond voor met een voorstrijkmiddel of een
                primer. Dit bevordert de hechting, zodat u kunt genieten van een
                duurzaam en mooi resultaat. Met de nodige snelheid en precisie
                brengen wij daarna het behang van uw keuze aan.
              </p>
            </div>
          </div>
        }
        features={[
          "Wij hebben de nodige ervaring met behangen en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
          "Onze professionele behangers geven u graag advies over welk behang het beste in uw interieur past.",
          "Wij werken snel en precies, zodat uw woning er binnen de kortste keren weer als nieuw uitziet.",
          "Met het juiste behang geeft u uw interieur extra warmte of juist extra pit.",
        ]}
      />
    </>
  );
}
