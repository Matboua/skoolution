'use server';

import { cookies } from 'next/headers';

export const setToken = async (token: string)=> {
    const cookieStore = await cookies();
    cookieStore.set({
        name: 'token',
        value: token,
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    });
}
export const getToken = async ()=>{
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    return token ? token.value : null;
}