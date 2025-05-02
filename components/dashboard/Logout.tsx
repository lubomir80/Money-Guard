"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { IoExitOutline } from "react-icons/io5"
import LogoutDialog from "./logout-dialog"

function Logout() {
   const [open, setOpen] = useState(false)

   return (
      <>
         <Button
            onClick={() => setOpen(true)}
            variant="exit"
            className="p-1 sm:p-2 bg-transparent hover:text-whiteText [&_*]:hover:text-whiteText">
            <IoExitOutline className="text-whiteText/50" size={20} />
            <span className="hidden sm:block text-whiteText/50">Exit</span>
         </Button>
         <LogoutDialog open={open} setOpen={setOpen} />
      </>
   )
}

export default Logout