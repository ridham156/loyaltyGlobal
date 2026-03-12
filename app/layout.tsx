import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f4c75",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://loyaltyglobal.co.in"),
  title: {
    default: "Loyalty Global — Premium Agricultural Exports from India",
    template: "%s | Loyalty Global",
  },
  description:
    "Loyalty Global (loyaltyglobal.co.in) is a trusted exporter of premium Indian agricultural products — spices, pulses, edible oils, and dehydrated vegetables — to buyers in 50+ countries worldwide. ISO 22000, FSSAI & APEDA certified.",
  keywords:
    "Loyalty Global, loyalty global, loyaltyglobal, loyaltyglobal.co.in, agricultural exports India, Indian spices exporter, pulses export India, edible oils exporter India, dehydrated vegetables export, spice export company Ahmedabad Gujarat, food export India, turmeric exporter India, cumin seeds export, Indian food exporter, bulk spices supplier India, wholesale agricultural products India, APEDA registered exporter, FSSAI certified food exporter, best food exporter Gujarat, Indian dry fruits exporter, sesame seeds exporter, groundnut oil exporter India",
  authors: [{ name: "Loyalty Global", url: "https://loyaltyglobal.co.in" }],
  creator: "Loyalty Global",
  publisher: "Loyalty Global",
  category: "Agricultural Export",
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
    canonical: "https://loyaltyglobal.co.in",
  },
  openGraph: {
    title: "Loyalty Global — Premium Agricultural Exports from India",
    description:
      "Loyalty Global exports premium Indian spices, pulses, edible oils, and dehydrated vegetables to 50+ countries. ISO certified, FSSAI approved. Get a quote in 24 hours.",
    type: "website",
    locale: "en_US",
    url: "https://loyaltyglobal.co.in",
    siteName: "Loyalty Global",
    images: [
      {
        url: "https://loyaltyglobal.co.in/assets/images/spices.png",
        width: 1200,
        height: 630,
        alt: "Loyalty Global — Premium Agricultural Exports from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loyalty Global — Premium Agricultural Exports from India",
    description:
      "India's trusted agricultural exporter. Premium spices, pulses, oils & dehydrated vegetables shipped to 50+ countries.",
    images: ["https://loyaltyglobal.co.in/assets/images/spices.png"],
    site: "@loyaltyglobal",
    creator: "@loyaltyglobal",
  },
  verification: {
    google: "",
  },
};

// --- Structured Data (JSON-LD) ---
// Three schemas stacked for maximum brand signal to Google:
// 1. Organization  — identifies the brand entity
// 2. LocalBusiness — ties the brand to a physical location (Ahmedabad)
// 3. WebSite       — enables sitelinks search & tells Google the canonical domain

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://loyaltyglobal.co.in/#organization",
  name: "Loyalty Global",
  alternateName: [
    "loyaltyglobal",
    "loyaltyglobal.co.in",
    "Loyalty Global Exports",
    "Loyalty Global India",
    "LoyaltyGlobal",
  ],
  url: "https://loyaltyglobal.co.in",
  logo: {
    "@type": "ImageObject",
    url: "https://loyaltyglobal.co.in/assets/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://loyaltyglobal.co.in/assets/logo.png",
  description:
    "Loyalty Global is a leading exporter of premium Indian agricultural products including spices, pulses, edible oils, and dehydrated vegetables to markets worldwide. ISO 22000 certified, FSSAI approved, APEDA registered.",
  foundingDate: "2014",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Satyesh Residency, Sarkhej - Sanand Rd, Shela",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382210",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-6353342367",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    {
      "@type": "ContactPoint",
      email: "info@loyaltyglobal.co.in",
      contactType: "sales",
      areaServed: "Worldwide",
    },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61586603233342",
    "https://twitter.com/loyaltyglobal",
    "https://linkedin.com/company/loyaltyglobal",
    "https://www.instagram.com/loyaltyglobal.co.in/",
  ],
  knowsAbout: [
    "Agricultural Exports",
    "Indian Spices",
    "Edible Oils Export",
    "Pulses and Grains Export",
    "Dehydrated Vegetables",
    "Food Safety Standards",
    "International Trade",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://loyaltyglobal.co.in/#localbusiness",
  name: "Loyalty Global",
  image: "https://loyaltyglobal.co.in/assets/logo.png",
  url: "https://loyaltyglobal.co.in",
  telephone: "+91-6353342367",
  email: "info@loyaltyglobal.co.in",
  description:
    "Loyalty Global is Ahmedabad's trusted exporter of premium Indian spices, pulses, edible oils, and dehydrated vegetables. Serving importers in 50+ countries.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Satyesh Residency, Sarkhej - Sanand Rd, Shela",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382210",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.988349069492457",
    longitude: "72.46275440240133",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD, EUR, INR",
  paymentAccepted: "Bank Transfer, Letter of Credit",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Worldwide",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://loyaltyglobal.co.in/#website",
  name: "Loyalty Global",
  alternateName: [
    "loyaltyglobal",
    "loyaltyglobal.co.in",
    "Loyalty Global — Agricultural Exports India",
  ],
  url: "https://loyaltyglobal.co.in",
  description:
    "Official website of Loyalty Global (loyaltyglobal.co.in) — India's trusted agricultural export company based in Ahmedabad, Gujarat.",
  publisher: {
    "@id": "https://loyaltyglobal.co.in/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://loyaltyglobal.co.in/products?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external image CDNs for faster first load */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Structured Data — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Structured Data — WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
