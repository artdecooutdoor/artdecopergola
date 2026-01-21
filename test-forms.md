# Form Integration Testing Guide

## Forms and their API connections

### 1. Footer Form → Contact Form Submission (Sanity)
- **File**: `src/components/footer.astro`
- **Type**: `footer-contact`
- **Handler**: `handleFooterContact()`
- **Sanity Collection**: `contactFormSubmission`
- **Fields sent**: firstName, lastName, phone, email, message
- **Fields saved**: firstName, lastName, phone, email, message, source: "footer", submittedAt

### 2. Newsletter Form → Newsletter Subscription (Sanity)
- **File**: `src/components/newsletter.astro`
- **Type**: `newsletter`
- **Handler**: `handleNewsletter()`
- **Sanity Collection**: `newsletterSubscription`
- **Fields sent**: email
- **Fields saved**: email, subscribedAt

### 3. Contact Form (Global Network) → Global Network (Sanity)
- **File**: `src/pages/[lang]/contact.astro` (uses `/scripts/contact.js`)
- **Type**: `contact-city`
- **Handler**: `handleCityContact()`
- **Sanity Collection**: `contactFormByCity`
- **Fields sent**: firstName, lastName, phone, email, message, city
- **Fields saved**: firstName, lastName, phone, email, message, city, submittedAt

### 4. Dealer Form → Dealer Application (Sanity)
- **File**: `src/pages/[lang]/dealer.astro`
- **Type**: `dealer`
- **Handler**: `handleDealer()`
- **Sanity Collection**: `dealerApplication`
- **Fields sent**: firstName, lastName, phone, email, country, city, postal, companyName, website
- **Fields saved**: firstName, lastName, phone, email, country, city, postal, companyName, website, appliedAt

## Key Fixes Applied

1. ✅ Fixed undefined `.replace()` calls by adding null checks
2. ✅ Removed unused `handleContact()` function
3. ✅ Updated `handleFooterContact()` to save correct Sanity type
4. ✅ Updated `handleCityContact()` to save correct Sanity type
5. ✅ Updated `handleDealer()` with all required fields
6. ✅ Updated routing logic to handle all form types correctly
7. ✅ Added better error logging

## Testing

To test each form:

```bash
# Test footer form
curl -X POST https://artdecopergola.com/api/sendemail.json \
  -H "Content-Type: application/json" \
  -d '{
    "type": "footer-contact",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "email": "john@example.com",
    "message": "Test message"
  }'

# Test newsletter form
curl -X POST https://artdecopergola.com/api/sendemail.json \
  -H "Content-Type: application/json" \
  -d '{
    "type": "newsletter",
    "email": "subscriber@example.com"
  }'

# Test contact (Global Network) form
curl -X POST https://artdecopergola.com/api/sendemail.json \
  -H "Content-Type: application/json" \
  -d '{
    "type": "contact-city",
    "firstName": "Jane",
    "lastName": "Smith",
    "phone": "+1234567890",
    "email": "jane@example.com",
    "message": "Inquiry message",
    "city": "baku"
  }'

# Test dealer form
curl -X POST https://artdecopergola.com/api/sendemail.json \
  -H "Content-Type: application/json" \
  -d '{
    "type": "dealer",
    "firstName": "Business",
    "lastName": "Owner",
    "phone": "+1234567890",
    "email": "business@example.com",
    "country": "Azerbaijan",
    "city": "Baku",
    "postal": "12345",
    "companyName": "My Company",
    "website": "https://mycompany.com"
  }'
```
