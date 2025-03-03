
"use server"

import * as z from "zod"
import { ResetSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { generateResetPasswordToken } from "@/lib/tokens"
import { sendPasswordResetEmail } from "@/lib/email"



export const reset = async (values: z.infer<typeof ResetSchema>) => {
   const validateFields = ResetSchema.safeParse(values)

   if (!validateFields.success) {
      return { error: "Invalid email!" }
   }

   const { email } = validateFields.data
   const lowerCaseEmail = email.toLowerCase();
   const existingUser = await getUserByEmail(lowerCaseEmail)

   if (!existingUser) {
      return { error: "Email not found!" }
   }

   const passwordResetToken = await generateResetPasswordToken(lowerCaseEmail)
   await sendPasswordResetEmail(
      passwordResetToken.email,
      passwordResetToken.token
   )

   return { success: "Reset email sent" }
}
