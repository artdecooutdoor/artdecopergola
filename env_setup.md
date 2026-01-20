# 🔐 Настройка переменных окружения

## ⚠️ Важно!

Файлы `.env` защищены от редактирования в проекте. Вам нужно создать их вручную.

---

## 📝 Шаг 1: Создайте .env файл

### Вручную создайте файл `.env` в корне проекта со следующим содержимым:

```env
# Art Deco - Local Development Environment Variables
# DO NOT commit this file to git!

# Site Configuration
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_SITE_NAME=Art Deco
PUBLIC_SITE_DESCRIPTION=Premium outdoor living solutions - patio covers, pergolas, and retractable louvered roofs

# Company Information
PUBLIC_COMPANY_EMAIL=info@artdeco.com
PUBLIC_COMPANY_PHONE_AZ=+994-12-345-67-89
PUBLIC_COMPANY_PHONE_RU=+7-495-123-45-67
PUBLIC_COMPANY_PHONE_EN=+1-234-567-8900
PUBLIC_COMPANY_ADDRESS=Your Company Address

# Default Language
PUBLIC_DEFAULT_LOCALE=en

# Contact Form - ВЫБЕРИТЕ ОДИН ВАРИАНТ:

# Вариант 1: Formspree (Рекомендуется)
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id

# Вариант 2: EmailJS
# PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
# PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
# PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (Опционально)
# PUBLIC_GA_ID=G-XXXXXXXXXX
# PUBLIC_YANDEX_METRIKA_ID=12345678

# Google Maps (Опционально)
# PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Social Media (Опционально)
# PUBLIC_FACEBOOK_URL=https://facebook.com/yourpage
# PUBLIC_INSTAGRAM_URL=https://instagram.com/yourpage
# PUBLIC_LINKEDIN_URL=https://linkedin.com/company/yourpage
# PUBLIC_YOUTUBE_URL=https://youtube.com/@yourpage
```

---

## 🎯 Минимальная конфигурация для начала:

Если хотите просто начать работу, создайте `.env` с минимальным набором:

```env
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_SITE_NAME=Art Deco
PUBLIC_COMPANY_EMAIL=info@artdeco.com
PUBLIC_COMPANY_PHONE_AZ=+994-12-345-67-89
PUBLIC_COMPANY_PHONE_RU=+7-495-123-45-67
PUBLIC_COMPANY_PHONE_EN=+1-234-567-8900
PUBLIC_DEFAULT_LOCALE=en
```

Остальные переменные можно добавить позже, когда понадобятся.

---

## 📧 Настройка контактной формы

### Вариант 1: Formspree (Проще всего)

1. Перейдите на https://formspree.io
2. Зарегистрируйтесь (есть бесплатный тариф)
3. Создайте новую форму
4. Скопируйте endpoint URL (выглядит как `https://formspree.io/f/xxxxxxxx`)
5. Добавьте в `.env`:
   ```
   PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/ваш-id
   ```

### Вариант 2: EmailJS

1. Перейдите на https://www.emailjs.com
2. Зарегистрируйтесь
3. Создайте Email Service
4. Создайте Email Template
5. Получите Public Key
6. Добавьте все три значения в `.env`

---

## ✅ Проверка

После создания файла `.env`, проверьте что он работает:

1. Запустите dev сервер:
   ```bash
   npm run dev
   ```

2. Откройте консоль браузера и проверьте, что переменные доступны

3. Проверьте работу переключателя языков на http://localhost:4321

---

## 🔒 Безопасность

- `.env` файл УЖЕ добавлен в `.gitignore`
- НИКОГДА не коммитьте `.env` в git
- Используйте `.env.example` как шаблон для команды
- В продакшене используйте переменные окружения вашего хостинга

---

## 🚀 Готово!

После создания `.env` файла, вы можете начинать разработку! Смотрите `SETUP_GUIDE.md` для дальнейших инструкций.

