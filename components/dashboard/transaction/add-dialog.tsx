import { Dispatch, SetStateAction } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
} from "@/components/ui/dialog"

import { DialogTitle } from "@radix-ui/react-dialog";
import CardWrapper from "@/components/card/CardWrapper";
import AddTransactionForm from "./add-transaction-form";

type AddDialogProps = {
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
}


function AddDialog({ open, setOpen }: AddDialogProps) {

   const handlerCloseDialog = () => setOpen(false)

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogContent>
            <DialogHeader className="hidden">
               <DialogTitle>Add dialog</DialogTitle>
               <DialogDescription></DialogDescription>
            </DialogHeader>
            <CardWrapper headerLabel="Add Transaction">
               <AddTransactionForm onSave={handlerCloseDialog} />
            </CardWrapper>
         </DialogContent>
      </Dialog>
   )
}

export default AddDialog