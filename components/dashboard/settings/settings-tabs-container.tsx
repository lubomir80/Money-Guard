'use client'

import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsAccountForm from "./settings-account-form"
import { UserProps } from "@/types"
import SettingsPasswordForm from "./settings-password-form"
import SettingsTab from "./settings-tab"


function SettingsTabsContainer({ user }: UserProps) {
   const router = useRouter();
   const params = useSearchParams();
   const settings = params.get("tab") || "account"


   const handleClick = (value: string) => {
      const current = new URLSearchParams(params.toString());
      current.set('tab', value.toLowerCase());
      router.push(`?${current.toString()}`);
   };


   if (!user) {
      redirect("/auth/login")
   }


   return (
      <Tabs defaultValue={settings} className="w-full">
         <TabsList className="grid w-full grid-cols-3 bg-[#5710a3]/80 shadow-md border border-black/10">
            <TabsTrigger
               onClick={() => handleClick("image")}
               value="image"
               className="text-whiteText">
               Image
            </TabsTrigger>
            <TabsTrigger
               onClick={() => handleClick("account")}
               value="account"
               className="text-whiteText">
               Account
            </TabsTrigger>
            <TabsTrigger
               onClick={() => handleClick("password")}
               value="password"
               className="text-whiteText">
               Password
            </TabsTrigger>
         </TabsList>


         <SettingsTab
            value="image"
            title="Image"
            description="Change your avatar here. Click save when you're done.">
            IMAGE
         </SettingsTab>

         <SettingsTab
            value="account"
            title="Account"
            description="Make changes to your account here. Click save when you're done.">
            <SettingsAccountForm
               defaultValues={{ name: user?.name }} />
         </SettingsTab>

         <SettingsTab
            value="password"
            title="Password"
            description="Change your account password here. Click save when you're done."
            trigger="Password"
            accordionText="New password must be 8–20 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).">
            <SettingsPasswordForm />
         </SettingsTab>

      </Tabs >
   )
}

export default SettingsTabsContainer