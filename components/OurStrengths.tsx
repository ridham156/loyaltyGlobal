"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2, Award, Users, TrendingDown, Microscope, Truck } from "lucide-react";
import { OUR_STRENGTHS } from "@/data/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Award,
  Users,
  TrendingDown,
  Microscope,
  Truck,
};

export default function OurStrengths() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      if (isPaused || !carouselRef.current) return;
      const el = carouselRef.current;
      const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
      if (isAtEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* <span className="inline-block text-[#f0a500] font-semibold text-sm uppercase tracking-wider mb-4">
            Our Capabilities
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 section-title">
            OUR STRENGTH
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Our strength comes from trusted sourcing, strict quality control, and dependable global trade partnerships.
    Experienced Team – Strong export knowledge and industry expertise.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0f4c75] hover:bg-[#0f4c75] hover:text-white transition-all duration-300"
            aria-label="Previous strength"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0f4c75] hover:bg-[#0f4c75] hover:text-white transition-all duration-300"
            aria-label="Next strength"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollSnapType: "x mandatory" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {OUR_STRENGTHS.map((strength, index) => {
              const IconComponent = iconMap[strength.icon];
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[300px] md:w-[320px]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group card-hover">
                    {/* Icon with decorative background */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0f4c75] to-[#1b6ca8] rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div className="absolute -z-10 top-2 left-2 w-16 h-16 bg-[#f0a500]/20 rounded-2xl" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0f4c75] transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
