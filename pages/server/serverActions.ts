'use server'
import { cookies } from 'next/headers'

export async function handleLanguageChange(language: "EN" | "TH") {
    cookies().set('myLanguage', language);
}

export async function handleGetCookieStore(): Promise<"EN" | "TH"> {
    try {
        const cookieStore = await cookies();
        const myLanguage = cookieStore.get('myLanguage');
        
        if (myLanguage) {
            return myLanguage.value as "EN" | "TH"; // Type assertion
        }
        return "EN";
    } catch (error) {
        console.error("Error while retrieving language from cookie store:", error);
        return "EN"; // Default to English in case of error
    }
}