import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if trying to access dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const session = request.cookies.get('admin_session');
    
    if (!session || session.value !== 'authenticated_digipro') {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
