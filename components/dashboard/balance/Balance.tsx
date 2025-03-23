"use client"

import { categorizeAmount, formatAmount } from "@/helpers"
import { usePathname } from 'next/navigation'


function Balance({ totalAmount }: { totalAmount: number }) {
   const pathname = usePathname()
   const isBalanceHidden = pathname === "/dashboard" ? "" : "hidden sm:block"


   return (
      <section className={`rounded-xl px-10 py-5 text-center sm:text-start md:py-3 bg-[#2e225f94] shadow-md ${isBalanceHidden}`}>
         <p className="uppercase text-whiteText/40 text-[12px]">Your balance</p>
         <h1 className="pt-2 font-bold text-2xl tracking-wider">
            {formatAmount(totalAmount)}
            <span className="text-lg"> USD</span>
            <span className="hidden md:inline pl-2">{categorizeAmount(totalAmount)}</span>
         </h1>
      </section>
   )
}

export default Balance