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
      <section className="flex flex-col items-center justify-center gap-5 rounded-xl py-8  ">
         <h2 className="text-[32px]">User Error!</h2>

         <div className="flex flex-col gap-8 items-center pt-10 pb-20 sm:py-20 px-5  text-[#FFC727]  w-full rounded-md tracking-wider text-[0.8rem]">
            <BsExclamationCircleFill className="w-[24px] h-[24px] blob" />
            <p className='max-w-[450px] mx-auto'>{error?.message}</p>
         </div>

         <div className="flex flex-col gap-4 w-[300px] mx-auto">
            <Button asChild variant="link"
               className='text-whiteText text-sm tracking-wider'>
               <Link href="/dashboard">
                  Back to dashboard
               </Link>
            </Button>
         </div>

      </section>
   )
}