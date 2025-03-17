import { formatAmount } from "@/helpers"


type StatisticsSumProps = {
   expenses: number
   income: number
}


function StatisticsSum({ expenses, income }: StatisticsSumProps) {
   const checkExpanse = expenses === 0 ? "0.00" : formatAmount(expenses)
   const checkIncome = expenses === 0 ? "0.00" : formatAmount(income)


   return (
      <div>
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