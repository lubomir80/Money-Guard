"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";


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
         flex items-center justify-center p-2">
            <Button asChild variant="orange" size="round" className="blob w-32 h-32 text-wrap text-center">
               <Link href="/dashboard" className="">+</Link>
            </Button>
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
         <ResponsiveContainer>
            <PieChart width={300} height={200}>
               <Pie
                  className="outline-none"
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
                     value={`${totalExpanse} USD`}
                     position="center"
                     fill="white"
                     style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        fontFamily: "Roboto"
                     }}
                  />
               </Pie>
            </PieChart>
         </ResponsiveContainer>
      </>
   )
}

export default StatisticsChart