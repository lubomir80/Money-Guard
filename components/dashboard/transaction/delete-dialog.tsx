import { Dispatch, SetStateAction } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
} from "@/components/ui/dialog"
import CardWrapper from "@/components/card/CardWrapper"
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";


type DeleteDialogProps = {
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
   onDelete: () => void
}


function DeleteDialog({ open, setOpen, onDelete }: DeleteDialogProps) {

   const handlerCloseDialog = () => setOpen(false)

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogContent>
            <DialogHeader className="hidden">
               <DialogTitle>Delete dialog</DialogTitle>
               <DialogDescription></DialogDescription>
            </DialogHeader>
            <CardWrapper
               isDialog
               headerLabel="Delete Transaction">
               <div className="space-y-8 ">
                  <h3 className="mx-auto w-[250px] md:w-full text-center">
                     🚩 Are you sure you want to delete this transaction?
                  </h3>
                  <div className="flex flex-col gap-4 w-[300px] mx-auto">
                     <Button
                        onClick={onDelete} variant="orange" size="lg" type="submit" className="w-full">
                        Delete
                     </Button>
                     <Button onClick={handlerCloseDialog} size="lg" variant="white">
                        Cancel
                     </Button>
                  </div>
               </div>
            </CardWrapper>
         </DialogContent>
      </Dialog>
   )
}

export default DeleteDialog