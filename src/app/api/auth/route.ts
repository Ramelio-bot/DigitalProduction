import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || 'Digipro2026!'; // Default fallback for local dev

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();

    if (passcode === ADMIN_PASSCODE) {
      const cookieStore = await cookies();
      cookieStore.set('admin_session', 'authenticated_digipro', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
