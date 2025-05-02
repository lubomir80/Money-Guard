"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserProps } from "@/types"


function UserAvatar({ user }: UserProps) {

   return (
      <div className='py-5 flex flex-1 flex-col items-center gap-5 '>
         <Avatar className="mx-auto w-36 h-36 shadow-md">
            <AvatarImage
               className="object-cover"
               src={user?.image ||
                  "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"} />
            <AvatarFallback>
               {user?.name || "User"}
            </AvatarFallback>
         </Avatar>
         <span className='inline-block capitalize max-w-[250px] text-center text-2xl px-5 py-3 rounded-xl bg-[#2e225f94] font-bold tracking-wider shadow-md'>
            {user?.name || "User"}
         </span>
      </div>
   )
}

export default UserAvatar