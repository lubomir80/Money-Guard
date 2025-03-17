import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
   TableCaption,
} from "@/components/ui/table"

import StatisticsSum from "./StatisticsSum"
import StatisticItem from "./StatisticItem";

type CategorySum = {
   totalAmount?: number;
   color: string;
};

type AllCalculationsResult = {
   categoriesWithSumAndColor: { [key: string]: CategorySum };
   totalExpanse: number;
   totalIncome: number;
};

type StatisticsTableProps = {
   categoriesDate: AllCalculationsResult
}




async function StatisticsTable({ categoriesDate }: StatisticsTableProps) {
   const {
      categoriesWithSumAndColor,
      totalExpanse,
      totalIncome
   } = categoriesDate

   const objectHasProperties = !!Object.entries(categoriesWithSumAndColor).length


   return (
      <div>
         <Table>
            <TableHeader className=" [&_th]:p-3  [&_th]:bg-whiteText/20 [&_th]:text-whiteText">
               <TableRow >
                  <TableHead className="first:rounded-l-md">Category</TableHead>
                  <TableHead className="last:rounded-r-md text-right" >Sum</TableHead>
               </TableRow>
            </TableHeader>
            {objectHasProperties ?
               (<TableBody>
                  {Object.entries(categoriesWithSumAndColor)
                     .map(([category, { color, totalAmount }]) => {
                        return (
                           <StatisticItem
                              key={category + color}
                              category={category}
                              color={color}
                              amount={totalAmount} />
                        )
                     })}
               </TableBody>) :
               (<TableCaption
                  className="text-whiteText/90">
                  No Expanses ...
               </TableCaption>)}
         </Table>
         <StatisticsSum
            expenses={totalExpanse}
            income={totalIncome} />
      </div>
   )
}

export default StatisticsTable