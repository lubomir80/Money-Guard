import { auth } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"


async function User() {
   const session = await auth()
   const user = session?.user


   return (
      <Link href="/dashboard/settings"
         className="group flex items-center gap-2 sm:[&_span]:hover:text-whiteText">
         <Avatar className="hidden md:block border-2 border-whiteText/50
         group-hover:border-whiteText group-hover:scale-105 transition-all">
            <AvatarImage
               src={user?.image || "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"} />
            <AvatarFallback >
               {user?.name}
            </AvatarFallback>
         </Avatar>
         <span className='md:pr-2 sm:text-whiteText/50 transition-all max-w-[160px] sm:max-w-fit'>
            {user?.name || "Name"}
         </span>
      </Link>
   )
}

export default User