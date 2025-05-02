import { auth } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

async function User() {
   const session = await auth()
   const user = session?.user


   return (
      <Link href="/dashboard/settings"
         className="flex items-center gap-1 sm:[&_span]:hover:text-whiteText">
         <Avatar className="hidden md:block">
            <AvatarImage src={user?.image || "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"} />
            <AvatarFallback>{user?.name}</AvatarFallback>
         </Avatar>
         <span className='p-1 sm:p-2 text-whiteText/50 transition-all'>
            {user?.name || "Name"}
         </span>
      </Link>
   )
}

export default User