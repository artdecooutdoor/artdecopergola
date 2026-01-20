// Core Types for Art Deco Project

export type Locale = 'en' | 'ru' | 'az';

export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  features?: string[];
  category: string;
  price?: number;
  locale: Locale;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  location?: string;
  date: string;
  category: string;
  locale: Locale;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  locale: Locale;
}

export interface SeoData {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  locale: Locale;
  alternateLocales?: {
    locale: Locale;
    url: string;
  }[];
}

export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  defaultLocale: Locale;
  locales: Locale[];
  email: string;
  phones: {
    az: string;
    ru: string;
    en: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

