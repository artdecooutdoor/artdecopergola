import { Resend } from "resend";

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const { type, email, firstName, lastName, phone, message, city } = data;

    // Validate required fields
    if (!email || !type) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required fields: email and type" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);

    let subject = "";
    let htmlBody = "";

    // Handle different form types
    if (type === "newsletter") {
      subject = "Welcome to ArtDeco Newsletter";
      htmlBody = `
        <h2>Newsletter Subscription</h2>
        <p>Thank you for subscribing to ArtDeco newsletter!</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>You will receive updates about our latest products and offers.</p>
      `;
    } else if (type === "contact-city" || type === "contact") {
      subject = `New Contact Form Submission from ${firstName} ${lastName}`;
      htmlBody = `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${city ? `<p><strong>City:</strong> ${city}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `;
    } else if (type === "dealer") {
      subject = `Dealer Application from ${firstName} ${lastName}`;
      htmlBody = `
        <h2>Dealer Application</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `;
    } else {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Unknown form type" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Send email to ArtDeco
    const result = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL || "ArtDeco <noreply@artdecopergola.com>",
      to: [env.RESEND_TO_EMAIL || "artdeco.can@gmail.com"],
      subject: subject,
      reply_to: email,
      html: htmlBody,
    });

    // Send confirmation email to user (only for contact/dealer forms)
    if (type !== "newsletter") {
      await resend.emails.send({
        from: env.RESEND_FROM_EMAIL || "ArtDeco <noreply@artdecopergola.com>",
        to: [email],
        subject: "We received your message",
        html: `
          <h2>Thank you for contacting ArtDeco</h2>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>ArtDeco Team</p>
        `,
      });
    }

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: err.message || "Failed to send email" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
