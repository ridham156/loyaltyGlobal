"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import { CERTIFICATES } from "@/data/constants";

export default function CertificatePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0f4c75]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f0a500]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
        </motion.div>

        {/* Cards — portrait layout, centered for 2 items */}
        <div className="flex flex-wrap justify-center gap-10">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="group w-[300px] sm:w-[320px]"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0f4c75]/20 hover:-translate-y-2">

                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0f4c75] via-[#1b6ca8] to-[#f0a500]" />

                {/* Badge strip */}
                <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-[#0f4c75]/5 to-transparent border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#0f4c75]/10 flex items-center justify-center">
                      <BadgeCheck className="w-4 h-4 text-[#0f4c75]" />
                    </div>
                    <span className="text-xs font-semibold text-[#0f4c75] uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                    Active
                  </span>
                </div>

                {/* Portrait Certificate Image */}
                <div className="relative mx-5 my-5 rounded-xl overflow-hidden bg-gray-50"
                     style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Subtle inner shadow overlay for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.06)] rounded-xl pointer-events-none" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}