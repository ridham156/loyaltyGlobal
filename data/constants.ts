export const SITE_CONFIG = {
  name: "Loyalty Global",
  tagline: "Your Trusted Partner in Global Agricultural Exports",
  phone: "+91 98765 43210",
  email: "info@loyaltyglobal.com",
  address: "123 Export Hub, GIDC Industrial Area, Ahmedabad, Gujarat 382445, India",
  socialLinks: {
    facebook: "https://facebook.com/loyaltyglobal",
    twitter: "https://twitter.com/loyaltyglobal",
    linkedin: "https://linkedin.com/company/loyaltyglobal",
    instagram: "https://instagram.com/loyaltyglobal",
  },
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Certificate", href: "/certificate" },
  { name: "Brochure", href: "/brochure" },
  { name: "Contact Us", href: "/contact" },
];

export const HERO_SLIDES = [
  {
    image: "/assets/images/spices.png",
    title: "Premium Indian Spices",
    subtitle: "Exporting Authentic Flavors Worldwide",
    description: "From turmeric to cardamom, we deliver the finest spices sourced directly from Indian farms to your doorstep.",
  },
  {
    image: "/assets/images/oils.png",
    title: "Pure Edible Oils",
    subtitle: "Quality You Can Trust",
    description: "Cold-pressed and refined oils meeting international quality standards for healthy cooking.",
  },
  {
    image: "/assets/images/dry products.png",
    title: "Nutritious Pulses & Grains",
    subtitle: "Fueling Global Nutrition",
    description: "High-protein pulses and grains cultivated with care, packed with essential nutrients.",
  },
  {
    image: "/assets/images/vegetables.png",
    title: "Fresh Dehydrated Vegetables",
    subtitle: "Farm Fresh, Long Lasting",
    description: "Advanced dehydration technology preserving taste and nutrition for extended shelf life.",
  },
];

export const WELCOME_CONTENT = {
  title: "Welcome to Loyalty Global",
  subtitle: "Your Gateway to Premium Indian Agricultural Products",
  description: `Loyalty Global is a leading exporter of premium agricultural products from India to markets worldwide. With over a decade of experience in the export industry, we have established ourselves as a trusted partner for businesses seeking high-quality spices, pulses, oils, and dehydrated vegetables.

Our commitment to quality begins at the source. We work directly with farmers across India, ensuring fair trade practices while maintaining the highest standards of product quality. Every product that bears our name undergoes rigorous quality checks and is certified to meet international food safety standards.

Whether you're a distributor, retailer, or manufacturer, we offer flexible packaging solutions and competitive pricing tailored to your needs.`,
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Products Exported" },
  ],
};

