"use client"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import AddDialog from './add-dialog'



function AddTransaction() {
   const [open, setOpen] = useState(false)

   return (
      <>
         <Button
            onClick={() => setOpen(true)}
            className='absolute bottom-4 right-7 md:top-10 md:right-4'
            variant="orange" size="round">
            +
         </Button>
         <AddDialog open={open} setOpen={setOpen} />
      </>
   )
}

export default AddTransaction