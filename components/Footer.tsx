"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUp,
  Download,
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, PRODUCT_CATEGORIES } from "@/data/constants";

// WhatsApp SVG — lucide-react does not include this icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.63 4.64 1.827 6.653L2.667 29.333l6.88-1.8A13.28 13.28 0 0 0 16.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 24.267a11 11 0 0 1-5.613-1.547l-.4-.24-4.08 1.067 1.093-3.96-.267-.413A10.987 10.987 0 0 1 5.04 16c0-6.04 4.92-10.96 10.96-10.96S26.96 9.96 26.96 16 22.04 26.934 16 26.934zm6.013-8.2c-.333-.167-1.96-.967-2.267-1.08-.306-.107-.52-.16-.747.16-.213.32-.84 1.08-.987 1.28-.16.2-.307.227-.627.08-.333-.16-1.387-.507-2.64-1.627-.973-.867-1.627-1.947-1.827-2.28-.187-.333-.013-.507.147-.667.147-.147.333-.373.493-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.747-1.8-1.013-2.467-.267-.64-.547-.56-.747-.56-.2-.013-.413-.013-.627-.013-.213 0-.56.08-.853.387-.293.307-1.12 1.093-1.12 2.653s1.147 3.08 1.307 3.293c.16.213 2.24 3.44 5.44 4.827.76.333 1.347.52 1.813.667.76.24 1.453.2 2 .12.613-.093 1.88-.773 2.147-1.52.267-.747.267-1.387.187-1.52-.08-.12-.293-.2-.627-.36z" />
    </svg>
  );
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredLinks = NAV_LINKS.filter((link) => link.href !== "/brochure");

  return (
    <footer className="bg-[#0a1628] text-gray-300">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0f4c75] to-[#1b6ca8] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Partner with Us?
              </h3>
              <p className="text-white/80">
                Get in touch for competitive quotes on premium agricultural products.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="/brochure.pdf"
                download
                className="bg-white/10 border border-white/20 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white/20 transition-all duration-300 whitespace-nowrap flex items-center gap-2"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                Download Brochure
              </a>
              <Link
                href="/quote"
                className="bg-[#f0a500] text-white px-4 py-2.5 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-[#d4920a] transition-all duration-300 whitespace-nowrap shadow-lg"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0f4c75] to-[#1b6ca8] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">LG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Loyalty Global</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Trusted exporter of premium Indian agricultural products. Quality sourcing,
              competitive pricing, and reliable worldwide delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {filteredLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#f0a500] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0f4c75] rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">
              Our Products
            </h4>
            <ul className="space-y-3">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-[#f0a500] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0f4c75] rounded-full"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#f0a500] transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1b6ca8]" />
                  <span>{SITE_CONFIG.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#f0a500] transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#1b6ca8]" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#f0a500] transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#1b6ca8]" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0f4c75] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                {/* ✅ WhatsApp — uses inline SVG since lucide-react has no Whatsapp icon */}
                <a
                  href={SITE_CONFIG.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>

                <a
                  href={SITE_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0f4c75] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0f4c75] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Loyalty Global. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/about" className="hover:text-[#f0a500] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="hover:text-[#f0a500] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[#0f4c75] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1b6ca8] hover:shadow-xl transition-all duration-300 z-40"
            initial={{ opacity: 0, scale: 0, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}