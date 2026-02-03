// CMS-ready data types for Haven Homes PH
// These interfaces define the structure for all content that can be managed via a headless CMS

export interface Property {
  id: string;
  title: string;
  slug: string;
  price: number;
  priceLabel?: string; // e.g., "per month" for rentals
  location: {
    city: string;
    area: string;
    address?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    area: number; // in square meters
    parking?: number;
  };
  type: 'house' | 'condo' | 'townhouse' | 'lot' | 'commercial';
  category: 'sale' | 'rent';
  images: {
    main: string;
    gallery?: string[];
  };
  features: string[];
  description: string;
  isFeatured?: boolean;
  isNew?: boolean;
  agent: string; // agent ID
  createdAt: string;
  updatedAt: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
  phone: string;
  email: string;
  bio: string;
  specializations: string[];
  properties?: string[]; // property IDs
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  author: {
    name: string;
    title?: string;
    image?: string;
  };
  content: string;
  rating: number; // 1-5
  propertyType?: string;
  location?: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  propertyCount: number;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
