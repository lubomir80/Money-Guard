import { prisma } from "@/prisma/prisma"


export const getAccountByUserId = async (userId: string) => {
   try {
      const user = prisma.account.findUnique({ where: { id: userId } })
      return user

   } catch {
      return null
   }
}
