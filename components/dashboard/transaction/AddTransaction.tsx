"use client"
import { useSearchParams } from 'next/navigation'
import AddTransactionForm from './add-transaction-form'
import AddButton from './AddButton'



function AddTransaction() {
   const searchParams = useSearchParams()
   const isModalOpen = searchParams.get("modal") === "addTransaction"


   return (
      <>
         <AddButton />
         {isModalOpen ?
            <AddTransactionForm backLink='/dashboard' /> : null}
      </>
   )
}

export default AddTransaction