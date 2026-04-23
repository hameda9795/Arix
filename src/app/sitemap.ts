import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arix-schildersbedrijf.nl/",
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: "https://arix-schildersbedrijf.nl/over-ons",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://arix-schildersbedrijf.nl/projecten",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://arix-schildersbedrijf.nl/contact",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://arix-schildersbedrijf.nl/diensten/schilderwerk",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://arix-schildersbedrijf.nl/diensten/spuitwerk",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://arix-schildersbedrijf.nl/diensten/behangen",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://arix-schildersbedrijf.nl/diensten/houtrot",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://arix-schildersbedrijf.nl/diensten/sausklaar-stucwerk",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
