import { Resend } from "resend";
import { NextResponse } from "next/server";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey && process.env.NODE_ENV === "production") {
  console.warn("RESEND_API_KEY is not defined.");
}
const resend = new Resend(apiKey || "re_placeholder");

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Digipro Contact <onboarding@resend.dev>",
      to: ["hello@digipro.tech"],
      subject: `New Lead: ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
