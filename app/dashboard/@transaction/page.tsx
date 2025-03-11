import { pause } from "@/helpers"
import { auth } from "@/auth"
import { getTransactionByUserId } from "@/data/transaction"
import { Transaction } from "@/types"
import TransactionTable from "@/components/dashboard/transaction/TransactionTable"



export default async function Team() {
   // await pause(1000)
   // throw new Error('Data not available')

   const session = await auth()
   console.log(session?.user?.id);

   const transactions: Transaction[] = await getTransactionByUserId(session?.user?.id) as Transaction[]


   return (
      <>
         <h2 className="text-[30px] mb-4">Transactions table</h2>
         <TransactionTable transactions={transactions} />
      </>
   )
}