import { unstable_noStore as noStore } from 'next/cache';
import StatisticsFilter from "./StatisticsFilter";
import StatisticsTable from "./StatisticsTable";
import { FinalResult } from '@/helpers/category';
import StatisticsChart from './StatisticsChart';
import { auth } from '@/auth';
import { Transaction } from '@/types';
import { getTransactionByUserId } from '@/data/transaction';


type StatisticsWrapperType = {
   filter: { year?: string, month?: string }
}

async function StatisticsWrapper({ filter }: StatisticsWrapperType) {
   noStore();

   const session = await auth()
   const transactions: Transaction[] = await getTransactionByUserId(session?.user?.id) as Transaction[]

   console.log(filter);

   // const year = filter.year || "all"
   // const month = filter.month || "all"


   // let displayTransactions = [];

   // TRANSACTIONS FILTER

   const categoriesDate = FinalResult(transactions)



   return (
      <div className='flex gap-8'>
         <div className="flex-1 h-[210px]">
            <StatisticsChart categoriesDate={categoriesDate} />
         </div>
         <div className='flex-1'>
            <StatisticsFilter />
            <StatisticsTable categoriesDate={categoriesDate} />
         </div>
      </div>
   )
}

export default StatisticsWrapper