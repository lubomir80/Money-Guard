"use client"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import AddDialog from './add-dialog'



function AddTransaction({ className }: { className?: string }) {
   const [open, setOpen] = useState(false)

   return (
      <>
         <Button
            onClick={() => setOpen(true)}
            className={className}
            variant="orange" size="round">
            +
         </Button>
         <AddDialog open={open} setOpen={setOpen} />
      </>
   )
}

export default AddTransaction