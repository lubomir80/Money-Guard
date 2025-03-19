"use client"

import CardWrapper from '../card/CardWrapper'
import CardFormButtons from '../card/CardFormButtons';
import { useState, useTransition } from 'react';
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, TLoginSchema } from "@/schemas/index"
import { useSearchParams } from 'next/navigation';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { login } from '@/actions/login';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';



function LoginForm() {
   const searchParams = useSearchParams()
   const callbackUrl = searchParams.get("callbackUrl")
   const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider" : ""

   const [error, setError] = useState<string | undefined>("")
   const [success, setSuccess] = useState<string | undefined>("")
   const [isPending, startTransition] = useTransition()



   const form = useForm<TLoginSchema>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
         email: "",
         password: ""
      }
   })

   const onSubmit = (values: TLoginSchema) => {
      setError("")
      setSuccess("")

      startTransition(() => {
         login(values, callbackUrl).then((data) => {
            setSuccess(data?.success)
            setError(data?.error)
         })
      })
      form.reset()
   }


   return (
      <CardWrapper
         headerLogo
         showSocial
         footerLabel="If you forgot your account password"
         footerHref="/auth/reset"
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
               <FormError message={error || urlError} />
               <FormSuccess message={success} />
               <CardFormButtons
                  actionButtonLabel='log in'
                  backButtonHref='/auth/register'
                  backButtonLabel='Register'
                  isPending={isPending}
               />
            </form>
         </Form>
      </CardWrapper>
   )
}

export default LoginForm