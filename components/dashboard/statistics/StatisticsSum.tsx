import { formatAmount } from "@/helpers"


type StatisticsSumProps = {
   expenses: number
   income: number
}


function StatisticsSum({ expenses, income }: StatisticsSumProps) {
   const checkExpanse = expenses === 0 || undefined ? "0.00" : formatAmount(expenses)
   const checkIncome = income === 0 || undefined ? "0.00" : formatAmount(income)


   return (
      <div className="border-t border-whiteText rounded-md bg-whiteText/20">
         <div className="flex items-center justify-between px-4 py-3">
            <span>Expenses:</span>
            <span className="text-mango">{checkExpanse}</span>
         </div>
         <div className="flex items-center justify-between px-4 py-3">
            <span>Income:</span>
            <span className="text-[#FFB627]">{checkIncome}</span>
         </div>
      </div >
   )
}

export default StatisticsSum