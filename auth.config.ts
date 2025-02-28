import type { NextAuthConfig } from "next-auth"
import { compare } from 'bcryptjs';
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user"


export default {
   providers: [
      GitHub({
         clientId: process.env.GITHUB_CLIENT_ID,
         clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
      Google({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      Credentials({
         async authorize(credentials) {
            const validatedData = LoginSchema.safeParse(credentials)

            if (!validatedData.success) return null
            const { email, password } = validatedData.data
            const user = await getUserByEmail(email)

            if (!user || !user.password || !user.email) return null

            const passwordMatch = await compare(password, user.password)

            if (passwordMatch) {
               return user
            }
            return null
         }
      })
   ]
} satisfies NextAuthConfig