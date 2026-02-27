"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { WELCOME_CONTENT } from "@/data/constants";

export default function WelcomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "FSSAI, ISO & HACCP Certified",
    "Direct Farm Sourcing",
    "Global Shipping Network",
    "Competitive Pricing",
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/about.png"
                alt="Premium Indian Agricultural Products"
                fill
                className="object-cover"
              />
              {/* Overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4c75]/30 to-transparent" />
            </div>
            {/* Floating card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0f4c75] to-[#1b6ca8] rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">10+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0f4c75]">Years</p>
                  <p className="text-sm text-gray-500">of Excellence</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by 500+ clients across 50+ countries
              </p>
            </motion.div> */}
            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full border-2 border-[#f0a500] rounded-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-[#f0a500] font-semibold text-sm uppercase tracking-wider mb-4">
              About Loyalty Global
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {WELCOME_CONTENT.title}
            </h2>
            <p className="text-lg text-[#0f4c75] font-medium mb-4">
              {WELCOME_CONTENT.subtitle}
            </p>
            <div className="text-gray-600 leading-relaxed mb-8 space-y-4">
              {WELCOME_CONTENT.description.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Features */}
            {/* <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 bg-[#0f4c75]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0f4c75]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div> */}

            <Link
              href="/about"
              className="btn-primary inline-flex"
            >
              READ MORE
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
