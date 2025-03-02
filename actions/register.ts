"use server"

import * as z from "zod"
import { hash } from "bcryptjs"
import { RegisterSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { prisma } from "@/prisma/prisma"
import { generateVerificationToken } from "@/lib/tokens"
import { sendVerificationEmail } from "@/lib/email"


export const register = async (value: z.infer<typeof RegisterSchema>) => {
   try {
      const validatedFields = RegisterSchema.safeParse(value)

      if (!validatedFields.success) {
         return { error: "Invalid fields!" }
      }

      const { name, email, password, confirmPassword } = validatedFields.data

      if (password !== confirmPassword) {
         return { error: "Passwords do not match!" }
      }

      const lowerCaseEmail = email.toLowerCase();
      const hashedPassword = await hash(password, 10);

      const existUser = await getUserByEmail(lowerCaseEmail)

      if (existUser) {
         return { error: "Email already in use! Please try another one." }
      }

      await prisma.user.create({
         data: {
            name,
            email: lowerCaseEmail,
            password: hashedPassword
         }
      })

      const verificationToken = await generateVerificationToken(email)
      await sendVerificationEmail(verificationToken.email, verificationToken.token)

      return { success: "Confirmation email sent!" }

   } catch (error) {
      console.error("Database error:", error);
      // Handle the error, specifically check for a 503 error
      if ((error as { code: string }).code === "ETIMEDOUT") {
         return {
            error: "Unable to connect to the database. Please try again later.",
         };
      } else if ((error as { code: string }).code === "503") {
         return {
            error: "Service temporarily unavailable. Please try again later.",
         };
      } else {
         return { error: "An unexpected error occurred. Please try again later." };
      }
   }
}