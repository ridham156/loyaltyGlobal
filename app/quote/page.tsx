"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Clock, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG, PRODUCT_CATEGORIES } from "@/data/constants";

export default function QuotePage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [countdown, setCountdown] = useState(15);
  const router = useRouter();

  useEffect(() => {
    if (formStatus !== "success") return;
    let count = 15;
    setCountdown(15);
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(interval);
        router.push("/");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [formStatus, router]);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    productCategory: "",
    products: "",
    quantity: "",
    quantityUnit: "MT",
    packagingPreference: "",
    message: "",
  });

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-50px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setFormStatus("idle");
    setFormData({
      fullName: "", companyName: "", email: "", phone: "", country: "",
      productCategory: "", products: "", quantity: "", quantityUnit: "MT",
      packagingPreference: "", message: "",
    });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0f4c75] focus:ring-2 focus:ring-[#0f4c75]/20 outline-none transition-all text-sm sm:text-base bg-white";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <section ref={formRef} className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">

        {/* Success State */}
        {formStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-14 text-center">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Thank You!
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Your quotation request has been submitted successfully.
              </p>
              <p className="text-sm text-gray-400 mb-2">
                Redirecting to home in <span className="font-semibold text-[#0f4c75]">{countdown}s</span>...
              </p>

              <div className="bg-[#0f4c75]/5 rounded-xl p-6 my-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0f4c75] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">What happens next?</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our export team will review your requirements and prepare a detailed quotation
                      tailored to your needs. You will receive the quotation on your email
                      within <strong className="text-[#0f4c75]">24 business hours</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Need it sooner? Reach us directly:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-sm font-medium text-[#0f4c75] hover:text-[#f0a500] transition-colors">
                  <Phone className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm font-medium text-[#0f4c75] hover:text-[#f0a500] transition-colors">
                  <Mail className="w-4 h-4" />
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button onClick={resetForm} className="btn-primary">
                  Submit Another Request
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/" className="btn-secondary">
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Request a Quotation</h1>
              <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                Fill in the details below and we&apos;ll send you a competitive quotation within 24 hours.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Your Details */}
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 bg-[#0f4c75] text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  Your Details
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className={labelClass}>Company Name</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={inputClass} placeholder="Your company" />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+1 234 567 8900" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Country *</label>
                    <select name="country" value={formData.country} onChange={handleChange} required className={inputClass}>
                      <option value="">Select your country</option>
                      <option value="USA">United States</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Australia">Australia</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Japan">Japan</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Requirements */}
              <div className="p-6 sm:p-8 border-t border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 bg-[#f0a500] text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  Product Requirements
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className={labelClass}>Product Category *</label>
                    <select name="productCategory" value={formData.productCategory} onChange={handleChange} required className={inputClass}>
                      <option value="">Select category</option>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                      <option value="Multiple Categories">Multiple Categories</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Specific Products *</label>
                    <input type="text" name="products" value={formData.products} onChange={handleChange} required className={inputClass} placeholder="e.g., Turmeric, Cumin Seeds" />
                  </div>
                  <div>
                    <label className={labelClass}>Quantity Required *</label>
                    <div className="flex gap-2">
                      <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} required className={`${inputClass} flex-1`} placeholder="e.g., 10" />
                      <select name="quantityUnit" value={formData.quantityUnit} onChange={handleChange} className="px-3 py-3 rounded-xl border border-gray-200 focus:border-[#0f4c75] focus:ring-2 focus:ring-[#0f4c75]/20 outline-none transition-all text-sm bg-white w-28">
                        <option value="MT">MT</option>
                        <option value="KG">KG</option>
                        <option value="LBS">LBS</option>
                        <option value="Containers">Containers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Packaging Preference</label>
                    <select name="packagingPreference" value={formData.packagingPreference} onChange={handleChange} className={inputClass}>
                      <option value="">Select packaging</option>
                      <option value="Bulk (25kg/50kg bags)">Bulk (25kg/50kg bags)</option>
                      <option value="Retail Ready (100g-1kg)">Retail Ready (100g-1kg)</option>
                      <option value="Custom Packaging">Custom Packaging</option>
                      <option value="Private Label">Private Label</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Additional Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Any specific requirements — delivery location, certifications needed, timeline, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="p-6 sm:p-8 bg-gray-50 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full btn-primary justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  We respect your privacy. Your information will only be used to process this quotation.
                </p>
              </div>
            </motion.form>
          </div>
        )}

        {/* Contact Cards */}
        <div className="max-w-3xl mx-auto mt-10 grid sm:grid-cols-3 gap-4">
          <a href={`tel:${SITE_CONFIG.phone}`} className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-[#0f4c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#0f4c75]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Call us</p>
              <p className="text-sm font-semibold text-gray-900">{SITE_CONFIG.phone}</p>
            </div>
          </a>
          <a href={`mailto:${SITE_CONFIG.email}`} className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-[#0f4c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#0f4c75]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email us</p>
              <p className="text-sm font-semibold text-gray-900">{SITE_CONFIG.email}</p>
            </div>
          </a>
          <div className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 bg-[#0f4c75]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#0f4c75]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Located at</p>
              <p className="text-sm font-semibold text-gray-900">Ahmedabad, India</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
