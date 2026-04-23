import type { Metadata } from "next";
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
        url: "/images/hero-bg.webp",
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
    images: ["/images/hero-bg.webp"],
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
      image="/images/project1.jpg"
      description={
        <div className="space-y-5">
          <p>
            Is uw trap aan een schilderbeurt toe of kunnen de muren van uw
            woonkamer een nieuw laagje verf gebruiken? Heeft u nood aan een
            professionele schilder in de regio Barneveld? Dan is
            Arix-schildersbedrijf de partner die u zoekt!
          </p>
          <p>
            Of u nu een project heeft voor schilderwerk binnen of buiten, voor
            uw woning of uw bedrijfspand, Arix-schilderwerken staat klaar om uw
            project naar volledige tevredenheid te voltooien. Onze jarenlange
            ervaring stelt ons in staat om uw project perfect af te werken.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Een waaier aan schilderdiensten
          </h3>
          <p>
            Wilt u een trap of keukenkastjes laten verven of een plafond laten
            witten? Arix-schildersbedrijf doet het allemaal. Wij bieden een
            brede waaier aan schilderdiensten aan. Wij doen niet enkel
            schilderwerken, zowel binnen als buiten, maar ook houtrotreparatie
            en reiniging en onderhoud van uw schilderwerk. Wij zorgen altijd
            voor een piekfijn eindresultaat waar u nog jaren genot van heeft.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Binnenschilderwerk: realiseer het interieur van uw dromen
          </h3>
          <p>
            Heeft u nood aan een nieuwe kleur op uw muren of wilt u van uw
            nieuwe huis een warme thuis maken? Arix-schildersbedrijf staat
            klaar om uw interieur onder handen te nemen. Onze ervaren schilders
            bespreken met u de kleuren die u voor ogen heeft en geven hun
            professioneel advies.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Buitenschilderwerk: langdurige bescherming die er mooi uitziet
          </h3>
          <p>
            Het weer heeft een grote invloed op uw buitenschilderwerk. De verf
            verbleekt en bladdert af. Dit tast niet alleen het uiterlijk van uw
            gevel aan, maar kan ook voor beschadigingen zorgen. Onze schilders
            herkennen moeiteloos beschadigde of zwakke plekken in uw
            buitenschilderwerk.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Hoogwaardige verfproducten
          </h3>
          <p>
            Bij Arix-schildersbedrijf werken we enkel met hoogwaardige
            producten. Wij gebruiken verf van Global Paint, Herfst&Helder,
            Slikkens en Sigma.
          </p>
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
