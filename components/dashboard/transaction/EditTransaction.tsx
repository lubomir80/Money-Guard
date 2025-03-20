"use client"
import { EditTransactionProps } from '@/types'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MdEdit } from 'react-icons/md'
import EditDialog from './edit-dialog'




function EditTransaction({ transaction }: EditTransactionProps) {
   const [open, setOpen] = useState(false)

   return (
      <>
         <Button
            onClick={() => setOpen(true)}
            variant="exit">
            <MdEdit />
            <p className='text-[16px] md:hidden'>Edit</p>
         </Button>
         <EditDialog
            open={open}
            setOpen={setOpen}
            transaction={transaction}
         />
      </>
   )
}

export default EditTransaction