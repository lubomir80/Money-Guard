"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EditTransactionSchema, TEditTransactionSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import TransactionType from "./TransactionType"
import { editTransaction } from "@/actions/transaction"
import { toast } from "react-toastify"
import { EditTransactionType } from "@/types"
import { categories } from "@/helpers/category"
import { formatDate } from "@/helpers"

type EditTransactionFormProps = {
   onSave: () => void,
   transaction: EditTransactionType
}


function EditTransactionForm({ onSave, transaction }: EditTransactionFormProps) {
   const [isPending, startTransition] = useTransition()

   const form = useForm<TEditTransactionSchema>({
      resolver: zodResolver(EditTransactionSchema),
      defaultValues: {
         type: transaction.type,
         category: transaction.category,
         comment: transaction.comment,
         amount: transaction.amount,
         transactionDate: formatDate(transaction.transactionDate),
         createdAt: transaction.createdAt
      }
   })

   const onSubmit = (values: TEditTransactionSchema) => {
      startTransition(() => {
         editTransaction(values, transaction.id).then((res) => {
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




   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10">
            <TransactionType type={transaction.type} />
            {transaction.type ?
               <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => {
                     return <FormItem >
                        <Select
                           disabled={isPending}
                           onValueChange={field.onChange}>
                           <FormControl>
                              <SelectTrigger className="border-b-2 border-whiteText/30 rounded-none focus:border-whiteText">
                                 <SelectValue placeholder={transaction.category} />
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

            <div className="flex  justify-between gap-5">
               <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => {
                     return <FormItem className='w-1/2 number-wrapper'>
                        <FormControl>
                           <Input
                              {...field}
                              disabled={isPending}
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
                     return <FormItem className='w-1/2'>
                        <FormControl>
                           <Input
                              {...field}
                              disabled={isPending}
                              min="2022-01-01"
                              type="date"
                              className="pl-6 border-b-2 border-whiteText/30
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
                  Save
               </Button>
               <Button disabled={isPending} type="button"
                  onClick={onSave} size="lg" variant="white">
                  Cancel
               </Button>
            </div>
         </form>
      </Form>
   )
}

export default EditTransactionForm