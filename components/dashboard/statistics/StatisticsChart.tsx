"use client"

import { Cell, Label, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


type CategorySum = {
   totalAmount?: number;
   color: string;
};

type AllCalculationsResult = {
   categoriesWithSumAndColor: { [key: string]: CategorySum };
   totalExpanse: number;
   totalIncome: number;
};

type StatisticsChartProps = {
   categoriesDate: AllCalculationsResult
}


function StatisticsChart({ categoriesDate }: StatisticsChartProps) {
   const {
      categoriesWithSumAndColor,
      totalExpanse
   } = categoriesDate

   const objectHasProperties = !!Object.entries(categoriesWithSumAndColor).length

   if (!objectHasProperties) {
      return (
         <div className="mx-auto border-4 border-dotted w-[200px] h-[200px] rounded-full
         flex items-center justify-center">
            <span>No Expanses ...</span>
         </div>
      )
   }


   const dataFormatting =
      Object.entries(categoriesWithSumAndColor).map(([category, data]) => ({
         category,
         ...data
      }));



   return (
      <>
         <ResponsiveContainer >
            <PieChart width={300} height={200}>
               <Pie
                  data={dataFormatting}
                  cx="50%"
                  cy="50%"
                  dataKey="totalAmount"
                  innerRadius={75} outerRadius={100}
               >
                  {Object.entries(categoriesWithSumAndColor)
                     .map(([category, { color }]) => {
                        return (
                           <Cell
                              key={`cell-${color + category}`}
                              fill={color} />
                        );
                     })}
                  <Label
                     value={`${totalExpanse} pln`}
                     position="center"
                     fill="white"
                     style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        fontFamily: "Roboto"
                     }}
                  />
               </Pie>
               <Tooltip />
            </PieChart>
         </ResponsiveContainer>
      </>
   )
}

export default StatisticsChart