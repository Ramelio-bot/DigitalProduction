import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE;

// Rate limiting (in-memory)
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000; // 15 min
const MAX_ATTEMPTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = attempts.get(ip);
  if (!record || now > record.resetAt) return false;
  return record.count >= MAX_ATTEMPTS;
}

function recordAttempt(ip: string) {
  const now = Date.now();
  const record = attempts.get(ip);
  if (!record || now > record.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    record.count++;
  }
}

export async function POST(request: Request) {
  // Fail closed — no passcode configured = no access
  if (!ADMIN_PASSCODE) {
    return NextResponse.json(
      { error: "Authentication not configured" },
      { status: 500 }
    );
  }

  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      { status: 429 }
    );
  }

  let body: { password?: string; passcode?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const password = body.password ?? body.passcode;

  if (!password || typeof password !== "string") {
    recordAttempt(ip);
    return NextResponse.json({ error: "Password required" }, { status: 400 });
  }

  // Constant-time comparison to prevent timing attacks
  const inputBuffer = Buffer.from(password);
  const validBuffer = Buffer.from(ADMIN_PASSCODE);
  const isValid =
    crypto.timingSafeEqual(
      inputBuffer.length === validBuffer.length
        ? inputBuffer
        : Buffer.alloc(0),
      validBuffer
    ) && inputBuffer.length === validBuffer.length;

  if (!isValid) {
    recordAttempt(ip);
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Generate cryptographically random session token
  const sessionToken = crypto.randomBytes(32).toString("hex");
  const cookieStore = await cookies();

  cookieStore.set("digipro_session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return NextResponse.json({ success: true });
}
