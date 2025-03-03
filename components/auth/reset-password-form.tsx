"use client"

import CardWrapper from '../card/CardWrapper'
import CardFormButtons from '../card/CardFormButtons';
import { useState, useTransition } from 'react';
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ResetSchema, TResetSchema } from "@/schemas/index"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { reset } from '@/actions/reset';


function ResetPasswordForm() {

   const [error, setError] = useState<string | undefined>("")
   const [success, setSuccess] = useState<string | undefined>("")
   const [isPending, startTransition] = useTransition()

   const form = useForm<TResetSchema>({
      resolver: zodResolver(ResetSchema),
      defaultValues: {
         email: "",
      }
   })

   const onSubmit = (values: TResetSchema) => {
      setError("")
      setSuccess("")

      startTransition(() => {
         reset(values).then((data) => {
            setSuccess(data?.success)
            setError(data?.error)
         })
      })
      form.reset()
   }


   return (
      <CardWrapper
         headerLogo
         headerLabel='Reset password'
         isPending={isPending}
      >
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
               className="space-y-10 text-left">
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem className="relative">
                        <MdEmail className="
                           absolute top-2 w-4 h-4 text-whiteText/30" />
                        <FormControl >
                           <Input
                              disabled={isPending}
                              className="
                                 pl-6
                                 border-b-2 
                                 border-whiteText/30
                                 placeholder:text-whiteText/30
                                 text-whiteText
                                 focus:border-whiteText"
                              placeholder="E-mail"
                              {...field}
                              type="email" />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormError message={error} />
               <FormSuccess message={success} />
               <CardFormButtons
                  actionButtonLabel='Reset email'
                  backButtonHref='/auth/login'
                  backButtonLabel='Login'
                  isPending={isPending}
               />
            </form>
         </Form>
      </CardWrapper>
   )
}

export default ResetPasswordForm