// Site Configuration
import type { SiteConfig } from '../types';

export const SITE: SiteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME || 'Art Deco',
  url: import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321',
  description: import.meta.env.PUBLIC_SITE_DESCRIPTION || 'Premium outdoor living solutions',
  
  defaultLocale: (import.meta.env.PUBLIC_DEFAULT_LOCALE as 'en' | 'ru' | 'az') || 'en',
  locales: ['en', 'ru', 'az'],
  
  email: import.meta.env.PUBLIC_COMPANY_EMAIL || 'info@artdeco.com',
  
  phones: {
    az: import.meta.env.PUBLIC_COMPANY_PHONE_AZ || '+994-12-345-67-89',
    ru: import.meta.env.PUBLIC_COMPANY_PHONE_RU || '+7-495-123-45-67',
    en: import.meta.env.PUBLIC_COMPANY_PHONE_EN || '+1-234-567-8900',
  },
  
  social: {
    facebook: import.meta.env.PUBLIC_FACEBOOK_URL,
    instagram: import.meta.env.PUBLIC_INSTAGRAM_URL,
    linkedin: import.meta.env.PUBLIC_LINKEDIN_URL,
    youtube: import.meta.env.PUBLIC_YOUTUBE_URL,
  },
};

// Analytics Configuration
export const ANALYTICS = {
  googleAnalytics: import.meta.env.PUBLIC_GA_ID,
  yandexMetrika: import.meta.env.PUBLIC_YANDEX_METRIKA_ID,
};

// Form Configuration
export const FORMS = {
  formspreeEndpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT,
  emailJS: {
    serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
  },
};

