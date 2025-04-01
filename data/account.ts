import { prisma } from "@/prisma/prisma"


export const getAccountByUserId = async (userId: string) => {

   try {
      const user = prisma.account.findMany({
         where: {
            userId
         }
      })
      return user

   } catch {
      return null
   }
}
