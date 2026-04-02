"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { ABOUT_CONTENT } from "@/data/constants";

export default function AboutPage() {
  const storyRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const [storyVisible, setStoryVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);

  useEffect(() => {
    const el = storyRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStoryVisible(true); obs.disconnect(); } }, { rootMargin: "-100px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = missionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setMissionVisible(true); obs.disconnect(); } }, { rootMargin: "-100px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Our Story Section */}
      <section ref={storyRef} className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div
              className="relative order-2 lg:order-1"
              style={{ opacity: storyVisible ? 1 : 0, transform: storyVisible ? "none" : "translateX(-50px)", transition: "all 0.6s ease" }}
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/about.jpg"
                  alt="Loyalty Global — Our Story, Ahmedabad Agricultural Exporter"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAHAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC+hnEeCY2bs3I/SqxF3k/v1H0QUUVQj//Z"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-[#f0a500] rounded-2xl" />
            </div>

            {/* Content */}
            <div
              className="order-1 lg:order-2"
              style={{ opacity: storyVisible ? 1 : 0, transform: storyVisible ? "none" : "translateX(50px)", transition: "all 0.6s ease 0.2s" }}
            >

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                {ABOUT_CONTENT.story.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-16 lg:py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow"
              style={{ opacity: missionVisible ? 1 : 0, transform: missionVisible ? "none" : "translateY(30px)", transition: "all 0.5s ease" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f4c75] to-[#1b6ca8] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">{ABOUT_CONTENT.mission}</p>
            </div>

            {/* Vision */}
            <div
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow"
              style={{ opacity: missionVisible ? 1 : 0, transform: missionVisible ? "none" : "translateY(30px)", transition: "all 0.5s ease 0.1s" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#f0a500] to-[#ffc107] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">{ABOUT_CONTENT.vision}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
