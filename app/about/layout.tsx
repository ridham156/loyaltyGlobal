import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Loyalty Global — India's Trusted Agricultural Exporter",
  description:
    "Learn about Loyalty Global — founded in Ahmedabad, Gujarat, we are a trusted exporter of premium Indian spices, pulses, edible oils, and dehydrated vegetables to 50+ countries worldwide.",
  keywords:
    "about Loyalty Global, Loyalty Global Ahmedabad, Indian agricultural exporter, spice export company India, Loyalty Global Gujarat",
  alternates: {
    canonical: "https://loyaltyglobal.co.in/about",
  },
  openGraph: {
    title: "About Loyalty Global — India's Premier Agricultural Export Company",
    description:
      "Founded in Ahmedabad, Gujarat, Loyalty Global exports premium Indian spices, pulses, edible oils, and dehydrated vegetables to over 50 countries. Built on trust, quality, and long-term partnerships.",
    url: "https://loyaltyglobal.co.in/about",
    type: "website",
    images: [
      {
        url: "https://loyaltyglobal.co.in/assets/images/spices.png",
        width: 1200,
        height: 630,
        alt: "About Loyalty Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Loyalty Global — India's Trusted Agricultural Exporter",
    description:
      "Ahmedabad-based exporter of premium Indian spices, pulses, oils & vegetables to 50+ countries.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
