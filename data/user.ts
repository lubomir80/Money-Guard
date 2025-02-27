import { prisma } from "@/prisma/prisma"


export const getUserByEmail = async (email: string | undefined) => {
   try {
      const user = prisma.user.findUnique({ where: { email } })
      return user

   } catch {
      return null
   }
}

export const getUserById = async (id: string | undefined) => {
   try {
      const user = await prisma.user.findUnique({ where: { id } })
      return user
   } catch {
      return null
   }
}