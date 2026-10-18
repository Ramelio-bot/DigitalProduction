import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, message } = body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // TODO: Wire up Resend, SendGrid, or Supabase here when ready
  // For now, log and succeed (form won't 404 anymore)
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json(
    { success: true, message: "Message received. We'll respond within 24 hours." },
    { status: 200 }
  );
}
