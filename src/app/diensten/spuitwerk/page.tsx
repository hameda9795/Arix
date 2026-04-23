import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Spuitwerk & Latex Spuiten | ARIX-SCHILDERSBEDRIJF",
  description:
    "Latex spuitwerk in de regio Barneveld voor een egaal resultaat zonder strepen. ARIX-SCHILDERSBEDRIJF levert vakmanschap en kwaliteit.",
  openGraph: {
    type: "website",
    url: "/diensten/spuitwerk",
    title: "Spuitwerk & Latex Spuiten | ARIX-SCHILDERSBEDRIJF",
    description:
      "Latex spuitwerk in de regio Barneveld voor een egaal resultaat zonder strepen.",
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
    title: "Spuitwerk & Latex Spuiten | ARIX-SCHILDERSBEDRIJF",
    description:
      "Latex spuitwerk in de regio Barneveld voor een egaal resultaat zonder strepen.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/diensten/spuitwerk",
  },
};

export default function SpuitwerkPage() {
  return (
    <ServicePageLayout
      title="Spuitwerk"
      subtitle="Latex spuitwerk in de regio Barneveld door Arix-schildersbedrijf"
      image="/images/project5.jpg"
      description={
        <div className="space-y-5">
          <p>
            Arix-schildersbedrijf is al jarenlang actief in de regio Barneveld.
            Ook op het vlak van latex spuiten hebben wij een uitstekende
            reputatie als het gaat om vakmanschap en kwaliteit. Zoekt u nog
            iemand om uw muren of plafond met latex te spuiten? Dan zit u bij
            ons aan het juiste adres!
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Latex spuitwerk
          </h3>
          <p>
            Latex spuiten is een snelle techniek waarbij latex verf met behulp
            van een spuit op plafond en muren wordt aangebracht. Omdat er geen
            roller wordt gebruikt, is het resultaat egaal en zonder strepen. De
            aanzetten zijn niet zichtbaar en er wordt geen enkel plekje
            vergeten.
          </p>
          <p>
            Wij kunnen vrijwel overal latex spuiten. Het is een snelle manier
            om een bestaand huis op te knappen, maar ook in een nieuwbouw
            spuiten wij latex. Latex is het mooiste als we dit kunnen spuiten
            over glad stucwerk, maar ook andere ondergronden zijn mogelijk.
            Denk maar aan behang, steen en gipsplaten.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Onze werkwijze
          </h3>
          <p>
            Wij werken volgens een duidelijke werkwijze. Voordat we latex
            spuiten, inspecteren we de oppervlakken die we willen verven.
            Eventuele beschadigingen en oneffenheden worden gerepareerd. De
            omliggende oppervlakken die niet geverfd moeten worden, dekken we
            af.
          </p>
          <p>
            Vervolgens brengen we indien nodig een voorstrijkmiddel en
            hechtlaag aan, zo garanderen we een goede hechting van de
            latexverf. We brengen de latexverf in twee lagen aan. Dit zorgt voor
            een goede dekking, wat de levensduur ten goede komt.
          </p>
        </div>
      }
      features={[
        "Wij hebben de nodige ervaring met latex spuiten en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
        "Om uw latex spuitwerk te voltooien, werken we enkel met de beste apparatuur en materialen.",
        "Wij werken snel en nauwkeurig, zodat u zich geen zorgen hoeft te maken.",
        "We zijn pas tevreden als we een strak en egaal resultaat hebben.",
      ]}
    />
  );
}
