"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function AddButton() {
   return (
      <Button
         className='absolute top-10 right-4'
         asChild variant="orange" size="round">
         <Link href="/dashboard?modal=addTransaction">
            +
         </Link>
      </Button>
   )
}

export default AddButton