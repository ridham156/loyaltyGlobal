import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Loyalty Global — Spices, Oils, Pulses & Vegetables",
  description:
    "Browse Loyalty Global's full range of export-quality Indian agricultural products — spices & seasonings, edible oils, pulses & grains, and dehydrated vegetables. ISO certified, FSSAI approved.",
  keywords:
    "Loyalty Global products, Indian spices export, turmeric powder exporter India, cumin seeds export, coriander powder export, red chilli powder exporter, cardamom exporter India, groundnut oil exporter, sesame oil export India, chickpeas exporter India, chana dal export, wheat exporter India, rice exporter India, black sesame export, dehydrated vegetables India, moringa powder exporter, onion powder exporter, garlic powder exporter India, banana powder export, pulses export India, grains export India, agricultural commodities India, jaggery exporter India, fennel seeds exporter",
  alternates: {
    canonical: "https://loyaltyglobal.co.in/products",
  },
  openGraph: {
    title: "Products — Loyalty Global | Premium Indian Agricultural Exports",
    description:
      "Explore Loyalty Global's export catalog: spices, edible oils, pulses, grains, and dehydrated vegetables. Serving importers in 50+ countries with ISO-certified quality.",
    url: "https://loyaltyglobal.co.in/products",
    type: "website",
    images: [
      {
        url: "https://loyaltyglobal.co.in/assets/images/spices.jpg",
        width: 1200,
        height: 630,
        alt: "Loyalty Global Product Range",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Loyalty Global — Premium Indian Agricultural Exports",
    description:
      "Spices, edible oils, pulses & dehydrated vegetables — ISO-certified exports from India.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
