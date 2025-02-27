import { auth } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

async function User() {
   const session = await auth()
   const user = session?.user


   return (
      <div className="flex items-center">
         <Avatar>
            <AvatarImage src={user?.image || "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"} />
            <AvatarFallback>{user?.name}</AvatarFallback>
         </Avatar>
         <span className='p-2'>{user?.name || "Name"}</span>
      </div>
   )
}

export default User