import { auth } from "@/auth"
import { Transaction } from "@/types"
import { getTransactionByUserId } from "@/data/transaction"
import TransactionTable from "@/components/dashboard/transaction/TransactionTable"
import AddTransaction from "@/components/dashboard/transaction/AddTransaction"





export default async function TransactionPage() {
   const session = await auth()
   const transactions: Transaction[] = await getTransactionByUserId(session?.user?.id) as Transaction[]

   return (
      <>
         <h2 className="text-[30px] mb-4">Transactions table</h2>
         <TransactionTable transactions={transactions} />
         <AddTransaction />
      </>
   )
}