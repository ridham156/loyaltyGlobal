import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import WelcomeSection from "@/components/WelcomeSection";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import OurStrengths from "@/components/OurStrengths";

export const metadata: Metadata = {
  title: "Loyalty Global (loyaltyglobal.co.in) — Premium Agricultural Exports from India",
  description:
    "loyaltyglobal.co.in — Loyalty Global is India's trusted agricultural exporter. Premium spices, edible oils, pulses & dehydrated vegetables shipped to 50+ countries. ISO 22000, FSSAI & APEDA certified. Request a quote in 24 hours.",
  alternates: {
    canonical: "https://loyaltyglobal.co.in",
  },
};

// Home page structured data — product catalog breadcrumb for richer SERP appearance
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Loyalty Global — Product Categories",
  description: "Premium Indian agricultural products exported worldwide by Loyalty Global",
  url: "https://loyaltyglobal.co.in/products",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Spices & Seasonings",
      description:
        "Premium quality Indian spices including turmeric, cumin, coriander, cardamom, red chilli and black pepper — exported by Loyalty Global.",
      url: "https://loyaltyglobal.co.in/products",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Edible Oils",
      description:
        "Cold-pressed and refined cooking oils — groundnut, sesame, mustard, coconut — meeting international quality standards. Exported by Loyalty Global.",
      url: "https://loyaltyglobal.co.in/products",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pulses & Grains",
      description:
        "High-protein chickpeas, red lentils, green moong, black gram and kidney beans sourced from premium Indian farms by Loyalty Global.",
      url: "https://loyaltyglobal.co.in/products",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Dehydrated Vegetables",
      description:
        "Onion, garlic, tomato, ginger, banana and moringa powder — advanced dehydration technology preserving taste and nutrition. Exported by Loyalty Global.",
      url: "https://loyaltyglobal.co.in/products",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroCarousel />
      <WelcomeSection />
      <ProductCategories />
      <WhyChooseUs />
      <OurProcess />
      <OurStrengths />
    </>
  );
}
