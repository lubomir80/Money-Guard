import type { Control } from "react-hook-form"
import { FormControl, FormField, FormItem } from "@/components/ui/form"
import { TAddTransactionSchema } from "@/schemas"
import { Switch } from "@/components/ui/switch"



interface ThumbProps {
   control: Control<TAddTransactionSchema>
   toggle: boolean,
}


function Thumb({ control, toggle }: ThumbProps) {

   const toggleThumbColor = toggle ? "[&>*]:bg-mango [&>*]:after:content-['-']" : "[&>*]:bg-[#FFB627] [&>*]:after:content-['+']"
   const incomeStyle = !toggle ? "text-[#FFB627]" : ""
   const expenseStyle = toggle ? "text-mango" : ""


   return (
      <div className="w-[255px] mx-auto py-2">
         <FormField
            control={control}
            name="type"
            render={({ field }) => (
               <FormItem>
                  <div
                     className="flex items-center justify-center gap-3 text-white/60">
                     <span className={incomeStyle}>Income</span>
                     <FormControl>
                        <Switch
                           className={`text-blue-whiteText text-4xl [&>*]:flex [&>*]:items-center [&>*]:justify-center ${toggleThumbColor}`}
                           id="type"
                           checked={field.value}
                           onCheckedChange={field.onChange}>
                        </Switch>
                     </FormControl>
                     <span className={expenseStyle}>Expense</span>
                  </div>
               </FormItem>
            )}
         />
      </div>
   )
}

export default Thumb