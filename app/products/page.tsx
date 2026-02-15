"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Package, X } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/constants";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const productsRef = useRef(null);
  const isInView = useInView(productsRef, { once: true, margin: "-100px" });

  const selectedCategory = PRODUCT_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <>
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of premium agricultural products. Select a category to view products.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() =>
                  setActiveCategory(activeCategory === category.id ? null : category.id)
                }
                className="cursor-pointer group"
              >
                <div className={`relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? "ring-4 ring-[#0f4c75] ring-offset-2"
                    : "hover:shadow-xl"
                }`}>
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-base md:text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-xs md:text-sm text-white/80">{category.products.length} Products</p>
                  </div>
                  {activeCategory === category.id && (
                    <div className="absolute top-3 right-3 bg-[#0f4c75] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Selected
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products List - only shown when category is selected */}
      <AnimatePresence>
        {activeCategory && selectedCategory && (
          <motion.section
            ref={productsRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#f8fafc] overflow-hidden"
          >
            <div className="py-16">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedCategory.name}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {selectedCategory.products.length} products available
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
                  >
                    <X className="w-4 h-4" />
                    Clear
                  </button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                  {selectedCategory.products.map((product, index) => (
                    <motion.div
                      key={product}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
                        <div className="relative h-[140px] md:h-[160px]">
                          <Image
                            src={selectedCategory.image}
                            alt={product}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-4">
                          <span className="text-xs text-[#0f4c75] font-medium">{selectedCategory.name}</span>
                          <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-[#0f4c75] transition-colors text-sm md:text-base">
                            {product}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Empty State - when no category selected */}
      {!activeCategory && (
        <section className="py-16 bg-[#f8fafc]">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#0f4c75]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-[#0f4c75]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Select a Category
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Choose a product category above to browse our range of premium agricultural products.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
