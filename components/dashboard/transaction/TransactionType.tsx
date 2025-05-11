

function TransactionType({ type }: { type: boolean }) {
   const incomeStyle = !type ? "text-[#FFB627]" : ""
   const expenseStyle = type ? "text-mango" : ""

   return (
      <p className=' text-center flex items-center justify-center gap-3'>
         <span className={incomeStyle}>Income</span>
         <span>/</span>
         <span className={expenseStyle}>Expanse</span>
      </p>
   )
}

export default TransactionType