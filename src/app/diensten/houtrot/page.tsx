import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Houtrot Reparatie | Arix Schilderbedrijf",
  description:
    "Specialist in het behandelen en repareren van houtrot in Barneveld. Voorkom verdere schade met de expertise van Arix Schilderbedrijf.",
  openGraph: {
    type: "website",
    url: "/diensten/houtrot",
    title: "Houtrot Reparatie | Arix Schilderbedrijf",
    description:
      "Specialist in het behandelen en repareren van houtrot in Barneveld. Voorkom verdere schade.",
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
    title: "Houtrot Reparatie | Arix Schilderbedrijf",
    description:
      "Specialist in het behandelen en repareren van houtrot in Barneveld. Voorkom verdere schade.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: "/diensten/houtrot",
  },
};

export default function HoutrotPage() {
  return (
    <ServicePageLayout
      title="Houtrot"
      subtitle="Arix-schildersbedrijf, de specialist in het behandelen en repareren van houtrot in Barneveld"
      image="/images/project2.jpg"
      description={
        <div className="space-y-5">
          <p>
            Houtrot is een veelvoorkomend probleem bij vele huizen en andere
            gebouwen met houten elementen. Houtrot ontstaat wanneer schimmels
            houten constructies aantasten. De schimmels gedijen goed in vochtige
            omstandigheden en voeden zich met hout, waardoor het wordt
            afgebroken.
          </p>
          <p>
            Als u niet tijdig ingrijpt, kan dit zowel aan de binnenkant als aan
            de buitenkant van uw huis leiden tot ernstige schade. Kozijnen die
            zijn aangetast door houtrot laten gemakkelijker tocht en vocht door.
            Vloeren en balkons verzwakken door houtrot en kunnen in het ergste
            geval zelfs bezwijken. Zodra u een vermoeden heeft van houtrot in
            uw huis, is het belangrijk om het houtrot zo snel mogelijk te laten
            behandelen om verdere schade te voorkomen.
          </p>
          <h3 className="text-lg font-bold text-text mt-6 mb-2">
            Onze aanpak
          </h3>
          <p>
            Dankzij onze ruime ervaring in houtrot reparatie kunnen wij houtrot
            snel en grondig oplossen. We starten de behandeling met een
            grondige inspectie om de schade te bepalen. Vervolgens verwijderen
            we het aangetaste hout en vervangen we dit door nieuw hout van de
            zelfde kwaliteit en soort.
          </p>
          <p>
            Daarnaast behandelen we ook het omliggende hout om verdere
            aantasting te voorkomen. Als laatste schilderen we het nieuwe
            houtwerk, zodat het er weer als nieuw uitziet.
          </p>
        </div>
      }
      features={[
        "Wij hebben de nodige ervaring met houtrot reparatie en weten precies hoe wij dit op de juiste manier moeten aanpakken.",
        "Om uw houtrot te herstellen, werken we enkel met de beste gereedschappen en materialen.",
        "Wij werken snel en grondig, zodat verdere schade wordt voorkomen.",
        "Zo bent u ervan verzekerd dat de reparatie lange tijd meegaat.",
      ]}
    />
  );
}
