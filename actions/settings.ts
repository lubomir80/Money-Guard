"use server"

import * as z from "zod"
import { prisma } from "@/prisma/prisma";
import { UserSettingsSchema } from "@/schemas";
import { revalidatePath } from 'next/cache';
import { getUserById } from "@/data/user";
import { auth } from "@/auth";
import { compare, hash } from "bcryptjs";



export const settings = async (values: z.infer<typeof UserSettingsSchema>) => {
   const session = await auth()
   const user = session?.user

   if (!user) {
      return { error: "User not logged!" }
   }

   const dbUser = await getUserById(user.id)

   if (!dbUser) {
      return { error: "Unauthorized" }
   }


   if (values.password && values.newPassword && dbUser.password) {
      const passwordMatch = await compare(
         values.password,
         dbUser.password)

      if (!passwordMatch) {
         return { error: "Incorrect password!" }
      }
   }

   let hashedPassword

   if (values.newPassword) {
      hashedPassword = await hash(
         values.newPassword,
         10
      )
   }

   values.password = hashedPassword
   values.newPassword = undefined


   try {
      await prisma.user.update({
         where: { id: dbUser.id },
         data: {
            ...values,
         }
      })

      revalidatePath('/dashboard/settings')

   } catch (error) {

   }
   return { success: "Successfully Updated!" }
}



