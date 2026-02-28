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
  subtitle: "Delivering Premium Indian Agricultural Products to Global Markets",
  description: `Loyalty Global was founded with a clear purpose — to connect India’s high-quality agricultural and food products with reliable buyers across international markets. Based in Ahmedabad, Gujarat, we operate as an import–export company committed to building long-term trade relationships through transparency, consistent quality, and dependable service.

Our founders bring strong business experience closely linked to India’s agricultural supply chain. Recognizing the growing global demand for Indian commodities such as spices, pulses, edible oils, and fresh produce, we established Loyalty Global to represent Indian products responsibly and professionally on the world stage.

From the very beginning, we have emphasized ethical sourcing, careful supplier selection, and strict quality checks at every stage of the export process. By working closely with farmers, processors, and logistics partners, we ensure that every shipment meets customer expectations as well as international trade standards.

Today, Loyalty Global continues to grow steadily, strengthening partnerships with producers across India and importers worldwide. Our journey is guided by integrity, market knowledge, and a commitment to delivering reliable value to every client we serve.

We believe in more than just trading goods — we build lasting trust across borders.`,
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
    description: "Partnership-Oriented Approach focused on long-term growth.",
  },
  {
    icon: "Globe",
    title: "Global Reach",
    description: "Strict Quality Commitment from sourcing to dispatch.",
  },
  {
    icon: "Leaf",
    title: "Sustainable Sourcing",
    description: "Consistent Quality Standards in every shipment.",
  },
  {
    icon: "Package",
    title: "Custom Packaging",
    description: "Custom Packaging Options tailored to your market needs.",
  },
  {
    icon: "Clock",
    title: "Timely Delivery",
    description: "Reliable & Timely Delivery with secure logistics support.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Dedicated Support",
    description: "Your Reliable Export Partner from India",
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
    description: "Quality-First Approach – Strict quality control at every stage.",
    icon: "Building2",
  },
  {
    title: "Certified Quality Standards",
    description: "Specialized Product Expertise – Deep focus on selected products for better consistency and compliance.",
    icon: "Award",
  },
  {
    title: "Experienced Team",
    description: "Verified Supplier Network – Trusted farmers and certified suppliers across India.",
    icon: "Users",
  },
  {
    title: "Competitive Pricing",
    description: "Long-Term Business Vision – We build lasting global partnerships, not just transactions.",
    icon: "TrendingDown",
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
  story: `Loyalty Global was founded with a clear purpose — to connect India’s high-quality agricultural and food products with reliable buyers across international markets. Based in Ahmedabad, Gujarat, we operate as an import–export company committed to building long-term trade relationships through transparency, consistent quality, and dependable service.

  Our founders bring strong business experience closely linked to India’s agricultural supply chain. Recognizing the growing global demand for Indian commodities such as spices, pulses, edible oils, and fresh produce, we established Loyalty Global to represent Indian products responsibly and professionally on the world stage.

From the very beginning, we have emphasized ethical sourcing, careful supplier selection, and strict quality checks at every stage of the export process. By working closely with farmers, processors, and logistics partners, we ensure that every shipment meets customer expectations as well as international trade standards.

Today, Loyalty Global continues to grow steadily, strengthening partnerships with producers across India and importers worldwide. Our journey is guided by integrity, market knowledge, and a commitment to delivering reliable value to every client we serve.

We believe in more than just trading goods — we build lasting trust across borders.
`,

  mission: "To build trust-driven, long-term partnerships while reliably fulfilling the diverse needs of our customers across global markets.",

  vision: "To become a globally trusted partner by building long-term relationships with customers across international markets.",

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
