
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
import { UserNameSchema, TUserNameSchema } from "@/schemas";
import { updateUserName } from "@/actions/settings";
import { useTransition } from "react";
import { toast } from "react-toastify";
import SettingsReset from "./settings-reset";

type SettingsAccountFormProps = {
   defaultValues: TUserNameSchema
}
type FormFields = keyof TUserNameSchema;

function SettingsAccountForm({ defaultValues }: SettingsAccountFormProps) {
   const [isPending, startTransition] = useTransition()


   const form = useForm<TUserNameSchema>({
      resolver: zodResolver(UserNameSchema),
      defaultValues,
      mode: "onTouched",
   });

   const { formState: { isDirty, dirtyFields, touchedFields } } = form;

   function onReset() {
      form.reset(defaultValues);
   }



   const onSubmit: SubmitHandler<TUserNameSchema> = (values) => {
      const name = values.name.trim()

      startTransition(() => {
         updateUserName(name).then((res) => {
            if (res.error) {
               toast.error(res.error, {
                  className: "toast-message",
               })
            }
            if (res.success) {
               toast.success(res.success, {
                  className: "toast-message",
               })
               form.reset({ name });
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
               name="name"
               render={({ field }) => {
                  return <FormItem className="!mt-0">
                     <FormLabel className="text-whiteText/80">
                        User name
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           disabled={isPending}
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

export default SettingsAccountForm