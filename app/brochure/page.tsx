"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Download, FileText, BookOpen, Presentation, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { PRODUCT_CATEGORIES } from "@/data/constants";

const brochures = [
  { title: "Company Profile", description: "Complete overview of Loyalty Global, our capabilities, and services", icon: BookOpen, size: "2.5 MB", format: "PDF", image: "/assets/images/spices.png" },
  { title: "Product Catalog", description: "Comprehensive catalog of all our agricultural products with specifications", icon: FileText, size: "5.2 MB", format: "PDF", image: "/assets/images/oils.png" },
  { title: "Export Guidelines", description: "Documentation requirements and export process information", icon: Presentation, size: "1.8 MB", format: "PDF", image: "/assets/images/dry products.png" },
  { title: "Quality Standards", description: "Our quality control processes and certification details", icon: FileText, size: "1.2 MB", format: "PDF", image: "/assets/images/vegetables.png" },
];

export default function BrochurePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <PageHeader
        title="Brochure & Downloads"
        subtitle="Download our brochures and catalogs to learn more about our products"
        breadcrumbs={[{ label: "Brochure" }]}
      />

      {/* Downloads Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-block text-[#f0a500] font-semibold text-sm uppercase tracking-wider mb-4">Resources</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 section-title">Download Our Brochures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">Get detailed information about our products, services, and company profile.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {brochures.map((brochure, index) => (
              <motion.div key={brochure.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <Image src={brochure.image} alt={brochure.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 sm:from-transparent sm:to-white" />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0f4c75]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <brochure.icon className="w-6 h-6 text-[#0f4c75]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0f4c75] transition-colors">{brochure.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{brochure.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span>{brochure.format}</span>
                          <span>•</span>
                          <span>{brochure.size}</span>
                        </div>
                        <button className="flex items-center gap-2 text-[#0f4c75] font-semibold hover:text-[#0a3654] transition-colors">
                          <Download className="w-5 h-5" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Category Sheets */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-block text-[#f0a500] font-semibold text-sm uppercase tracking-wider mb-4">Product Information</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 section-title">Category Datasheets</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div key={category.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-40">
                  <Image src={category.image} alt={category.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold">{category.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-3">{category.products.length} products listed</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#0f4c75]/10 text-[#0f4c75] py-2 rounded-lg font-medium hover:bg-[#0f4c75] hover:text-white transition-all duration-300">
                    <Download className="w-4 h-4" />
                    Download Sheet
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Custom Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0f4c75] to-[#0a3654] rounded-3xl p-8 lg:p-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Mail className="w-16 h-16 text-[#f0a500] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Need Custom Information?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">We can prepare customized product specifications, pricing sheets, and documentation based on your specific requirements.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f0a500] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d4920a] transition-all duration-300">Contact Us</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
