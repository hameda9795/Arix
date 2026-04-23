import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Behangen & Wallpaper | ARIX-SCHILDERSBEDRIJF",
  description:
    "Expert in behangen in de regio Barneveld. Professioneel behangen met diverse materialen en patronen door ARIX-SCHILDERSBEDRIJF.",
  openGraph: {
    type: "website",
    url: "/diensten/behangen",
    title: "Behangen & Wallpaper | ARIX-SCHILDERSBEDRIJF",
    description:
      "Expert in behangen in de regio Barneveld. Professioneel behangen met diverse materialen en patronen.",
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
    title: "Behangen & Wallpaper | ARIX-SCHILDERSBEDRIJF",
    description:
      "Expert in behangen in de regio Barneveld. Professioneel behangen met diverse materialen en patronen.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/diensten/behangen",
  },
};

export default function BehangenPage() {
  return (
    <ServicePageLayout
      title="Behangen"
      subtitle="Expert in behangen in de regio Barneveld"
      image="/images/project3.jpg"
      description={
        <div className="space-y-5">
          <p>
            Bent u net verhuisd of heeft uw woning een opknapbeurt nodig? Met
            een leuk behang maakt u van uw huis een echte thuis. Behangen kan
            echter een moeilijke en tijdrovende klus zijn als u er geen
            ervaring in heeft. Ons ervaren team van behangers neemt deze klus
            met plezier van u over, zodat u zich kunt richten op andere
            belangrijke zaken.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Het ene behang is het andere niet
          </h3>
          <p>
            Het grootste voordeel van behang is dat er veel ruimte is voor
            creativiteit. Er zijn ontzettend veel mogelijkheden in behang,
            zowel in kleuren, patronen als materialen. Behangpapier in papier is
            verreweg het meest bekend, maar er is ook behangpapier met vinyl,
            zijde, metallic en glasvezelbehang op de markt. U kunt zelfs behang
            met reliëf kiezen.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Oneffen ondergronden verbergen
          </h3>
          <p>
            Zijn uw muren wat ruw of hebben ze zelfs oneffenheden? Voor
            schilderwerk kan dit voor problemen zorgen, maar met behang hoeft
            dat geen probleem te zijn. Ruw stucwerk, onnauwkeurig gevoegde
            naden en oneffenheden worden met behang aan het zicht onttrokken.
            Voor muren met oneffenheden maken we gebruik van renovatief behang.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Zo p(l)akken wij dat aan
          </h3>
          <p>
            Voordat we starten met het aanbrengen van het behangpapier,
            bereiden wij de ondergrond voor met een voorstrijkmiddel of een
            primer. Dit bevordert de hechting, zodat u kunt genieten van een
            duurzaam en mooi resultaat. Met de nodige snelheid en precisie
            brengen wij daarna het behang van uw keuze aan.
          </p>
        </div>
      }
      features={[
        "Wij hebben de nodige ervaring met behangen en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
        "Onze professionele behangers geven u graag advies over welk behang het beste in uw interieur past.",
        "Wij werken snel en precies, zodat uw woning er binnen de kortste keren weer als nieuw uitziet.",
        "Met het juiste behang geeft u uw interieur extra warmte of juist extra pit.",
      ]}
    />
  );
}
