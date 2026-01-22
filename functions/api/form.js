import { Resend } from "resend";

/**
 * Cloudflare Pages Function для обработки всех форм
 * Синхронизирована с локальной версией sendemail.json.ts
 */
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // Читаем данные формы
    const formData = await request.json();
    const { type, email, firstName, lastName, phone, message, country, city, postal, companyName, website } = formData;

    // Валидация
    if (!email || !type) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Инициализация сервисов
    const resend = new Resend(env.RESEND_API_KEY);
    const sanityProjectId = env.SANITY_PROJECT_ID || "py6y7j4v";
    const sanityDataset = env.SANITY_DATASET || "production";
    const sanityToken = env.SANITY_API_TOKEN;
    const adminEmail = env.ADMIN_EMAIL || "artdeco.can@gmail.com";
    const fromEmail = env.FROM_EMAIL || "onboarding@resend.dev";

    // Sanity API URL
    const sanityUrl = `https://${sanityProjectId}.api.sanity.io/v2021-06-07/data/mutate/${sanityDataset}`;
    
    let sanityDoc = {};
    let emailOptions = {
      from: fromEmail,
      to: [adminEmail],
    };

    // Роутинг по типу формы - сохранение в Sanity + отправка email
    if (type === "newsletter") {
      sanityDoc = {
        _type: "newsletterSubscription",
        email,
        subscribedAt: new Date().toISOString(),
      };
      
      emailOptions.subject = "New Newsletter Subscription";
      emailOptions.html = `<p>New subscriber: <strong>${email}</strong></p>`;
    } 
    else if (type === "footer-contact") {
      sanityDoc = {
        _type: "contactFormSubmission",
        firstName,
        lastName,
        phone,
        email,
        message,
        source: "footer",
        submittedAt: new Date().toISOString(),
      };

      emailOptions.replyTo = email;
      emailOptions.subject = `New Contact from ${firstName} ${lastName}`;
      emailOptions.html = `
        <h2>New Contact Form</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    } 
    else if (type === "contact-city") {
      sanityDoc = {
        _type: "contactFormByCity",
        firstName,
        lastName,
        email,
        phone,
        message,
        city,
        submittedAt: new Date().toISOString(),
      };

      emailOptions.replyTo = email;
      emailOptions.subject = `New Contact from ${firstName} ${lastName} (${city})`;
      emailOptions.html = `
        <h2>New Contact Form</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    } 
    else if (type === "dealer") {
      sanityDoc = {
        _type: "dealerApplication",
        firstName,
        lastName,
        email,
        phone,
        country,
        city,
        status: "pending",
        appliedAt: new Date().toISOString(),
      };
      
      if (postal) sanityDoc.postal = postal;
      if (companyName) sanityDoc.companyName = companyName;
      if (website) sanityDoc.website = website;

      emailOptions.replyTo = email;
      emailOptions.subject = `New Dealer Application from ${companyName || firstName}`;
      emailOptions.html = `
        <h2>New Dealer Application</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
        <p><strong>Website:</strong> ${website || 'N/A'}</p>
        <p><strong>Location:</strong> ${city}, ${country}</p>
        <p><strong>Postal:</strong> ${postal || 'N/A'}</p>
      `;
    } 
    else {
      return new Response(
        JSON.stringify({ success: false, error: "Unknown form type" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Сохранение в Sanity
    const sanityResponse = await fetch(sanityUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sanityToken}`,
      },
      body: JSON.stringify({
        mutations: [{ create: sanityDoc }],
      }),
    });

    if (!sanityResponse.ok) {
      console.error("Sanity save error:", await sanityResponse.text());
    }

    // Отправка email через Resend
    const emailResult = await resend.emails.send(emailOptions);
    
    if (emailResult.error) {
      console.error(`Resend ${type} error:`, emailResult.error);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : "Failed to submit form" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

