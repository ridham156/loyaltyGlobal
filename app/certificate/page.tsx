"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { CERTIFICATES } from "@/data/constants";

export default function CertificatePage() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { rootMargin: "-100px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0f4c75]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f0a500]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}
        >
          <div className="inline-flex items-center gap-2 bg-[#0f4c75]/10 text-[#0f4c75] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <ShieldCheck className="w-4 h-4" />
            Officially Recognized
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 section-title">
            Certifications & Registrations
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm lg:text-base">
            Our commitment to quality is backed by internationally recognized certifications
            and government-approved registrations.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`grid gap-10 justify-items-center ${
            CERTIFICATES.length === 1
              ? "grid-cols-1 max-w-sm mx-auto"
              : CERTIFICATES.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {CERTIFICATES.map((cert, index) => (
            <div
              key={cert.name}
              className="group w-full"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: `all 0.55s ease ${index * 0.15}s` }}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0f4c75]/20 hover:-translate-y-2">

                {/* Portrait Certificate Image */}
                <div className="relative mx-5 mt-5 mb-1 rounded-xl overflow-hidden bg-gray-100"
                     style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-contain transition-all duration-500 blur-[2px] group-hover:blur-2"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="px-5 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#0f4c75] transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#0f4c75]/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
