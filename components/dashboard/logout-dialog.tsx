import { Dispatch, SetStateAction } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
} from "@/components/ui/dialog"

import CardWrapper from "@/components/card/CardWrapper";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { logout } from "@/actions/logout";



type LogoutDialogProps = {
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
}


function LogoutDialog({ open, setOpen }: LogoutDialogProps) {

   const handlerCloseDialog = () => setOpen(false)
   const handlerLogout = () => logout()


   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogContent>
            <DialogHeader className="hidden">
               <DialogTitle>Logout dialog</DialogTitle>
               <DialogDescription></DialogDescription>
            </DialogHeader>
            <CardWrapper headerLogo>
               <div className="space-y-8">
                  <h3 className="mx-auto w-[180px] md:w-full text-center ">Are you sure you want to log out?</h3>
                  <div className="flex flex-col gap-4 w-[300px] mx-auto">
                     <Button
                        onClick={handlerLogout} variant="orange" size="lg" type="submit" className="w-full">
                        Logout
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

export default LogoutDialog