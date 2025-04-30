"use client"

import { useState } from "react"
import DeleteDialog from "./delete-dialog"
import { Button } from "@/components/ui/button"

function DeleteTransaction({ onDelete, isPending }: { onDelete: () => void, isPending?: boolean }) {
   const [open, setOpen] = useState(false)

   return (
      <>
         <Button
            onClick={() => setOpen(true)}
            variant="orange"
            size="sm"
            disabled={isPending}>
            Delete
         </Button>
         <DeleteDialog
            open={open}
            setOpen={setOpen}
            onDelete={onDelete}
         />
      </>
   )
}

export default DeleteTransaction