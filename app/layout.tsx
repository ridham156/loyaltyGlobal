import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loyalty Global - Premium Agricultural Exports from India",
  description:
    "Loyalty Global is a leading exporter of premium Indian agricultural products including spices, pulses, edible oils, and dehydrated vegetables to markets worldwide.",
  keywords:
    "agricultural exports, Indian spices, pulses export, edible oils, dehydrated vegetables, export company India, food export",
  authors: [{ name: "Loyalty Global" }],
  openGraph: {
    title: "Loyalty Global - Premium Agricultural Exports from India",
    description:
      "Your trusted partner for premium Indian agricultural exports. Quality products, competitive pricing, and reliable delivery.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {/* pt accounts for fixed header: top bar (~36px on lg) + nav (~64-80px) */}
        <main className="flex-1 pt-[72px] lg:pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
