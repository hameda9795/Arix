import type { Metadata } from "next";
import Image from "next/image";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Schilderwerk Binnen & Buiten | ARIX-SCHILDERSBEDRIJF",
  description:
    "Professioneel binnen- en buitenschilderwerk voor woningen en bedrijfspanden in Barneveld. ARIX-SCHILDERSBEDRIJF levert hoogwaardige kwaliteit met meer dan 10 jaar ervaring.",
  openGraph: {
    type: "website",
    url: "/diensten/schilderwerk",
    title: "Schilderwerk Binnen & Buiten | ARIX-SCHILDERSBEDRIJF",
    description:
      "Professioneel binnen- en buitenschilderwerk voor woningen en bedrijfspanden in Barneveld.",
    images: [
      {
        url: "/images/services/pexels-photo-10450330.jpeg",
        width: 1200,
        height: 630,
        alt: "ARIX-SCHILDERSBEDRIJF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schilderwerk Binnen & Buiten | ARIX-SCHILDERSBEDRIJF",
    description:
      "Professioneel binnen- en buitenschilderwerk voor woningen en bedrijfspanden in Barneveld.",
    images: ["/images/services/pexels-photo-10450330.jpeg"],
  },
  alternates: {
    canonical: "/diensten/schilderwerk",
  },
};

export default function SchilderwerkPage() {
  return (
    <ServicePageLayout
      title="Schilderwerk"
      subtitle="Arix-schildersbedrijf, voor al uw schilderwerk in Barneveld"
      image="/images/services/pexels-photo-10450330.jpeg"
      description={
        <div className="space-y-16">
          {/* Intro with image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-text font-[family-name:var(--font-serif)]">
                Arix-schildersbedrijf, voor al uw schilderwerk in Barneveld
              </h2>
              <p className="text-text-light leading-relaxed">
                Is uw trap aan een schilderbeurt toe of kunnen de muren van uw
                woonkamer een nieuw laagje verf gebruiken? Heeft u nood aan een
                professionele schilder in de regio Barneveld? Dan is
                Arix-schildersbedrijf de partner die u zoekt!
              </p>
              <p className="text-text-light leading-relaxed">
                Of u nu een project heeft voor schilderwerk binnen of buiten, voor
                uw woning of uw bedrijfspand, Arix-schilderwerken staat klaar om uw
                project naar volledige tevredenheid te voltooien. Onze jarenlange
                ervaring stelt ons in staat om uw project perfect af te werken.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/interior-paint-ideas-e1682993920591.jpg"
                alt="Schilderwerk interieur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Full-width text */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text mb-4 font-[family-name:var(--font-serif)]">
              Een waaier aan schilderdiensten
            </h3>
            <p className="text-text-light leading-relaxed">
              Wilt u een trap of keukenkastjes laten verven of een plafond laten
              witten? Arix-schildersbedrijf doet het allemaal. Wij bieden een
              brede waaier aan schilderdiensten aan. Wij doen niet enkel
              schilderwerken, zowel binnen als buiten, maar ook houtrotreparatie
              en reiniging en onderhoud van uw schilderwerk. Wij zorgen altijd
              voor een piekfijn eindresultaat waar u nog jaren genot van heeft.
            </p>
          </div>

          {/* Illustration + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 sm:h-80 flex items-center justify-center">
              <Image
                src="/images/services/ai_builder_media_hne9wxyd_10.svg"
                alt="Schilder illustratie"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                Binnenschilderwerk: realiseer het interieur van uw dromen
              </h3>
              <p className="text-text-light leading-relaxed">
                Heeft u nood aan een nieuwe kleur op uw muren of wilt u van uw
                nieuwe huis een warme thuis maken? Arix-schildersbedrijf staat
                klaar om uw interieur onder handen te nemen. Onze ervaren schilders
                bespreken met u de kleuren die u voor ogen heeft en geven hun
                professioneel advies.
              </p>
              <p className="text-text-light leading-relaxed">
                Dankzij een voorimpressie, waarbij we uw gewenste kleuren in het
                interieur fotoshoppen, krijgt u een goed beeld van het mogelijke
                eindresultaat. Daarna gaan we aan de slag en schilderen we uw muren,
                deuren, trap of raamkozijnen. Zo maken wij het interieur van uw dromen
                werkelijkheid.
              </p>
            </div>
          </div>

          {/* Full-width text */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text mb-4 font-[family-name:var(--font-serif)]">
              Buitenschilderwerk: langdurige bescherming die er mooi uitziet
            </h3>
            <p className="text-text-light leading-relaxed">
              Het weer heeft een grote invloed op uw buitenschilderwerk. De verf
              verbleekt en bladdert af. Dit tast niet alleen het uiterlijk van uw
              gevel aan, maar kan ook voor beschadigingen zorgen. Onze schilders
              herkennen moeiteloos beschadigde of zwakke plekken in uw
              buitenschilderwerk. Door dit tijdig te behandelen, voorkomt u verdere
              problemen en behoudt uw pand zijn prachtige uiterlijk en zijn waarde.
            </p>
          </div>

          {/* Text + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-serif)]">
                De voordelen van spuitwerk
              </h3>
              <p className="text-text-light leading-relaxed">
                Muren verven of een plafond witten gaat een heel stuk sneller als u het
                laat spuiten. Met onze moderne technieken en apparatuur spuiten wij
                efficiënt en snel alle oppervlakken. Het eindresultaat is zelfs
                professioneler en egaler dan handmatig schilderwerk. Dankzij onze
                jarenlange ervaring en expertise leveren wij hoogwaardig spuitwerk,
                zowel aan particulieren als aan bedrijven.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/whatsapp-image-2021-05-29-at-11.52.09-PM-5-1-1024x497-1-e1682984153139.jpeg"
                alt="Spuitwerk resultaat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Full-width text */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text mb-4 font-[family-name:var(--font-serif)]">
              Hoogwaardige verfproducten
            </h3>
            <p className="text-text-light leading-relaxed">
              Bij Arix-schildersbedrijf werken we enkel met hoogwaardige
              producten. Wij gebruiken verf van Global Paint, Herfst&Helder,
              Slikkens en Sigma.
            </p>
          </div>
        </div>
      }
      features={[
        "Wij hebben de nodige ervaring met schilderwerk en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
        "Om uw schilderwerk te herstellen, werken we enkel met de beste gereedschappen en materialen.",
        "Wij werken snel en nauwkeurig, zodat u zich geen zorgen hoeft te maken over uw schilderwerk.",
        "Of het nu gaat over deuren witten of muren sauzen, wij zorgen ervoor dat u nog jarenlang genot heeft van het nieuwe schilderwerk.",
      ]}
    />
  );
}
