"use client"
import Link from "next/link";
import { Transaction as TransactionProps } from "@/types/index"
import { MdEdit } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
   TableCell,
   TableRow,
} from "@/components/ui/table"



function TransactionItem({ id, createdAt, updatedAt, type, category, comment, amount }: TransactionProps) {
   return (
      <TableRow className="[&_td]:px-3 [&_td]:py-5">
         <TableCell >{createdAt.toLocaleDateString()}</TableCell>
         <TableCell className="text-center">{type === "INCOME" ? "+" : "-"}</TableCell>
         <TableCell>{category}</TableCell>
         <TableCell className="w-[200px]">{comment}</TableCell>
         <TableCell className={
            type === "INCOME" ? "text-[#FFB627]" : "text-mango"}>
            {Number(amount).toFixed(2)}
         </TableCell>
         <TableCell >
            <div className="flex items-center gap-4">
               <Link href={`/dashboard/products`}>
                  <MdEdit className="w-4 h-4" />
               </Link>
               <Button
                  variant="orange"
                  size="sm">
                  Delete
               </Button>
            </div>
         </TableCell>
      </TableRow>
   )
}

export default TransactionItem