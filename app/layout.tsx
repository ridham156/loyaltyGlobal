import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loyaltyglobal.co.in"),
  title: {
    default: "Loyalty Global - Premium Agricultural Exports from India",
    template: "%s | Loyalty Global",
  },
  description:
    "Loyalty Global is a leading exporter of premium Indian agricultural products including spices, pulses, edible oils, and dehydrated vegetables to markets worldwide. ISO certified, FSSAI approved, exporting to 50+ countries.",
  keywords:
    "Loyalty Global, loyaltyglobal, agricultural exports India, Indian spices exporter, pulses export India, edible oils exporter, dehydrated vegetables, spice export company Ahmedabad Gujarat, food export India, turmeric exporter, cumin seeds export",
  authors: [{ name: "Loyalty Global", url: "https://www.loyaltyglobal.co.in" }],
  creator: "Loyalty Global",
  publisher: "Loyalty Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.loyaltyglobal.co.in",
  },
  openGraph: {
    title: "Loyalty Global - Premium Agricultural Exports from India",
    description:
      "Your trusted partner for premium Indian agricultural exports. Quality products, competitive pricing, and reliable delivery worldwide.",
    type: "website",
    locale: "en_US",
    url: "https://www.loyaltyglobal.co.in",
    siteName: "Loyalty Global",
    images: [
      {
        url: "/assets/images/spices.png",
        width: 1200,
        height: 630,
        alt: "Loyalty Global - Premium Agricultural Exports from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loyalty Global - Premium Agricultural Exports from India",
    description:
      "Your trusted partner for premium Indian agricultural exports. Spices, pulses, oils & dehydrated vegetables.",
    images: ["/assets/images/spices.png"],
  },
  verification: {
    google: "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Loyalty Global",
  url: "https://www.loyaltyglobal.co.in",
  logo: "https://www.loyaltyglobal.co.in/assets/images/spices.png",
  description:
    "Loyalty Global is a leading exporter of premium Indian agricultural products including spices, pulses, edible oils, and dehydrated vegetables to markets worldwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Export Hub, GIDC Industrial Area",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382445",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98765-43210",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  sameAs: [
    "https://facebook.com/loyaltyglobal",
    "https://twitter.com/loyaltyglobal",
    "https://linkedin.com/company/loyaltyglobal",
    "https://instagram.com/loyaltyglobal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {/* pt accounts for fixed header: top bar (~36px on lg) + nav (~64-80px) */}
        <main className="flex-1 pt-[72px] lg:pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
