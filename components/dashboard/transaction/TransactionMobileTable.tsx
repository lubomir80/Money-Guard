"use client"
import { deleteTransaction } from "@/actions/transaction";
import { TransactionsProps } from "@/types"
import { useOptimistic } from "react";
import { toast } from "react-toastify";
import TransactionMobileItem from "./TransactionMobileItem";


function TransactionMobileTable({ transactions }: TransactionsProps) {
   const [optimisticBookings, optimisticDelete] = useOptimistic(transactions, (currTransactions, transactionId) => {
      if (!currTransactions) return null
      return currTransactions.filter(transaction => transaction.id !== transactionId)
   });

   async function handleDelete(transactionId: string) {
      optimisticDelete(transactionId)
      await deleteTransaction(transactionId).then((res) => {
         if (res.error) {
            toast.error(res.error, {
               position: "top-right",
               className: "toast-message",
            })
         }
         if (res.success) {
            toast.success(res.success, {
               position: "top-right",
               className: "toast-message",
            })
         }
      });
   }




   return (
      <div className="md:hidden text-whiteText/90">
         {!transactions?.length ?
            <p className="text-[16px] p-5 text-center w-[240px] mx-auto">
               No items. You can add new. 🧐
            </p>
            :
            <div className="w-full flex flex-col gap-4">
               {optimisticBookings?.map(item =>
                  <TransactionMobileItem
                     onDelete={handleDelete}
                     key={item.id}
                     {...item} />)}
            </div>
         }
      </div>
   )
}

export default TransactionMobileTable