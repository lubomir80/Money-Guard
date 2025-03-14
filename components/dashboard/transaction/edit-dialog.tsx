import { Dispatch, SetStateAction } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
} from "@/components/ui/dialog"
import EditTransactionForm from "./edit-transaction-form"
import CardWrapper from "@/components/card/CardWrapper"
import { DialogTitle } from "@radix-ui/react-dialog";
import { EditTransactionType } from "@/types";

type EditDialogProps = {
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
   transaction: EditTransactionType
}


function EditDialog({ open, setOpen, transaction }: EditDialogProps) {

   const handlerCloseDialog = () => setOpen(false)

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogContent>
            <DialogHeader className="hidden">
               <DialogTitle>Edit dialog</DialogTitle>
               <DialogDescription></DialogDescription>
            </DialogHeader>
            <CardWrapper headerLabel="Edit Transaction">
               <EditTransactionForm
                  onSave={handlerCloseDialog}
                  transaction={transaction} />
            </CardWrapper>
         </DialogContent>
      </Dialog>
   )
}

export default EditDialog