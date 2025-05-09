"use client"

import { Button } from "@/components/ui/button";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

type HidePassword = {
   hide: boolean,
   setHide: React.Dispatch<React.SetStateAction<boolean>>,
   className?: string,
   tabIndex?: number
}

function HidePassword({ hide, setHide, className, tabIndex }: HidePassword) {

   return (
      <>
         <Button
            tabIndex={tabIndex}
            onClick={() => setHide(!hide)}
            variant="exit"
            type="button"
            className={`no-focus absolute right-0 top-[30px] [&_svg]:text-whiteText/30 ${className}`}>
            {hide ?
               <IoEyeSharp /> :
               <IoEyeOffSharp />}
         </Button>
      </>
   )
}

export default HidePassword