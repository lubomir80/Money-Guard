"use client"

import Link from "next/link"
import { Button } from "./ui/button"

type ModalProps = {
   children: React.ReactNode,
   backLink: string
}


function Modal({ children, backLink }: ModalProps) {
   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

         <div className='relative'>
            <Button
               asChild variant="exit"
               className="absolute top-6 right-6 text-white/60 hover:text-white">
               <Link href={backLink}>
                  ✖
               </Link>
            </Button>
            {children}
         </div>
      </div>
   )
}

export default Modal