export const PRODUCT_CATEGORIES = [
  {
    id: "spices",
    name: "Spices & Seasonings",
    image: "/assets/images/spices.png",
    description: "Premium quality Indian spices including turmeric, cumin, coriander, cardamom, and more.",
    products: [
      { name: "Turmeric Powder", image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400" },
      { name: "Cumin Seeds", image: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c8?w=400" },
      { name: "Coriander Powder", image: "https://images.unsplash.com/photo-1599909533730-f9d49c0c5b5e?w=400" },
      { name: "Red Chilli Powder", image: "https://images.unsplash.com/photo-1583032015627-7a5c8e3d3c3e?w=400" },
      { name: "Black Pepper", image: "https://images.unsplash.com/photo-1599909533730-f9d49c0c5b5e?w=400" },
      { name: "Cardamom", image: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c8?w=400" },
    ],
  },
  {
    id: "oils",
    name: "Edible Oils",
    image: "/assets/images/oils.png",
    description: "Cold-pressed and refined cooking oils meeting international quality standards.",
    products: [
      { name: "Groundnut Oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400" },
      { name: "Sesame Oil", image: "https://images.unsplash.com/photo-1608181831042-c5b3a4f2b4e5?w=400" },
      { name: "Mustard Oil", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400" },
      { name: "Coconut Oil", image: "https://images.unsplash.com/photo-1598514982901-ae62764ae75e?w=400" },
      { name: "Sunflower Oil", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400" },
      { name: "Castor Oil", image: "https://images.unsplash.com/photo-1608181831042-c5b3a4f2b4e5?w=400" },
    ],
  },
  {
    id: "pulses",
    name: "Pulses & Grains",
    image: "/assets/images/dry products.png",
    description: "High-protein pulses and nutritious grains sourced from premium Indian farms.",
    products: [
      { name: "Chickpeas", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=400" },
      { name: "Red Lentils", image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400" },
      { name: "Green Moong", image: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c8?w=400" },
      { name: "Black Gram", image: "https://images.unsplash.com/photo-1599909533730-f9d49c0c5b5e?w=400" },
      { name: "Pigeon Peas", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=400" },
      { name: "Kidney Beans", image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400" },
    ],
  },
  {
    id: "vegetables",
    name: "Dehydrated Vegetables",
    image: "/assets/images/vegetables.png",
    description: "Advanced dehydration technology preserving taste and nutrition.",
    products: [
      { name: "Onion Powder", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400" },
      { name: "Garlic Powder", image: "https://images.unsplash.com/photo-1588347818036-8fc8be564012?w=400" },
      { name: "Tomato Powder", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400" },
      { name: "Ginger Powder", image: "https://images.unsplash.com/photo-1599909533730-f9d49c0c5b5e?w=400" },
      { name: "Banana Powder", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" },
      { name: "Moringa Powder", image: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c8?w=400" },
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Shield",
    title: "Quality Assurance",
    description: "Every product undergoes rigorous quality testing and meets international food safety standards including FSSAI, ISO, and HACCP certifications.",
  },
  {
    icon: "Globe",
    title: "Global Reach",
    description: "We export to over 50 countries across 6 continents, with established logistics networks ensuring timely delivery worldwide.",
  },
  {
    icon: "Leaf",
    title: "Sustainable Sourcing",
    description: "Direct partnerships with farmers ensure sustainable farming practices and fair trade, supporting local agricultural communities.",
  },
  {
    icon: "Package",
    title: "Custom Packaging",
    description: "Flexible packaging solutions from bulk shipments to retail-ready packs, customized to meet your specific market requirements.",
  },
  {
    icon: "Clock",
    title: "Timely Delivery",
    description: "Efficient supply chain management and strategic warehouse locations ensure your orders reach you on schedule, every time.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Dedicated Support",
    description: "24/7 customer support with dedicated account managers to assist you through every step of your export journey.",
  },
];

export const OUR_PROCESS = [
  {
    step: 1,
    title: "Sourcing",
    description: "Direct procurement from verified farmers and suppliers across India",
    icon: "Wheat",
  },
  {
    step: 2,
    title: "Quality Check",
    description: "Rigorous testing at our state-of-the-art quality control labs",
    icon: "FlaskConical",
  },
  {
    step: 3,
    title: "Processing",
    description: "Advanced processing and packaging in certified facilities",
    icon: "Factory",
  },
  {
    step: 4,
    title: "Documentation",
    description: "Complete export documentation and compliance handling",
    icon: "FileCheck",
  },
  {
    step: 5,
    title: "Shipping",
    description: "Global logistics with real-time tracking and insurance",
    icon: "Ship",
  },
  {
    step: 6,
    title: "Delivery",
    description: "On-time delivery with post-shipment support",
    icon: "PackageCheck",
  },
];

export const OUR_STRENGTHS = [
  {
    title: "State-of-the-Art Infrastructure",
    description: "Modern processing units equipped with latest technology for quality processing and packaging.",
    icon: "Building2",
  },
  {
    title: "Certified Quality Standards",
    description: "ISO 22000, FSSAI, HACCP, and Organic certifications ensuring international compliance.",
    icon: "Award",
  },
  {
    title: "Experienced Team",
    description: "Industry veterans with decades of combined experience in agricultural exports.",
    icon: "Users",
  },
  {
    title: "Competitive Pricing",
    description: "Direct farmer partnerships eliminate middlemen, ensuring best prices for quality products.",
    icon: "TrendingDown",
  },
  {
    title: "Research & Development",
    description: "Continuous innovation in processing techniques and product development.",
    icon: "Microscope",
  },
  {
    title: "Strong Logistics Network",
    description: "Partnerships with leading shipping lines and freight forwarders worldwide.",
    icon: "Truck",
  },
];

export const BEST_SELLING_PRODUCTS = [
  { name: "Turmeric Powder", category: "spices", image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400" },
  { name: "Red Chilli Powder", category: "spices", image: "https://images.unsplash.com/photo-1583032015627-7a5c8e3d3c3e?w=400" },
  { name: "Cumin Seeds", category: "spices", image: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c8?w=400" },
  { name: "Groundnut Oil", category: "oils", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400" },
  { name: "Sesame Oil", category: "oils", image: "https://images.unsplash.com/photo-1608181831042-c5b3a4f2b4e5?w=400" },
  { name: "Chickpeas", category: "pulses", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=400" },
  { name: "Red Lentils", category: "pulses", image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400" },
  { name: "Onion Powder", category: "vegetables", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400" },
  { name: "Garlic Powder", category: "vegetables", image: "https://images.unsplash.com/photo-1588347818036-8fc8be564012?w=400" },
  { name: "Banana Powder", category: "vegetables", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" },
  { name: "Moringa Powder", category: "vegetables", image: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c8?w=400" },
  { name: "Coriander Powder", category: "spices", image: "https://images.unsplash.com/photo-1599909533730-f9d49c0c5b5e?w=400" },
];

export const CERTIFICATES = [
  { name: "ISO 22000:2018", description: "Food Safety Management System", image: "/assets/images/spices.png" },
  { name: "FSSAI", description: "Food Safety and Standards Authority of India", image: "/assets/images/oils.png" },
  { name: "HACCP", description: "Hazard Analysis Critical Control Points", image: "/assets/images/dry products.png" },
  { name: "Organic Certification", description: "USDA & EU Organic Standards", image: "/assets/images/vegetables.png" },
  { name: "APEDA Registered", description: "Agricultural and Processed Food Products Export", image: "/assets/images/spices.png" },
  { name: "Spices Board", description: "Government of India Spices Board Certification", image: "/assets/images/oils.png" },
];

export const ABOUT_CONTENT = {
  story: `Founded in 2012, Loyalty Global emerged from a simple yet powerful vision: to bridge the gap between India's rich agricultural heritage and global markets hungry for quality products. What started as a small trading firm in Ahmedabad has grown into a respected name in international agricultural exports.

Our journey began when our founders, with deep roots in Gujarat's farming communities, recognized the untapped potential of Indian agricultural products in global markets. They saw farmers struggling to get fair prices for their produce while international buyers sought authentic Indian products.

Today, we stand as a testament to what passion, integrity, and hard work can achieve. We've built lasting relationships with over 500 farming communities across India and serve clients in more than 50 countries.`,

  mission: "To be the most trusted bridge between Indian agriculture and global markets, delivering premium quality products while empowering farming communities and creating value for all stakeholders.",

  vision: "To make authentic Indian agricultural products accessible to every corner of the world while promoting sustainable farming practices and fair trade.",

  values: [
    { title: "Integrity", description: "Honest dealings in every transaction" },
    { title: "Quality", description: "Never compromising on product standards" },
    { title: "Sustainability", description: "Environmental responsibility in all operations" },
    { title: "Partnership", description: "Growing together with farmers and clients" },
  ],
};

export const TESTIMONIALS = [
  {
    name: "John Smith",
    company: "Global Foods Inc., USA",
    text: "Loyalty Global has been our trusted spice supplier for 5 years. Consistent quality and reliable delivery every time.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    company: "Middle East Trading, UAE",
    text: "Their pulses quality is exceptional. The best we've sourced from India. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    company: "Asian Imports Ltd., Singapore",
    text: "Professional team, competitive pricing, and excellent documentation support. A pleasure to work with.",
    rating: 5,
  },
];
