"use client"
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
   TableCaption,
} from "@/components/ui/table"
import TransactionItem from "./TransactionItem";
import { TransactionsProps } from "@/types/index"


function TransactionTable({ transactions }: TransactionsProps) {

   const isTransactionValid = !transactions?.length ?
      (<TableCaption className="text-whiteText/90">
         No items. You can add new.
      </TableCaption>) :
      (<TableBody>
         {transactions?.map(item => <TransactionItem key={item.id} {...item} />)}
      </TableBody>)


   return (
      <Table>
         <TableHeader className="[&_th]:px-3 [&_th]:py-5 [&_th]:bg-whiteText/20 [&_th]:text-white">
            <TableRow >
               <TableHead className="first:rounded-l-md ">Date</TableHead>
               <TableHead className="text-center">Type</TableHead>
               <TableHead >Category</TableHead>
               <TableHead className=" w-[200px]">Comment</TableHead>
               <TableHead >Sum</TableHead>
               <TableHead className="w-[120px] last:rounded-r-md" >
                  {/*TODO Add button */}
               </TableHead>
            </TableRow>
         </TableHeader>
         {isTransactionValid}
      </Table>
   )
}


export default TransactionTable