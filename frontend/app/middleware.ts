import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from '../helpers/HadelToken';


export function middleware(request: NextRequest) {
    const token = getToken().then(token => token);
    if (!token) {
        // If no token is found, redirect to the login page
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next(); // continue as normal
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/pubject/:path*",
    ],
}