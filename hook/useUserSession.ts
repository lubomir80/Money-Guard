import { useSession } from "next-auth/react"


export default function useUserSession() {
   const { data: session } = useSession()
   const user = session?.user

   return user
}