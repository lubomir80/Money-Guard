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
            variant="exit"
            size="round"
            className='sm:hover:scale-[1.2] sm:[&_svg]:hover:text-white/80 transition-all'>
            <MdEdit className='text-white/30' />
            <p className='text-[16px] sm:hidden'>Edit</p>
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