import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sessions } from "@/lib/session-store";

const SESSION_COOKIE = "digipro_session";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    const session = request.cookies.get(SESSION_COOKIE);
    const token = session?.value;

    // Check token exists and is valid format
    if (!token || token.length !== 64) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Check session exists in store and hasn't expired
    const sessionData = sessions.get(token);
    if (!sessionData) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Check session age
    if (Date.now() - sessionData.createdAt > SESSION_MAX_AGE_MS) {
      sessions.delete(token);
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
