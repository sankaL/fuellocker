import { NextRequest, NextResponse } from 'next/server';
import { getResendClient, buildContactEmailHtml, buildAutoReplyHtml } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const resend = getResendClient();
    const body = await req.json();
    const { name, email, phone, company, machine, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // 1. Send notification to business

    const fromEmail = process.env.CONTACT_EMAIL_FROM || 'Fuel Locker <noreply@fuellocker.ca>';
    const toEmail = process.env.CONTACT_EMAIL_TO || 'fuellockervending@gmail.com';

    // 2. Send notification to business
    const businessEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Enquiry from ${name}${machine ? ` - ${machine}` : ''} | Fuel Locker`,
      html: buildContactEmailHtml({ name, email, phone, company, machine, message }),
    });

    if (businessEmailResult.error) {
      console.error('Contact API error: failed to send business notification', businessEmailResult.error);
      return NextResponse.json(
        { error: 'Unable to send your message right now. Please try again or email us directly.' },
        { status: 502 }
      );
    }

    // 3. Send auto-reply to customer
    const customerEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "We've received your message - Fuel Locker",
      html: buildAutoReplyHtml(name),
    });

    if (customerEmailResult.error) {
      console.error('Contact API error: failed to send customer auto-reply', customerEmailResult.error);
      return NextResponse.json(
        { error: 'Your message was received, but we could not send the confirmation email.' },
        { status: 502 }
      );
    }

    console.info('Contact API success', {
      name,
      email,
      machine: machine || null,
      businessEmailId: businessEmailResult.data?.id ?? null,
      customerEmailId: customerEmailResult.data?.id ?? null,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
