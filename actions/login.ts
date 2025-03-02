"use server"

import * as z from "zod"
import { LoginSchema } from "@/schemas"
// import { compare } from 'bcryptjs';
import { getUserByEmail } from "@/data/user"
import { signIn } from "@/auth"
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { generateVerificationToken } from "@/lib/tokens"
import { sendVerificationEmail } from "@/lib/email"



export const login = async (value: z.infer<typeof LoginSchema>) => {
   const validatedFields = LoginSchema.safeParse(value)

   if (!validatedFields.success) {
      return { error: "Invalid fields!" }
   }

   const { email, password } = validatedFields.data;

   const lowerCaseEmail = email.toLowerCase();
   const userExists = await getUserByEmail(lowerCaseEmail)


   if (!userExists || !userExists.email || !userExists.password) {
      return { error: "User doesn't exist, please make registration!" }
   }

   // const user = await getUserByEmail(email)

   // if (!user || !user.password || !user.email) return null

   // const passwordMatch = await compare(
   //    password,
   //    user.password
   // )
   // if (!userExists.emailVerified && passwordMatch) {

   if (!userExists.emailVerified) {
      const verificationToken = await generateVerificationToken(userExists.email)

      await sendVerificationEmail(verificationToken.email, verificationToken.token)

      return { success: "Confirmation email sent!" }
   }

   // send verification email

   try {
      await signIn("credentials", {
         email: userExists.email,
         password,
         redirectTo: DEFAULT_LOGIN_REDIRECT
      })

   } catch (error) {
      if (error instanceof AuthError) {
         switch (error.type) {
            case "CredentialsSignin":
               return { error: "Invalid credentials" };
            default:
               return { error: "Please confirm your email address" }
         }
      }
      throw error;
   }
   return { success: "User logged in successfully" }
}
