"use client"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";
import { getMonthPlaceholder, getYearPlaceholder, months } from "@/helpers";

type StatisticsFilterProps = {
   uniquesYear: number[]
}


function StatisticsFilter({ uniquesYear }: StatisticsFilterProps) {
   const searchParams = useSearchParams()
   const router = useRouter()
   const pathname = usePathname()

   const [month, setMonth] = useState(searchParams.get("month") || "")
   const [year, setYear] = useState(searchParams.get("year") || "")




   useEffect(() => {
      const handelFilter = (month?: string, year?: string) => {
         const params = new URLSearchParams(searchParams)
         if (month) params.set("month", month);
         if (year) params.set("year", year);

         router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
      handelFilter(month, year)

   }, [month, year, pathname, searchParams, router])


   return (
      <div className="flex gap-5 mb-5">
         <Select
            onValueChange={(value) => { setMonth(value) }}>
            <SelectTrigger className="w-[50%] border border-whiteText/70 focus:border-whiteText">
               <SelectValue placeholder={getMonthPlaceholder(month)} />
            </SelectTrigger>
            <SelectContent className="bg-gradient-to-br from-[#533DBA] via-[#50309A] via-[#6A46A5]  to-[#855DAF] border-none text-whiteText ">
               <SelectItem value="all">
                  All months
               </SelectItem>
               {months.map(({ name, number }) =>
                  <SelectItem key={`month-${number}`} value={`${number}`}>
                     {name}
                  </SelectItem>
               )}
            </SelectContent>
         </Select>
         <Select
            onValueChange={(value) => { setYear(value) }}>
            <SelectTrigger className="w-[50%] border order-whiteText/70 focus:border-whiteText">
               <SelectValue placeholder={getYearPlaceholder(year, uniquesYear)} />
            </SelectTrigger>
            <SelectContent className="bg-gradient-to-br from-[#533DBA] via-[#50309A] via-[#6A46A5]  to-[#855DAF] border-none text-whiteText ">
               <SelectItem value="all">All years</SelectItem>
               {uniquesYear?.map((year, i) =>
                  <SelectItem
                     key={`${i} + ${year}`}
                     value={year.toString()}>
                     {year}
                  </SelectItem>
               )}
            </SelectContent>
         </Select>
      </div>
   )
}

export default StatisticsFilter



