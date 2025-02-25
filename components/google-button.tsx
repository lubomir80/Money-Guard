"use client"

import { googleAuthenticate } from "@/actions/google-login"
import { useActionState } from "react"

import { BsGoogle } from "react-icons/bs"
import { Button } from "./ui/button"


function GoogleButton() {
   const [errorMsgGoogle, dispatchGoogle] = useActionState(googleAuthenticate, undefined)

   return (
      <form className="flex mt-4" action={dispatchGoogle}>
         <Button className="bg-[#3d225a] text-md flex flex-row items-center gap-2 w-full hover:bg-[#33194e] rounded-[15px]">
            <BsGoogle />
            Google
         </Button>
         <p>{errorMsgGoogle}</p>
      </form>
   )
}

export default GoogleButton