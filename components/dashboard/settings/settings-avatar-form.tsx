"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { UserAvatarSchema, TUserAvatarSchema } from "@/schemas"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateUserAvatar } from "@/actions/settings";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import SettingsReset from "./settings-reset";
import SettingsAvatar from "./settings-avatar";

type SettingsAvatarFormProps = {
   defaultValues: TUserAvatarSchema
}


function SettingsAvatarForm({ defaultValues }: SettingsAvatarFormProps) {
   const [isPending, startTransition] = useTransition()
   const [postImage, setPostImage] = useState("")
   const imageLink =
      "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"

   const form = useForm<TUserAvatarSchema>({
      resolver: zodResolver(UserAvatarSchema),
      defaultValues,
      mode: "onTouched",
   });



   function onReset() {
      form.reset(defaultValues)
      setPostImage("")
   }

   function convertToBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);

         reader.onload = () => {
            if (typeof reader.result === 'string') {
               resolve(reader.result);
            } else {
               reject('File could not be converted.');
            }
         };

         reader.onerror = (error) => reject(error);
      });
   }


   const onSubmit: SubmitHandler<TUserAvatarSchema> = (values) => {
      startTransition(() => {
         updateUserAvatar(values.image).then((res) => {
            if (res.error) {
               toast.error(res.error, {
                  className: "toast-message",
               })
            }
            if (res.success) {
               toast.success(res.success, {
                  className: "toast-message",
               })
               form.reset(form.getValues());
               setPostImage("")
            }
         })
      })
   };



   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-16 relative">
            <FormField
               control={form.control}
               name="image"
               render={({ field: { value, onChange, ...fieldProps } }) => {
                  return <FormItem className="!mt-0">
                     {postImage && (
                        <SettingsReset
                           className="right-5"
                           onReset={onReset} />
                     )}
                     <SettingsAvatar
                        label
                        isPending={isPending}
                        src={
                           postImage ||
                           value ||
                           imageLink
                        }
                     />
                     <FormControl>
                        <Input
                           {...fieldProps}
                           className="hidden"
                           id="upload"
                           disabled={isPending}
                           type="file"
                           accept=".jpeg, .png, .jpg"
                           onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                 const base64 = await convertToBase64(file);
                                 onChange(base64);
                                 setPostImage(base64);
                              }
                           }}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               }}
            />
            <div className="w-full sm:w-[300px] text-center mx-auto">
               <Button
                  variant="orange" size="lg" type="submit" className="w-full"
                  disabled={isPending || !postImage} >
                  Save
               </Button>
               {postImage &&
                  (<span className="mt-6 inline-block text-sm text-yellow">
                     You have unsaved changes
                  </span>
                  )}
            </div>
         </form>
      </Form>
   )
}

export default SettingsAvatarForm