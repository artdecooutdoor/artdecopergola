import { Resend } from 'resend';
import { createClient } from '@sanity/client';

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const SANITY_API_TOKEN = import.meta.env.SANITY_API_TOKEN;

const resend = new Resend(RESEND_API_KEY);

// Create Sanity client with token inside API route
const sanityClient = createClient({
  projectId: 'py6y7j4v',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: SANITY_API_TOKEN,
});

const ADMIN_EMAIL = 'artdeco.can@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev';

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Handle newsletter subscription
 */
async function handleNewsletter(data: any) {
  const { email } = data;

  // Save to Sanity
  await sanityClient.create({
    _type: 'newsletterSubscription',
    email,
    subscribedAt: new Date().toISOString(),
  });

  // Send admin notification
  await resend.emails.send({
    from: FROM_EMAIL,
    to: [ADMIN_EMAIL],
    subject: 'New Newsletter Subscription',
    html: `<p>New subscriber: <strong>${email}</strong></p>`,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: 'Welcome to ArtDeco Newsletter',
    html: `
      <h2>Newsletter Subscription Confirmed</h2>
      <p>Thank you for subscribing to ArtDeco newsletter!</p>
      <p>You will receive updates about our latest products and offers.</p>
      <p>Best regards,<br>ArtDeco Team</p>
    `,
  });

  return { success: true };
}

/**
 * Handle footer contact form
 */
async function handleFooterContact(data: any) {
  const { email, firstName, lastName, phone, message } = data;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !message) {
    throw new Error('Missing required footer contact fields');
  }

  // Save to Sanity as contactFormSubmission
  await sanityClient.create({
    _type: 'contactFormSubmission',
    firstName,
    lastName,
    phone,
    email,
    message,
    source: 'footer',
    submittedAt: new Date().toISOString(),
  });

  // Send admin notification
  const messageHtml = message ? message.replace(/\n/g, '<br>') : '';
  await resend.emails.send({
    from: FROM_EMAIL,
    to: [ADMIN_EMAIL],
    subject: `New Contact Request from ${firstName} ${lastName} (Footer)`,
    replyTo: email,
    html: `
      <h2>New Contact Request - Footer Form</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${messageHtml}</p>
    `,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: 'We received your message',
    html: `
      <h2>Thank you for contacting ArtDeco</h2>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br>ArtDeco Team</p>
    `,
  });

  return { success: true };
}

/**
 * Handle city contact form (Global Network)
 */
async function handleCityContact(data: any) {
  const { email, firstName, lastName, phone, message, city } = data;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !message || !city) {
    throw new Error('Missing required city contact fields');
  }

  // Save to Sanity as contactFormByCity
  await sanityClient.create({
    _type: 'contactFormByCity',
    firstName,
    lastName,
    phone,
    email,
    message,
    city,
    submittedAt: new Date().toISOString(),
  });

  // Send admin notification
  const messageHtml = message ? message.replace(/\n/g, '<br>') : '';
  await resend.emails.send({
    from: FROM_EMAIL,
    to: [ADMIN_EMAIL],
    subject: `New Inquiry from ${firstName} ${lastName} - ${city}`,
    replyTo: email,
    html: `
      <h2>New Global Network Inquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Message:</strong></p>
      <p>${messageHtml}</p>
    `,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: 'We received your inquiry',
    html: `
      <h2>Thank you for your interest</h2>
      <p>We have received your inquiry and will contact you shortly.</p>
      <p>Best regards,<br>ArtDeco Team</p>
    `,
  });

  return { success: true };
}

/**
 * Handle dealer application
 */
async function handleDealer(data: any) {
  const { email, firstName, lastName, phone, country, city, postal, companyName, website } = data;

  // Validate required fields for dealer
  if (!firstName || !lastName || !email || !phone || !country || !city) {
    throw new Error('Missing required dealer fields');
  }

  // Save to Sanity
  const docToCreate: any = {
    _type: 'dealerApplication',
    firstName,
    lastName,
    phone,
    email,
    country,
    city,
    appliedAt: new Date().toISOString(),
  };

  if (postal) docToCreate.postal = postal;
  if (companyName) docToCreate.companyName = companyName;
  if (website) docToCreate.website = website;

  await sanityClient.create(docToCreate);

  // Send admin notification
  const adminHtml = `
    <h2>New Dealer Application</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>City:</strong> ${city}</p>
    ${postal ? `<p><strong>Postal:</strong> ${postal}</p>` : ''}
    ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ''}
    ${website ? `<p><strong>Website:</strong> <a href="${website}">${website}</a></p>` : ''}
  `;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: [ADMIN_EMAIL],
    subject: `Dealer Application from ${firstName} ${lastName}`,
    replyTo: email,
    html: adminHtml,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: 'Dealer Application Received',
    html: `
      <h2>Thank you for your interest</h2>
      <p>We have received your dealer application and will review it shortly.</p>
      <p>Best regards,<br>ArtDeco Team</p>
    `,
  });

  return { success: true };
}

/**
 * Main POST handler
 */
export async function POST({ request }: any) {
  try {
    let formData: any = {};

    // Handle empty body
    const contentType = request.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      const text = await request.text();
      if (text) {
        formData = JSON.parse(text);
      }
    }

    const { type, email } = formData;

    // Debug logging
    console.log('Form submission received:', { type, email });

    // Validate required fields
    if (!email || !type) {
      console.warn('Missing email or type:', { email, type });
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields: email and type',
        }),
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      console.warn('Invalid email format:', email);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email format',
        }),
        { status: 400 }
      );
    }

    let result;

    // Route to appropriate handler based on type
    console.log('Routing to handler for type:', type);

    if (type === 'newsletter') {
      result = await handleNewsletter(formData);
    } else if (type === 'footer-contact') {
      result = await handleFooterContact(formData);
    } else if (type === 'contact-city') {
      result = await handleCityContact(formData);
    } else if (type === 'dealer') {
      result = await handleDealer(formData);
    } else {
      console.error('Unknown form type:', type);
      return new Response(
        JSON.stringify({
          success: false,
          error: `Unknown form type: ${type}`,
        }),
        { status: 400 }
      );
    }

    console.log('Form processed successfully:', { type });
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (err) {
    console.error('Form submission error:', err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err instanceof Error ? err.message : 'Failed to submit form',
      }),
      { status: 500 }
    );
  }
}
