'use client' // Error components must be Client Components
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'

export default function Error({
   error,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {


   useEffect(() => {
      console.error(error)
   }, [error])

   return (
      <section className="flex flex-col items-center justify-center gap-8 rounded-xl py-8  ">
         <h2 className="text-[32px] ">Transactions Error!</h2>

         <div className="flex flex-col gap-2 items-center p-2 text-destructive bg-[#3d225a] max-w-fit rounded-md p-5 tracking-wider text-[0.8rem]">
            <BsExclamationCircleFill className="w-[24px] h-[24px] blob" />
            <p>{error?.message}</p>
         </div>

         <div className="flex flex-col gap-4 w-[300px] mx-auto">
            <Button asChild variant="link"
               className='text-whiteText text-sm tracking-wider'>
               <Link href="/">
                  Back to Home
               </Link>
            </Button>
         </div>

      </section>
   )
}