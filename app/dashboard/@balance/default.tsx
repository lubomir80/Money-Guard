import { categorizeAmount, formatAmount, pause } from "@/helpers"
import { calculateTotalExpanse, calculateTotalIncome } from "@/helpers/category"
import { auth } from "@/auth"
import { Transaction } from "@/types"
import { getTransactionByUserId } from "@/data/transaction"


async function Currency() {
   await pause(1000)

   const session = await auth()
   const transactions: Transaction[] = await getTransactionByUserId(session?.user?.id) as Transaction[]

   const totalExpanse = calculateTotalExpanse(transactions)
   const totalIncome = calculateTotalIncome(transactions)
   const totalAmount = totalIncome - totalExpanse



   return (
      <section className="px-10 py-3 bg-[#2E225F] shadow-md">
         <p className="uppercase text-whiteText/40 text-[12px]">Your balance</p>
         <h1 className="pt-2 font-bold text-2xl tracking-wider">
            {formatAmount(totalAmount)}
            <span className="text-lg"> USD</span>
            <span className="pl-2">{categorizeAmount(totalAmount)}</span>
         </h1>
      </section>
   )
}

export default Currency