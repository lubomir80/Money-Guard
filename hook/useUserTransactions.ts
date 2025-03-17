import { auth } from "@/auth"
import { getTransactionByUserId } from "@/data/transaction"
import { Transaction } from "@/types"

export default async function useUserTransactions() {
   const session = await auth()
   const transactions: Transaction[] = await getTransactionByUserId(session?.user?.id) as Transaction[]

   return transactions
}