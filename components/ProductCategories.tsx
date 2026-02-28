"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/constants";

export default function ProductCategories() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
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
            What We Export
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 section-title">
            OUR PRODUCTS CATEGORY
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            From aromatic spices to nutritious pulses, we export a diverse range of premium
            agricultural products sourced directly from India&apos;s finest farms.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0f4c75] hover:bg-[#0f4c75] hover:text-white transition-all duration-300"
            aria-label="Previous category"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0f4c75] hover:bg-[#0f4c75] hover:text-white transition-all duration-300"
            aria-label="Next category"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] md:w-[300px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <Link href="/products" className="block group">
                  <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg card-hover">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#f0a500] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/80 mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-[#f0a500]">
                        View Products
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Hover overlay with products */}
                    <div className="absolute inset-0 bg-[#0f4c75]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                      <ul className="space-y-2 mb-4">
                        {category.products.slice(0, 4).map((product) => (
                          <li key={product.name} className="text-white/80 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#f0a500] rounded-full" />
                            {product.name}
                          </li>
                        ))}
                        {category.products.length > 4 && (
                          <li className="text-[#f0a500] text-sm">
                            +{category.products.length - 4} more products
                          </li>
                        )}
                      </ul>
                      <span className="text-[#f0a500] font-medium flex items-center gap-2">
                        Explore All
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn-secondary">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
