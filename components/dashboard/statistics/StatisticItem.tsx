import { formatAmount } from '@/helpers'
import {
   TableCell,
   TableRow,
} from "@/components/ui/table"

type StatisticItemProps = {
   category: string,
   amount?: number,
   color: string
}


function StatisticItem({ category, amount, color }: StatisticItemProps) {
   return (
      <TableRow className="[&_td]:px-3 [&_td]:py-4">
         <TableCell className="flex items-center gap-3">
            <span
               style={{ backgroundColor: color }}
               className={`w-6 h-6 inline-block rounded-sm`} />
            <span>{category}</span>
         </TableCell>
         <TableCell className="text-right">{formatAmount(amount)}</TableCell>
      </TableRow>
   )
}

export default StatisticItem