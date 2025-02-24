"use client"

import CardWrapper from '../card/CardWrapper'
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, TLoginSchema } from "@/schemas/index"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FormButtons from '../FormButtons';


function LoginForm() {
   const form = useForm<TLoginSchema>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
         email: "",
         password: ""
      }
   })

   const onSubmit = (values: TLoginSchema) => {
      console.log({ values });
      form.reset()
   }


   return (
      <CardWrapper headerLogo>
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
               <FormButtons
                  actionButtonLabel='log in'
                  backButtonHref='/auth/register'
                  backButtonLabel='Register'
               />
            </form>
         </Form>
      </CardWrapper>
   )
}

export default LoginForm