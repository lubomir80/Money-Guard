"use server"

import * as z from "zod"
import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma";
import { AddTransactionSchema, EditTransactionSchema } from "@/schemas";
import { revalidatePath } from 'next/cache';



export const deleteTransaction = async (transactionId: string) => {
   const session = await auth()

   if (!session?.user) {
      return { error: "User not logged!" }
   }

   try {
      const transaction = await prisma.transaction.delete({
         where: { id: transactionId }
      })

      revalidatePath('/dashboard')
      return { success: "Successfully deleted transaction!" }
   } catch (error) {
      return { error: "Error deleting transaction!" }
   }
}


export const addTransaction = async (value: z.infer<typeof AddTransactionSchema>) => {
   const session = await auth()
   const validatedFields = AddTransactionSchema.safeParse(value)

   if (!validatedFields.success) {
      return { error: "Invalid data" }
   }


   const userId = session?.user?.id || ""

   const {
      type,
      category,
      comment,
      amount,
      transactionDate
   } = validatedFields.data


   try {
      await prisma.transaction.create({
         data: {
            userId,
            type,
            category,
            comment,
            amount,
            transactionDate: new Date(transactionDate),
         }
      })


      revalidatePath('/dashboard')
      return { success: "Successfully added!" }
   } catch (error) {
      return { error: "Error adding transaction!" }
   }
}


export const editTransaction = async (value: z.infer<typeof EditTransactionSchema>, id: string) => {
   const session = await auth()
   const validatedFields = EditTransactionSchema.safeParse(value)

   if (!validatedFields.success) {
      return { error: "Invalid data" }
   }


   const userId = session?.user?.id || ""

   const {
      type,
      category,
      comment,
      amount,
      transactionDate,
      createdAt
   } = validatedFields.data


   try {
      await prisma.transaction.update({
         where: { id },
         data: {
            userId,
            type,
            category,
            comment,
            amount,
            transactionDate: new Date(transactionDate),
            createdAt,
            updatedAt: new Date()
         }
      })


      revalidatePath('/dashboard')
      return { success: "Successfully updated!" }
   } catch (error) {
      return { error: "Error updating transaction!" }
   }
}