// i18n Configuration and Utilities
import en from './locales/en.json';
import ru from './locales/ru.json';
import az from './locales/az.json';

export type Locale = 'en' | 'ru' | 'az';

export const languages = {
  en: 'English',
  ru: 'Русский',
  az: 'Azərbaycanca',
};

export const defaultLang: Locale = 'en';

export const translations = {
  en,
  ru,
  az,
};

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  return (lang in translations ? (lang as Locale) : defaultLang);
}

export function useTranslations(lang: string) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = (translations as any)[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path}`;
}
