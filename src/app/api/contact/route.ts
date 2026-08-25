import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/contact-schema';

function stripHtmlTags(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.RECIPIENT_EMAIL;

  if (!apiKey || !recipientEmail) {
    return NextResponse.json(
      { error: 'Server configuration issue. Please try again later.' },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    const fields: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const fieldName = issue.path[0] as string;
      if (!fields[fieldName]) {
        fields[fieldName] = issue.message;
      }
    }
    return NextResponse.json(
      { error: 'Validation failed', fields },
      { status: 400 }
    );
  }

  const { name, email, company, message } = result.data;

  const sanitizedName = stripHtmlTags(name);
  const sanitizedEmail = stripHtmlTags(email);
  const sanitizedCompany = stripHtmlTags(company);
  const sanitizedMessage = stripHtmlTags(message);

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: recipientEmail,
      subject: `New contact from ${sanitizedName}`,
      replyTo: sanitizedEmail,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Company / Project:</strong> ${sanitizedCompany || 'Not provided'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('[Contact API] Resend error:', error.message);
      return NextResponse.json(
        { error: 'Unable to send message. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Unable to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
