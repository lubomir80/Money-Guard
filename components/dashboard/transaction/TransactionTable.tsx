"use client"
import {
   Table,
   TableBody,
   TableCaption,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"
import TransactionItem from "./TransactionItem";
import { TransactionsProps } from "@/types/index"
import { useOptimistic } from 'react';
import { deleteTransaction } from "@/actions/transaction";
import { toast } from "react-toastify";
import TransactionMobileItem from "./TransactionMobileItem";
import CallToAdd from "./call-to-add";

function TransactionTable({ transactions }: TransactionsProps) {

   const [optimisticBookings, optimisticDelete] = useOptimistic(transactions, (currTransactions, transactionId) => {
      if (!currTransactions) return null
      return currTransactions.filter(transaction => transaction.id !== transactionId)
   });

   async function handleDelete(transactionId: string) {
      optimisticDelete(transactionId)
      await deleteTransaction(transactionId).then((res) => {
         if (res.error) {
            toast.error(res.error, {
               className: "toast-message",
            })
         }
         if (res.success) {
            toast.success(res.success, {
               className: "toast-message",
            })
         }
      });
   }



   return (
      <>
         <Table className="hidden sm:table ">
            <TableHeader className="md:table-header-group 
         [&_th]:px-3 [&_th]:py-5 [&_th]:bg-whiteText/20 [&_th]:text-white">
               <TableRow  >
                  <TableHead className="first:rounded-l-md ">Date</TableHead>
                  <TableHead className="text-center">Type</TableHead>
                  <TableHead >Category</TableHead>
                  <TableHead className="md:w-[200px]">Comment</TableHead>
                  <TableHead >Sum</TableHead>
                  <TableHead className="w-[120px] last:rounded-r-md" >
                  </TableHead>
               </TableRow>
            </TableHeader>
            {!transactions?.length ?
               <TableCaption>
                  <CallToAdd />
               </TableCaption> :
               (
                  <TableBody>
                     {optimisticBookings?.map(item =>
                        <TransactionItem
                           onDelete={handleDelete}
                           key={item.id}
                           {...item} />)}
                  </TableBody>)}
         </Table>
         <div className="sm:hidden text-whiteText/90">
            {!transactions?.length ?
               <CallToAdd />
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
      </>
   )
}


export default TransactionTable