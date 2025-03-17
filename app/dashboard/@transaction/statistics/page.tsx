import { pause } from '@/helpers'
import StatisticsWrapper from '@/components/dashboard/statistics/StatisticsWrapper'



type StatisticPageType = {
   searchParams: Promise<{ year?: string, month?: string }>
}


async function StatisticPage({ searchParams }: StatisticPageType) {
   await pause(900)
   const { year, month } = await searchParams
   const filter = { year, month }


   return (
      <>
         <h2 className="text-[30px] mb-4">Statistics</h2>
         <StatisticsWrapper filter={filter} />
      </>
   )
}

export default StatisticPage