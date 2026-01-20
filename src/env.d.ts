/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Site Configuration
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;

  // Company Information
  readonly PUBLIC_COMPANY_EMAIL: string;
  readonly PUBLIC_COMPANY_PHONE_AZ: string;
  readonly PUBLIC_COMPANY_PHONE_RU: string;
  readonly PUBLIC_COMPANY_PHONE_EN: string;
  readonly PUBLIC_COMPANY_ADDRESS: string;

  // Contact Form
  readonly PUBLIC_FORMSPREE_ENDPOINT?: string;
  readonly PUBLIC_EMAILJS_SERVICE_ID?: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_ID?: string;
  readonly PUBLIC_EMAILJS_PUBLIC_KEY?: string;

  // Analytics
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_YANDEX_METRIKA_ID?: string;

  // Maps
  readonly PUBLIC_GOOGLE_MAPS_API_KEY?: string;

  // Social Media
  readonly PUBLIC_FACEBOOK_URL?: string;
  readonly PUBLIC_INSTAGRAM_URL?: string;
  readonly PUBLIC_LINKEDIN_URL?: string;
  readonly PUBLIC_YOUTUBE_URL?: string;

  // i18n
  readonly PUBLIC_DEFAULT_LOCALE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

