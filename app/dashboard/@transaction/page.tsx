import TransactionTable from "@/components/dashboard/transaction/TransactionTable"
import { pause } from "@/helpers"
import { Transaction } from "@/types/index"




export default async function Team() {
   await pause(1000)
   // throw new Error('Data not available')

   const dummyDate: Transaction[] = [
      {
         id: "1231321789465",
         userId: "1",
         type: "INCOME",
         category: "Income",
         comment: "January bonus",
         amount: 300,
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
         id: "6231321789465",
         userId: "1",
         type: "EXPENSE",
         category: "Products",
         comment: "Vegetables for the week",
         amount: 300,
         createdAt: new Date(),
         updatedAt: new Date(),
      },
   ]

   return (
      <>
         <h2 className="text-[30px] mb-4">Transactions table</h2>
         <TransactionTable transactions={dummyDate} />
      </>
   )
}