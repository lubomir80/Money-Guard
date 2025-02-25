
import { IoExitOutline } from "react-icons/io5";
import { Button } from "./ui/button";

function LogoutButton() {
   return (
      <Button variant="exit" className="p-2">
         <IoExitOutline size={20} />
         <span>Exit</span>
      </Button>
   )
}

export default LogoutButton