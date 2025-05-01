import { auth } from "@/auth"
import { Transaction } from "@/types"
import { getTransactionByUserId } from "@/data/transaction"
import TransactionTable from "@/components/dashboard/transaction/TransactionTable"
import AddTransaction from "@/components/dashboard/transaction/AddTransaction"




export default async function TransactionPage() {
   const session = await auth()
   const transactions: Transaction[] = await getTransactionByUserId(session?.user?.id) as Transaction[]
   const isAddTransaction = transactions?.length

   return (
      <>
         <h2 className="text-[24px] text-center md:text-start md:text-[30px] mb-5">
            Transactions
         </h2>
         <TransactionTable transactions={transactions} />

         {isAddTransaction ?
            <AddTransaction
               className="absolute bottom-4 right-7 md:top-10 md:right-4" /> : null}
      </>
   )
}