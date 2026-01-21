import { Resend } from "resend";

/**
 * Cloudflare Pages Function для обработки всех форм
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
    const adminEmail = env.ADMIN_EMAIL || "artdeco.can@gmail.com";
    const fromEmail = env.FROM_EMAIL || "onboarding@resend.dev";

    // Сохранение в Sanity
    const sanityUrl = `https://${sanityProjectId}.api.sanity.io/v2021-06-07/data/mutate/${sanityDataset}`;
    
    let sanityDoc = {};

    // Роутинг по типу формы
    if (type === "newsletter") {
      sanityDoc = {
        _type: "newsletterSubscription",
        email,
      };
    } else if (type === "footer-contact") {
      sanityDoc = {
        _type: "contactFormSubmission",
        firstName,
        lastName,
        phone,
        email,
        message,
        source: "footer",
      };
    } else if (type === "contact-city") {
      sanityDoc = {
        _type: "contactFormByCity",
        firstName,
        lastName,
        email,
        phone,
        message,
        city,
      };
    } else if (type === "dealer") {
      sanityDoc = {
        _type: "dealerApplication",
        firstName,
        lastName,
        email,
        phone,
        country,
        city,
      };
      if (postal) sanityDoc.postal = postal;
      if (companyName) sanityDoc.companyName = companyName;
      if (website) sanityDoc.website = website;
    } else {
      return new Response(
        JSON.stringify({ success: false, error: "Unknown form type" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Сохранение в Sanity
    await fetch(sanityUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.SANITY_API_TOKEN}`,
      },
      body: JSON.stringify({
        mutations: [{ create: sanityDoc }],
      }),
    });

    // Отправка email через Resend
    await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      subject: `New ${type} submission`,
      html: `<p>New form submission of type: ${type}</p><pre>${JSON.stringify(formData, null, 2)}</pre>`,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

