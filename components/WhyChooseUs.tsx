"use client";

import { useRef, useEffect, useState } from "react";
import {
  Shield,
  BadgeCheck,
  Leaf,
  Package,
  Clock,
  Handshake,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Globe: BadgeCheck,
  Leaf,
  Package,
  Clock,
  HeadphonesIcon: Handshake,
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "-100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 sm:py-16 lg:py-28 bg-gradient-to-b from-white via-[#f8fafc]/60 to-white">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 section-title">
            WHY CHOOSE US
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base">
            We focus on quality sourcing, fair pricing, and building long-term business relationships.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="group transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(30px)",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div className="h-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0f4c75]/20 card-hover">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0f4c75]/10 to-[#f0a500]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#0f4c75]" />
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 lg:mb-3 group-hover:text-[#0f4c75] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                  <div className="hidden sm:block mt-4 lg:mt-6 w-12 h-1 bg-gradient-to-r from-[#0f4c75] to-[#f0a500] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
