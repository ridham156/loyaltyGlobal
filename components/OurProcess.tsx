"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wheat,
  FlaskConical,
  Factory,
  FileCheck,
  Ship,
  PackageCheck,
} from "lucide-react";
import { OUR_PROCESS } from "@/data/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat,
  FlaskConical,
  Factory,
  FileCheck,
  Ship,
  PackageCheck,
};

export default function OurProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 sm:py-16 lg:py-28 bg-gradient-to-br from-[#0f4c75] to-[#0a3654] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          {/* <span className="inline-block text-[#f0a500] font-semibold text-sm uppercase tracking-wider mb-3 sm:mb-4">
            How We Work
          </span> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            OUR PROCESS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f0a500] to-[#ffc107] mx-auto rounded-full" />
          <p className="text-white/80 max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base">
            A streamlined process ensuring quality at every step, from farm to your warehouse.
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-start relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#f0a500] via-white/30 to-[#f0a500]" />

            {OUR_PROCESS.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center relative z-10 w-1/6"
                >
                  {/* Step Number */}
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-4 group hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0f4c75] to-[#1b6ca8] rounded-full flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent className="w-10 h-10 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Step Badge */}
                  <span className="inline-block bg-[#f0a500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    STEP {step.step}
                  </span>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Steps - Mobile: Compact 2-column grid */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {OUR_PROCESS.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    {/* Icon */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#0f4c75] to-[#1b6ca8] rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                      {IconComponent && (
                        <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
                      )}
                    </div>
                    <span className="text-[10px] sm:text-xs bg-[#f0a500] text-white font-bold px-2 py-0.5 rounded-full">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">{step.title}</h3>
                  <p className="text-white/60 text-xs leading-snug line-clamp-2">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
