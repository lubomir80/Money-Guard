'use server'

import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

export const deleteCookies = async () => {
   const cookieStore = await cookies()
   cookieStore.getAll().forEach((cookie) => {
      cookieStore.delete(cookie.name);
   });
   redirect("/auth/login")
}