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
      <div className='h-full overflow-auto sm:grid sm:grid-cols-[4fr_5fr] sm:gap-8 '>
         <div className="mb-8 md:mb-0 h-[210px] flex items-center justify-center">
            <StatisticsChart categoriesDate={categoriesDate} />
         </div>
         <div className='flex flex-col p-2'>
            <StatisticsFilter uniquesYear={uniquesYear} />
            <StatisticsTable categoriesDate={categoriesDate} />
         </div>
      </div>
   )
}

export default StatisticsWrapper