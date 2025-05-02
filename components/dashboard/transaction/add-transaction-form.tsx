"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AddTransactionSchema, TAddTransactionSchema } from "@/schemas/index"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select'
import { Input } from "@/components/ui/input"
import { addTransaction } from "@/actions/transaction"
import { useTransition } from "react"
import { toast } from "react-toastify"
import { Button } from "@/components/ui/button"
import { categories } from "@/helpers/category"
import { formatCurrentDate } from "@/helpers"
import Thumb from "./Thumb"

type AddTransactionFormProps = {
   onSave: () => void
}

function AddTransactionForm({ onSave }: AddTransactionFormProps) {
   const [isPending, startTransition] = useTransition()
   const currentDate = formatCurrentDate()



   const form = useForm<TAddTransactionSchema>({
      resolver: zodResolver(AddTransactionSchema),
      defaultValues: {
         type: true,
         category: "",
         comment: "",
         amount: 0,
         transactionDate: currentDate
      }
   })

   const onSubmit = (values: TAddTransactionSchema) => {
      const amount = Number(values.amount)
      const newVales = { ...values, amount }

      startTransition(() => {
         addTransaction(newVales).then((res) => {
            if (res.error) {
               toast.error(res.error, {
                  className: "toast-message",
               })
            }
            if (res.success) {
               onSave()
               toast.success(res.success, {
                  className: "toast-message",
               })
            }
         });

      })
      form.reset()
   }

   const toggleHandler = form.watch("type")


   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10">
            <Thumb control={form.control} toggle={toggleHandler} />
            {toggleHandler ?
               <FormField
                  control={form.control} name="category"
                  render={({ field }) => {
                     return <FormItem >
                        <Select
                           disabled={isPending}
                           onValueChange={field.onChange}>
                           <FormControl>
                              <SelectTrigger className="border-b-2 border-whiteText/30 rounded-none focus:border-whiteText">
                                 <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent className='bg-gradient-to-br from-[#533DBA] via-[#50309A] via-[#6A46A5]  to-[#855DAF] border-none text-whiteText'>
                              {categories.map(({ name }) =>
                                 <SelectItem
                                    key={`selectId-${name}`}
                                    value={name}>
                                    {name}
                                 </SelectItem>
                              )}

                           </SelectContent>
                           <FormMessage />
                        </Select>
                     </FormItem>
                  }}
               /> : null}

            <div className="flex gap-5 ">
               <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => {
                     return <FormItem className='w-1/2 number-wrapper'>
                        <FormControl>
                           <Input
                              {...field}
                              disabled={isPending}
                              placeholder="0"
                              min="0"
                              max="999999"
                              step=".01"
                              type="number"
                              className=" pl-6 border-b-2 border-whiteText/30
                              placeholder:text-whiteText/30 text-whiteText
                              focus:border-whiteText text-center"
                           />

                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  }}
               />
               <FormField control={form.control} name="transactionDate"
                  render={({ field }) => {
                     return <FormItem className='w-1/2 '>
                        <FormControl>
                           <Input
                              {...field}
                              disabled={isPending}
                              min="2022-01-01"
                              type="date"
                              className="border-b-2 border-whiteText/30
                              placeholder:text-whiteText/30 text-whiteText
                              focus:border-whiteText text-center"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  }}
               />
            </div>
            <FormField
               control={form.control} name="comment"
               render={({ field }) => {
                  return <FormItem >
                     <FormControl>
                        <Input
                           {...field}
                           disabled={isPending}
                           className="border-b-2 border-whiteText/30
                              placeholder:text-whiteText/30 text-whiteText
                              focus:border-whiteText"
                           placeholder="Comment" />
                     </FormControl>
                     <FormMessage className="text-left" />
                  </FormItem>
               }}
            />
            <div className="flex flex-col gap-4 w-[300px] mx-auto">
               <Button disabled={isPending} variant="orange" size="lg" type="submit" className="w-full">
                  Add
               </Button>
               <Button disabled={isPending} onClick={onSave} size="lg" variant="white">
                  Cancel
               </Button>
            </div>
         </form>
      </Form >

   )
}

export default AddTransactionForm