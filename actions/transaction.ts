"use server"

import { prisma } from "@/prisma/prisma";
import { revalidatePath } from 'next/cache';


export const deleteTransaction = async (transactionId: string) => {
   try {
      const transaction = await prisma.transaction.delete({
         where: { id: transactionId }
      })

      revalidatePath('/dashboard')
      return transaction
   } catch (error) {
      return { error: "Error deleting transaction!" }
   }
}
