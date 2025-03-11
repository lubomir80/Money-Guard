"use server"

import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma";
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
      return { success: "Successfully deleted!" }
   } catch (error) {
      return { error: "Error deleting transaction!" }
   }
}
