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
                  dataKey="totalAmount" // make sure to map the dataKey to "value"
                  innerRadius={75} // the inner and outer radius helps to create the progress look
                  outerRadius={100}
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