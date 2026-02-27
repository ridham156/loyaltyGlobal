"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { ABOUT_CONTENT } from "@/data/constants";

export default function AboutPage() {
  const storyRef = useRef(null);
  const missionRef = useRef(null);

  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Our Story Section */}
      <section ref={storyRef} className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/about.png"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-[#f0a500] rounded-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                {ABOUT_CONTENT.story.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-16 lg:py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f4c75] to-[#1b6ca8] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">{ABOUT_CONTENT.mission}</p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#f0a500] to-[#ffc107] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">{ABOUT_CONTENT.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
