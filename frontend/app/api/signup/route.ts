// app/api/signup/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    const body = await req.json();
    const { token } = body;

    // TODO: Insert into DB, call external API, etc.
    // ✅ Set the HttpOnly cookie
    const cookieStore = await cookies();
    cookieStore.set('token', token, {
        httpOnly: true,
        path: '/',
        secure: true,
        maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ success: true });
}
