"use server"


import * as z from "zod"
import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { signIn } from "@/auth"
import { AuthError } from "next-auth";



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

   // send verification email

   try {
      await signIn("credentials", {
         email: userExists.email,
         password,
         redirectTo: "/dashboard"
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
