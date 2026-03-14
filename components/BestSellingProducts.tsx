"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { BEST_SELLING_PRODUCTS } from "@/data/constants";

export default function BestSellingProducts() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { rootMargin: "-50px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#f0a500] font-semibold text-sm uppercase tracking-wider mb-4">
            Popular Items
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 section-title">
            OUR BEST SELLING PRODUCTS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Discover our most sought-after products, trusted by importers and businesses worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {BEST_SELLING_PRODUCTS.map((product, index) => (
            <div
              key={product.name}
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease", transitionDelay: `${index * 100}ms` }}
            >
              <Link href="/products" className="block group">
                <div className="relative h-[200px] md:h-[240px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    quality={80}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/30 to-transparent" />

                  {/* Best Seller Badge */}
                  {index < 4 && (
                    <div className="absolute top-3 left-3 bg-[#f0a500] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Best Seller
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm md:text-base mb-1 group-hover:text-[#f0a500] transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-white/70 text-xs capitalize">
                      {product.category}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-[#0f4c75]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease", transitionDelay: "400ms" }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn-primary">
            Explore All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
