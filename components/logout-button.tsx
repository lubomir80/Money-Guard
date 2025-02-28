import { IoExitOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { deleteCookies } from '@/actions/cookies';

function LogoutButton() {

   return (
      <form action={async () => {
         "use server"
         await deleteCookies()
      }
      }>
         <Button variant="exit" className="p-2">
            <IoExitOutline size={20} />
            <span>Exit</span>
         </Button>
      </form >
   )
}

export default LogoutButton