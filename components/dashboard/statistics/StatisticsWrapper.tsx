import { unstable_noStore as noStore } from 'next/cache';
import StatisticsFilter from "./StatisticsFilter";
import StatisticsTable from "./StatisticsTable";
import StatisticsChart from './StatisticsChart';
import { auth } from '@/auth';
import { Transaction } from '@/types';
import { getTransactionByUserId } from '@/data/transaction';
import { filterTransactionsCategory, FinalResult } from '@/helpers/category';
import { getUniqueYears } from '@/helpers';


type StatisticsWrapperType = {
   filter: { year?: string, month?: string }
}

async function StatisticsWrapper({ filter }: StatisticsWrapperType) {
   noStore();

   const year = Number(filter.year) || "all"
   const month = Number(filter.month) || "all"

   const session = await auth()
   const transactions: Transaction[] = await getTransactionByUserId(session?.user?.id) as Transaction[]
   const uniquesYear = getUniqueYears(transactions)

   // TRANSACTIONS FILTER
   const displayTransactions: Transaction[] = filterTransactionsCategory(transactions, year, month)
   const categoriesDate = FinalResult(displayTransactions)


   return (
      <div className='grid grid-cols-[4fr_5fr] gap-8 h-full overflow-auto'>
         <div className="h-[210px]">
            <StatisticsChart categoriesDate={categoriesDate} />
         </div>
         <div className='flex flex-col'>
            <StatisticsFilter uniquesYear={uniquesYear} />
            <StatisticsTable categoriesDate={categoriesDate} />
         </div>
      </div>
   )
}

export default StatisticsWrapper