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
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arix-schilderbedrijf.nl"),
  title: {
    template: "%s | Arix Schilderbedrijf",
    default: "Arix Schilderbedrijf | Professionele Schilders in Barneveld",
  },
  description:
    "Arix-schildersbedrijf volbrengt al uw schilderwerken met succes. Meer dan tien jaar ervaring in schilderwerk, spuitwerk en behangen in Barneveld, Tiel en Arnhem.",
  keywords: [
    "schilder",
    "schilderwerk",
    "Barneveld",
    "spuitwerk",
    "behangen",
    "houtrot",
    "schilderbedrijf",
  ],
  openGraph: {
    title: {
      template: "%s | Arix Schilderbedrijf",
      default: "Arix Schilderbedrijf | Professionele Schilders in Barneveld",
    },
    description:
      "Arix-schildersbedrijf volbrengt al uw schilderwerken met succes. Meer dan tien jaar ervaring in schilderwerk, spuitwerk en behangen in Barneveld, Tiel en Arnhem.",
    url: "https://arix-schilderbedrijf.nl",
    siteName: "Arix Schilderbedrijf",
    locale: "nl_NL",
    type: "website",
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
    title: {
      template: "%s | Arix Schilderbedrijf",
      default: "Arix Schilderbedrijf | Professionele Schilders in Barneveld",
    },
    description:
      "Arix-schildersbedrijf volbrengt al uw schilderwerken met succes. Meer dan tien jaar ervaring in schilderwerk, spuitwerk en behangen in Barneveld, Tiel en Arnhem.",
    images: ["/images/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Arix Schilderbedrijf" }],
  creator: "Arix Schilderbedrijf",
  publisher: "Arix Schilderbedrijf",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
