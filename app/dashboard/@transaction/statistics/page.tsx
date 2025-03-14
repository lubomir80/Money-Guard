import { pause } from '@/helpers'




async function StatisticPage() {
   await pause(2000)


   return (
      <>
         <h2 className="text-xl">Statistics</h2>
         <div>
            <div>Circle</div>
            <div>Categories</div>
         </div>
      </>
   )
}

export default StatisticPage