"use server"

import { prisma } from "@/prisma/prisma";
import { TUserPasswordSchema } from "@/schemas";
import { revalidatePath } from 'next/cache';
import { getUserById } from "@/data/user";
import { auth } from "@/auth";
import { compare, hash } from "bcryptjs";




export const updateUserName = async (name: string) => {
   const session = await auth()
   const user = session?.user


   if (!user) {
      return { error: "User not logged!" }
   }

   const dbUser = await getUserById(user.id)

   if (!dbUser) {
      return { error: "Unauthorized" }
   }

   try {
      await prisma.user.update({
         where: { id: dbUser.id },
         data: { name }
      })

      revalidatePath('/dashboard/settings')

   } catch (error) {
      return { error: "Something went wrong!" }
   }
   return { success: "Username updated successfully!" }
}



export const updateUserPassword = async (values: TUserPasswordSchema) => {
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
         return { error: "Put incorrect password!" }
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
      return { error: "Something went wrong!" }
   }
   return { success: "Your password updated!" }
}


export const updateUserAvatar = async (image?: string) => {
   const session = await auth()
   const user = session?.user

   if (!user) {
      return { error: "User not logged!" }
   }

   const dbUser = await getUserById(user.id)

   if (!dbUser) {
      return { error: "Unauthorized" }
   }

   try {
      await prisma.user.update({
         where: { id: dbUser.id },
         data: { image }
      })

      revalidatePath('/dashboard/settings')

   } catch (error) {
      return { error: "Something went wrong!" }
   }
   return { success: "Avatar updated successfully!" }
}