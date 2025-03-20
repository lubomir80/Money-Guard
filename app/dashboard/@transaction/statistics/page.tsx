import StatisticsWrapper from '@/components/dashboard/statistics/StatisticsWrapper'



type StatisticPageType = {
   searchParams: Promise<{ year?: string, month?: string }>
}


async function StatisticPage({ searchParams }: StatisticPageType) {
   const { year, month } = await searchParams
   const filter = { year, month }


   return (
      <>
         <h2 className="text-[24px] text-center md:text-start md:text-[30px] mb-5">Statistics</h2>
         <StatisticsWrapper filter={filter} />
      </>

   )
}

export default StatisticPage