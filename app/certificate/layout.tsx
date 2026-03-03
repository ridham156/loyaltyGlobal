import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Loyalty Global — ISO, FSSAI, HACCP, APEDA Certified",
  description:
    "Loyalty Global holds internationally recognized certifications including ISO 22000:2018, FSSAI, HACCP, USDA Organic, and APEDA registration — ensuring the highest food safety and export quality standards.",
  keywords:
    "Loyalty Global certifications, ISO 22000 food export India, FSSAI certified exporter, HACCP certification India, APEDA registered exporter, organic certified spices India",
  alternates: {
    canonical: "https://loyaltyglobal.co.in/certificate",
  },
  openGraph: {
    title: "Certifications — Loyalty Global | ISO, FSSAI, HACCP, APEDA",
    description:
      "Loyalty Global is ISO 22000:2018, FSSAI, HACCP, and APEDA certified — guaranteeing food safety and export compliance for every shipment.",
    url: "https://loyaltyglobal.co.in/certificate",
    type: "website",
    images: [
      {
        url: "/assets/images/spices.png",
        width: 1200,
        height: 630,
        alt: "Loyalty Global Certifications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | Loyalty Global — ISO, FSSAI, HACCP Certified",
    description:
      "ISO 22000, FSSAI, HACCP, Organic & APEDA certified agricultural exporter from India.",
  },
};

export default function CertificateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
