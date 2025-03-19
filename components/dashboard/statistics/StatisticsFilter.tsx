"use client"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { getMonthPlaceholder, getYearPlaceholder, months } from "@/helpers";

type StatisticsFilterProps = {
   uniquesYear: number[]
}


function StatisticsFilter({ uniquesYear }: StatisticsFilterProps) {
   const searchParams = useSearchParams()
   const router = useRouter()
   const pathname = usePathname()

   const month = searchParams.get("month") || "all"
   const year = searchParams.get("year") || "all"


   const selectHandler = (value: string, name: "month" | "year") => {
      router.replace(
         name === "month" ?
            `${pathname}?month=${value}&year=${year}` :
            `${pathname}?month=${month}&year=${value}`)
   }

   return (
      <div className="flex gap-5 mb-5">
         <Select onValueChange={(value) => selectHandler(value, "month")}>
            <SelectTrigger className="w-[50%] border border-whiteText/70 focus:border-whiteText">
               <SelectValue placeholder={getMonthPlaceholder(month)} />
            </SelectTrigger>
            <SelectContent className="bg-gradient-to-br from-[#533DBA] via-[#50309A] via-[#6A46A5]  to-[#855DAF] border-none text-whiteText ">
               <SelectItem value="all">All</SelectItem>
               {months.map(({ name, number }) =>
                  <SelectItem key={`month-${number}`} value={`${number}`}>
                     {name}
                  </SelectItem>
               )}
            </SelectContent>
         </Select>
         <Select onValueChange={(value) => selectHandler(value, "year")}>
            <SelectTrigger className="w-[50%] border order-whiteText/70 focus:border-whiteText">
               <SelectValue placeholder={getYearPlaceholder(year, uniquesYear)} />
            </SelectTrigger>
            <SelectContent className="bg-gradient-to-br from-[#533DBA] via-[#50309A] via-[#6A46A5]  to-[#855DAF] border-none text-whiteText ">
               <SelectItem value="all">All</SelectItem>
               {uniquesYear?.map((year, i) =>
                  <SelectItem key={`${i} + ${year}`}
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



