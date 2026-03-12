"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/constants";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      setPrevSlide(prev);
      return (prev + 1) % HERO_SLIDES.length;
    });
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => {
      setPrevSlide(prev);
      return (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToSlide = (index: number) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[85vh] overflow-hidden">
      {/* Slides — pure CSS crossfade, no framer-motion */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: index === currentSlide ? 1 : 0, zIndex: index === currentSlide ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
            quality={80}
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Overlay */}
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Bottom bleed */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t z-[15] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center" style={{ zIndex: 2 }}>
        <div className="max-w-3xl">
          <div
            key={currentSlide}
            className="animate-hero-fade"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-white/85 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              {HERO_SLIDES[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/products"
                className="bg-[#f0a500] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#d4920a] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group shadow-lg"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/quote"
                className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base border border-white/35 hover:bg-white hover:text-[#0f4c75] hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Quotation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-5/6 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-[#0f4c75] hover:border-white transition-all duration-300 z-20"
        style={{ zIndex: 20 }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => { setPrevSlide(currentSlide); nextSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 15000); }}
        className="absolute right-4 md:right-8 top-5/6 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-[#0f4c75] hover:border-white transition-all duration-300 z-20"
        style={{ zIndex: 20 }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5" style={{ zIndex: 20 }}>
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? "w-8 h-2.5 bg-[#f0a500] rounded-full"
                : "w-2.5 h-2.5 bg-white/40 rounded-full hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar — CSS animation only */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ zIndex: 20 }}>
        <div
          key={currentSlide}
          className="h-full bg-[#f0a500]/50 animate-progress"
        />
      </div>
    </section>
  );
}
