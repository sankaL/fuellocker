import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  machine?: string;
  message: string;
}

interface GlobalEmailProps {
  previewText?: string;
  heroText?: string;
  content: string;
}

export function buildGlobalEmailTemplate({ previewText, heroText, content }: GlobalEmailProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f4f4f5; margin: 0; padding: 32px 16px; -webkit-font-smoothing: antialiased; }
    .card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: #292A30; padding: 40px 32px; text-align: center; }
    .logo { font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em; display: flex; align-items: center; justify-content: center; gap: 8px; margin: 0; }
    .logo svg { vertical-align: middle; stroke: #FFC300; fill: #FFC300; margin-top: -2px; }
    .accent { color: #FFC300; }
    .hero-text { color: rgba(255,255,255,0.8); margin-top: 12px; font-size: 15px; font-weight: 500; }
    .body { padding: 40px 32px; background: #ffffff; }
    .footer { background: #f9fafb; padding: 24px 32px; text-align: center; font-size: 13px; color: #9ca3af; border-top: 1px solid #f3f4f6; line-height: 1.6; }
    h2 { color: #111827; margin: 0 0 12px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
    p { color: #4b5563; line-height: 1.7; margin: 0 0 16px 0; font-size: 15px; }
    .cta { display: inline-block; background: #FFC300; color: #111827; font-weight: 700; font-size: 15px; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin-top: 12px; transition: background 0.2s; }
    .cta:hover { background: #eab308; }
    /* Form fields */
    .field { margin-bottom: 20px; }
    .label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin-bottom: 6px; }
    .value { font-size: 15px; color: #1f2937; padding: 12px 16px; background: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6; }
    .message-value { font-size: 15px; color: #1f2937; padding: 16px; background: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6; line-height: 1.6; white-space: pre-wrap; }
    .badge { display: inline-block; background: #FFF3CC; color: #92400e; padding: 4px 12px; border-radius: 100px; font-size: 13px; font-weight: 600; }
    .link { color: #5C80BC; text-decoration: none; font-weight: 500; }
    .link:hover { text-decoration: underline; }
  </style>
</head>
<body>
  ${previewText ? `<div style="display: none; max-height: 0px; overflow: hidden;">${previewText}</div>` : ''}
  <div class="card">
    <div class="header">
      <div class="logo">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        Fuel <span class="accent">Locker</span>
      </div>
      ${heroText ? `<div class="hero-text">${heroText}</div>` : ''}
    </div>
    
    <div class="body">
      ${content}
    </div>
    
    <div class="footer">
      <div>© ${new Date().getFullYear()} Fuel Locker</div>
      <div>Ontario, Canada</div>
      <div style="margin-top: 8px;">
        <a href="mailto:fuellockervending@gmail.com" class="link" style="color:#9ca3af;">fuellockervending@gmail.com</a>
        &nbsp;|&nbsp;
        <a href="https://fuellocker.ca" class="link" style="color:#9ca3af;">fuellocker.ca</a>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
}

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  machine?: string;
  message: string;
}

export function buildContactEmailHtml(data: ContactEmailProps): string {
  const content = `
    <h2>New Contact Form Submission</h2>
    <p style="color: #6b7280; font-size: 14px; margin-bottom: 28px;">A potential customer has submitted a request from fuellocker.ca</p>
    
    ${data.machine ? `<div class="field"><div class="label">Machine Interest</div><div class="value"><span class="badge">${data.machine}</span></div></div>` : ''}
    <div class="field"><div class="label">Name</div><div class="value">${data.name}</div></div>
    <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${data.email}" class="link">${data.email}</a></div></div>
    ${data.phone ? `<div class="field"><div class="label">Phone</div><div class="value">${data.phone}</div></div>` : ''}
    ${data.company ? `<div class="field"><div class="label">Company / Location</div><div class="value">${data.company}</div></div>` : ''}
    <div class="field" style="margin-bottom: 0;"><div class="label">Message</div><div class="message-value">${data.message}</div></div>
  `;

  return buildGlobalEmailTemplate({
    previewText: `New contact submission from ${data.name}`,
    heroText: 'New Contact Request',
    content
  });
}

export function buildAutoReplyHtml(name: string): string {
  const content = `
    <h2>Thanks, ${name}! We've received your message.</h2>
    <p>Our team at Fuel Locker will review your enquiry and get back to you within 1-2 business days. We're excited about the possibility of working with you!</p>
    <p>While you wait, feel free to explore our full range of vending machines on our website - from protein shake dispensers to premium milkshake machines.</p>
    <div style="text-align: center; margin-top: 24px;">
      <a href="https://fuellocker.ca/products" class="cta">Explore Our Machines →</a>
    </div>
  `;

  return buildGlobalEmailTemplate({
    previewText: 'Thanks for reaching out to Fuel Locker',
    heroText: "Ontario, Canada's Premium Vending Partner",
    content
  });
}
