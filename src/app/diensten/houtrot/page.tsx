import type { Metadata } from "next";
import Image from "next/image";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Houtrot Reparatie | ARIX-SCHILDERSBEDRIJF Barneveld",
  description:
    "Specialist in het behandelen en repareren van houtrot in Barneveld. Voorkom verdere schade met de expertise van ARIX-SCHILDERSBEDRIJF.",
  keywords: [
    "houtrot reparatie Barneveld",
    "houtrot behandelen",
    "houtrot specialist",
    "houtrot kozijnen",
    "houtrot reparatie Amersfoort",
    "houtrot reparatie Ede",
  ],
  openGraph: {
    type: "website",
    url: "/diensten/houtrot",
    title: "Houtrot Reparatie | ARIX-SCHILDERSBEDRIJF Barneveld",
    description:
      "Specialist in het behandelen en repareren van houtrot in Barneveld. Voorkom verdere schade.",
    images: [
      {
        url: "/images/services/roof-truss-gd323f3df1_1920.jpg.webp",
        width: 1200,
        height: 630,
        alt: "Houtrot reparatie en behandeling door ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Houtrot Reparatie | ARIX-SCHILDERSBEDRIJF Barneveld",
    description:
      "Specialist in het behandelen en repareren van houtrot in Barneveld. Voorkom verdere schade.",
    images: ["/images/services/roof-truss-gd323f3df1_1920.jpg.webp"],
  },
  alternates: {
    canonical: "/diensten/houtrot",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Houtrot Reparatie",
  description:
    "Specialist in het behandelen en repareren van houtrot in Barneveld. Voorkom verdere schade.",
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
  serviceType: "Houtrot Reparatie",
  url: "https://arix-schildersbedrijf.nl/diensten/houtrot",
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
      name: "Houtrot Reparatie",
      item: "https://arix-schildersbedrijf.nl/diensten/houtrot",
    },
  ],
};

export default function HoutrotPage() {
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
        title="Houtrot"
        subtitle="Arix-schildersbedrijf, de specialist in het behandelen en repareren van houtrot in Barneveld"
        image="/images/services/roof-truss-gd323f3df1_1920.jpg.webp"
        description={
          <div className="space-y-16">
            {/* Intro with image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-text font-[family-name:var(--font-serif)]">
                  Arix-schildersbedrijf, de specialist in het behandelen en repareren van houtrot in Barneveld
                </h2>
                <p className="text-text-light leading-relaxed">
                  Houtrot is een veelvoorkomend probleem bij vele huizen en andere
                  gebouwen met houten elementen. Houtrot ontstaat wanneer schimmels
                  houten constructies aantasten. De schimmels gedijen goed in vochtige
                  omstandigheden en voeden zich met hout, waardoor het wordt
                  afgebroken.
                </p>
                <p className="text-text-light leading-relaxed">
                  Als u niet tijdig ingrijpt, kan dit zowel aan de binnenkant als aan
                  de buitenkant van uw huis leiden tot ernstige schade. Kozijnen die
                  zijn aangetast door houtrot laten gemakkelijker tocht en vocht door.
                  Vloeren en balkons verzwakken door houtrot en kunnen in het ergste
                  geval zelfs bezwijken. Zodra u een vermoeden heeft van houtrot in
                  uw huis, is het belangrijk om het houtrot zo snel mogelijk te laten
                  behandelen om verdere schade te voorkomen.
                </p>
              </div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/b5bcd435a616a03f90e860f25a63cadd.jpg"
                  alt="Houtrot reparatie voor kozijnen en houtwerk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Full-width text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text mb-4 font-[family-name:var(--font-serif)]">
                Onze aanpak
              </h3>
              <p className="text-text-light leading-relaxed">
                Dankzij onze ruime ervaring in houtrot reparatie kunnen wij houtrot
                snel en grondig oplossen. We starten de behandeling met een
                grondige inspectie om de schade te bepalen. Vervolgens verwijderen
                we het aangetaste hout en vervangen we dit door nieuw hout van de
                zelfde kwaliteit en soort. Daarnaast behandelen we ook het omliggende hout om verdere
                aantasting te voorkomen. Als laatste schilderen we het nieuwe
                houtwerk, zodat het er weer als nieuw uitziet.
              </p>
            </div>

            {/* Illustration + Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 sm:h-80 flex items-center justify-center">
                <Image
                  src="/images/services/ai_builder_media_hne9wxyd_10.svg"
                  alt="Illustratie van houtrot reparatie proces"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                  Waarom kiezen voor Arix-schildersbedrijf?
                </h3>
                <p className="text-text-light leading-relaxed">
                  Wanneer u kiest voor Arix-schildersbedrijf, kiest u voor vakmanschap en
                  kwaliteit. Wij hebben de nodige ervaring met houtrot reparatie en weten
                  precies hoe wij dit op de juiste manier moeten aanpakken. Om uw
                  houtrot te herstellen, werken we enkel met de beste gereedschappen en
                  materialen. Zo bent u ervan verzekerd dat de reparatie lange tijd
                  meegaat. Dankzij een voorimpressie, waarbij we uw gewenste kleuren in
                  het interieur fotoshoppen, krijgt u een goed beeld van het mogelijke
                  eindresultaat. Daarna gaan we aan de slag en schilderen we uw muren,
                  deuren, trap of raamkozijnen. Zo maken wij het interieur van uw dromen
                  werkelijkheid.
                </p>
              </div>
            </div>
          </div>
        }
        features={[
          "Wij hebben de nodige ervaring met houtrot reparatie en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
          "Om uw houtrot te herstellen, werken we enkel met de beste gereedschappen en materialen.",
          "Wij werken snel en grondig, zodat verdere schade wordt voorkomen.",
          "Zo bent u ervan verzekerd dat de reparatie lange tijd meegaat.",
        ]}
      />
    </>
  );
}
