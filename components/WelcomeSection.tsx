"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WELCOME_CONTENT } from "@/data/constants";

export default function WelcomeSection() {
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
    <section ref={ref} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className="relative transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-40px)" }}
          >
            <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/about.png"
                alt="Premium Indian Agricultural Products — Loyalty Global"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4c75]/30 to-transparent" />
            </div>
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full border-2 border-[#f0a500] rounded-2xl" />
          </div>

          {/* Content Side */}
          <div
            className="transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(40px)" }}
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
            <Link href="/about" className="btn-primary inline-flex">
              READ MORE
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
