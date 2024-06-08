// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  const { cookies } = request;
  const authCookie = cookies.get('auth');

  if (!authCookie) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }
}

export const config = {
  matcher: ['/dashboard', '/'],
};
