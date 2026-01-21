import { Resend } from 'resend';
import { sanityClient } from '../../utils/helpers';

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);
const ADMIN_EMAIL = 'artdeco.can@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // Using Resend's verified domain

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

    const { type, email, firstName, lastName, phone, message, country, city, postal, companyName, website } = formData;

    // Save to Sanity based on form type
    if (type === 'newsletter') {
      await sanityClient.create({
        _type: 'newsletterSubscription',
        email,
        subscribedAt: new Date().toISOString(),
      });

      // Send admin notification
      const newsResult = await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: 'New Newsletter Subscription',
        html: `<p>New subscriber: <strong>${email}</strong></p>`,
      });
      if (newsResult.error) {
        console.error('Resend newsletter error:', newsResult.error);
      }
    } 
    else if (type === 'contact') {
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
      const contactResult = await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        replyTo: email,
        subject: `New Contact from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
      if (contactResult.error) {
        console.error('Resend contact error:', contactResult.error);
      }
    } 
    else if (type === 'dealer') {
      await sanityClient.create({
        _type: 'dealerApplication',
        firstName,
        lastName,
        email,
        phone,
        country,
        city,
        postal,
        companyName,
        website,
        status: 'pending',
        appliedAt: new Date().toISOString(),
      });

      // Send admin notification
      const dealerResult = await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        replyTo: email,
        subject: `New Dealer Application from ${companyName || firstName}`,
        html: `
          <h2>New Dealer Application</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
          <p><strong>Website:</strong> ${website || 'N/A'}</p>
          <p><strong>Location:</strong> ${city}, ${country}</p>
          <p><strong>Postal:</strong> ${postal || 'N/A'}</p>
        `,
      });
      if (dealerResult.error) {
        console.error('Resend dealer error:', dealerResult.error);
      }
    }
    else if (type === 'contact-city') {
      await sanityClient.create({
        _type: 'contactFormByCity',
        firstName,
        lastName,
        email,
        phone,
        message,
        city,
        submittedAt: new Date().toISOString(),
      });

      // Send admin notification
      const contactCityResult = await resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        replyTo: email,
        subject: `New Contact from ${firstName} ${lastName} (${city})`,
        html: `
          <h2>New Contact Form</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
      if (contactCityResult.error) {
        console.error('Resend contact-city error:', contactCityResult.error);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to submit form' }),
      { status: 500 }
    );
  }
}