import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochure & Catalog | Loyalty Global — Download Product Information",
  description:
    "Download Loyalty Global's company profile, product catalog, export guidelines, and quality standards brochures. Everything importers need to start a partnership with us.",
  keywords:
    "Loyalty Global brochure, product catalog download, agricultural export company profile India, Loyalty Global PDF download",
  alternates: {
    canonical: "https://loyaltyglobal.co.in/brochure",
  },
  openGraph: {
    title: "Brochure & Catalog — Loyalty Global | Download Product Information",
    description:
      "Download Loyalty Global's company profile, product catalog, and export guidelines. Everything you need to know about partnering with India's trusted agricultural exporter.",
    url: "https://loyaltyglobal.co.in/brochure",
    type: "website",
    images: [
      {
        url: "https://loyaltyglobal.co.in/assets/images/spices.jpg",
        width: 1200,
        height: 630,
        alt: "Loyalty Global Brochure and Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brochure & Catalog | Loyalty Global — Download Info",
    description:
      "Download Loyalty Global's product catalog, company profile, and export guidelines.",
  },
};

export default function BrochureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
