"use client"
import Link from "next/link";
import { Transaction } from "@/types/index"
import { MdEdit } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import {
   TableCell,
   TableRow,
} from "@/components/ui/table"


type TransactionProps = Transaction & {
   onDelete: (transactionId: string) => Promise<void>
}



function TransactionItem({ id, transactionDate, type, category, comment, amount, onDelete }: TransactionProps) {

   const [isPending, startTransition] = useTransition()

   const handleDeleteClick = async () => {
      if (confirm("Are you sure?"))
         startTransition(() => onDelete(id))
   }


   return (
      <TableRow className="[&_td]:px-3 [&_td]:py-5">
         <TableCell >
            {transactionDate.toLocaleDateString()}
         </TableCell>
         <TableCell className="text-center">
            {!type ? "+" : "-"}
         </TableCell>
         <TableCell>
            {category}
         </TableCell>
         <TableCell className="w-[200px]">
            {comment}
         </TableCell>
         <TableCell
            className={!type ? "text-[#FFB627]" : "text-mango"}>
            {Number(amount).toFixed(2)}
         </TableCell>

         <TableCell>
            <div className="flex items-center gap-4">
               <Button
                  disabled={isPending}
                  asChild
                  variant="exit">
                  <Link href={`/dashboard?editModal=${id}`}>
                     <MdEdit className="w-4 h-4" />
                  </Link>
               </Button>
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