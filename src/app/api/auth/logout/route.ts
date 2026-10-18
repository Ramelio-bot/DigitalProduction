import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sessions } from "@/lib/session-store";

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get("digipro_session")?.value;

  if (token) {
    sessions.delete(token);
  }

  cookieStore.delete("digipro_session");

  return NextResponse.json({ success: true });
}
