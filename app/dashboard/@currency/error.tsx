'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { RiRefreshLine } from 'react-icons/ri'

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error)
   }, [error])

   return (

      <section className="px-10 py-3 bg-[#2E225F] shadow-md text-center">
         <h2 className="text-xl text-destructive">Currency Error!</h2>
         <p>{error?.message}</p>
         <Button onClick={reset} variant="link" className='text-whiteText '>
            <RiRefreshLine className="w-8 h-8" />
         </Button>
      </section>
   )
}