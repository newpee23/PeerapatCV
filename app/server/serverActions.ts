'use server'
import { cookies } from 'next/headers'

export async function handleLanguageChange(language: string) {
    cookies().set('myLanguage', language);
}

export async function handleGetCookieStore() {
    const cookieStore = cookies()
    const myLanguage = cookieStore.get('myLanguage');
    
    return myLanguage?.value;
}