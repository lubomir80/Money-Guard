import { prisma } from "@/prisma/prisma"


export const getTransactionByUserId = async (userId: string | undefined) => {
   try {
      const transactions = prisma.transaction.findMany({
         where: { userId },
         orderBy: { createdAt: "desc" }
      })
      return transactions
   } catch {
      return null
   }
}


