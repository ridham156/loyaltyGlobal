import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Loyalty Global — Get in Touch",
  description:
    "Contact Loyalty Global for export inquiries, business partnerships, or product information. Reach our team in Ahmedabad, Gujarat, India. Email, phone, or send us a message.",
  keywords:
    "contact Loyalty Global, Loyalty Global email, Loyalty Global phone number, agricultural export inquiry India, Loyalty Global Ahmedabad contact, food export company India contact, buy Indian spices wholesale contact, import agricultural products India",
  alternates: {
    canonical: "https://loyaltyglobal.co.in/contact",
  },
  openGraph: {
    title: "Contact Loyalty Global — Agricultural Export Inquiries",
    description:
      "Get in touch with Loyalty Global for export inquiries, partnerships, or product information. Based in Ahmedabad, Gujarat, India — serving buyers worldwide.",
    url: "https://loyaltyglobal.co.in/contact",
    type: "website",
    images: [
      {
        url: "https://loyaltyglobal.co.in/assets/images/spices.png",
        width: 1200,
        height: 630,
        alt: "Contact Loyalty Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Loyalty Global — Agricultural Export Inquiries",
    description:
      "Reach Loyalty Global's export team in Ahmedabad, India for product inquiries and partnerships.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
