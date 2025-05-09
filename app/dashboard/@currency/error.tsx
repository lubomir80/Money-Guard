'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { RiRefreshLine } from 'react-icons/ri'

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {
   useEffect(() => {
      console.error(error)
   }, [error])

   return (

      <section className="px-10 py-10 bg-[#2E225F] shadow-md text-center  space-y-2">
         <h2 className="text-xl">
            Currency Error!
         </h2>
         <div className='flex justify-center text-yellow'>
            <BsExclamationCircleFill
               className='blob'
               size={20}
            />
         </div>
         <p>{error?.message}</p>
         <Button
            onClick={reset}
            variant="link"
            className='text-whiteText hover:rotate-90 transition-all'>
            <RiRefreshLine />
         </Button>
      </section>
   )
}