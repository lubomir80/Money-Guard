"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserPasswordSchema, TUserPasswordSchema } from "@/schemas";
import { updateUserPassword } from "@/actions/settings";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import SettingsReset from "./settings-reset";
import HidePassword from "./HidePassword";

type FormFields = keyof TUserPasswordSchema;

function SettingsPasswordForm() {
   const [isPending, startTransition] = useTransition()
   const [isHidePassword, setIsHidePassword] = useState(false)
   const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(false)

   const form = useForm<TUserPasswordSchema>({
      resolver: zodResolver(UserPasswordSchema),
      defaultValues: {
         password: "",
         newPassword: "",
      },
      mode: "onTouched",
   });

   const { formState: { isDirty, dirtyFields, touchedFields } } = form;

   function onReset() {
      form.reset();
   }

   const onSubmit: SubmitHandler<TUserPasswordSchema> = (values) => {
      startTransition(() => {
         updateUserPassword(values).then((res) => {
            if (res.error) {
               toast.error(res.error, {
                  className: "toast-message",
               })
            }
            if (res.success) {
               toast.success(res.success, {
                  className: "toast-message",
               })
               setIsHidePassword(false)
               setIsHideConfirmPassword(false)
               form.reset();
            }
         })
      })
   };

   const hasUnsavedChanges =
      isDirty &&
      Object.keys(dirtyFields).some(
         (field) => touchedFields[field as FormFields],
      );


   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-16 relative">
            {hasUnsavedChanges && <SettingsReset onReset={onReset} />}
            <FormField control={form.control}
               name="password"
               render={({ field }) => {
                  return <FormItem className="!mt-0 relative">
                     <HidePassword
                        tabIndex={4}
                        className='bottom-0 -right-3'
                        hide={isHidePassword}
                        setHide={setIsHidePassword} />
                     <FormLabel className="text-whiteText/80">
                        Password
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           disabled={isPending}
                           type={isHidePassword ? "text" : "password"}
                           className="pr-8 border-b-2 border-whiteText/30
                        placeholder:text-whiteText/30 text-whiteText
                        focus:border-whiteText "
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               }}
            />
            <FormField control={form.control}
               name="newPassword"
               render={({ field }) => {
                  return <FormItem className="relative">
                     <HidePassword
                        className='bottom-0 -right-3'
                        tabIndex={6}
                        hide={isHideConfirmPassword}
                        setHide={setIsHideConfirmPassword} />
                     <FormLabel className="text-whiteText/80">
                        New Password
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           disabled={isPending}
                           type={isHideConfirmPassword ? "text" : "password"}
                           className="pr-8 border-b-2 border-whiteText/30
                        placeholder:text-whiteText/30 text-whiteText
                        focus:border-whiteText "
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               }}
            />
            <div className="w-full sm:w-[300px] text-center mx-auto">
               <Button
                  variant="orange" size="lg" type="submit" className="w-full"
                  disabled={isPending || !hasUnsavedChanges} >
                  Save
               </Button>
               {hasUnsavedChanges && (
                  <span className="mt-6 inline-block text-sm text-[#FFC727]">
                     You have unsaved changes
                  </span>
               )}
            </div>
         </form>
      </Form>
   )
}

export default SettingsPasswordForm