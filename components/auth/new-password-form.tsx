"use client"

import CardWrapper from '../card/CardWrapper'
import CardFormButtons from '../card/CardFormButtons';
import { useState, useTransition } from 'react';
import { IoMdLock } from "react-icons/io";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { NewPasswordSchema, TNewPasswordSchema } from "@/schemas/index"
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
import { useSearchParams } from 'next/navigation';
import { newPassword } from '@/actions/new-password';



function NewPasswordForm() {
   const searchParams = useSearchParams()
   const token = searchParams.get("token")

   const [error, setError] = useState<string | undefined>("")
   const [success, setSuccess] = useState<string | undefined>("")
   const [isPending, startTransition] = useTransition()



   const form = useForm<TNewPasswordSchema>({
      resolver: zodResolver(NewPasswordSchema),
      defaultValues: {
         password: "",
      }
   })

   const onSubmit = (values: TNewPasswordSchema) => {
      setError("")
      setSuccess("")

      startTransition(() => {
         newPassword(values, token)
            .then((data) => {
               setError(data?.error)
               setSuccess(data?.success)
            })
      })
      form.reset()
   }


   return (
      <CardWrapper
         headerLogo
         headerLabel='Enter a new password'
         isPending={isPending}
      >
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
               className="space-y-10 text-left">
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem className="relative">
                        <IoMdLock className="absolute top-2 w-4 h-4 text-whiteText/30" />
                        <FormControl>
                           <Input
                              disabled={isPending}
                              className="pl-6 border-b-2 border-whiteText/30
                              placeholder:text-whiteText/30 text-whiteText
                              focus:border-whiteText"
                              placeholder="Password"
                              {...field}
                              type="password" />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormError message={error} />
               <FormSuccess message={success} />
               <CardFormButtons
                  actionButtonLabel='Reset password'
                  backButtonHref='/auth/login'
                  backButtonLabel='Login'
                  isPending={isPending}
               />
            </form>
         </Form>
      </CardWrapper>
   )
}

export default NewPasswordForm