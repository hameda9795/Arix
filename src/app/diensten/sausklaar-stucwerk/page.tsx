import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sausklaar Stucwerk | Arix Schilderbedrijf",
  description:
    "De specialist in sauzen in de regio Barneveld. Muren en plafonds perfect egaal sauzen door Arix Schilderbedrijf.",
  openGraph: {
    type: "website",
    url: "/diensten/sausklaar-stucwerk",
    title: "Sausklaar Stucwerk | Arix Schilderbedrijf",
    description:
      "De specialist in sauzen in de regio Barneveld. Muren en plafonds perfect egaal sauzen.",
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
    title: "Sausklaar Stucwerk | Arix Schilderbedrijf",
    description:
      "De specialist in sauzen in de regio Barneveld. Muren en plafonds perfect egaal sauzen.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/diensten/sausklaar-stucwerk",
  },
};

export default function SausklaarStucwerkPage() {
  return (
    <ServicePageLayout
      title="Sausklaar-stucwerk"
      subtitle="Arix-schildersbedrijf, de specialist in sauzen in de regio Barneveld"
      image="/images/project6.jpg"
      description={
        <div className="space-y-5">
          <p>
            Arix-schildersbedrijf is gespecialiseerd in het aanbrengen van verf
            en coatings, en het sauzen van wanden en plafonds is daar een
            belangrijk onderdeel van. Dankzij onze jarenlange ervaring slagen
            wij erin om uw muren en plafonds perfect egaal te sauzen en een
            kwalitatief en duurzaam resultaat af te leveren.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Wat is het verschil tussen sauzen en schilderen?
          </h3>
          <p>
            Vaak denken klanten dat muren sauzen hetzelfde zijn als muren
            schilderen. Voor schilders en latexspuiters is er echter een
            wezenlijk verschil. Tijdens het sauzen wordt er een nieuwe latex
            verflaag aangebracht op het plafond en de muren. Schilderen
            daarentegen gebeurt met lakverf. Sauzen is ook enkel maar mogelijk
            op muren en plafonds. Houtwerk bijvoorbeeld, kunnen wij nooit
            sauzen.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Onze werkwijze om uw muren of plafond te sauzen
          </h3>
          <p>
            Voor we uw muren of plafond kunnen sauzen, moeten we de wanden
            voorbereiden. We starten met het afdekken van de oppervlakken die
            niet gesausd moeten worden. Dit kunnen vloeren, stopcontacten,
            houtwerk en aangrenzende muren zijn.
          </p>
          <p>
            Eventuele oneffenheden en beschadigingen werken we weg, zodat we
            een zo egaal mogelijk canvas hebben om mee te starten. Voor we
            starten met het sauzen van de muren of het plafond, voorzien we
            deze van de juiste voorstrijk.
          </p>
          <p>
            De makkelijkste manier om uw muren zonder strepen te sauzen, is
            door deze met latex te spuiten. Als wij echter niet kunnen spuiten
            in uw woning of pand, kunnen wij uw muren op de traditionele manier
            sauzen. Zo zorgen wij altijd voor een strak en egaal resultaat.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Scherpe tarieven voor muren en plafonds sauzen in Barneveld
          </h3>
          <p>
            Voor het sauzen van uw muren of plafond hanteren we bij
            Arix-schildersbedrijf zeer scherpe tarieven. De belangrijkste reden
            daarvoor is dat wij de muren en plafonds kunnen spuiten met latex.
            Deze snelle manier van werken vertaalt zich uiteraard ook in de
            prijs van de werken.
          </p>
        </div>
      }
      features={[
        "Wij hebben de nodige ervaring met sauzen en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
        "Wij werken snel en nauwkeurig, zodat u zich geen zorgen hoeft te maken.",
        "Wij zijn pas tevreden als we een strak en egaal resultaat hebben.",
        "Als laatste ruimen we de werkplek op en laten we deze netjes achter.",
      ]}
    />
  );
}
