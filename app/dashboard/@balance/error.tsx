'use client'

import { Button } from '@/components/ui/button'
import { RiRefreshLine } from "react-icons/ri";
import { useEffect } from 'react'

export default function Error({
   error, reset,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {
   useEffect(() => {
      console.error(error)
   }, [error])

   return (
      <section className="px-10 py-3 bg-[#2E225F] shadow-md text-center">
         <h2 className="text-xl text-destructive">Balance Error!</h2>
         <p>{error?.message}</p>
         <Button onClick={reset} variant="link" className='text-whiteText '>
            <RiRefreshLine className="w-8 h-8" />
         </Button>
      </section>
   )
}