import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Loyalty Global — Spices, Oils, Pulses & Vegetables",
  description:
    "Browse Loyalty Global's full range of export-quality Indian agricultural products — spices & seasonings, edible oils, pulses & grains, and dehydrated vegetables. ISO certified, FSSAI approved.",
  keywords:
    "Loyalty Global products, Indian spices export, turmeric export, cumin seeds, groundnut oil export, chickpeas export, dehydrated vegetables India, pulses export India",
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
        url: "/assets/images/spices.png",
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
