import { Resend } from "resend";

// Sanity client initialization
const SANITY_PROJECT_ID = "py6y7j4v";
const SANITY_DATASET = "production";

/**
 * Initialize Sanity client for Cloudflare Workers
 */
function getSanityClient(token) {
  return {
    create: async (doc) => {
      const res = await fetch(
        `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${SANITY_DATASET}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            mutations: [{ create: doc }],
          }),
        }
      );
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Sanity mutation failed");
      }
      return res.json();
    },
  };
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * CORS headers for Cloudflare
 */
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://artdecopergola.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

/**
 * Handle preflight requests
 */
function handleCors() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

/**
 * Handle newsletter subscription
 */
async function handleNewsletter(data, resend, fromEmail, adminEmail, sanityClient) {
  const { email } = data;

  // Save to Sanity
  try {
    await sanityClient.create({
      _type: "newsletterSubscription",
      email,
      subscribedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Sanity save error (newsletter):", err.message);
    // Continue even if Sanity fails
  }

  // Send admin notification
  await resend.emails.send({
    from: fromEmail,
    to: [adminEmail],
    subject: "New Newsletter Subscription",
    html: `<p>New subscriber: <strong>${email}</strong></p>`,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: fromEmail,
    to: [email],
    subject: "Welcome to ArtDeco Newsletter",
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
async function handleFooterContact(data, resend, fromEmail, adminEmail, sanityClient) {
  const { email, firstName, lastName, phone, message } = data;

  // Save to Sanity as contactFormSubmission
  try {
    await sanityClient.create({
      _type: "contactFormSubmission",
      firstName,
      lastName,
      phone,
      email,
      message,
      source: "footer",
      submittedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Sanity save error (footer contact):", err.message);
  }

  // Send admin notification
  await resend.emails.send({
    from: fromEmail,
    to: [adminEmail],
    subject: `New Contact Request from ${firstName} ${lastName} (Footer)`,
    html: `
      <h2>New Contact Request - Footer Form</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
    reply_to: email,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: fromEmail,
    to: [email],
    subject: "We received your message",
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
async function handleCityContact(data, resend, fromEmail, adminEmail, sanityClient) {
  const { email, firstName, lastName, phone, message, city } = data;

  // Save to Sanity as contactFormByCity
  try {
    await sanityClient.create({
      _type: "contactFormByCity",
      firstName,
      lastName,
      phone,
      email,
      message,
      city,
      submittedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Sanity save error (city contact):", err.message);
  }

  // Send admin notification
  await resend.emails.send({
    from: fromEmail,
    to: [adminEmail],
    subject: `New Inquiry from ${firstName} ${lastName} - ${city}`,
    html: `
      <h2>New Global Network Inquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
    reply_to: email,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: fromEmail,
    to: [email],
    subject: "We received your inquiry",
    html: `
      <h2>Thank you for your interest</h2>
      <p>We have received your inquiry and will contact you shortly.</p>
      <p>Best regards,<br>ArtDeco Team</p>
    `,
  });

  return { success: true };
}

/**
 * Handle contact form submission
 */
async function handleContact(data, resend, fromEmail, adminEmail, sanityClient) {
  const { email, firstName, lastName, phone, message, city } = data;

  // Save to Sanity
  try {
    await sanityClient.create({
      _type: "contactFormSubmission",
      firstName,
      lastName,
      phone,
      email,
      city,
      message,
      source: "website",
      submittedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Sanity save error (contact):", err.message);
    // Continue even if Sanity fails
  }

  // Send admin notification
  await resend.emails.send({
    from: fromEmail,
    to: [adminEmail],
    subject: `New Contact Request from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${city ? `<p><strong>City:</strong> ${city}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
    reply_to: email,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: fromEmail,
    to: [email],
    subject: "We received your message",
    html: `
      <h2>Thank you for contacting ArtDeco</h2>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br>ArtDeco Team</p>
    `,
  });

  return { success: true };
}

/**
 * Handle dealer application
 */
async function handleDealer(data, resend, fromEmail, adminEmail, sanityClient) {
  const { email, firstName, lastName, phone, country, city, postal, companyName, website } = data;

  // Save to Sanity
  try {
    await sanityClient.create({
      _type: "dealerApplication",
      firstName,
      lastName,
      phone,
      email,
      country,
      city,
      postal,
      companyName,
      website,
      appliedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Sanity save error (dealer):", err.message);
  }

  // Send admin notification
  await resend.emails.send({
    from: fromEmail,
    to: [adminEmail],
    subject: `Dealer Application from ${firstName} ${lastName}`,
    html: `
      <h2>New Dealer Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>City:</strong> ${city}</p>
      ${postal ? `<p><strong>Postal:</strong> ${postal}</p>` : ''}
      ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ''}
      ${website ? `<p><strong>Website:</strong> <a href="${website}">${website}</a></p>` : ''}
    `,
    reply_to: email,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: fromEmail,
    to: [email],
    subject: "Dealer Application Received",
    html: `
      <h2>Thank you for your interest</h2>
      <p>We have received your dealer application and will review it shortly.</p>
      <p>Best regards,<br>ArtDeco Team</p>
    `,
  });

  return { success: true };
}

/**
 * Main handler for Cloudflare Workers
 */
export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return handleCors();
    }

    // Only POST allowed
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ success: false, error: "Method not allowed" }),
        {
          status: 405,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    try {
      const data = await request.json();
      const { type, email } = data;

      // Validate required fields
      if (!email || !type) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Missing required fields: email and type",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      // Validate email format
      if (!isValidEmail(email)) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Invalid email format",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      // Initialize services
      const resend = new Resend(env.RESEND_API_KEY);
      const sanityClient = getSanityClient(env.SANITY_API_TOKEN);
      const fromEmail = env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const adminEmail = env.RESEND_TO_EMAIL || "artdeco.can@gmail.com";

      let result;

      // Route to appropriate handler
      if (type === "newsletter") {
        result = await handleNewsletter(data, resend, fromEmail, adminEmail, sanityClient);
      } else if (type === "footer-contact") {
        result = await handleFooterContact(data, resend, fromEmail, adminEmail, sanityClient);
      } else if (type === "contact-city") {
        result = await handleCityContact(data, resend, fromEmail, adminEmail, sanityClient);
      } else if (type === "dealer") {
        result = await handleDealer(data, resend, fromEmail, adminEmail, sanityClient);
      } else {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Unknown form type",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    } catch (err) {
      console.error("Email sending error:", err);
      return new Response(
        JSON.stringify({
          success: false,
          error: err.message || "Failed to send email",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  },
};
