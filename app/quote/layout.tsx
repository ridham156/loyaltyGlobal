import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quotation | Loyalty Global — Request Export Price",
  description:
    "Request a free export quotation from Loyalty Global. Tell us your product requirements — spices, oils, pulses, or vegetables — and receive a competitive price within 24 hours.",
  keywords:
    "Loyalty Global quotation, request export price India, spices export quote, agricultural products price India, import from India quotation",
  alternates: {
    canonical: "https://loyaltyglobal.co.in/quote",
  },
  openGraph: {
    title: "Request a Quotation — Loyalty Global Agricultural Exports",
    description:
      "Get a competitive export quote from Loyalty Global within 24 hours. Spices, edible oils, pulses, grains, and dehydrated vegetables — shipped worldwide.",
    url: "https://loyaltyglobal.co.in/quote",
    type: "website",
    images: [
      {
        url: "/assets/images/spices.png",
        width: 1200,
        height: 630,
        alt: "Get a Quotation from Loyalty Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quotation | Loyalty Global — Export Price in 24 Hours",
    description:
      "Request a free export quotation for spices, oils, pulses, or vegetables from Loyalty Global.",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
