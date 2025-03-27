"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"
import { TUserSettingsSchema, UserSettingsSchema } from "@/schemas"
import { settings } from "@/actions/settings"
import { toast } from "react-toastify"
import { UserProps } from "@/types"




function UserSettingsForm({ user }: UserProps) {

   const [isPending, startTransition] = useTransition()

   const form = useForm<TUserSettingsSchema>({
      resolver: zodResolver(UserSettingsSchema),
      defaultValues: {
         name: user?.name || undefined,
         image: user?.image || undefined,
         password: undefined,
         newPassword: undefined,
      }
   })


   const onSubmit = (values: TUserSettingsSchema) => {
      startTransition(() => {
         settings(values).then((res) => {
            if (res.error) {
               toast.error(res.error, {
                  className: "toast-message",
               })
            }
            if (res.success) {
               toast.success(res.success, {
                  className: "toast-message",
               })
            }
         });
      })
      form.reset()
   }



   return (
      <Form {...form} >
         <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10 w-full mx-auto flex-1 p-5">
            <FormField control={form.control}
               name="name"
               render={({ field }) => {
                  return <FormItem>
                     <FormLabel>User name</FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           disabled={isPending}
                           min="2022-01-01"
                           type="text"
                           className="border-b-2 border-whiteText/30
                           placeholder:text-whiteText/30 text-whiteText
                           focus:border-whiteText "
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               }}
            />

            <FormField
               control={form.control}
               name="image"
               render={({ field }) => {
                  return <FormItem>
                     <FormLabel>Your image url</FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           disabled={isPending}
                           step=".01"
                           type="text"
                           placeholder="URL"
                           className=" border-b-2 border-whiteText/30
                           placeholder:text-whiteText/30 text-whiteText
                           focus:border-whiteText"
                        />

                     </FormControl>
                     <FormMessage />
                  </FormItem>
               }}
            />


            <FormField
               control={form.control}
               name="password"
               render={({ field }) => {
                  return <FormItem >
                     <FormLabel>Password</FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           disabled={isPending}
                           className="border-b-2 border-whiteText/30
                           placeholder:text-whiteText/30 text-whiteText
                           focus:border-whiteText"
                           type="password"
                           placeholder="******"
                        />
                     </FormControl>
                     <FormMessage className="text-left" />
                  </FormItem>
               }}
            />
            <FormField
               control={form.control}
               name="newPassword"
               render={({ field }) => {
                  return <FormItem >
                     <FormLabel>New password</FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           disabled={isPending}
                           className="border-b-2 border-whiteText/30
                           placeholder:text-whiteText/30 text-whiteText
                           focus:border-whiteText"
                           type="password"
                           placeholder="******"
                        />
                     </FormControl>
                     <FormMessage className="text-left" />
                  </FormItem>
               }}
            />
            <div className="w-[300px] mx-auto">
               <Button disabled={isPending} variant="orange" size="lg" type="submit" className="w-full">
                  Save
               </Button>
            </div>

         </form>
      </Form>
   )
}

export default UserSettingsForm