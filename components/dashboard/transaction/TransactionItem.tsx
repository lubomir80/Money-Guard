"use client"
import { Transaction } from "@/types/index"
import { useTransition } from "react";
import { TableCell, TableRow } from "@/components/ui/table"
import EditTransaction from "./EditTransaction";
import DeleteTransaction from "./DeleteTransaction";



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

   const handleDeleteClick = async () =>
      startTransition(() => onDelete(id))




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
               <DeleteTransaction onDelete={handleDeleteClick} isPending={isPending} />
            </div>
         </TableCell>

      </TableRow >
   )
}

export default TransactionItem