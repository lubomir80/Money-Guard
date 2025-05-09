'use client'

import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsAccountForm from "./settings-account-form"
import { UserProps } from "@/types"
import SettingsPasswordForm from "./settings-password-form"
import SettingsTab from "./settings-tab"
import SettingsAvatarForm from './settings-avatar-form';
import SettingsAvatar from './settings-avatar';
import SettingsLock from './settings-lock';


type SettingsTabsProps = UserProps & {
   provider: boolean
}

function SettingsTabsContainer({ user, provider }: SettingsTabsProps) {
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
            description={
               provider ?
                  "Change your avatar here. Click save when you're done." :
                  "Can't make any changes, because you logged by Google or Github provider."}>
            {provider ?
               <SettingsAvatarForm
                  defaultValues={{ image: user?.image || "" }} /> :
               <SettingsAvatar src={user?.image || ""} />}
         </SettingsTab>

         <SettingsTab
            value="account"
            title="Account"
            description={
               provider ?
                  "Make changes to your account here. Click save when you're done." :
                  "Can't make any changes, because you logged by Google or Github provider."}>
            {provider ?
               <SettingsAccountForm
                  defaultValues={{ name: user?.name }} /> :
               <>
                  <p className='text-white/80 text-center mb-8'>
                     User name:
                     <span className='text-yellow pl-2'>
                        {user?.name}
                     </span>
                  </p>
                  <SettingsLock />
               </>
            }
         </SettingsTab>

         <SettingsTab
            value="password"
            title="Password"
            description={
               provider ?
                  "Change your account password here. Click save when you're done." :
                  "Can't make any changes, because you logged by Google or Github provider."}>
            {provider ?
               <SettingsPasswordForm /> : <SettingsLock />}
         </SettingsTab>

      </Tabs >
   )
}

export default SettingsTabsContainer