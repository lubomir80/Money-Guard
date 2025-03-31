"use client"

import { Button } from "@/components/ui/button";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

type HidePassword = {
   hide: boolean,
   setHide: React.Dispatch<React.SetStateAction<boolean>>
}

function HidePassword({ hide, setHide }: HidePassword) {

   return (
      <>
         <Button
            onClick={() => setHide(!hide)}
            variant="exit"
            type="button"
            className="absolute right-0 top-[30px]">
            {hide ?
               <IoEyeSharp /> :
               <IoEyeOffSharp className="text-whiteText/30" />}
         </Button>
      </>
   )
}

export default HidePassword