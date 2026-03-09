"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/data/constants";
import CountrySelect from "@/components/CountrySelect";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", country: "", subject: "", message: "" });
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", country: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
        setFormStatus("idle");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
      setFormStatus("idle");
    }
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: MapPin, title: "Visit Us", lines: [SITE_CONFIG.address] },
    { icon: Phone, title: "Call Us", lines: [SITE_CONFIG.phone, "Mon - Sat: 9:00 AM - 6:00 PM"] },
    { icon: Mail, title: "Email Us", lines: [SITE_CONFIG.email, ""] },
  ];

  return (
    <>
      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-[#f8fafc] rounded-2xl p-6 text-center hover:bg-[#0f4c75] group transition-all duration-300">
                <div className="w-14 h-14 bg-[#0f4c75] group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <info.icon className="w-7 h-7 text-white group-hover:text-[#0f4c75] transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{info.title}</h3>
                {info.lines.map((line, i) => (<p key={i} className="text-sm text-gray-600 group-hover:text-white/80 transition-colors">{line}</p>))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0f4c75]/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#0f4c75]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-500 text-sm">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              {formStatus === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button onClick={() => setFormStatus("idle")} className="text-[#0f4c75] font-medium hover:underline">Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0f4c75] focus:ring-2 focus:ring-[#0f4c75]/20 outline-none transition-all" placeholder="ENTER FULL NAME" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0f4c75] focus:ring-2 focus:ring-[#0f4c75]/20 outline-none transition-all" placeholder="Enter Email id" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0f4c75] focus:ring-2 focus:ring-[#0f4c75]/20 outline-none transition-all" placeholder="Enter Mobile No" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0f4c75] focus:ring-2 focus:ring-[#0f4c75]/20 outline-none transition-all" placeholder="Enter Company Name" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <CountrySelect
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Select Country"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0f4c75] focus:ring-2 focus:ring-[#0f4c75]/20 outline-none transition-all bg-white" >
                        <option value="">Select Subject</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Partnership">Partnership Opportunity</option>
                        <option value="Sample Request">Sample Request</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0f4c75] focus:ring-2 focus:ring-[#0f4c75]/20 outline-none transition-all resize-none" placeholder="Tell us about your inquiry..." />
                  </div>
                  <button type="submit" disabled={formStatus === "submitting"} className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                    {formStatus === "submitting" ? (<><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>) : (<>Send Message<Send className="w-5 h-5" /></>)}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Side */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
              {/* Map */}
              <div className="bg-[#0f4c75] rounded-2xl overflow-hidden text-white">
                {/* Live Google Map — Sanand Chokdi, Ahmedabad */}
                <div className="relative w-full h-[260px]">
                  <iframe
                    title="Loyalty Global Location — Sanand Chokdi, Ahmedabad"
                    src="https://www.google.com/maps?q=22.988349069492457, 72.46275440240133&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f0a500] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">Our Office</p>
                    <p className="text-white/75 text-xs leading-relaxed">{SITE_CONFIG.address}</p>
                    <a
                      href="https://www.google.com/maps?q=22.988349069492457, 72.46275440240133"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[#f0a500] hover:text-yellow-300 transition-colors"
                    >
                      Open in Google Maps
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl hover:bg-[#0f4c75] group transition-all duration-300">
                    <div className="w-12 h-12 bg-[#0f4c75] group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                      <Phone className="w-6 h-6 text-white group-hover:text-[#0f4c75] transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors">Call us now</p>
                      <p className="font-semibold text-gray-900 group-hover:text-white transition-colors">{SITE_CONFIG.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 p-4 bg-[#f8fafc] rounded-xl hover:bg-[#0f4c75] group transition-all duration-300">
                    <div className="w-12 h-12 bg-[#0f4c75] group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                      <Mail className="w-6 h-6 text-white group-hover:text-[#0f4c75] transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors">Email us</p>
                      <p className="font-semibold text-gray-900 group-hover:text-white transition-colors">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}