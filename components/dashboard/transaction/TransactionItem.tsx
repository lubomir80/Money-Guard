"use client"
import { Transaction } from "@/types/index"
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { TableCell, TableRow } from "@/components/ui/table"
import EditTransaction from "./EditTransaction";



type TransactionProps = Transaction & {
   onDelete: (transactionId: string) => Promise<void>
}


function TransactionItem(
   {
      id,
      transactionDate,
      type,
      category,
      comment,
      amount,
      createdAt,
      onDelete
   }: TransactionProps) {

   const [isPending, startTransition] = useTransition()

   const handleDeleteClick = async () => {
      if (confirm("Are you sure?"))
         startTransition(() => onDelete(id))
   }





   return (
      <TableRow className="[&_td]:px-3 [&_td]:py-5">
         <TableCell >
            {transactionDate?.toLocaleDateString() || "N/A"}
         </TableCell>
         <TableCell className="text-center">
            {type ? "-" : "+"}
         </TableCell>
         <TableCell>
            {category || "No category"}
         </TableCell>
         <TableCell className="w-[200px]">
            {comment || "No comment"}
         </TableCell>
         <TableCell
            className={!type ? "text-[#FFB627]" : "text-mango"}>
            {amount ? Number(amount).toFixed(2) : "0.00"}
         </TableCell>

         <TableCell>
            <div className="flex items-center gap-2 sm:gap-4">
               <EditTransaction transaction={{
                  id,
                  type,
                  category,
                  comment,
                  amount,
                  transactionDate,
                  createdAt
               }} />
               <Button
                  disabled={isPending}
                  onClick={handleDeleteClick}
                  variant="orange"
                  size="sm">
                  Delete
               </Button>
            </div>
         </TableCell>

      </TableRow >
   )
}

export default TransactionItem