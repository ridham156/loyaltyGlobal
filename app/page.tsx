import HeroCarousel from "@/components/HeroCarousel";
import WelcomeSection from "@/components/WelcomeSection";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import OurStrengths from "@/components/OurStrengths";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <WelcomeSection />
      <ProductCategories />
      <WhyChooseUs />
      <OurProcess />
      <OurStrengths />
    </>
  );
}
