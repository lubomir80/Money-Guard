import TransactionTable from "@/components/dashboard/transaction/TransactionTable"
import AddTransaction from "@/components/dashboard/transaction/AddTransaction"
import { Transaction } from "@/types"
import { getTransactionByUserId } from "@/data/transaction"
import { auth } from "@/auth"




export default async function TransactionPage() {
   // await pause(1000)
   // throw new Error('Data not available')
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