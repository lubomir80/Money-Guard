"use client"

import CardWrapper from '../card/CardWrapper'
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema, TRegisterSchema } from "@/schemas/index"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FormButtons from '../FormButtons';

function RegisterForm() {
   const form = useForm<TRegisterSchema>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
         name: "",
         email: "",
         password: "",
         confirmPassword: ""
      }
   })

   const onSubmit = (values: TRegisterSchema) => {
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
                  name="name"
                  render={({ field }) => (
                     <FormItem className="relative">
                        <FaUser className="absolute top-2 w-4 h-4 text-whiteText/30" />
                        <FormControl>
                           <Input
                              className="
                            pl-6
                            border-b-2 
                            border-whiteText/30
                            placeholder:text-whiteText/30
                            text-whiteText
                            focus:border-whiteText"
                              placeholder="Name"
                              {...field}
                              type="text" />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
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
               <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                     <FormItem className="relative">
                        <IoMdLock className="absolute top-2 w-4 h-4 text-whiteText/30" />
                        <FormControl>
                           <Input
                              className="
                            pl-6
                            border-b-2 
                            border-whiteText/30
                            placeholder:text-whiteText/30
                            text-whiteText
                            focus:border-whiteText"
                              placeholder="Confirm password"
                              {...field}
                              type="password" />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormButtons
                  actionButtonLabel='Register'
                  backButtonHref='/auth/login'
                  backButtonLabel=' Log in'
               />
            </form>
         </Form>
      </CardWrapper>
   )
}

export default RegisterForm