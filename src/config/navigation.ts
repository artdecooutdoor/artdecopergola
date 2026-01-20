// Navigation Configuration
import type { NavigationItem } from '../types';

export const navigation: Record<'en' | 'ru' | 'az', NavigationItem[]> = {
  en: [
    { name: 'Home', href: '/en/' },
    { name: 'Products', href: '/en/products' },
    { name: 'Projects', href: '/en/projects' },
    { name: 'About Us', href: '/en/about' },
    { name: 'Become a Dealer', href: '/en/dealer' },
    { name: 'Contact', href: '/en/contact' },
  ],
  ru: [
    { name: 'Главная', href: '/ru/' },
    { name: 'Продукты', href: '/ru/products' },
    { name: 'Проекты', href: '/ru/projects' },
    { name: 'О нас', href: '/ru/about' },
    { name: 'Стать дилером', href: '/ru/dealer' },
    { name: 'Контакты', href: '/ru/contact' },
  ],
  az: [
    { name: 'Ana səhifə', href: '/az/' },
    { name: 'Məhsullar', href: '/az/products' },
    { name: 'Layihələr', href: '/az/projects' },
    { name: 'Haqqımızda', href: '/az/about' },
    { name: 'Diler ol', href: '/az/dealer' },
    { name: 'Əlaqə', href: '/az/contact' },
  ],
};

export function getNavigation(locale: 'en' | 'ru' | 'az' = 'en'): NavigationItem[] {
  return navigation[locale] || navigation.en;
}

