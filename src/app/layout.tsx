import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C5A059",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arix-schildersbedrijf.nl"),
  title: {
    template: "%s | ARIX-SCHILDERSBEDRIJF",
    default: "ARIX-SCHILDERSBEDRIJF | Professionele Schilders in Barneveld",
  },
  description:
    "ARIX-SCHILDERSBEDRIJF volbrengt al uw schilderwerken met succes. Meer dan tien jaar ervaring in schilderwerk, spuitwerk en behangen in Barneveld, Amersfoort, Utrecht, Veenendaal en Ede.",
  keywords: [
    "schilder",
    "schilderwerk",
    "Barneveld",
    "spuitwerk",
    "behangen",
    "houtrot",
    "schilderbedrijf",
    "schilder Barneveld",
    "binnenschilderwerk",
    "buitenschilderwerk",
    "latex spuiten",
    "stucwerk",
    "schilder Amersfoort",
    "schilder Utrecht",
    "schilder Ede",
    "schilder Veenendaal",
    "schildersbedrijf Gelderland",
  ],
  category: "business",
  classification: "Schildersbedrijf",
  openGraph: {
    title: {
      template: "%s | ARIX-SCHILDERSBEDRIJF",
      default: "ARIX-SCHILDERSBEDRIJF | Professionele Schilders in Barneveld",
    },
    description:
      "Arix-schildersbedrijf volbrengt al uw schilderwerken met succes. Meer dan tien jaar ervaring in schilderwerk, spuitwerk en behangen in Barneveld, Amersfoort, Utrecht, Veenendaal en Ede.",
    url: "https://arix-schildersbedrijf.nl",
    siteName: "ARIX-SCHILDERSBEDRIJF",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Professioneel schilderwerk door ARIX-SCHILDERSBEDRIJF in Barneveld",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | ARIX-SCHILDERSBEDRIJF",
      default: "ARIX-SCHILDERSBEDRIJF | Professionele Schilders in Barneveld",
    },
    description:
      "Arix-schildersbedrijf volbrengt al uw schilderwerken met succes. Meer dan tien jaar ervaring in schilderwerk, spuitwerk en behangen in Barneveld, Amersfoort, Utrecht, Veenendaal en Ede.",
    images: ["/images/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "ARIX-SCHILDERSBEDRIJF" }],
  creator: "ARIX-SCHILDERSBEDRIJF",
  publisher: "ARIX-SCHILDERSBEDRIJF",
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
    },
  },
  verification: {
    google: "hdNoKC2LDxuwvfUxuCzBec2hLmGPma8bAo7",
  },
  other: {
    "msapplication-TileColor": "#C5A059",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" dir="ltr" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
