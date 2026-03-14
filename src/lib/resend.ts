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

export function buildContactEmailHtml(data: ContactEmailProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Inter, -apple-system, sans-serif; background: #f4f4f5; margin: 0; padding: 32px; }
    .card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: #292A30; padding: 32px; text-align: center; }
    .logo { font-size: 24px; font-weight: 800; color: #fff; }
    .accent { color: #FFC300; }
    .body { padding: 32px; }
    h2 { color: #292A30; margin-bottom: 4px; }
    .subtitle { color: #6b7280; font-size: 14px; margin-bottom: 28px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin-bottom: 4px; }
    .value { font-size: 15px; color: #1f2937; padding: 12px; background: #f9fafb; border-radius: 8px; }
    .message-value { font-size: 15px; color: #1f2937; padding: 16px; background: #f9fafb; border-radius: 8px; line-height: 1.6; white-space: pre-wrap; }
    .footer { background: #f9fafb; padding: 20px 32px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
    .badge { display: inline-block; background: #FFF3CC; color: #92400e; padding: 4px 12px; border-radius: 100px; font-size: 12px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; stroke: #FFC300; fill: #FFC300;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Fuel <span class="accent">Locker</span></div>
    </div>
    <div class="body">
      <h2>New Contact Form Submission</h2>
      <p class="subtitle">A potential customer has submitted a request from fuellocker.ca</p>
      ${data.machine ? `<div class="field"><div class="label">Machine Interest</div><div class="value"><span class="badge">${data.machine}</span></div></div>` : ''}
      <div class="field"><div class="label">Name</div><div class="value">${data.name}</div></div>
      <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${data.email}" style="color:#5C80BC">${data.email}</a></div></div>
      ${data.phone ? `<div class="field"><div class="label">Phone</div><div class="value">${data.phone}</div></div>` : ''}
      ${data.company ? `<div class="field"><div class="label">Company / Location</div><div class="value">${data.company}</div></div>` : ''}
      <div class="field"><div class="label">Message</div><div class="message-value">${data.message}</div></div>
    </div>
    <div class="footer">
      <p>This email was sent from the Fuel Locker contact form · Ontario, Canada</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function buildAutoReplyHtml(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Inter, -apple-system, sans-serif; background: #f4f4f5; margin: 0; padding: 32px; }
    .card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: #292A30; padding: 40px 32px; text-align: center; }
    .logo { font-size: 24px; font-weight: 800; color: #fff; }
    .accent { color: #FFC300; }
    .hero-text { color: rgba(255,255,255,0.8); margin-top: 12px; font-size: 15px; }
    .body { padding: 40px 32px; }
    h2 { color: #292A30; margin-bottom: 12px; }
    p { color: #4b5563; line-height: 1.7; margin-bottom: 16px; }
    .cta { display: inline-block; background: #FFC300; color: #292A30; font-weight: 700; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin-top: 8px; }
    .footer { background: #f9fafb; padding: 20px 32px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; stroke: #FFC300; fill: #FFC300;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Fuel <span class="accent">Locker</span></div>
      <div class="hero-text">Ontario, Canada's Premium Vending Partner</div>
    </div>
    <div class="body">
      <h2>Thanks, ${name}! We've received your message.</h2>
      <p>Our team at Fuel Locker will review your enquiry and get back to you within 1-2 business days. We're excited about the possibility of working with you!</p>
      <p>While you wait, feel free to explore our full range of vending machines on our website - from protein shake dispensers to premium milkshake machines.</p>
      <a href="https://fuellocker.ca/products" class="cta">Explore Our Machines →</a>
    </div>
    <div class="footer">
      <p>© Fuel Locker · Ontario, Canada · <a href="mailto:fuellockervending@gmail.com" style="color:#9ca3af">fuellockervending@gmail.com</a></p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
