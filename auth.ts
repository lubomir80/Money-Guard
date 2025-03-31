import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from "./prisma/prisma";
import { getUserById } from "./data/user";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";



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

         const existingUser = await getUserById(user.id);
         if (!existingUser || !existingUser?.emailVerified) return false


         return true
      },
      async session({ session, token }: { session: Session; token: JWT }) {
         return {
            ...session,
            user: {
               ...session.user,
               id: token.sub as string,
               name: token.name,
               email: token.email,
               isOauth: token.isOauth,
               image: token.image as string | null | undefined
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