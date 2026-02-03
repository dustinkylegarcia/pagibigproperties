import { SiteConfig, NavItem, ValueProposition } from './types';

export const siteConfig: SiteConfig = {
  name: "Haven Homes PH",
  tagline: "Find Your Perfect Home in the Philippines",
  description: "Discover premium properties across the Philippines. From modern condos in Metro Manila to beachfront villas in Cebu, we help you find your dream home.",
  logo: "/logo.svg",
  contact: {
    phone: "+63 917 123 4567",
    email: "hello@havenhomesph.com",
    address: "25th Floor, BGC Corporate Center, Bonifacio Global City, Taguig, Metro Manila",
  },
  social: {
    facebook: "https://facebook.com/havenhomesph",
    instagram: "https://instagram.com/havenhomesph",
    twitter: "https://twitter.com/havenhomesph",
    linkedin: "https://linkedin.com/company/havenhomesph",
    youtube: "https://youtube.com/havenhomesph",
  },
  seo: {
    title: "Haven Homes PH | Premium Real Estate in the Philippines",
    description: "Find luxury homes, condos, and commercial properties across the Philippines. Trusted by thousands of homebuyers since 2015.",
    keywords: ["real estate philippines", "homes for sale manila", "condo BGC", "property investment", "house and lot philippines"],
    ogImage: "/og-image.jpg",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Properties", href: "#properties" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const valuePropositions: ValueProposition[] = [
  {
    id: "1",
    title: "Verified Listings",
    description: "Every property is personally inspected and verified by our team, ensuring accuracy in photos, pricing, and details.",
    icon: "shield-check",
  },
  {
    id: "2",
    title: "Local Expertise",
    description: "Our agents are local experts with deep knowledge of neighborhoods, market trends, and investment opportunities.",
    icon: "map-pin",
  },
  {
    id: "3",
    title: "End-to-End Support",
    description: "From property viewing to documentation and financing, we guide you through every step of your home journey.",
    icon: "handshake",
  },
  {
    id: "4",
    title: "AI-Powered Search",
    description: "Our smart property assistant helps you find the perfect home based on your preferences and lifestyle needs.",
    icon: "sparkles",
  },
];

export const heroContent = {
  headline: "Find Your Dream Home in the Philippines",
  subheadline: "Discover premium properties across Metro Manila, Cebu, Davao, and beyond. Your perfect home is waiting.",
  primaryCTA: "Explore Properties",
  secondaryCTA: "Talk to an Agent",
  stats: [
    { value: "2,500+", label: "Properties Listed" },
    { value: "15,000+", label: "Happy Families" },
    { value: "50+", label: "Expert Agents" },
    { value: "12", label: "Years of Excellence" },
  ],
};

export const ctaContent = {
  headline: "Ready to Find Your Perfect Home?",
  description: "Schedule a personalized property viewing or speak with one of our expert agents today.",
  primaryCTA: "Schedule a Viewing",
  secondaryCTA: "Contact Us",
};

export const footerContent = {
  description: "Haven Homes PH is your trusted partner in finding the perfect property in the Philippines. With over a decade of experience, we've helped thousands of families find their dream homes.",
  quickLinks: [
    { label: "Properties for Sale", href: "#" },
    { label: "Properties for Rent", href: "#" },
    { label: "New Developments", href: "#" },
    { label: "Investment Properties", href: "#" },
  ],
  locations: [
    "Metro Manila",
    "Cebu",
    "Davao",
    "Iloilo",
    "Baguio",
    "Tagaytay",
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
