import { calculateTotalExpanse, calculateTotalIncome } from "@/helpers/category"
import { Transaction } from "@/types"
import { auth } from "@/auth"
import { getTransactionByUserId } from "@/data/transaction"
import Balance from "@/components/dashboard/balance/Balance"


async function BalancePage() {

   const session = await auth()
   const transactions: Transaction[] = await getTransactionByUserId(session?.user?.id) as Transaction[]

   const totalExpanse = calculateTotalExpanse(transactions)
   const totalIncome = calculateTotalIncome(transactions)
   const totalAmount = totalIncome - totalExpanse


   return (
      <Balance totalAmount={totalAmount} />
   )
}

export default BalancePage