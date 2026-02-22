"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronRight, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/data/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Filter out brochure from nav links
  const filteredLinks = NAV_LINKS.filter((link) => link.href !== "/brochure");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className="hidden lg:block bg-gradient-to-r from-[#0f4c75] to-[#1b6ca8] text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 hover:text-[#f0a500] transition-colors">
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-[#f0a500] transition-colors">
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80">Your Trusted Global Trade Partner</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-sm py-2"
              : "bg-white/90 backdrop-blur-xl py-4"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0f4c75] to-[#1b6ca8] rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">LG</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-[#0f4c75]">Loyalty Global</h1>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {filteredLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      pathname === link.href
                        ? "bg-[#0f4c75] text-white"
                        : "text-gray-700 hover:bg-[#0f4c75]/10 hover:text-[#0f4c75]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Link
                  href="/quote"
                  className="bg-gradient-to-r from-[#f0a500] to-[#ffc107] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#f0a500]/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                >
                  Get Quote
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-[70]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm z-[55] lg:hidden"
              style={{ height: "100dvh" }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 left-0 w-[280px] max-w-[80vw] z-[60] lg:hidden"
              style={{ height: "100dvh" }}
            >
              <div className="h-full bg-gradient-to-b from-[#0a1628] via-[#0f4c75] to-[#0a3654] flex flex-col">
                {/* Drawer Header */}
                <div className="p-5 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#f0a500] to-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-base">LG</span>
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white">Loyalty Global</h2>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-3 py-4 overflow-hidden">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-2 px-3">Menu</p>
                  <nav className="flex flex-col gap-0.5">
                    {filteredLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          pathname === link.href
                            ? "bg-white/15 text-[#f0a500] border border-white/10"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {link.name}
                        <ChevronRight className={`w-4 h-4 ${pathname === link.href ? "text-[#f0a500]" : "text-white/30"}`} />
                      </Link>
                    ))}
                  </nav>

                  {/* Get Quote CTA */}
                  <div className="mt-4 px-1">
                    <Link
                      href="/quote"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#f0a500] to-[#ffc107] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-[#f0a500]/20 hover:shadow-xl transition-all"
                    >
                      Get Quotation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-4 pt-3 border-t border-white/10 bg-black/20">
                  <div className="space-y-2">
                    <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-[#f0a500] transition-colors">
                      <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs">{SITE_CONFIG.phone}</span>
                    </a>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-[#f0a500] transition-colors">
                      <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs">{SITE_CONFIG.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
