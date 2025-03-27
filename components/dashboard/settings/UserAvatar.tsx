"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserProps } from "@/types"


function UserAvatar({ user }: UserProps) {

   return (
      <div className='py-5 flex flex-1 flex-col items-center gap-5 '>
         <Avatar className="mx-auto w-36 h-36 shadow-md">
            <AvatarImage
               src={user?.image ||
                  "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"} />
            <AvatarFallback>
               {user?.name}
            </AvatarFallback>
         </Avatar>
         <span className='inline-block capitalize text-2xl px-5 py-3 rounded-xl bg-[#2e225f94] font-bold tracking-wider shadow-md'>
            {user?.name}
         </span>
      </div>
   )
}

export default UserAvatar