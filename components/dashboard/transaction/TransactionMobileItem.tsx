"use client"
import { Transaction } from "@/types"
import { useTransition } from "react"
import EditTransaction from "./EditTransaction"
import DeleteTransaction from "./DeleteTransaction"


type TransactionMobileProps = Transaction & {
   onDelete: (transactionId: string) => Promise<void>
}



function TransactionMobileItem({
   id,
   transactionDate,
   type,
   category,
   comment,
   amount,
   createdAt,
   onDelete
}: TransactionMobileProps) {

   const [isPending, startTransition] = useTransition()

   const transaction = {
      id,
      type,
      category,
      comment,
      amount,
      transactionDate,
      createdAt
   }

   const handleDeleteClick = async () => {
      startTransition(() => onDelete(id))
   }



   return (
      <ul className={`relative pl-2 rounded-xl overflow-hidden flex flex-col bg-white/15
      [&_li]:border-white/25 [&_span]:py-3 [&_span]:px-4
      ${type ? "expanseLine" : "incomeLine"}`}>
         <li className="flex items-center justify-between border-b">
            <span className="font-bold">Date</span>
            <span >{transactionDate?.toLocaleDateString() || "N/A"}</span>
         </li>
         <li className="flex items-center justify-between border-b">
            <span className="tracking-wider font-bold">Type</span>
            <span >{type ? "-" : "+"}</span>
         </li>
         <li className="flex items-center justify-between border-b">
            <span className="tracking-wider font-bold">Category</span>
            <span >{category || "No category"}</span>
         </li>
         <li className="flex items-center justify-between border-b">
            <span className="tracking-wider font-bold">Comment</span>
            <span >{comment || "No comment"}</span>
         </li>
         <li className="flex items-center justify-between border-b">
            <span className="tracking-wider font-bold">Sum</span>
            <span className={`${type ? "text-mango" : "text-[#FFB627]"}`}>
               {amount ? Number(amount).toFixed(2) : "0.00"}
            </span>
         </li>
         <li className="flex items-center justify-between px-4 py-3">
            <DeleteTransaction onDelete={handleDeleteClick} isPending={isPending} />
            <EditTransaction transaction={transaction} />
         </li>
      </ul>
   )
}

export default TransactionMobileItem