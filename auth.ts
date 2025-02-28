import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from "./prisma/prisma";
import { getUserById } from "./data/user";



export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
   pages: {
      signIn: "/auth/login",
      error: "/auth/error"
   },
   events: {
      async linkAccount({ user }) {
         await prisma.user.update({
            where: { id: user.id },
            data: { emailVerified: new Date() }
         })
      }
   },
   callbacks: {
      async signIn({ user, account }) {
         if (account?.provider !== "credentials") return true

         // const existingUser = await getUserById(user.id);
         // if (!existingUser || !existingUser?.emailVerified) return false

         return true
      },
      async session({ session, token }) {
         return {
            ...session,
            user: {
               ...session.user,
               id: token.sub,
               name: token.name,
               isOauth: token.isOauth,
            }
         }
      },
      async jwt({ token }) {
         if (!token.sub) return token
         const existingUser = await getUserById(token.sub)
         if (!existingUser) return token

         token.isOauth = !!existingUser;
         token.name = existingUser.name;
         token.email = existingUser.email;
         token.image = existingUser.image;

         return token
      }
   },
   adapter: PrismaAdapter(prisma),
   session: { strategy: "jwt" },
   ...authConfig
})