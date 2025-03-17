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
import { selectPlaceholder } from "@/helpers";




const monthsNames = [
   "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
];


function StatisticsFilter() {
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
               <SelectValue placeholder={selectPlaceholder(month, "All months")} />
            </SelectTrigger>
            <SelectContent className="bg-gradient-to-br from-[#533DBA] via-[#50309A] via-[#6A46A5]  to-[#855DAF] border-none text-whiteText ">
               <SelectItem value="all">All months</SelectItem>
               {monthsNames.map((month, i) =>
                  <SelectItem key={`month-${month}`} value={`${i + 1}`}>
                     {month}
                  </SelectItem>
               )}
            </SelectContent>
         </Select>
         <Select
            onValueChange={(value) => { setYear(value) }}>
            <SelectTrigger className="w-[50%] border order-whiteText/70 focus:border-whiteText">
               <SelectValue placeholder={selectPlaceholder(year, "All years")} />
            </SelectTrigger>
            <SelectContent className="bg-gradient-to-br from-[#533DBA] via-[#50309A] via-[#6A46A5]  to-[#855DAF] border-none text-whiteText ">
               <SelectItem value="all">All years</SelectItem>
               <SelectItem value="2024">2024</SelectItem>
               <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
         </Select>
      </div>
   )
}

export default StatisticsFilter



